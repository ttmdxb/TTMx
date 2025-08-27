const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderId: {
    type: String,
    unique: true,
    default: function() {
      return 'TTM' + Date.now() + Math.random().toString(36).substr(2, 5).toUpperCase();
    }
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  service: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Service',
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    min: 1
  },
  targetUrl: {
    type: String,
    required: true,
    trim: true
  },
  notes: {
    type: String,
    trim: true,
    maxlength: 500
  },
  totalCost: {
    type: Number,
    required: true,
    min: 0
  },
  status: {
    type: String,
    enum: ['pending', 'processing', 'in_progress', 'completed', 'partial', 'cancelled', 'failed'],
    default: 'pending'
  },
  providerOrderId: {
    type: String
  },
  provider: {
    type: String,
    enum: ['vinasmm', 'hqsmartpanel', 'momopanel']
  },
  startCount: {
    type: Number,
    default: 0
  },
  completed: {
    type: Number,
    default: 0
  },
  remains: {
    type: Number,
    default: 0
  },
  errorMessage: {
    type: String
  },
  refunded: {
    type: Boolean,
    default: false
  },
  refundAmount: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

// Indexes
orderSchema.index({ user: 1, createdAt: -1 });
orderSchema.index({ status: 1 });
orderSchema.index({ providerOrderId: 1 });

module.exports = mongoose.model('Order', orderSchema);

