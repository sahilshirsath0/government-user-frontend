"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import { initMobileAnimations } from '../../utils/animations';

const SwachhataCards = () => {
  useEffect(() => {
    // Initialize mobile animations
    const cleanup = initMobileAnimations();
    return cleanup;
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Banner Section */}
      <section className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center text-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/vecteezy_irrigation-canal-with-flowing-water-in-rural-landscape_70867349.png"
          alt="स्वच्छता - येतगाव ग्रामपंचायत"
          fill
          className="object-cover object-center z-0"
          priority
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-4 z-10">
          {/* Main Title */}
          <h1 className="text-yellow-400 text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-yatra-one font-bold mb-2 leading-tight typing-animation">
            स्वच्छता
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-white text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bakbak-one font-bold mb-6 leading-tight typing-animation-subtitle">
            येतगाव ग्रामपंचायत
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
            गावात स्वच्छता अभियानाला विशेष महत्त्व देण्यात आले आहे. स्वच्छता मोहिमेचा गावात व्यापक प्रसार केला गेला आहे. प्रत्येक घरात शौचालय निर्मिती करण्यात आली असून त्याचा वापर सुनिश्चित केला जातो. कचरा व्यवस्थापनाची योग्य सोय उपलब्ध करून देण्यात आली आहे. गल्ल्यांमध्ये कचरा पेट्या ठेवण्यात आल्या असून नियमित रिकाम्या केल्या जातात. रस्ता स्वच्छता कार्यक्रम नियमित राबविण्यात येत आहे. प्लास्टिक वापर कमी करण्यासाठी जागरूकता कार्यक्रम आयोजित केले जातात. सार्वजनिक स्वच्छता संस्कृतीचा विकास करण्यावर भर दिला जातो. यामुळे गाव स्वच्छतेच्या बाबतीत आदर्श ठरले आहे.
          </p>
        </div>

        {/* Sanitation Initiatives */}
        <div className="max-w-4xl mx-auto animate-fade-in-up delay-200">
          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 font-yatra-one" style={{color: '#1e40af'}}>
              स्वच्छता उपक्रम
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-sm sm:text-base text-gray-700 font-bakbak-one leading-relaxed">
                  गावात स्वच्छता मोहिम सुरू
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-sm sm:text-base text-gray-700 font-bakbak-one leading-relaxed">
                  प्रत्येक घरात शौचालय निर्मिती
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-sm sm:text-base text-gray-700 font-bakbak-one leading-relaxed">
                  कचरा व्यवस्थापनाची योग्य सोय
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-sm sm:text-base text-gray-700 font-bakbak-one leading-relaxed">
                  गल्ल्यांमध्ये कचरा पेट्या ठेवणे
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-sm sm:text-base text-gray-700 font-bakbak-one leading-relaxed">
                  नियमित रस्ता स्वच्छता कार्यक्रम
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-sm sm:text-base text-gray-700 font-bakbak-one leading-relaxed">
                  प्लास्टिक वापर कमी करण्यासाठी जागरूकता
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-sm sm:text-base text-gray-700 font-bakbak-one leading-relaxed">
                  सार्वजनिक स्वच्छता संस्कृतीचा विकास
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Photos Section */}
        <div className="mt-12 animate-fade-in-up delay-400">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 font-yatra-one" style={{color: '#1e40af'}}>
            क्षणचित्रे
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Image
                // src="/images/smart-village/swachchhta-mohim.png"
                alt="स्वच्छता मोहिम"
                width={300}
                height={200}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-white font-bold text-sm font-bakbak-one">स्वच्छता मोहिम</h4>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Image
                src="/images/smart-village/shauchalay-nirmiti.jpg"
                alt="शौचालय निर्मिती"
                width={300}
                height={200}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-white font-bold text-sm font-bakbak-one">शौचालय निर्मिती</h4>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Image
                src="/images/home/clean-village.png"
                alt="कचरा व्यवस्थापन"
                width={300}
                height={200}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-white font-bold text-sm font-bakbak-one">कचरा व्यवस्थापन</h4>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Image
                src="/images/home/covered-drains.png"
                alt="रस्ता स्वच्छता"
                width={300}
                height={200}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-white font-bold text-sm font-bakbak-one">रस्ता स्वच्छता</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SwachhataCards;