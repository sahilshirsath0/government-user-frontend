"use client";

import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Dynamically import FlipbookViewer to prevent SSR issues
const FlipbookViewer = dynamic(() => import('../components/FlipbookViewer'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-96 bg-gray-100 rounded-lg">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600 font-bakbak-one">PDF व्यूअर लोड होत आहे...</p>
      </div>
    </div>
  )
});

export default function righttoinformationPage() {
    return (
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Hero Banner Section */}
        <section className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center text-center overflow-hidden">
          {/* Background Image */}
          <Image
            src="/images/vecteezy_irrigation-canal-with-flowing-water-in-rural-landscape_70867349.png"
            alt="Right to Information - Gram Panchayat Yetgaon"
            fill
            className="object-cover object-center z-0"
            priority
          />

          {/* Overlay Content */}
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-4 z-10">
            {/* Main Title */}
            <h1 className="text-yellow-400 text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-yatra-one font-bold mb-2 leading-tight typing-animation">
              माहितीचा अधिकार
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
              माहितीचा अधिकार कायदा २००५ नुसार, प्रत्येक नागरिकाला सरकारी संस्थांकडून माहिती मिळविण्याचा अधिकार आहे. येतगाव ग्रामपंचायत पारदर्शकतेच्या तत्त्वावर काम करते आणि नागरिकांना आवश्यक माहिती पुरविण्यासाठी तत्पर आहे. RTI अर्ज करून आपण ग्रामपंचायतीच्या कामकाजाबाबत माहिती मिळवू शकता.
            </p>
          </div>
          
          <FlipbookViewer 
            pdfUrl="/pdf/RTI-application.pdf"
            title="RTI अर्ज - येतगाव ग्रामपंचायत"
            defaultScale={1.0}
          />
        </div>
      </main>
    );
  }
  