const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  providerId: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  platform: {
    type: String,
    required: true,
    enum: ['instagram', 'tiktok', 'youtube', 'facebook', 'twitter', 'linkedin']
  },
  category: {
    type: String,
    required: true,
    enum: ['followers', 'likes', 'views', 'comments', 'shares', 'subscribers']
  },
  type: {
    type: String,
    required: true,
    enum: ['instant', 'slow', 'premium', 'high_quality']
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  originalPrice: {
    type: Number,
    required: true,
    min: 0
  },
  markup: {
    type: Number,
    default: 30,
    min: 0,
    max: 500
  },
  minQuantity: {
    type: Number,
    default: 1,
    min: 1
  },
  maxQuantity: {
    type: Number,
    default: 100000,
    min: 1
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'maintenance'],
    default: 'active'
  },
  providerStatus: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active'
  },
  provider: {
    type: String,
    required: true,
    enum: ['vinasmm', 'hqsmartpanel', 'momopanel']
  },
  deliveryTime: {
    type: String,
    default: '24-48 hours'
  },
  refillEnabled: {
    type: Boolean,
    default: false
  },
  features: [{
    type: String
  }],
  tags: [{
    type: String
  }]
}, {
  timestamps: true
});

// Indexes for better query performance
serviceSchema.index({ platform: 1, category: 1 });
serviceSchema.index({ status: 1, providerStatus: 1 });
serviceSchema.index({ provider: 1 });

module.exports = mongoose.model('Service', serviceSchema);
