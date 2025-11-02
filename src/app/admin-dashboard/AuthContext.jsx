"use client";

import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is already logged in (from localStorage)
  useEffect(() => {
    const checkAuth = () => {
      // Only run on client side
      if (typeof window === 'undefined') {
        setLoading(false);
        return;
      }
      
      const token = localStorage.getItem('adminToken');
      if (token) {
        // Check if token is expired before making API call
        try {
          const payload = JSON.parse(atob(token.split('.')[1]));
          const now = Date.now() / 1000;
          if (payload.exp && payload.exp < now) {
            // Token is expired, remove it
            localStorage.removeItem('adminToken');
            setLoading(false);
            return;
          }
          verifyToken(token);
        } catch (error) {
          // Invalid token, remove it
          localStorage.removeItem('adminToken');
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    // Small delay to prevent hydration issues
    setTimeout(checkAuth, 100);
  }, []);

  const verifyToken = async (token) => {
    try {
      const response = await fetch('/api/auth/verify', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          setIsAuthenticated(true);
          setUser(data.user);
        } else {
          // Token is invalid, remove it
          localStorage.removeItem('adminToken');
          setIsAuthenticated(false);
          setUser(null);
        }
      } else {
        // Network error or server error
        localStorage.removeItem('adminToken');
        setIsAuthenticated(false);
        setUser(null);
      }
    } catch (error) {
      console.error('Token verification failed:', error);
      localStorage.removeItem('adminToken');
      setIsAuthenticated(false);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const login = async (username, password) => {
    setLoading(true);
    
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          // Store token in localStorage
          localStorage.setItem('adminToken', data.token);
          setIsAuthenticated(true);
          setUser(data.user);
          setLoading(false);
          return { success: true, message: "Login successful!" };
        } else {
          setLoading(false);
          return { success: false, message: data.message || "Login failed!" };
        }
      } else {
        setLoading(false);
        return { success: false, message: "Invalid credentials" };
      }
    } catch (error) {
      console.error('Login error:', error);
      setLoading(false);
      return { success: false, message: "Login failed" };
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('adminToken');
    }
  };

  const value = {
    isAuthenticated,
    user,
    loading,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
