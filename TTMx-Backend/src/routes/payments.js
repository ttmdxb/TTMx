const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middleware/auth');
const {
  createPaymentIntent,
  handleWebhook,
  getWalletBalance,
  getTransactionHistory
} = require('../controllers/paymentController');

// Webhook route (no auth required)
router.post('/webhook', express.raw({type: 'application/json'}), handleWebhook);

// Protected routes
router.use(authMiddleware);

// Create payment intent
router.post('/create-intent', createPaymentIntent);

// Get wallet balance
router.get('/wallet/balance', getWalletBalance);

// Get transaction history
router.get('/transactions', getTransactionHistory);

module.exports = router;

