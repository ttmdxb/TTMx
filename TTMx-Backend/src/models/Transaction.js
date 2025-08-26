const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  transactionId: {
    type: String,
    unique: true,
    required: true
  },
  type: {
    type: String,
    enum: ['deposit', 'spend', 'refund', 'bonus', 'withdrawal'],
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  currency: {
    type: String,
    default: 'USD'
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'failed', 'cancelled'],
    default: 'pending'
  },
  method: {
    gateway: {
      type: String,
      enum: ['stripe', 'paypal', 'nomod', 'admin', 'system']
    },
    details: {
      paymentIntentId: String,
      paypalOrderId: String,
      nomodTransactionId: String,
      last4: String,
      brand: String
    }
  },
  reference: {
    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Order'
    },
    description: String,
    adminNote: String
  },
  balanceAfter: Number,
  fees: {
    processingFee: Number,
    platformFee: Number
  }
}, {
  timestamps: true
});

// Generate transaction ID
transactionSchema.pre('save', async function(next) {
  if (!this.transactionId) {
    const prefix = this.type.toUpperCase().substr(0, 3);
    const count = await mongoose.model('Transaction').countDocuments();
    this.transactionId = `${prefix}${(count + 1).toString().padStart(8, '0')}`;
  }
  next();
});

module.exports = mongoose.model('Transaction', transactionSchema);
