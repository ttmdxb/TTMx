const mongoose = require('mongoose');
require('dotenv').config();

const User = require('../src/models/User');

const createUsers = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB...');
    
    // Check if admin already exists
    const existingAdmin = await User.findOne({ username: 'admin' });
    if (existingAdmin) {
      console.log('❌ Admin user already exists!');
      console.log('============================================');
      console.log('🔑 Admin Login Options:');
      console.log('   Username: admin');
      console.log('   Email: admin@ttmx.pro');
      console.log('   Phone: +971501234567');
      console.log('   Password: admin123');
      console.log('============================================');
      process.exit(0);
    }

    // Create Super Admin
    const adminUser = new User({
      username: 'admin',
      email: 'admin@ttmx.pro',
      phoneNumber: '+971501234567',
      password: 'admin123',
      firstName: 'Super',
      lastName: 'Admin',
      role: 'superadmin',
      balance: 10000.00,
      status: 'active',
      emailVerified: true,
      phoneVerified: true
    });

    await adminUser.save();
    console.log('✅ Super Admin created successfully!');

    // Create Test Users
    const testUser1 = new User({
      username: 'testuser',
      email: 'test@ttmx.pro',
      phoneNumber: '+971501111111',
      password: 'test123',
      firstName: 'Test',
      lastName: 'User',
      role: 'user',
      balance: 100.00,
      status: 'active',
      emailVerified: true,
      phoneVerified: true
    });

    await testUser1.save();
    console.log('✅ Test users created successfully!');
    
    console.log('');
    console.log('🎉 All users created successfully!');
    console.log('============================================');
    console.log('👑 SUPER ADMIN LOGIN:');
    console.log('   Username: admin (or admin@ttmx.pro or +971501234567)');
    console.log('   Password: admin123');
    console.log('   User ID: ' + adminUser.userId);
    console.log('');
    console.log('👤 TEST USER LOGIN:');
    console.log('   Username: testuser (or test@ttmx.pro or +971501111111)');
    console.log('   Password: test123');
    console.log('   User ID: ' + testUser1.userId);
    console.log('');
    console.log('📱 You can login with:');
    console.log('   - Username');
    console.log('   - Email address');
    console.log('   - Phone number');
    console.log('============================================');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error creating users:', error);
    process.exit(1);
  }
};

createUsers();
