"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { initMobileAnimations } from '../../utils/animations';

const ShikshanSuvidhaCards = () => {
  const [counters, setCounters] = useState({
    anganwadi: 0,
    primarySchool: 0,
    vastiSchool: 0,
    highSchool: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Initialize mobile animations
    const cleanup = initMobileAnimations();
    return cleanup;
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    const statsSection = document.getElementById('stats-section');
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateCounters = () => {
    const targets = {
      anganwadi: 3,
      primarySchool: 2,
      vastiSchool: 1,
      highSchool: 1
    };

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounters({
        anganwadi: Math.floor(targets.anganwadi * progress),
        primarySchool: Math.floor(targets.primarySchool * progress),
        vastiSchool: Math.floor(targets.vastiSchool * progress),
        highSchool: Math.floor(targets.highSchool * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, stepDuration);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Banner Section */}
      <section className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center text-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/vecteezy_irrigation-canal-with-flowing-water-in-rural-landscape_70867349.png"
          alt="शैक्षणिक सुविधा - येतगाव ग्रामपंचायत"
          fill
          className="object-cover object-center z-0"
          priority
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-4 z-10">
          {/* Main Title */}
          <h1 className="text-yellow-400 text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-yatra-one font-bold mb-2 leading-tight typing-animation">
            शैक्षणिक सुविधा
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
            गावात शिक्षणाच्या सुविधांमध्ये लक्षणीय सुधारणा झाल्या आहेत. प्राथमिक व पूर्व प्राथमिक शाळेची सोय गावातच उपलब्ध आहे. शैक्षणिक सामग्री व पुस्तकांची पुरेशी सोय विद्यार्थ्यांसाठी केली गेली आहे. मोफत शिक्षण योजनेचा सर्व मुलांना लाभ मिळत आहे. कम्प्युटर शिक्षणाची सोय उपलब्ध करून देण्यात आली आहे. शाळेत मध्यान्ह भोजन योजनेचा चांगला प्रकारे वापर केला जातो. खेळ मैदान व सांस्कृतिक कार्यक्रमांसाठी स्वतंत्र व्यवस्था केली गेली आहे. शिक्षकांची पुरेशी संख्या उपलब्ध असून त्यांना नियमित प्रशिक्षण दिले जाते. यामुळे गावातील शिक्षणाचा दर्जा उंचावला गेला आहे.
          </p>
        </div>

        {/* Statistics Cards */}
        <div id="stats-section" className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8 animate-fade-in-up delay-200">
          <div className="group relative bg-white rounded-xl shadow-lg p-4 sm:p-6 text-center hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 overflow-hidden">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-pink-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Floating particles */}
            <div className="absolute top-2 right-2 w-2 h-2 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 transform group-hover:scale-150"></div>
            <div className="absolute bottom-4 left-3 w-1 h-1 bg-pink-300 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200 transform group-hover:scale-200"></div>
            
            {/* Counter with animation */}
            <div className="relative z-10">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-pink-600 mb-2 transition-all duration-500 group-hover:text-pink-700 group-hover:scale-110">
                <span className="inline-block transition-all duration-300 group-hover:animate-pulse">
                  {counters.anganwadi}
                </span>
                <span className="text-lg sm:text-xl text-pink-500 group-hover:text-pink-600 transition-colors duration-300"> पट</span>
              </div>
              <div className="text-sm sm:text-base text-gray-600 font-bakbak-one group-hover:text-gray-700 transition-colors duration-300">
                अंगणवाडी एकूण
              </div>
            </div>
          </div>

          <div className="group relative bg-white rounded-xl shadow-lg p-4 sm:p-6 text-center hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 overflow-hidden">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Floating particles */}
            <div className="absolute top-2 right-2 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 transform group-hover:scale-150"></div>
            <div className="absolute bottom-4 left-3 w-1 h-1 bg-blue-300 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200 transform group-hover:scale-200"></div>
            
            {/* Counter with animation */}
            <div className="relative z-10">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-2 transition-all duration-500 group-hover:text-blue-700 group-hover:scale-110">
                <span className="inline-block transition-all duration-300 group-hover:animate-pulse">
                  {counters.primarySchool}
                </span>
                <span className="text-lg sm:text-xl text-blue-500 group-hover:text-blue-600 transition-colors duration-300"> पट</span>
              </div>
              <div className="text-sm sm:text-base text-gray-600 font-bakbak-one group-hover:text-gray-700 transition-colors duration-300">
                प्राथमिक शाळा एकूण
              </div>
            </div>
          </div>

          <div className="group relative bg-white rounded-xl shadow-lg p-4 sm:p-6 text-center hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 overflow-hidden">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Floating particles */}
            <div className="absolute top-2 right-2 w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 transform group-hover:scale-150"></div>
            <div className="absolute bottom-4 left-3 w-1 h-1 bg-green-300 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200 transform group-hover:scale-200"></div>
            
            {/* Counter with animation */}
            <div className="relative z-10">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-600 mb-2 transition-all duration-500 group-hover:text-green-700 group-hover:scale-110">
                <span className="inline-block transition-all duration-300 group-hover:animate-pulse">
                  {counters.vastiSchool}
                </span>
                <span className="text-lg sm:text-xl text-green-500 group-hover:text-green-600 transition-colors duration-300"> पट</span>
              </div>
              <div className="text-sm sm:text-base text-gray-600 font-bakbak-one group-hover:text-gray-700 transition-colors duration-300">
                वस्ती शाळा एकूण
              </div>
            </div>
          </div>

          <div className="group relative bg-white rounded-xl shadow-lg p-4 sm:p-6 text-center hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 overflow-hidden">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Floating particles */}
            <div className="absolute top-2 right-2 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 transform group-hover:scale-150"></div>
            <div className="absolute bottom-4 left-3 w-1 h-1 bg-purple-300 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200 transform group-hover:scale-200"></div>
            
            {/* Counter with animation */}
            <div className="relative z-10">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-600 mb-2 transition-all duration-500 group-hover:text-purple-700 group-hover:scale-110">
                <span className="inline-block transition-all duration-300 group-hover:animate-pulse">
                  {counters.highSchool}
                </span>
                <span className="text-lg sm:text-xl text-purple-500 group-hover:text-purple-600 transition-colors duration-300"> पट</span>
              </div>
              <div className="text-sm sm:text-base text-gray-600 font-bakbak-one group-hover:text-gray-700 transition-colors duration-300">
                हायस्कूल एकूण
              </div>
            </div>
          </div>
        </div>

        {/* Educational Facilities Initiatives */}
        <div className="max-w-4xl mx-auto animate-fade-in-up delay-400">
          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 font-yatra-one" style={{color: '#1e40af'}}>
              शैक्षणिक सुविधा उपक्रम
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-sm sm:text-base text-gray-700 font-bakbak-one leading-relaxed">
                  डिजिटल क्लासरूमची स्थापना
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-sm sm:text-base text-gray-700 font-bakbak-one leading-relaxed">
                  व्यावसायिक प्रशिक्षण केंद्र उघडणे
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-sm sm:text-base text-gray-700 font-bakbak-one leading-relaxed">
                  विद्यार्थ्यांसाठी मार्गदर्शन केंद्र
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-sm sm:text-base text-gray-700 font-bakbak-one leading-relaxed">
                  शैक्षणिक सहलींचे आयोजन
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-sm sm:text-base text-gray-700 font-bakbak-one leading-relaxed">
                  वाचनालय व संशोधन केंद्र
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-sm sm:text-base text-gray-700 font-bakbak-one leading-relaxed">
                  विशेष गरजा असलेल्या मुलांसाठी सुविधा
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-sm sm:text-base text-gray-700 font-bakbak-one leading-relaxed">
                  शिक्षकांसाठी आधुनिक प्रशिक्षण
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Photos Section */}
        <div className="mt-12 animate-fade-in-up delay-500">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 font-yatra-one" style={{color: '#1e40af'}}>
            क्षणचित्रे
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Image
                src="/images/home/balvadi.png"
                alt="अंगणवाडी"
                width={300}
                height={200}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-white font-bold text-sm font-bakbak-one">अंगणवाडी</h4>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Image
                src="/images/home/prathmikshala-sanvantpur.png"
                alt="प्राथमिक शाळा"
                width={300}
                height={200}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-white font-bold text-sm font-bakbak-one">प्राथमिक शाळा</h4>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Image
                src="/images/home/zp-school2.png"
                alt="वस्ती शाळा"
                width={300}
                height={200}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-white font-bold text-sm font-bakbak-one">वस्ती शाळा</h4>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Image
                src="/images/home/highschool.png"
                alt="हायस्कूल"
                width={300}
                height={200}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-white font-bold text-sm font-bakbak-one">हायस्कूल</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ShikshanSuvidhaCards;