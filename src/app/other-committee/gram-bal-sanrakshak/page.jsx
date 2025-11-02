"use client";

import React from 'react';
import Image from 'next/image';

const GramBalSanrakshakPage = () => { 
  const members = [
    { id: 1, name: 'जयश्री सुभाष कणसे', position: 'अध्यक्ष', mobile: '9975176457' },
    { id: 2, name: 'अन्वरबी आलमशहा आतार', position: 'सदस्य', mobile: 'कार्यालय संपर्क' },
    { id: 3, name: 'सुजाता सुरेश देवकर', position: 'सदस्य', mobile: 'कार्यालय संपर्क' },
    { id: 4, name: 'अनिल मारुती शिंदे', position: 'सदस्य', mobile: 'कार्यालय संपर्क' },
    { id: 5, name: 'आशा हरिचंद्र पाटील', position: 'सदस्य', mobile: 'कार्यालय संपर्क' },
    { id: 6, name: 'गायत्री जोतीराम सूर्यवंशी', position: 'सदस्य', mobile: 'कार्यालय संपर्क' },
    { id: 7, name: 'रोहन सुधाकर शिरतोडे', position: 'सदस्य', mobile: 'कार्यालय संपर्क' },
    { id: 8, name: 'रुचिता सुहास उथळे', position: 'सदस्य', mobile: 'कार्यालय संपर्क' }
  ];

  const adhyaksh = members.find(member => member.position === 'अध्यक्ष');
  const otherMembers = members.filter(member => member.position === 'सदस्य');

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Banner Section */}
      <section className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center text-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/vecteezy_irrigation-canal-with-flowing-water-in-rural-landscape_70867349.png"
          alt="Rural agricultural setting for Gram Bal Sanrakshak Committee"
          fill
          className="object-cover object-center z-0"
          priority
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-4 z-10">
          {/* Main Title */}
          <h1 className="text-yellow-400 text-2xl xs:text-3xl sm:text-5xl lg:text-7xl font-yatra-one font-bold mb-2 leading-tight typing-animation">
            ग्राम बाल संरक्षक समिती
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-white text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bakbak-one font-bold mb-6 leading-tight typing-animation-subtitle">
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
            ग्राम बाल संरक्षक समिती ही समिती गावातील मुलांच्या संरक्षणासाठी समर्पित आहे. मुलांच्या शिक्षण, आरोग्य व सुरक्षिततेवर लक्ष ठेवते. बालविवाह, बालमजुरी प्रतिबंधित करते. शाळा सोडलेल्या मुलांना पुन्हा शिक्षणात आणते. मुलांच्या हक्कांविषयी लोकांना जागरूक करते. मुलांसाठी सांस्कृतिक व क्रीडा स्पर्धा आयोजित करते. कुपोषित मुलांसाठी पोषण कार्यक्रम राबवते. यामुळे मुलांचा सर्वांगीण विकास होत आहे.
          </p>
        </div>

        {/* Leadership Card - 1 Card Layout */}
        <div className="mb-8 sm:mb-10 lg:mb-12 animate-slide-in-left delay-200">
          {/* Leadership Card Row */}
          <div className="flex flex-row justify-center items-center gap-4 sm:gap-6 lg:gap-8 mb-4 sm:mb-6">
            {adhyaksh && (
              <div className="w-full sm:w-2/3 lg:w-1/2 bg-white rounded-xl shadow-lg overflow-hidden text-center p-4 sm:p-6 border-t-4 border-yellow-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 transform">
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-white p-4 rounded-lg mb-4">
                  <div className="text-lg xs:text-xl sm:text-2xl font-bold mb-2 font-yatra-one">{adhyaksh.name}</div>
                  <div className="text-yellow-100 text-base xs:text-lg sm:text-xl font-semibold">{adhyaksh.position}</div>
                </div>
                <div className="text-gray-700 text-sm xs:text-base sm:text-lg font-bakbak-one">
                  <span className="font-semibold">मो.नं.:</span> {adhyaksh.mobile}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Members Table */}
        <div className="max-w-4xl mx-auto animate-fade-in-up delay-400">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
          {/* Table Header - Bright Colors */}
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-3 sm:p-4">
            <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
              <div className="text-xs xs:text-sm sm:text-base lg:text-lg font-bold font-yatra-one">अ.क्र.</div>
              <div className="text-xs xs:text-sm sm:text-base lg:text-lg font-bold font-yatra-one">सदस्याचे नाव</div>
              <div className="text-xs xs:text-sm sm:text-base lg:text-lg font-bold font-yatra-one">पद</div>
              <div className="text-xs xs:text-sm sm:text-base lg:text-lg font-bold font-yatra-one">मो.नं.</div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-200">
            {otherMembers.map((member, index) => (
              <div
                key={member.id}
                className={`grid grid-cols-4 gap-2 sm:gap-4 p-3 sm:p-4 ${
                  index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                } hover:bg-pink-50 hover:shadow-md hover:scale-[1.01] transition-all duration-300 transform`}
              >
                <div className="text-center text-xs xs:text-sm sm:text-base text-gray-600 font-semibold">
                  {member.id}
                </div>
                <div className="text-xs xs:text-sm sm:text-base text-gray-800 font-bakbak-one text-left">
                  {member.name}
                </div>
                <div className="text-xs xs:text-sm sm:text-base text-pink-600 font-bakbak-one text-center font-medium">
                  {member.position}
                </div>
                <div className="text-xs xs:text-sm sm:text-base text-gray-700 font-bakbak-one text-center">
                  {member.mobile}
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-8 sm:mt-10 text-center animate-fade-in-up delay-500">
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 max-w-4xl mx-auto hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
            <h3 className="text-lg xs:text-xl sm:text-2xl font-bold mb-3 font-yatra-one transform transition-all duration-500 hover:scale-105" style={{color: '#1e40af'}}>
              संपर्क माहिती
            </h3>
            <div className="flex items-center justify-center mb-3 sm:mb-4">
              <div className="w-12 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
              <div className="w-2 h-2 bg-yellow-500 transform rotate-45 mx-2 shadow-lg" style={{boxShadow: '0 0 8px rgba(234, 179, 8, 0.5)'}}></div>
              <div className="w-12 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
            </div>
            <p className="text-sm xs:text-base text-gray-600 font-bakbak-one leading-relaxed">
              ग्रामपंचायत कार्यालय: येतगाव, तालुका: कडेगाव, जिल्हा: सांगली, महाराष्ट्र
            </p>
            <p className="text-sm xs:text-base text-gray-600 font-bakbak-one mt-2">
              कार्यालयीन वेळ: सकाळी ९:०० ते संध्याकाळी ६:००
            </p>
          </div>
        </div>
      </div>
    </main>
  );
  };

export default GramBalSanrakshakPage;