"use client";

import React from 'react';
import Image from 'next/image';

export default function newsPage() {
    return (
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Hero Banner Section */}
        <section className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center text-center overflow-hidden">
          {/* Background Image */}
          <Image
            src="/images/vecteezy_irrigation-canal-with-flowing-water-in-rural-landscape_70867349.png"
            alt="News - Gram Panchayat Yetgaon"
            fill
            className="object-cover object-center z-0"
            priority
          />

          {/* Overlay Content */}
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-4 z-10">
            {/* Main Title */}
            <h1 className="text-yellow-400 text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-yatra-one font-bold mb-2 leading-tight typing-animation">
              बातम्या
            </h1>
            
            {/* Subtitle */}
            <h2 className="text-white text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bakbak-one font-bold mb-6 leading-tight typing-animation-subtitle">
              ग्रामपंचायत येतगाव
            </h2>
          </div>
        </section>

        <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8">
          {/* Header Section */}
          <div className="text-center mb-6 sm:mb-8 lg:mb-12 animate-fade-in-up">
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
              <div className="w-3 h-3 bg-yellow-500 transform rotate-45 mx-2 shadow-lg" style={{boxShadow: '0 0 10px rgba(234, 179, 8, 0.5)'}}></div>
              <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
            </div>
            <p className="text-sm xs:text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed font-bakbak-one px-2">
              येतगाव ग्रामपंचायतीच्या नवीनतम बातम्या, घोषणा, योजना आणि महत्त्वाच्या सूचना येथे उपलब्ध आहेत. गावाच्या विकास आणि प्रगतीबाबतची सर्व माहिती येथे मिळेल.
            </p>
          </div>

          {/* Coming Soon Card */}
          <div className="max-w-4xl mx-auto animate-fade-in-up delay-200">
            <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 text-center">
              <div className="mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-center mb-4 font-yatra-one" style={{color: '#1e40af'}}>
                  लवकरच उपलब्ध होईल
                </h3>
                <p className="text-gray-600 font-bakbak-one">
                  ग्रामपंचायतीच्या नवीनतम बातम्या आणि घोषणा लवकरच येथे उपलब्ध होतील. कृपया नंतर पुन्हा भेट द्या.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }