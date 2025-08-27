const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middleware/auth');
const {
  placeOrder,
  getUserOrders,
  getOrderStatus
} = require('../controllers/orderController');

// All routes require authentication
router.use(authMiddleware);

// Place new order
router.post('/place', placeOrder);

// Get user orders
router.get('/my-orders', getUserOrders);

// Get specific order status
router.get('/:orderId/status', getOrderStatus);

module.exports = router;
