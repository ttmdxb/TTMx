const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  orderId: {
    type: String,
    unique: true,
    required: true
  },
  service: {
    serviceId: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    platform: {
      type: String,
      required: true,
      enum: ['Instagram', 'TikTok', 'YouTube', 'Facebook', 'Twitter']
    },
    category: {
      type: String,
      required: true
    },
    provider: {
      name: String,
      providerId: String,
      providerOrderId: String
    }
  },
  target: {
    link: {
      type: String,
      required: true
    },
    username: String,
    postId: String
  },
  quantity: {
    type: Number,
    required: true,
    min: 1
  },
  pricing: {
    rate: {
      type: Number,
      required: true
    },
    totalPrice: {
      type: Number,
      required: true
    },
    currency: {
      type: String,
      default: 'USD'
    }
  },
  status: {
    type: String,
    enum: ['Pending', 'Processing', 'In Progress', 'Completed', 'Partial', 'Cancelled', 'Refunded'],
    default: 'Pending'
  },
  progress: {
    startCount: Number,
    currentCount: Number,
    delivered: Number,
    percentage: {
      type: Number,
      default: 0
    }
  },
  timestamps: {
    ordered: {
      type: Date,
      default: Date.now
    },
    started: Date,
    completed: Date
  },
  notes: String,
  refund: {
    requested: Boolean,
    reason: String,
    amount: Number,
    processed: Boolean,
    processedAt: Date
  }
}, {
  timestamps: true
});

// Generate order ID
orderSchema.pre('save', async function(next) {
  if (!this.orderId) {
    const count = await mongoose.model('Order').countDocuments();
    this.orderId = `ORD${(count + 1).toString().padStart(6, '0')}`;
  }
  next();
});

module.exports = mongoose.model('Order', orderSchema);
