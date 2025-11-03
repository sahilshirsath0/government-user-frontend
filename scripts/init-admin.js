import { MongoClient } from 'mongodb';
import bcrypt from 'bcryptjs';

const MONGODB_URI = process.env.MONGODB_URI;
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@panchayat.com';

async function initAdmin() {
  if (!MONGODB_URI) {
    console.error('MONGODB_URI environment variable is required');
    process.exit(1);
  }

  const client = new MongoClient(MONGODB_URI);
  
  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db('grampanchayat');
    const usersCollection = db.collection('users');

    // Check if admin user already exists
    const existingAdmin = await usersCollection.findOne({ username: ADMIN_USERNAME });
    
    if (existingAdmin) {
      console.log('Admin user already exists');
      return;
    }

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
    console.log('Admin user created successfully:', result.insertedId);
    console.log('Username:', ADMIN_USERNAME);
    console.log('Password:', ADMIN_PASSWORD);
    console.log('Email:', ADMIN_EMAIL);

  } catch (error) {
    console.error('Error initializing admin user:', error);
  } finally {
    await client.close();
  }
}

initAdmin();
