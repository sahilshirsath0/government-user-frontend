"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { initMobileAnimations } from '../../utils/animations';

const JalVyavasthapanCards = () => {
  const [counters, setCounters] = useState({
    waterTanks: 0,
    borewells: 0,
    waterWells: 0,
    tapConnections: 0
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
      waterTanks: 25,
      borewells: 15,
      waterWells: 8,
      tapConnections: 100
    };

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounters({
        waterTanks: Math.floor(targets.waterTanks * progress),
        borewells: Math.floor(targets.borewells * progress),
        waterWells: Math.floor(targets.waterWells * progress),
        tapConnections: Math.floor(targets.tapConnections * progress)
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
          alt="जल व्यवस्थापन - येतगाव ग्रामपंचायत"
          fill
          className="object-cover object-center z-0"
          priority
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-4 z-10">
          {/* Main Title */}
          <h1 className="text-yellow-400 text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-yatra-one font-bold mb-2 leading-tight typing-animation">
            जल व्यवस्थापन
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
            येतगाव ग्रामपंचायतीने गावातील पाणीपुरवठा व्यवस्था सुधारण्यासाठी विविध उपक्रम राबविले आहेत. गावात पिण्याच्या स्वच्छ पाण्याची निर्बाध पुरवठा व्यवस्था उपलब्ध आहे. नळजोड योजनेद्वारे प्रत्येक घरात शुद्ध पाणी पोहोचविण्यात आले आहे. पावसाचे पाणी संठवण्यासाठी गावात विविध ठिकाणी पाण्याच्या टॅंकांची निर्मिती करण्यात आली आहे. विहिरी, नद्या, तलाव यांची नियमित दुरुस्ती व देखभाल केली जाते. पाणी वाचवण्यासाठी जनजागृती कार्यक्रम आयोजित केले जातात. कृषी कामांसाठी सिंचन सुविधेचा विस्तार करण्यात आला आहे. गावात पाणी गुणवत्ता तपासणीची सोय उपलब्ध आहे. यामुळे गावात पाणीटंचाईची समस्या दूर झाली आहे.
          </p>
        </div>

        {/* Statistics Cards */}
        <div id="stats-section" className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8 animate-fade-in-up delay-200">
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
                  {counters.waterTanks}
                </span>
                <span className="text-lg sm:text-xl text-blue-500 group-hover:text-blue-600 transition-colors duration-300">+</span>
              </div>
              <div className="text-sm sm:text-base text-gray-600 font-bakbak-one group-hover:text-gray-700 transition-colors duration-300">
                पाण्याच्या टाक्या
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
                  {counters.borewells}
                </span>
                <span className="text-lg sm:text-xl text-green-500 group-hover:text-green-600 transition-colors duration-300">+</span>
              </div>
              <div className="text-sm sm:text-base text-gray-600 font-bakbak-one group-hover:text-gray-700 transition-colors duration-300">
                बोअरवेल
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
                  {counters.waterWells}
                </span>
                <span className="text-lg sm:text-xl text-purple-500 group-hover:text-purple-600 transition-colors duration-300">+</span>
              </div>
              <div className="text-sm sm:text-base text-gray-600 font-bakbak-one group-hover:text-gray-700 transition-colors duration-300">
                पाणीपुरवठा विहीर
              </div>
            </div>
          </div>

          <div className="group relative bg-white rounded-xl shadow-lg p-4 sm:p-6 text-center hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 overflow-hidden">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Floating particles */}
            <div className="absolute top-2 right-2 w-2 h-2 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 transform group-hover:scale-150"></div>
            <div className="absolute bottom-4 left-3 w-1 h-1 bg-orange-300 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200 transform group-hover:scale-200"></div>
            
            {/* Counter with animation */}
            <div className="relative z-10">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-600 mb-2 transition-all duration-500 group-hover:text-orange-700 group-hover:scale-110">
                <span className="inline-block transition-all duration-300 group-hover:animate-pulse">
                  {counters.tapConnections}
                </span>
                <span className="text-lg sm:text-xl text-orange-500 group-hover:text-orange-600 transition-colors duration-300">%</span>
              </div>
              <div className="text-sm sm:text-base text-gray-600 font-bakbak-one group-hover:text-gray-700 transition-colors duration-300">
                एकूण नळ जोडणी
              </div>
            </div>
          </div>
        </div>

        {/* Water Management Initiatives */}
        <div className="max-w-4xl mx-auto animate-fade-in-up delay-400">
          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 font-yatra-one" style={{color: '#1e40af'}}>
              जल व्यवस्थापन उपक्रम
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-sm sm:text-base text-gray-700 font-bakbak-one leading-relaxed">
                  भूगर्भातील पाण्याच्या पातळीत सुधारणा करणे
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-sm sm:text-base text-gray-700 font-bakbak-one leading-relaxed">
                  पाण्याची गुणवत्ता तपासणीसाठी प्रयोगशाळा स्थापन
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-sm sm:text-base text-gray-700 font-bakbak-one leading-relaxed">
                  सिंचनासाठी ड्रिप इरिगेशन प्रणालीचा प्रसार
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-sm sm:text-base text-gray-700 font-bakbak-one leading-relaxed">
                  पाण्याच्या वापराचे डिजिटल मॉनिटरिंग सिस्टीम
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-sm sm:text-base text-gray-700 font-bakbak-one leading-relaxed">
                  पावसाचे पाणी संठवण्यासाठी घरघरात ढाला बांधकाम
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-sm sm:text-base text-gray-700 font-bakbak-one leading-relaxed">
                  जलसंधारण प्रकल्पांसाठी सामुदायिक सहभाग
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-sm sm:text-base text-gray-700 font-bakbak-one leading-relaxed">
                  पाणी टंचाईच्या समस्येवर उपाययोजना
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
                src="/images/smart-village/pani-taki.jpg"
                alt="पाण्याची टाकी"
                width={300}
                height={200}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-white font-bold text-sm font-bakbak-one">पाण्याची टाकी</h4>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Image
                src="/images/pani-suvidha.jpg"
                alt="बोअरवेल"
                width={300}
                height={200}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-white font-bold text-sm font-bakbak-one">बोअरवेल</h4>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Image
                src="/images/smart-village/vihir.jpg"
                alt="पाणीपुरवठा विहीर"
                width={300}
                height={200}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-white font-bold text-sm font-bakbak-one">पाणीपुरवठा विहीर</h4>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Image
                src="/images/pipeline2.jpg"
                alt="नळ जोडणी"
                width={300}
                height={200}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-white font-bold text-sm font-bakbak-one">नळ जोडणी</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default JalVyavasthapanCards;