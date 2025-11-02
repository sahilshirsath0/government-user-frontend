"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import { initMobileAnimations } from '../../utils/animations';

const ArogyaCards = () => {
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
          alt="आरोग्य - येतगाव ग्रामपंचायत"
          fill
          className="object-cover object-center z-0"
          priority
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-4 z-10">
          {/* Main Title */}
          <h1 className="text-yellow-400 text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-yatra-one font-bold mb-2 leading-tight typing-animation">
            आरोग्य
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
            गावात आरोग्य सुविधांमध्ये मोठ्या प्रमाणात सुधारणा झाली आहे. गावात प्राथमिक आरोग्य केंद्र चालविण्यात आले आहे. नियमित आरोग्य तपासणी शिबिरे आयोजित करण्यात येतात. माता व बालकांच्या आरोग्यावर विशेष लक्ष केंद्रित केले जाते. मोफत लसीकरण कार्यक्रम यशस्वीरीत्या राबविण्यात आले आहेत. आयुर्वेदिक व योग शिबिरांद्वारे पारंपरिक उपचारांना प्रोत्साहन दिले जाते. आरोग्य विम्याची माहिती ग्रामस्थांपर्यंत पोहोचवली जाते. आणीबाणी वैद्यकीय सेवेसाठी वाहन व्यवस्था उपलब्ध आहे. यामुळे गावातील लोकांचे आरोग्य सुधारले आहे.
          </p>
        </div>

        {/* Health Initiatives */}
        <div className="max-w-4xl mx-auto animate-fade-in-up delay-200">
          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 font-yatra-one" style={{color: '#1e40af'}}>
              आरोग्य उपक्रम
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-sm sm:text-base text-gray-700 font-bakbak-one leading-relaxed">
                  गावात प्राथमिक आरोग्य केंद्र
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-sm sm:text-base text-gray-700 font-bakbak-one leading-relaxed">
                  नियमित आरोग्य तपासणी शिबिर
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-sm sm:text-base text-gray-700 font-bakbak-one leading-relaxed">
                  माता व बालकांच्या आरोग्यावर भर
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-sm sm:text-base text-gray-700 font-bakbak-one leading-relaxed">
                  मोफत लसीकरण कार्यक्रम
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-sm sm:text-base text-gray-700 font-bakbak-one leading-relaxed">
                  आयुर्वेदिक व योग शिबिर
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-sm sm:text-base text-gray-700 font-bakbak-one leading-relaxed">
                  आरोग्य विम्याची माहिती व प्रसार
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-sm sm:text-base text-gray-700 font-bakbak-one leading-relaxed">
                  आणीबाणी वैद्यकीय सेवेची सोय
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
                src="/images/smart-village/aarogya-kendra.jpg"
                alt="प्राथमिक आरोग्य केंद्र"
                width={300}
                height={200}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-white font-bold text-sm font-bakbak-one">प्राथमिक आरोग्य केंद्र</h4>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Image
                // src="/images/smart-village/health-checkup.jpg"
                alt="आरोग्य तपासणी शिबिर"
                width={300}
                height={200}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-white font-bold text-sm font-bakbak-one">आरोग्य तपासणी शिबिर</h4>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Image
                // src="/images/smart-village/lasikaran.jpg"
                alt="लसीकरण कार्यक्रम"
                width={300}
                height={200}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-white font-bold text-sm font-bakbak-one">लसीकरण कार्यक्रम</h4>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Image
                src="/images/smart-village/arogya-shibir.jpg"
                alt="आयुर्वेदिक शिबिर"
                width={300}
                height={200}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-white font-bold text-sm font-bakbak-one">आयुर्वेदिक शिबिर</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ArogyaCards;