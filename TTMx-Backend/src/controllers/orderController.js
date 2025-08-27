const Order = require('../models/Order');
const User = require('../models/User');
const Service = require('../models/Service');
const { smmProviders } = require('../services/smmService');

// Define getServices function that was missing
const getServices = async (req, res) => {
  try {
    const { platform, category } = req.query;
    
    let filter = { status: 'active' };
    if (platform) filter.platform = platform;
    if (category) filter.category = category;
    
    const services = await Service.find(filter)
      .sort({ platform: 1, category: 1, name: 1 });
    
    res.json({
      success: true,
      data: services
    });
  } catch (error) {
    console.error('Error fetching services:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch services'
    });
  }
};

const placeOrder = async (req, res) => {
  try {
    const { serviceId, quantity, targetUrl, notes } = req.body;
    const userId = req.user.id;

    // Validate service
    const service = await Service.findById(serviceId);
    if (!service) {
      return res.status(404).json({
        success: false,
        error: 'Service not found'
      });
    }

    // Calculate total cost
    const totalCost = service.price * quantity;

    // Check user balance
    const user = await User.findById(userId);
    if (user.balance < totalCost) {
      return res.status(400).json({
        success: false,
        error: 'Insufficient balance'
      });
    }

    // Create order
    const order = new Order({
      user: userId,
      service: serviceId,
      quantity,
      targetUrl,
      notes,
      totalCost,
      status: 'pending'
    });

    await order.save();

    // Deduct balance
    user.balance -= totalCost;
    await user.save();

    // Submit to SMM provider
    try {
      const provider = smmProviders.getActiveProvider();
      const providerOrderId = await provider.createOrder({
        service: service.providerId,
        link: targetUrl,
        quantity
      });

      order.providerOrderId = providerOrderId;
      order.status = 'processing';
      await order.save();
    } catch (providerError) {
      console.error('Provider error:', providerError);
      // Refund user
      user.balance += totalCost;
      await user.save();
      
      order.status = 'failed';
      order.errorMessage = 'Provider error';
      await order.save();
    }

    res.json({
      success: true,
      data: order
    });

  } catch (error) {
    console.error('Order placement error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to place order'
    });
  }
};

const getUserOrders = async (req, res) => {
  try {
    const userId = req.user.id;
    const { page = 1, limit = 10, status } = req.query;

    let filter = { user: userId };
    if (status) filter.status = status;

    const orders = await Order.find(filter)
      .populate('service', 'name platform category')
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Order.countDocuments(filter);

    res.json({
      success: true,
      data: {
        orders,
        pagination: {
          current: page,
          pages: Math.ceil(total / limit),
          total
        }
      }
    });
  } catch (error) {
    console.error('Error fetching user orders:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch orders'
    });
  }
};

const getOrderStatus = async (req, res) => {
  try {
    const { orderId } = req.params;
    const userId = req.user.id;

    const order = await Order.findOne({ _id: orderId, user: userId })
      .populate('service', 'name platform category');

    if (!order) {
      return res.status(404).json({
        success: false,
        error: 'Order not found'
      });
    }

    // Update status from provider if processing
    if (order.status === 'processing' && order.providerOrderId) {
      try {
        const provider = smmProviders.getActiveProvider();
        const providerStatus = await provider.getOrderStatus(order.providerOrderId);
        
        if (providerStatus.status !== order.status) {
          order.status = providerStatus.status;
          order.completed = providerStatus.remains || 0;
          await order.save();
        }
      } catch (providerError) {
        console.error('Provider status check error:', providerError);
      }
    }

    res.json({
      success: true,
      data: order
    });
  } catch (error) {
    console.error('Error fetching order status:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch order status'
    });
  }
};

module.exports = {
  getServices,
  placeOrder,
  getUserOrders,
  getOrderStatus
};
