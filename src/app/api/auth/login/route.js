import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import clientPromise from '../../../../lib/mongodb';
import { User } from '../../../../models/User';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-this-in-production';

export async function POST(request) {
  try {
    const { username, password } = await request.json();

    if (!username || !password) {
      return NextResponse.json(
        { success: false, message: 'Username and password are required' },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db('grampanchayat');
    const usersCollection = db.collection('users');

    // Find user by username
    const user = await usersCollection.findOne({ username, isActive: true });

    if (!user) {
      return NextResponse.json(
        { success: false, message: 'Username or password is incorrect' },
        { status: 401 }
      );
    }

    // Compare password
    const userModel = new User(user);
    const isPasswordValid = await userModel.comparePassword(password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { success: false, message: 'Username or password is incorrect' },
        { status: 401 }
      );
    }

    // Update last login
    await usersCollection.updateOne(
      { _id: user._id },
      { $set: { lastLogin: new Date() } }
    );

    // Create JWT token
    const token = jwt.sign(
      { 
        userId: user._id.toString(),
        username: user.username,
        role: user.role 
      },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Login successful',
      token,
      user: {
        id: user._id.toString(),
        username: user.username,
        email: user.email,
        role: user.role,
        lastLogin: user.lastLogin
      }
    });

  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
