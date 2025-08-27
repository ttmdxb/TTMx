const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middleware/auth');
const { getServices } = require('../controllers/orderController');

// Get all services
router.get('/', getServices);

// Get services by platform
router.get('/:platform', getServices);

module.exports = router;
