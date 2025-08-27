const Order = require('../models/Order');
const User = require('../models/User');
const Transaction = require('../models/Transaction');
const providerManager = require('../services/smm/ProviderManager');

// Get services
exports.getServices = async (req, res) => {
  try {
    const { platform } = req.query;
    const services = await providerManager.getAllServices();
    
    let filteredServices = services;
    if (platform) {
      filteredServices = services.filter(service => 
        service.name.toLowerCase().includes(platform.toLowerCase())
      );
    }

    res.json({
      success: true,
      services: filteredServices
    });
  } catch (error) {
    console.error('Get services error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch services'
    });
  }
};

// Place order
exports.placeOrder = async (req, res) => {
  try {
    const { serviceId, link, quantity } = req.body;
    const userId = req.user._id;

    // Validate input
    if (!serviceId || !link || !quantity) {
      return res.status(400).json({
        success: false,
        message: 'Service ID, link, and quantity are required'
      });
    }

    // Get service details
    const services = await providerManager.getAllServices();
    const service = services.find(s => s.id === serviceId);
    
    if (!service) {
      return res.status(404).json({
        success: false,
        message: 'Service not found'
      });
    }

    // Calculate total price
    const totalPrice = (quantity * service.rate / 1000);

    // Check user balance
    const user = await User.findById(userId);
    if (user.wallet.balance < totalPrice) {
      return res.status(400).json({
        success: false,
        message: 'Insufficient wallet balance'
      });
    }

    // Create order in database
    const order = await Order.create({
      userId,
      service: {
        serviceId: service.originalServiceId || serviceId,
        name: service.name,
        platform: service.category || 'Social Media',
        category: service.category || 'engagement',
        provider: {
          name: service.provider,
          providerId: serviceId
        }
      },
      target: {
        link,
        username: extractUsernameFromLink(link)
      },
      quantity: parseInt(quantity),
      pricing: {
        rate: service.rate,
        totalPrice,
        currency: 'USD'
      }
    });

    // Deduct from user balance
    user.wallet.balance -= totalPrice;
    await user.save();

    // Create transaction record
    await Transaction.create({
      userId,
      type: 'spend',
      amount: -totalPrice,
      status: 'completed',
      method: {
        gateway: 'system'
      },
      reference: {
        orderId: order._id,
        description: `Order: ${service.name}`
      },
      balanceAfter: user.wallet.balance
    });

    // Place order with provider
    try {
      const providerResult = await providerManager.createOrder(
        serviceId, 
        link, 
        quantity
      );
      
      order.service.provider.providerOrderId = providerResult.providerOrderId;
      order.status = 'Processing';
      await order.save();
    } catch (providerError) {
      console.error('Provider order error:', providerError);
      // Order created but provider failed - will be processed manually
    }

    res.status(201).json({
      success: true,
      message: 'Order placed successfully',
      orderId: order.orderId,
      order: {
        id: order.orderId,
        service: order.service.name,
        quantity: order.quantity,
        totalPrice: order.pricing.totalPrice,
        status: order.status
      }
    });

  } catch (error) {
    console.error('Place order error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to place order'
    });
  }
};

// Get user orders
exports.getUserOrders = async (req, res) => {
  try {
    const userId = req.user._id;
    const orders = await Order.find({ userId })
      .sort({ createdAt: -1 })
      .populate('userId', 'name email');

    res.json({
      success: true,
      orders
    });
  } catch (error) {
    console.error('Get orders error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch orders'
    });
  }
};

// Get order status
exports.getOrderStatus = async (req, res) => {
  try {
    const { orderId } = req.params;
    const userId = req.user._id;

    const order = await Order.findOne({ 
      $or: [{ orderId }, { _id: orderId }],
      userId 
    });

    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Order not found'
      });
    }

    res.json({
      success: true,
      order
    });
  } catch (error) {
    console.error('Get order status error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get order status'
    });
  }
};

// Helper function to extract username from social media links
function extractUsernameFromLink(link) {
  try {
    const url = new URL(link);
    const pathParts = url.pathname.split('/').filter(part => part.length > 0);
    return pathParts[0] || '';
  } catch (error) {
    return '';
  }
}

module.exports = {
  getServices,
  placeOrder,
  getUserOrders,
  getOrderStatus
};
