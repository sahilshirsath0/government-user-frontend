// Setup script to initialize admin user
// Run this after setting up your .env.local file

import { MongoClient } from 'mongodb';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

const MONGODB_URI = process.env.MONGODB_URI;
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@panchayat.com';

async function setupAdmin() {
  if (!MONGODB_URI) {
    console.error('❌ MONGODB_URI not found in .env.local');
    console.log('Please create .env.local file with your MongoDB connection string');
    process.exit(1);
  }

  const client = new MongoClient(MONGODB_URI);
  
  try {
    console.log('🔌 Connecting to MongoDB...');
    await client.connect();
    console.log('✅ Connected to MongoDB');

    const db = client.db('grampanchayat');
    const usersCollection = db.collection('users');

    // Check if admin user already exists
    const existingAdmin = await usersCollection.findOne({ username: ADMIN_USERNAME });
    
    if (existingAdmin) {
      console.log('ℹ️  Admin user already exists');
      console.log(`Username: ${ADMIN_USERNAME}`);
      console.log(`Email: ${existingAdmin.email}`);
      return;
    }

    console.log('🔐 Creating admin user...');
    
    // Hash the password
    const hashedPassword = await bcrypt.hash(ADMIN_PASSWORD, 12);

    // Create admin user
    const adminUser = {
      username: ADMIN_USERNAME,
      email: ADMIN_EMAIL,
      password: hashedPassword,
      role: 'admin',
      isActive: true,
      createdAt: new Date(),
      lastLogin: null
    };

    const result = await usersCollection.insertOne(adminUser);
    
    console.log('✅ Admin user created successfully!');
    console.log(`ID: ${result.insertedId}`);
    console.log(`Username: ${ADMIN_USERNAME}`);
    console.log(`Password: ${ADMIN_PASSWORD}`);
    console.log(`Email: ${ADMIN_EMAIL}`);
    console.log('');
    console.log('🚀 You can now login to the admin dashboard!');

  } catch (error) {
    console.error('❌ Error setting up admin user:', error.message);
    if (error.message.includes('authentication')) {
      console.log('💡 Check your MongoDB connection string in .env.local');
    }
  } finally {
    await client.close();
    console.log('🔌 Disconnected from MongoDB');
  }
}

setupAdmin();
