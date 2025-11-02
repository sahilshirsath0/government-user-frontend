"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { initMobileAnimations } from '../../utils/animations';

const VijVyavasthapanCards = () => {
  const [counters, setCounters] = useState({
    solarPanels: 0,
    ledLights: 0,
    biogasPlants: 0,
    powerSupply: 0
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
      solarPanels: 50,
      ledLights: 120,
      biogasPlants: 8,
      powerSupply: 100
    };

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounters({
        solarPanels: Math.floor(targets.solarPanels * progress),
        ledLights: Math.floor(targets.ledLights * progress),
        biogasPlants: Math.floor(targets.biogasPlants * progress),
        powerSupply: Math.floor(targets.powerSupply * progress)
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
          alt="वीज व्यवस्थापन - येतगाव ग्रामपंचायत"
          fill
          className="object-cover object-center z-0"
          priority
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-4 z-10">
          {/* Main Title */}
          <h1 className="text-yellow-400 text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-yatra-one font-bold mb-2 leading-tight typing-animation">
            वीज व्यवस्थापन
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
            गावात विजेच्या पुरवठ्याची कार्यक्षम व्यवस्था केली गेली आहे. सर्व घरांमध्ये विजेची सोय उपलब्ध करून देण्यात आली आहे. ग्रामीण विद्युतीकरण योजनेअंतर्गत नवीन कनेक्शन देण्यात आले आहेत. सोलर एनर्जीचा वापर करून वैकल्पिक ऊर्जा निर्मिती केली जाते. गल्ल्यांमध्ये आणि सार्वजनिक ठिकाणी सोलर स्ट्रीट लाईट लावण्यात आल्या आहेत. कृषी कामांसाठी विजेची पुरेशी सोय उपलब्ध आहे. वीज वाचवण्यासाठी नियमित जागरूकता कार्यक्रम आयोजित केले जातात. वीज तोटा कमी करण्यासाठी तांत्रिक सुधारणा केल्या गेल्या आहेत. यामुळे गावात २४ तास विजेचा पुरवठा सुनिश्चित झाला आहे.
          </p>
        </div>

        {/* Statistics Cards */}
        <div id="stats-section" className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8 animate-fade-in-up delay-200">
          <div className="group relative bg-white rounded-xl shadow-lg p-4 sm:p-6 text-center hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 overflow-hidden">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-yellow-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Floating particles */}
            <div className="absolute top-2 right-2 w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 transform group-hover:scale-150"></div>
            <div className="absolute bottom-4 left-3 w-1 h-1 bg-yellow-300 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200 transform group-hover:scale-200"></div>
            
            {/* Counter with animation */}
            <div className="relative z-10">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-600 mb-2 transition-all duration-500 group-hover:text-yellow-700 group-hover:scale-110">
                <span className="inline-block transition-all duration-300 group-hover:animate-pulse">
                  {counters.solarPanels}
                </span>
                <span className="text-lg sm:text-xl text-yellow-500 group-hover:text-yellow-600 transition-colors duration-300">+</span>
              </div>
              <div className="text-sm sm:text-base text-gray-600 font-bakbak-one group-hover:text-gray-700 transition-colors duration-300">
                सोलर पॅनल
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
                  {counters.ledLights}
                </span>
                <span className="text-lg sm:text-xl text-blue-500 group-hover:text-blue-600 transition-colors duration-300">+</span>
              </div>
              <div className="text-sm sm:text-base text-gray-600 font-bakbak-one group-hover:text-gray-700 transition-colors duration-300">
                एल.इ.डी. पथदिवे
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
                  {counters.biogasPlants}
                </span>
                <span className="text-lg sm:text-xl text-green-500 group-hover:text-green-600 transition-colors duration-300">+</span>
              </div>
              <div className="text-sm sm:text-base text-gray-600 font-bakbak-one group-hover:text-gray-700 transition-colors duration-300">
                बायोगॅस सयंत्र
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
                  {counters.powerSupply}
                </span>
                <span className="text-lg sm:text-xl text-purple-500 group-hover:text-purple-600 transition-colors duration-300">%</span>
              </div>
              <div className="text-sm sm:text-base text-gray-600 font-bakbak-one group-hover:text-gray-700 transition-colors duration-300">
                वीज पुरवठा
              </div>
            </div>
          </div>
        </div>

        {/* Power Management Initiatives */}
        <div className="max-w-4xl mx-auto animate-fade-in-up delay-400">
          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 font-yatra-one" style={{color: '#1e40af'}}>
              वीज व्यवस्थापन उपक्रम
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-sm sm:text-base text-gray-700 font-bakbak-one leading-relaxed">
                  सोलर पॅनेल्सची स्थापना व प्रोत्साहन
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-sm sm:text-base text-gray-700 font-bakbak-one leading-relaxed">
                  वीज बिल भरण्यासाठी ऑनलाइन सुविधा
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-sm sm:text-base text-gray-700 font-bakbak-one leading-relaxed">
                  उर्जा कार्यक्षम उपकरणांसाठी सबसिडी
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-sm sm:text-base text-gray-700 font-bakbak-one leading-relaxed">
                  ग्रामीण भागात वीज कोस्टण कमी करणे
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-sm sm:text-base text-gray-700 font-bakbak-one leading-relaxed">
                  वीज पुरवठ्याची गुणवत्ता सुधारणे
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-sm sm:text-base text-gray-700 font-bakbak-one leading-relaxed">
                  स्ट्रीट लाइटसाठी स्मार्ट प्रणाली
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-sm sm:text-base text-gray-700 font-bakbak-one leading-relaxed">
                  वीज उत्पादनासाठी बायोगॅस प्लांट
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
                // src="/images/smart-village/solar-panel.jpg"
                alt="सोलर पॅनल"
                width={300}
                height={200}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-white font-bold text-sm font-bakbak-one">सोलर पॅनल</h4>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Image
                src="/images/smart-village/led-street-light.jpg"
                alt="एल.इ.डी. पथदिवे"
                width={300}
                height={200}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-white font-bold text-sm font-bakbak-one">एल.इ.डी. पथदिवे</h4>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Image
                src="/images/smart-village/biogas2.jpg"
                alt="बायोगॅस सयंत्र"
                width={300}
                height={200}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-white font-bold text-sm font-bakbak-one">बायोगॅस सयंत्र</h4>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Image
                src="/images/electricity2.jpg"
                alt="वीज पुरवठा"
                width={300}
                height={200}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-white font-bold text-sm font-bakbak-one">वीज पुरवठा</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default VijVyavasthapanCards;