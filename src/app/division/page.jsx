"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { publicAPI } from '../services/service'; // Adjust path as needed

const NagrikSevaApplication = () => {
  // QR Code image state (from backend)
  const [qrCodeImage, setQrCodeImage] = useState(null);
  const [qrLoading, setQrLoading] = useState(true);

  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    whatsappNumber: '',
    aadhaarNumber: '',
    email: '',
    certificateHolderName: '',
    paymentScreenshot: null
  });

  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [formErrors, setFormErrors] = useState({});

  // Fetch QR code image
  useEffect(() => {
    fetchQrCodeImage();
  }, []);

  const fetchQrCodeImage = async () => {
    setQrLoading(true);
    try {
      const response = await publicAPI.getNagrikSevaHeader();
      if (response.data.success && response.data.data?.image?.data) {
        setQrCodeImage(response.data.data.image.data);
      }
    } catch (err) {
      console.error('Error fetching QR code image:', err);
    } finally {
      setQrLoading(false);
    }
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Convert to base64
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          paymentScreenshot: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Form validation
  const validateForm = () => {
    const errors = {};
    
    if (!formData.firstName.trim()) errors.firstName = 'नाव आवश्यक आहे';
    if (!formData.middleName.trim()) errors.middleName = 'नाव आवश्यक आहे';
    if (!formData.lastName.trim()) errors.lastName = 'आडनाव आवश्यक आहे';
    if (!formData.whatsappNumber.trim()) errors.whatsappNumber = 'व्हाट्सअप नंबर आवश्यक आहे';
    if (!formData.aadhaarNumber.trim()) errors.aadhaarNumber = 'आधार नंबर आवश्यक आहे';
    if (!formData.email.trim()) errors.email = 'ईमेल आवश्यक आहे';
    if (!formData.certificateHolderName.trim()) errors.certificateHolderName = 'प्रमाणपत्र धारकाचे नाव आवश्यक आहे';
    

    // Validate phone number (10 digits)
    if (formData.whatsappNumber && !/^\d{10}$/.test(formData.whatsappNumber)) {
      errors.whatsappNumber = 'वैध 10 अंकी मोबाईल नंबर टाका';
    }

    // Validate Aadhaar number (12 digits)
    if (formData.aadhaarNumber && !/^\d{12}$/.test(formData.aadhaarNumber)) {
      errors.aadhaarNumber = 'वैध 12 अंकी आधार नंबर टाका';
    }

    // Validate email
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'वैध ईमेल पत्ता टाका';
    }

    return errors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await publicAPI.submitNagrikSevaApplication(formData);
      
      if (response.data.success) {
        setSubmitSuccess(true);
        setFormData({
          firstName: '',
          middleName: '',
          lastName: '',
          whatsappNumber: '',
          aadhaarNumber: '',
          email: '',
          certificateHolderName: '',
        
          paymentScreenshot: null
        });
        
        // Reset file input
        const fileInput = document.getElementById('paymentScreenshot');
        if (fileInput) fileInput.value = '';
      }
    } catch (err) {
      console.error('Error submitting application:', err);
      setSubmitError('अर्ज सबमिट करण्यात त्रुटी झाली आहे. कृपया पुन्हा प्रयत्न करा.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Banner Section with Static Background Image */}
      

      <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8">
        {/* Success Message */}
        {submitSuccess && (
          <div className="mb-8 p-4 bg-green-100 border border-green-400 rounded-lg">
            <div className="flex items-center">
              <span className="text-2xl mr-3">✅</span>
              <div>
                <h3 className="text-green-800 font-yatra-one font-bold">अर्ज यशस्वीरित्या सबमिट झाला!</h3>
                <p className="text-green-700 font-bakbak-one text-sm">तुमचा अर्ज प्राप्त झाला आहे. लवकरच तुम्हाला संपर्क केला जाईल.</p>
              </div>
            </div>
          </div>
        )}

        {/* Error Message */}
        {submitError && (
          <div className="mb-8 p-4 bg-red-100 border border-red-400 rounded-lg">
            <div className="flex items-center">
              <span className="text-2xl mr-3">❌</span>
              <div>
                <h3 className="text-red-800 font-yatra-one font-bold">त्रुटी!</h3>
                <p className="text-red-700 font-bakbak-one text-sm">{submitError}</p>
              </div>
            </div>
          </div>
        )}

        {/* Main Content: Form + QR Code Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          
          {/* Application Form - Takes 3 columns on large screens */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
                <h2 className="text-2xl font-yatra-one font-bold text-center">नागरिक सेवा अर्जाचा फॉर्म</h2>
                <p className="text-center font-bakbak-one mt-2 opacity-90">सर्व माहिती योग्यरित्या भरा</p>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-yatra-one font-bold text-gray-700 mb-2">
                      नाव <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-lg font-bakbak-one focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        formErrors.firstName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="तुमचे नाव टाका"
                    />
                    {formErrors.firstName && <p className="text-red-500 text-xs mt-1 font-bakbak-one">{formErrors.firstName}</p>}
                  </div>

                  <div>
                    <label htmlFor="middleName" className="block text-sm font-yatra-one font-bold text-gray-700 mb-2">
                      मधले नाव<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="middleName"
                      name="middleName"
                      value={formData.middleName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg font-bakbak-one focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="मधले नाव"
                    />
                    {formErrors.middleName && <p className="text-red-500 text-xs mt-1 font-bakbak-one">{formErrors.middleName}</p>}
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-yatra-one font-bold text-gray-700 mb-2">
                      आडनाव <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-lg font-bakbak-one focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        formErrors.lastName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="तुमचे आडनाव टाका"
                    />
                    {formErrors.lastName && <p className="text-red-500 text-xs mt-1 font-bakbak-one">{formErrors.lastName}</p>}
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="whatsappNumber" className="block text-sm font-yatra-one font-bold text-gray-700 mb-2">
                      व्हाट्सअप नंबर <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="whatsappNumber"
                      name="whatsappNumber"
                      value={formData.whatsappNumber}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-lg font-bakbak-one focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        formErrors.whatsappNumber ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="10 अंकी मोबाईल नंबर"
                      maxLength="10"
                    />
                    {formErrors.whatsappNumber && <p className="text-red-500 text-xs mt-1 font-bakbak-one">{formErrors.whatsappNumber}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-yatra-one font-bold text-gray-700 mb-2">
                      ईमेल <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-lg font-bakbak-one focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        formErrors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="तुमचा ईमेल पत्ता"
                    />
                    {formErrors.email && <p className="text-red-500 text-xs mt-1 font-bakbak-one">{formErrors.email}</p>}
                  </div>
                </div>

                {/* Aadhaar and Certificate Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="aadhaarNumber" className="block text-sm font-yatra-one font-bold text-gray-700 mb-2">
                      आधार नंबर <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="aadhaarNumber"
                      name="aadhaarNumber"
                      value={formData.aadhaarNumber}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-lg font-bakbak-one focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        formErrors.aadhaarNumber ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="12 अंकी आधार नंबर"
                      maxLength="12"
                    />
                    {formErrors.aadhaarNumber && <p className="text-red-500 text-xs mt-1 font-bakbak-one">{formErrors.aadhaarNumber}</p>}
                  </div>

                  <div>
                    <label htmlFor="certificateHolderName" className="block text-sm font-yatra-one font-bold text-gray-700 mb-2">
                      प्रमाणपत्र धारकाचे नाव <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="certificateHolderName"
                      name="certificateHolderName"
                      value={formData.certificateHolderName}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-lg font-bakbak-one focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        formErrors.certificateHolderName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="प्रमाणपत्रावरील नाव"
                    />
                    {formErrors.certificateHolderName && <p className="text-red-500 text-xs mt-1 font-bakbak-one">{formErrors.certificateHolderName}</p>}
                  </div>
                </div>

              

                {/* Payment Screenshot */}
                <div>
                  <label htmlFor="paymentScreenshot" className="block text-sm font-yatra-one font-bold text-gray-700 mb-2">
                    पेमेंट स्क्रीनशॉट
                  </label>
                  <input
                    type="file"
                    id="paymentScreenshot"
                    name="paymentScreenshot"
                    onChange={handleFileChange}
                    accept="image/*"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg font-bakbak-one focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <p className="text-gray-500 text-xs mt-1 font-bakbak-one">कृपया पेमेंटचा स्क्रीनशॉट अपलोड करा (वैकल्पिक)</p>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-8 py-3 rounded-lg font-yatra-one font-bold text-white transition-all duration-300 ${
                      isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105'
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        सबमिट होत आहे...
                      </div>
                    ) : (
                      'अर्ज सबमिट करा'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* QR Code Section - Takes 1 column on large screens */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden sticky top-8">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-4 text-white">
                <h3 className="text-lg font-yatra-one font-bold text-center">पेमेंट QR कोड</h3>
                <p className="text-center font-bakbak-one text-sm mt-1 opacity-90">स्कॅन करून पेमेंट करा</p>
              </div>

              <div className="p-6">
                {qrLoading ? (
                  <div className="flex flex-col items-center justify-center py-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mb-4"></div>
                    <p className="text-gray-600 font-bakbak-one text-sm">QR कोड लोड होत आहे...</p>
                  </div>
                ) : qrCodeImage ? (
                  <div className="flex flex-col items-center">
                    <div className="bg-white p-4 rounded-lg border-2 border-gray-200 shadow-inner mb-4">
                      <img
                        src={qrCodeImage}
                        alt="Payment QR Code"
                        className="w-full max-w-xs h-auto"
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-bakbak-one text-gray-700 mb-2">
                        📱 आपल्या फोनच्या कॅमेर्याने स्कॅन करा
                      </p>
                      <p className="text-xs font-bakbak-one text-gray-500">
                        पेमेंट झाल्यानंतर स्क्रीनशॉट अपलोड करा
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="text-4xl mb-4">💳</div>
                    <p className="text-gray-600 font-bakbak-one">QR कोड उपलब्ध नाही</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NagrikSevaApplication;
