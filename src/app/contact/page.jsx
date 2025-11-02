"use client";

import React, { useState } from 'react';
import { publicAPI } from '../services/service';
import { useTranslation } from '../hooks/useTranslation';

export default function ContactPage() {
  const { t, language } = useTranslation();
  
  // Form state - Updated to match backend
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: ''
  });

  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [formErrors, setFormErrors] = useState({});

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

  // Form validation
  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) errors.name = t('nameRequired');
    if (!formData.subject.trim()) errors.subject = t('subjectRequired');
    if (!formData.message.trim()) errors.message = t('messageRequired');

    // Validate email if provided
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = t('validEmailRequired');
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
      // Prepare data in the format backend expects
      const feedbackData = {
        name: formData.name,
        email: formData.email || '', // Optional field
        message: formData.message,
        subject: formData.subject
      };

      console.log('Submitting feedback data:', feedbackData);
      
      const response = await publicAPI.submitFeedback(feedbackData);
      
      console.log('Feedback response:', response);
      
      if (response.data.success || response.status === 201) {
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          message: '',
          subject: ''
        });
      }
    } catch (err) {
      console.error('Error submitting feedback:', err);
      console.error('Error response:', err.response);
      setSubmitError(t('feedbackSubmitError'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-yatra-one font-bold text-blue-600 mb-6">
            {t('contactTitle')}
          </h1>
          <div className="flex items-center justify-center mb-4">
            <div className="h-px bg-yellow-400 flex-1 max-w-16"></div>
            <div className="mx-3">
              <div className="w-2 h-2 bg-yellow-400 rotate-45"></div>
            </div>
            <div className="h-px bg-yellow-400 flex-1 max-w-16"></div>
          </div>
          <p className="text-gray-700 font-bakbak-one">
            {t('contactSubtitle')}
          </p>
        </div>

        {/* Success Message */}
        {submitSuccess && (
          <div className="mb-8 p-4 bg-green-100 border border-green-400 rounded-lg max-w-2xl mx-auto">
            <div className="flex items-center">
              <span className="text-2xl mr-3">✅</span>
              <div>
                <h3 className="text-green-800 font-yatra-one font-bold">{t('feedbackSuccessTitle')}</h3>
                <p className="text-green-700 font-bakbak-one text-sm">{t('feedbackSuccessMessage')}</p>
              </div>
            </div>
          </div>
        )}

        {/* Error Message */}
        {submitError && (
          <div className="mb-8 p-4 bg-red-100 border border-red-400 rounded-lg max-w-2xl mx-auto">
            <div className="flex items-center">
              <span className="text-2xl mr-3">❌</span>
              <div>
                <h3 className="text-red-800 font-yatra-one font-bold">{t('errorTitle')}</h3>
                <p className="text-red-700 font-bakbak-one text-sm">{submitError}</p>
              </div>
            </div>
          </div>
        )}

        {/* Content: Form */}
        <div className="max-w-2xl mx-auto">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-xl blur-sm"></div>
            <div className="relative bg-white rounded-xl shadow-2xl border border-gray-100">
              <div className="p-4 lg:p-6">
                <div className="mb-4 text-center">
                  <h3 className="text-lg font-bold text-gray-800 mb-1 font-yatra-one">{t('contactFormTitle')}</h3>
                  <p className="text-xs text-gray-600 font-bakbak-one">{t('contactFormSubtitle')}</p>
                </div>
                
                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name Field */}
                  <div>
                    <label className="block text-gray-800 text-sm font-medium mb-3 font-bakbak-one">
                      {t('fullName')} <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full p-3 rounded-xl bg-white border focus:ring-2 focus:ring-blue-500 focus:outline-none transition ${
                        formErrors.name ? 'border-red-500' : 'border-blue-100'
                      } shadow-[0_8px_12px_rgba(30,64,175,0.06)]`}
                      placeholder={t('enterFullName')}
                      required
                    />
                    {formErrors.name && <p className="text-red-500 text-xs mt-1 font-bakbak-one">{formErrors.name}</p>}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-gray-800 text-sm font-medium mb-2 font-bakbak-one">
                      {t('email')}
                    </label>
                    <input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full p-3 rounded-xl bg-white border focus:ring-2 focus:ring-blue-500 focus:outline-none transition ${
                        formErrors.email ? 'border-red-500' : 'border-blue-100'
                      } shadow-[0_8px_12px_rgba(30,64,175,0.06)]`}
                      placeholder={t('enterEmail')}
                    />
                    {formErrors.email && <p className="text-red-500 text-xs mt-1 font-bakbak-one">{formErrors.email}</p>}
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label className="block text-gray-800 text-sm font-medium mb-2 font-bakbak-one">
                      {t('subject')} <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={`w-full p-3 rounded-xl bg-white border focus:ring-2 focus:ring-blue-500 focus:outline-none transition ${
                        formErrors.subject ? 'border-red-500' : 'border-blue-100'
                      } shadow-[0_8px_12px_rgba(30,64,175,0.06)]`}
                      placeholder={t('enterSubject')}
                      required
                    />
                    {formErrors.subject && <p className="text-red-500 text-xs mt-1 font-bakbak-one">{formErrors.subject}</p>}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-gray-800 text-sm font-medium mb-2 font-bakbak-one">
                      {t('message')} <span className="text-red-500">*</span>
                    </label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`w-full p-3 rounded-xl bg-white border focus:ring-2 focus:ring-blue-500 focus:outline-none transition resize-none h-32 ${
                        formErrors.message ? 'border-red-500' : 'border-blue-100'
                      } shadow-[0_8px_12px_rgba(30,64,175,0.06)]`}
                      placeholder={t('enterMessage')}
                      required
                    />
                    {formErrors.message && <p className="text-red-500 text-xs mt-1 font-bakbak-one">{formErrors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full sm:w-auto px-6 sm:px-8 py-3 rounded-full font-bold font-bakbak-one text-sm sm:text-base transition-all duration-300 ${
                        isSubmitting 
                          ? 'bg-gray-400 cursor-not-allowed text-white' 
                          : 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow hover:shadow-lg hover:scale-[1.02]'
                      }`}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          {t('submitting')}
                        </div>
                      ) : (
                        t('submitFeedback')
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="mt-16 max-w-7xl mx-auto px-2 sm:px-0">
          <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 items-stretch">
            {/* Email Card */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 p-3 sm:p-4 md:p-6 lg:p-8 text-center group hover:shadow-xl hover:scale-[1.02] md:hover:scale-105 transition-all duration-300 min-w-0">
              <div className="flex justify-center mb-6">
                <div className="p-4">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 text-blue-500/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-sm sm:text-base md:text-xl font-bold text-gray-800 mb-2 sm:mb-3 font-yatra-one">{t('emailLabel')}</h3>
              <p className="text-blue-600 font-medium font-bakbak-one text-[10px] sm:text-sm md:text-lg break-all">
                gpsawargavghat171853@gmail.com
              </p>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 p-3 sm:p-4 md:p-6 lg:p-8 text-center group hover:shadow-xl hover:scale-[1.02] md:hover:scale-105 transition-all duration-300 min-w-0">
              <div className="flex justify-center mb-6">
                <div className="p-4">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 text-blue-500/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-sm sm:text-base md:text-xl font-bold text-gray-800 mb-2 sm:mb-3 font-yatra-one">{t('phoneLabel')}</h3>
              <p className="text-blue-600 font-medium font-bakbak-one text-[10px] sm:text-sm md:text-lg break-all leading-snug">
                +91 7887406359
              </p>
            </div>

            {/* Address Card */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 p-3 sm:p-4 md:p-6 lg:p-8 text-center group hover:shadow-xl hover:scale-[1.02] md:hover:scale-105 transition-all duration-300 min-w-0">
              <div className="flex justify-center mb-6">
                <div className="p-4">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 text-blue-500/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-sm sm:text-base md:text-xl font-bold text-gray-800 mb-2 sm:mb-3 font-yatra-one">{t('addressLabel')}</h3>
              <p className="text-gray-700 font-bakbak-one leading-relaxed text-[10px] sm:text-sm md:text-lg">
                {t('addressText')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
