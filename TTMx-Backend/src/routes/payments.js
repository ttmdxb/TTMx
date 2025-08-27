const express = require('express');
const { auth } = require('../middleware/auth');

const router = express.Router();

// Placeholder payment routes
router.post('/create-intent', auth, (req, res) => {
  res.json({
    success: true,
    message: 'Payment integration coming soon'
  });
});

router.get('/wallet/balance', auth, async (req, res) => {
  try {
    const user = req.user;
    res.json({
      success: true,
      balance: user.wallet.balance,
      currency: user.wallet.currency
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to get balance'
    });
  }
});

module.exports = router;
