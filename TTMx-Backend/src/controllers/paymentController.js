const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const User = require('../models/User');
const Transaction = require('../models/Transaction');

const createPaymentIntent = async (req, res) => {
  try {
    const { amount, currency = 'usd', paymentMethod = 'stripe' } = req.body;
    const userId = req.user.id;

    if (amount < 1) {
      return res.status(400).json({
        success: false,
        error: 'Amount must be at least $1'
      });
    }

    let paymentIntent;

    if (paymentMethod === 'stripe') {
      paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(amount * 100), // Convert to cents
        currency,
        metadata: {
          userId: userId.toString(),
          type: 'wallet_topup'
        }
      });

      res.json({
        success: true,
        data: {
          clientSecret: paymentIntent.client_secret,
          paymentIntentId: paymentIntent.id
        }
      });
    } else {
      // Handle other payment methods (PayPal, NoMod)
      res.status(400).json({
        success: false,
        error: 'Payment method not implemented yet'
      });
    }

  } catch (error) {
    console.error('Payment intent error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to create payment intent'
    });
  }
};

const handleWebhook = async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  try {
    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object;
        await handleSuccessfulPayment(paymentIntent);
        break;
      
      case 'payment_intent.payment_failed':
        const failedPayment = event.data.object;
        await handleFailedPayment(failedPayment);
        break;
      
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    res.json({ received: true });
  } catch (error) {
    console.error('Webhook handler error:', error);
    res.status(500).json({ error: 'Webhook handler failed' });
  }
};

const handleSuccessfulPayment = async (paymentIntent) => {
  const { userId, type } = paymentIntent.metadata;
  const amount = paymentIntent.amount / 100; // Convert from cents

  if (type === 'wallet_topup') {
    // Add balance to user wallet
    const user = await User.findById(userId);
    if (user) {
      user.balance += amount;
      await user.save();

      // Create transaction record
      const transaction = new Transaction({
        user: userId,
        type: 'deposit',
        amount,
        status: 'completed',
        paymentMethod: 'stripe',
        paymentIntentId: paymentIntent.id,
        description: 'Wallet top-up via Stripe'
      });
      await transaction.save();

      console.log(`Added ${amount} to user ${userId} wallet`);
    }
  }
};

const handleFailedPayment = async (paymentIntent) => {
  const { userId } = paymentIntent.metadata;
  const amount = paymentIntent.amount / 100;

  // Create failed transaction record
  const transaction = new Transaction({
    user: userId,
    type: 'deposit',
    amount,
    status: 'failed',
    paymentMethod: 'stripe',
    paymentIntentId: paymentIntent.id,
    description: 'Failed wallet top-up via Stripe'
  });
  await transaction.save();

  console.log(`Payment failed for user ${userId}, amount ${amount}`);
};

const getWalletBalance = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('balance');
    
    res.json({
      success: true,
      data: {
        balance: user.balance || 0
      }
    });
  } catch (error) {
    console.error('Get wallet balance error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch wallet balance'
    });
  }
};

const getTransactionHistory = async (req, res) => {
  try {
    const { page = 1, limit = 10, type } = req.query;
    const userId = req.user.id;

    let filter = { user: userId };
    if (type) filter.type = type;

    const transactions = await Transaction.find(filter)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Transaction.countDocuments(filter);

    res.json({
      success: true,
      data: {
        transactions,
        pagination: {
          current: page,
          pages: Math.ceil(total / limit),
          total
        }
      }
    });
  } catch (error) {
    console.error('Get transaction history error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch transaction history'
    });
  }
};

module.exports = {
  createPaymentIntent,
  handleWebhook,
  getWalletBalance,
  getTransactionHistory
};

