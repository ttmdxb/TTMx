const express = require('express');
const { getServices } = require('../controllers/orderController');

const router = express.Router();

router.get('/', getServices);
router.get('/:platform', getServices);

module.exports = router;
