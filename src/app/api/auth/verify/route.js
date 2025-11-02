import { NextResponse } from 'next/server';
import { verifyToken } from '../../../../lib/auth';
import clientPromise from '../../../../lib/mongodb';
import { ObjectId } from 'mongodb';

export async function GET(request) {
  try {
    const authHeader = request.headers.get('authorization');
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { success: false, message: 'No token provided' },
        { status: 401 }
      );
    }

    const token = authHeader.substring(7);
    const { valid, payload, error } = verifyToken(token);

    if (!valid) {
      return NextResponse.json(
        { success: false, message: 'Invalid token', error },
        { status: 401 }
      );
    }

    // Verify user still exists and is active with optimized query
    const client = await clientPromise;
    const db = client.db('grampanchayat');
    const usersCollection = db.collection('users');

    // Use findOne with projection to get only needed fields
    const user = await usersCollection.findOne(
      { 
        _id: new ObjectId(payload.userId), 
        isActive: true 
      },
      { 
        projection: { 
          password: 0
        }
      }
    );

    if (!user) {
      return NextResponse.json(
        { success: false, message: 'User not found or inactive' },
        { status: 401 }
      );
    }

    return NextResponse.json({
      success: true,
      user: {
        id: user._id.toString(),
        username: user.username,
        email: user.email,
        role: user.role,
        lastLogin: user.lastLogin
      }
    });

  } catch (error) {
    console.error('Token verification error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
