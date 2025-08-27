const express = require('express');
const { body } = require('express-validator');
const { 
  getServices, 
  placeOrder, 
  getUserOrders, 
  getOrderStatus 
} = require('../controllers/orderController');
const { auth } = require('../middleware/auth');

const router = express.Router();

// Validation rules
const placeOrderValidation = [
  body('serviceId').notEmpty().withMessage('Service ID is required'),
  body('link').isURL().withMessage('Valid URL is required'),
  body('quantity').isInt({ min: 1 }).withMessage('Quantity must be a positive integer')
];

// Routes
router.get('/services', getServices);
router.post('/place', auth, placeOrderValidation, placeOrder);
router.get('/my-orders', auth, getUserOrders);
router.get('/status/:orderId', auth, getOrderStatus);

module.exports = router;
