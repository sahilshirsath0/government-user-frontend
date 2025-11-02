"use client";

import Image from 'next/image';
import { User, Lock, Eye, EyeOff, Loader2, ShieldCheck, ListChecks, BarChart3 } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../admin-dashboard/AuthContext';

export default function AdminLoginPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { login } = useAuth();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    
    const formData = new FormData(e.target);
    const username = formData.get('username');
    const password = formData.get('password');
    
    try {
      const result = await login(username, password);
      if (result.success) {
        setSuccess('Login successful!');
        setLoading(false);
        setTimeout(() => {
          window.location.href = '/admin-dashboard';
        }, 500);
      } else {
        setError('Invalid credentials');
        setLoading(false);
      }
    } catch (error) {
      setError('Login failed');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-100 font-bakbak-one" suppressHydrationWarning>
      {/* Left Section - Image and Features (Hidden on md to xs) */}
      <div className="hidden lg:flex relative lg:w-1/2 items-center justify-center p-4 lg:p-8 bg-gradient-to-br from-blue-800 via-indigo-900 to-purple-900 overflow-hidden">
        {/* Background Image with Enhanced Overlay */}
        <Image
          src="/images/vecteezy_aerial-view-of-mountain-is-beautifulin-thailand_11872578.png"
          alt="Aerial view of a beautiful mountain village"
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="absolute inset-0 z-0 opacity-40"
          priority
        />
        
        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-indigo-900/70 to-purple-900/80 z-10"></div>
        
        {/* Additional Color Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-800/60 via-transparent to-indigo-800/40 z-20"></div>
        
        {/* Content Container with Glass Effect */}
        <div className="relative z-30 text-white text-center max-w-md lg:max-w-lg mx-auto">
          {/* Glass Card for Content */}
          <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-8 border border-white/20 shadow-2xl">
            {/* Website Logo */}
            <div className="flex justify-center mb-6 animate-pulse">
              <div className="w-24 h-24 rounded-full shadow-lg overflow-hidden">
                <Image
                  src="/images/home/yetgaon-logo.png"
                  alt="Yetgaon Gram Panchayat Logo"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            
            {/* Professional Heading */}
            <div className="text-center mb-6">
              <h1 className="text-3xl font-yatra-one font-bold text-white">
               ✽ डिजिटल प्रशासनात स्वागत ✽
              </h1>
            </div>
            
            {/* Professional Description */}
            <p className="text-lg mb-8 leading-relaxed text-white text-center">
              हे पोर्टल ग्रामपंचायतीच्या कार्यक्षम प्रशासनासाठी विकसित करण्यात आले आहे.
            </p>
            
            {/* Professional Feature List */}
            <ul className="space-y-4 text-center">
              <li className="flex items-center justify-center group hover:scale-105 transition-transform duration-300">
                <div className="relative mr-4">
                  <ShieldCheck className="w-6 h-6 text-white group-hover:text-blue-200 transition-colors duration-300" />
                  <div className="absolute inset-0 bg-blue-400/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <span className="text-white group-hover:text-blue-100 transition-colors duration-300">ग्रामपंचायतीचे पारदर्शक व्यवस्थापन</span>
              </li>
              <li className="flex items-center justify-center group hover:scale-105 transition-transform duration-300">
                <div className="relative mr-4">
                  <ListChecks className="w-6 h-6 text-white group-hover:text-blue-200 transition-colors duration-300" />
                  <div className="absolute inset-0 bg-blue-400/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <span className="text-white group-hover:text-blue-100 transition-colors duration-300">सेवा आणि योजना डिजिटल पद्धतीने हाताळणे</span>
              </li>
              <li className="flex items-center justify-center group hover:scale-105 transition-transform duration-300">
                <div className="relative mr-4">
                  <BarChart3 className="w-6 h-6 text-white group-hover:text-blue-200 transition-colors duration-300" />
                  <div className="absolute inset-0 bg-blue-400/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <span className="text-white group-hover:text-blue-100 transition-colors duration-300">नोंदी व अहवालांचे केंद्रीकृत नियंत्रण</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Right Section - Login Form (Full width on md to xs) */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-2 sm:p-4 lg:p-8 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen lg:min-h-0">
        <div className="w-full max-w-2xl group/card">
          {/* Animated Hover Card */}
          <div className="relative p-4 sm:p-6 bg-white rounded-2xl shadow-xl border border-gray-200 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-2 hover:scale-[1.02] active:scale-[0.98] hover:border-blue-300 hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50">
            {/* Card glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Card border glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-indigo-400/30 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Enhanced color overlay */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50/50 to-indigo-50/50 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Inner card background color change */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-100/80 to-indigo-100/80 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Card content */}
            <div className="relative z-10">
              {/* Header Section */}
              <div className="text-center mb-4 sm:mb-6">
                <div className="relative">
                  <h1 className="text-lg sm:text-xl lg:text-3xl font-yatra-one font-bold text-blue-600 mb-2 sm:mb-3 relative z-10">
                    ग्रामपंचायत लॉगिन
                  </h1>
                  {/* Subtle background glow */}
                  <div className="absolute inset-0 bg-blue-100 rounded-full blur-xl opacity-30 -z-10"></div>
                </div>
                
                {/* Enhanced decorative line with diamond */}
                <div className="flex items-center justify-center mb-2 sm:mb-3">
                  <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-r from-transparent to-yellow-400 rounded-full"></div>
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gradient-to-br from-yellow-400 to-yellow-500 transform rotate-45 mx-1 sm:mx-2 shadow-lg"></div>
                  <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-l from-transparent to-yellow-400 rounded-full"></div>
                </div>
                
                <h2 className="text-sm sm:text-base lg:text-lg font-yatra-one font-bold text-gray-800 mb-1">
                  ग्रामपंचायत येतगाव
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 font-bakbak-one">
                  ता. कडेगाव जी. सांगली
                </p>
              </div>

              {/* Error Message */}
              {error && (
                <div className="mb-4 p-3 bg-red-100 border border-red-300 rounded-lg">
                  <p className="text-red-600 text-sm font-bakbak-one">{error}</p>
                </div>
              )}

              {/* Success Message */}
              {success && (
                <div className="mb-4 p-3 bg-green-100 border border-green-300 rounded-lg">
                  <p className="text-green-600 text-sm font-bakbak-one">{success}</p>
                </div>
              )}

              {/* Login Form */}
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                {/* Username Field */}
                <div className="group">
                  <label htmlFor="username" className="block text-sm font-bakbak-one font-medium text-gray-700 mb-2 transition-colors group-focus-within:text-blue-600">
                    वापरकर्ता ID
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                      <User className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-200" />
                    </div>
                    <input
                      id="username"
                      name="username"
                      type="text"
                      required
                      className="block w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm group-hover:bg-white group-hover:shadow-md"
                      placeholder="वापरकर्ता ID प्रविष्ट करा"
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="group">
                  <label htmlFor="password" className="block text-sm font-bakbak-one font-medium text-gray-700 mb-2 transition-colors group-focus-within:text-blue-600">
                    पासवर्ड
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                      <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-200" />
                    </div>
                    <input
                      id="password"
                      name="password"
                      type={passwordVisible ? "text" : "password"}
                      required
                      className="block w-full pl-12 pr-12 py-3 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm group-hover:bg-white group-hover:shadow-md"
                      placeholder="पासवर्ड प्रविष्ट करा"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-4 flex items-center z-10"
                      onClick={togglePasswordVisibility}
                    >
                      {passwordVisible ? (
                        <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors duration-200" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors duration-200" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Login Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="group w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bakbak-one font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] hover:shadow-lg hover:shadow-blue-500/25"
                  >
                    <span className="flex items-center">
                      {loading ? (
                        <>
                          <Loader2 className="animate-spin h-5 w-5 text-white mr-2" />
                          प्रक्रिया करत आहे...
                        </>
                      ) : (
                        <>
                          साइन इन करा
                          <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </>
                      )}
                    </span>
                  </button>
                </div>
              </form>

              {/* Enhanced Additional Links */}
              <div className="mt-4 sm:mt-6 text-center">
                <div className="flex justify-center items-center space-x-3 sm:space-x-4 text-xs sm:text-sm">
                  <a 
                    href="/" 
                    className="group/link text-blue-600 hover:text-blue-800 font-bakbak-one transition-all duration-300 hover:scale-105 active:scale-95 relative touch-manipulation hover:bg-blue-50 px-2 py-1 rounded-lg"
                  >
                    <span className="relative z-10">होम</span>
                    <div className="absolute inset-0 bg-blue-100 rounded-lg opacity-0 group-hover/link:opacity-70 transition-opacity duration-300 -z-10"></div>
                  </a>
                  <span className="text-gray-300 select-none">|</span>
                  <a 
                    href="/contact" 
                    className="group/link text-blue-600 hover:text-blue-800 font-bakbak-one transition-all duration-300 hover:scale-105 active:scale-95 relative touch-manipulation hover:bg-blue-50 px-2 py-1 rounded-lg"
                  >
                    <span className="relative z-10">संपर्क</span>
                    <div className="absolute inset-0 bg-blue-100 rounded-lg opacity-0 group-hover/link:opacity-70 transition-opacity duration-300 -z-10"></div>
                  </a>
                </div>
                
                {/* Security notice */}
                <div className="mt-3 sm:mt-4 p-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg hover:from-blue-100 hover:to-indigo-100 transition-all duration-300">
                  <p className="text-xs text-blue-700 font-bakbak-one">
                    🔒 सुरक्षित लॉगिन - आपली माहिती सुरक्षित आहे
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}