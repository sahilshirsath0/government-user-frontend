# MongoDB Authentication Setup

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# MongoDB Connection
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/grampanchayat?retryWrites=true&w=majority

# JWT Secret (Generate a strong secret key)
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# Admin User Credentials (for initial setup)
ADMIN_USERNAME=admin
ADMIN_PASSWORD=admin123
ADMIN_EMAIL=admin@panchayat.com
```

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install mongodb bcryptjs jsonwebtoken
   ```

2. **Set up MongoDB**
   - Create a MongoDB Atlas cluster
   - Get your connection string
   - Add it to `.env.local` as `MONGODB_URI`

3. **Initialize Admin User**
   ```bash
   node scripts/init-admin.js
   ```

4. **Generate JWT Secret**
   ```bash
   # Generate a random secret key
   openssl rand -base64 32
   ```

## Security Features

- ✅ Password hashing with bcrypt
- ✅ JWT token authentication
- ✅ Secure session management
- ✅ Database-stored credentials
- ✅ Token expiration (24 hours)
- ✅ User verification on each request

## API Endpoints

- `POST /api/auth/login` - User login
- `GET /api/auth/verify` - Token verification

## Database Schema

### Users Collection
```javascript
{
  _id: ObjectId,
  username: String,
  email: String,
  password: String (hashed),
  role: String,
  isActive: Boolean,
  createdAt: Date,
  lastLogin: Date
}
```
