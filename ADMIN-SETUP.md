# 🔐 Admin Authentication Setup Guide

## Step 1: Create Environment File

Create a `.env.local` file in your project root with the following content:

```env
# MongoDB Connection
# Replace with your actual MongoDB Atlas connection string
MONGODB_URI=mongodb+srv://root:root@admin-dashboard-forms.k2phvgf.mongodb.net?retryWrites=true&w=majority

# JWT Secret (Generated secure key)
JWT_SECRET=YKWcJ3/8pIzltF/7fIv8QfwvRpoibGarqAYCqOKGf7k=

# Admin User Credentials (for initial setup)
ADMIN_USERNAME=admin@2409
ADMIN_PASSWORD=admin@3022
ADMIN_EMAIL=admin@yetgaonpanchayat.com

# Next.js Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-nextauth-secret-key
```

## Step 2: Update MongoDB Connection

1. **Get your MongoDB Atlas connection string**
2. **Replace the MONGODB_URI in .env.local**
3. **Make sure your MongoDB cluster allows connections from your IP**

## Step 3: Initialize Admin User

Run the setup script to create the admin user:

```bash
node setup-admin.js
```

This will:
- ✅ Connect to your MongoDB database
- ✅ Create the `grampanchayat` database
- ✅ Create the `users` collection
- ✅ Hash the admin password with bcrypt
- ✅ Insert the admin user with secure credentials

## Step 4: Test the Authentication

1. **Start your development server:**
   ```bash
   npm run dev
   ```

2. **Navigate to admin login:**
   ```
   http://localhost:3000/admin-login
   ```

3. **Login with credentials:**
   - Username: `admin`
   - Password: `admin123`

## 🔒 Security Features

### ✅ What's Secure Now:
- **Database Storage**: Credentials stored in MongoDB
- **Password Hashing**: bcrypt with 12 salt rounds
- **JWT Tokens**: Secure authentication tokens
- **Token Expiration**: 24-hour token lifetime
- **Session Management**: Proper login/logout handling
- **No Hardcoded Credentials**: All credentials in database

### 🛡️ Security Measures:
- **bcrypt Password Hashing**: Industry-standard security
- **JWT Authentication**: Stateless, secure tokens
- **Token Verification**: Server-side validation
- **Secure Headers**: Proper authentication headers
- **Database Security**: MongoDB Atlas security features

## 📋 Database Schema

### Users Collection
```javascript
{
  _id: ObjectId,
  username: String,
  email: String,
  password: String (bcrypt hashed),
  role: String,
  isActive: Boolean,
  createdAt: Date,
  lastLogin: Date
}
```

## 🚨 Important Notes

1. **Change Default Credentials**: After initial setup, change the admin password
2. **Secure JWT Secret**: Keep your JWT_SECRET secure and don't share it
3. **MongoDB Security**: Ensure your MongoDB cluster has proper security settings
4. **Environment Variables**: Never commit .env.local to version control

## 🔧 Troubleshooting

### MongoDB Connection Issues
- Check your connection string format
- Ensure your IP is whitelisted in MongoDB Atlas
- Verify your username and password

### Authentication Issues
- Make sure the admin user was created successfully
- Check that JWT_SECRET is set correctly
- Verify the database connection

### Development Issues
- Restart your development server after setting up .env.local
- Clear browser cache if authentication seems stuck
- Check browser console for any error messages

## 🎯 Next Steps

1. **Change Admin Password**: Update the password in the database
2. **Add More Users**: Create additional admin users as needed
3. **Implement Role-Based Access**: Add different user roles
4. **Add User Management**: Create UI for managing users
5. **Audit Logging**: Add login/logout logging

## 📞 Support

If you encounter any issues:
1. Check the console for error messages
2. Verify your MongoDB connection
3. Ensure all environment variables are set
4. Check that the admin user was created successfully
