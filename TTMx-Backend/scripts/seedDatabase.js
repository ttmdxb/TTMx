const mongoose = require('mongoose');
require('dotenv').config();

const connectDatabase = require('../src/config/database');
const Service = require('../src/models/Service');

const sampleServices = [
  {
    providerId: '1',
    name: 'Instagram Followers - High Quality',
    description: 'Premium Instagram followers with profile pictures',
    platform: 'instagram',
    category: 'followers',
    type: 'high_quality',
    originalPrice: 0.50,
    price: 0.75,
    markup: 50,
    minQuantity: 100,
    maxQuantity: 10000,
    provider: 'vinasmm',
    deliveryTime: '24-48 hours',
    features: ['High Quality', 'Real Profiles', 'Gradual Delivery']
  },
  {
    providerId: '2',
    name: 'Instagram Likes - Instant',
    description: 'Instant Instagram likes delivery',
    platform: 'instagram',
    category: 'likes',
    type: 'instant',
    originalPrice: 0.10,
    price: 0.15,
    markup: 50,
    minQuantity: 50,
    maxQuantity: 5000,
    provider: 'vinasmm',
    deliveryTime: '0-1 hours',
    features: ['Instant Start', 'High Quality', 'No Drop']
  },
  {
    providerId: '3',
    name: 'TikTok Views - Premium',
    description: 'Premium TikTok views from real users',
    platform: 'tiktok',
    category: 'views',
    type: 'premium',
    originalPrice: 0.25,
    price: 0.38,
    markup: 52,
    minQuantity: 1000,
    maxQuantity: 100000,
    provider: 'vinasmm',
    deliveryTime: '12-24 hours',
    features: ['Real Views', 'High Retention', 'Safe Delivery']
  },
  {
    providerId: '4',
    name: 'YouTube Subscribers - Slow',
    description: 'Slow and safe YouTube subscribers delivery',
    platform: 'youtube',
    category: 'subscribers',
    type: 'slow',
    originalPrice: 2.50,
    price: 3.75,
    markup: 50,
    minQuantity: 50,
    maxQuantity: 2000,
    provider: 'vinasmm',
    deliveryTime: '7-14 days',
    features: ['Slow Delivery', 'Real Users', 'Lifetime Guarantee']
  }
];

const seedDatabase = async () => {
  try {
    await connectDatabase();
    
    console.log('Clearing existing services...');
    await Service.deleteMany({});
    
    console.log('Inserting sample services...');
    await Service.insertMany(sampleServices);
    
    console.log('Database seeded successfully!');
    console.log(`Inserted ${sampleServices.length} services`);
    
    process.exit(0);
  } catch (error) {
    console.error('Seeding error:', error);
    process.exit(1);
  }
};

seedDatabase();
