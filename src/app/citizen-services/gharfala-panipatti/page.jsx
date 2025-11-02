"use client";

import React from 'react';
import NagrikSevaApplication from '../../division/page';

export default function GharfalaPanipattiPage() {
  return (
    <div>
      {/* Page Header Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-5xl font-yatra-one font-bold bg-gradient-to-r from-blue-700 via-indigo-500 to-blue-700 bg-clip-text text-transparent animate-pulse transition-transform duration-700 hover:scale-[1.02]">House Tax & Water Tax</h1>
            <h2 className="text-2xl md:text-4xl font-yatra-one font-bold text-slate-800 mt-2 transition-transform duration-700 hover:scale-[1.02]">(घरफाळा व पाणीपट्टी)</h2>
            <div className="flex items-center justify-center gap-3 mt-4">
              <span className="h-[2px] w-20 bg-gradient-to-r from-amber-300 to-amber-600 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.6)]"></span>
              <span className="w-3 h-3 rotate-45 bg-gradient-to-b from-amber-300 to-amber-600 shadow-[0_0_10px_rgba(245,158,11,0.8)]"></span>
              <span className="h-[2px] w-20 bg-gradient-to-r from-amber-600 to-amber-300 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.6)]"></span>
            </div>
            <a href="/" className="inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 text-slate-900 font-bakbak-one shadow hover:shadow-lg hover:scale-[1.04] transition-all duration-300">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/90 shadow-inner animate-bounce">🏠</span>
              होम
            </a>
          </div>

          {/* Tax Collection Notice */}
          <div className="max-w-5xl xl:max-w-6xl mx-auto mb-6 sm:mb-8">
            <div className="bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-500 rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 transform p-3 xs:p-4 sm:p-5 md:p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3 xs:mr-4">
                  <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-orange-100 hover:bg-orange-200 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                    <span className="text-orange-600 text-lg xs:text-xl sm:text-2xl">💰</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-bold text-orange-800 mb-2 xs:mb-3 font-yatra-one">
                    कर संकलन सूचना 💰
                  </h3>
                  <div className="space-y-1 xs:space-y-2 text-xs xs:text-sm sm:text-base md:text-lg text-gray-700 font-bakbak-one">
                    <p className="flex items-start">
                      <span className="text-orange-600 mr-2 mt-1">•</span>
                      <span>घरफाळा व पाणीपट्टी भरण्यासाठी ऑनलाइन सुविधा उपलब्ध आहे.</span>
                    </p>
                    <p className="flex items-start">
                      <span className="text-orange-600 mr-2 mt-1">•</span>
                      <span>थकबाकी असल्यास, इतर सेवांसाठी अर्ज स्वीकारले जाणार नाहीत.</span>
                    </p>
                    <p className="flex items-start">
                      <span className="text-orange-600 mr-2 mt-1">•</span>
                      <span>कर भरण्यासाठी <a href="https://digitalgramsoft.com/TaxCollection" className="text-blue-600 underline hover:text-blue-800">येथे क्लिक करा</a></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Import Division Form Component */}
      <NagrikSevaApplication />
    </div>
  );
}
