"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Droplet, Zap, BookOpen, Shield, Heart, Wrench, Users, Leaf, Settings } from 'lucide-react';
import { initMobileAnimations } from '../utils/animations';

const SmartVillageCard = ({ title, description, icon: Icon, gradient, link, iconColor }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={link}
      className="block h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative h-full rounded-2xl p-3 sm:p-4 lg:p-6 transition-all duration-500 transform ${
          isHovered ? 'shadow-2xl scale-105 -translate-y-2' : 'shadow-lg scale-100 translate-y-0'
        } ${gradient} overflow-hidden cursor-pointer`}
        style={{
          minHeight: '180px'
        }}
      >
        {/* Animated background overlay */}
        <div
          className={`absolute inset-0 bg-white transition-all duration-500 ${
            isHovered ? 'opacity-15' : 'opacity-0'
          }`}
        />
        
        {/* Animated decorative circle */}
        <div
          className={`absolute -right-8 -top-8 w-32 h-32 bg-white rounded-full transition-all duration-500 ${
            isHovered ? 'opacity-25 scale-110' : 'opacity-10 scale-100'
          }`}
        />
        
        {/* Additional floating elements */}
        <div
          className={`absolute -left-4 -bottom-4 w-20 h-20 bg-white rounded-full transition-all duration-700 ${
            isHovered ? 'opacity-20 scale-125' : 'opacity-5 scale-100'
          }`}
        />
        
        {/* Top right corner accent */}
        <div
          className={`absolute top-4 right-4 w-8 h-8 bg-white rounded-full transition-all duration-400 ${
            isHovered ? 'opacity-30 scale-150' : 'opacity-0 scale-100'
          }`}
        />
        
        <div className="relative z-10">
          {/* Icon with animation */}
          <div className="mb-2 sm:mb-3 lg:mb-4">
            <div className={`bg-white bg-opacity-20 rounded-lg p-2 sm:p-3 lg:p-4 inline-block shadow-lg transition-all duration-500 transform ${
              isHovered ? 'bg-opacity-35 scale-110 rotate-3' : 'scale-100 rotate-0'
            }`}>
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center">
                {Icon && <Icon className={`w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 ${iconColor} drop-shadow-lg transition-all duration-500 transform ${
                  isHovered ? 'scale-125 rotate-6' : 'scale-100 rotate-0'
                }`} strokeWidth={2.5} />}
              </div>
            </div>
          </div>
          
          {/* Title */}
          <h3 className={`text-sm sm:text-lg lg:text-2xl font-bold text-white mb-2 sm:mb-3 transition-all duration-500 transform ${
            isHovered ? 'scale-105 translate-x-2' : 'scale-100 translate-x-0'
          }`}>
            {title}
          </h3>
          
          {/* Description */}
          <p className={`text-white text-opacity-95 leading-relaxed text-xs sm:text-sm lg:text-base transition-all duration-500 transform ${
            isHovered ? 'translate-x-1 opacity-100' : 'translate-x-0 opacity-90'
          }`}>
            {description}
          </p>
          
          {/* Hover indicator */}
          <div
            className={`mt-2 sm:mt-3 lg:mt-4 flex items-center text-white font-semibold transition-all duration-500 transform ${
              isHovered ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-95'
            }`}
          >
            <span className="text-xs sm:text-sm transition-all duration-300">अधिक जाणून घ्या</span>
            <svg
              className={`w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 ml-1 sm:ml-2 transition-all duration-500 transform ${
                isHovered ? 'translate-x-1 scale-110' : 'translate-x-0 scale-100'
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </a>
  );
};

const SmartVillageCards = () => {
  useEffect(() => {
    // Initialize mobile animations
    const cleanup = initMobileAnimations();
    return cleanup;
  }, []);

  const smartVillageServices = [
    {
      title: 'जल व्यवस्थापन',
      description: 'गावातील पिण्याच्या पाण्याची गुणवत्ता, पुरवठा व संवर्धन यावर लक्ष केंद्रित करणारी समिती.',
      icon: Droplet,
      gradient: 'bg-gradient-to-br from-blue-500 to-blue-700',
      iconColor: 'text-blue-500',
      link: '/smart-village/jal-vyavasthapan'
    },
    {
      title: 'वीज व्यवस्थापन',
      description: 'ग्रामीण विद्युतीकरण, ऊर्जा संवर्धन व नवीनकरणीय ऊर्जा स्रोतांसाठी कार्यरत असलेली समिती.',
      icon: Zap,
      gradient: 'bg-gradient-to-br from-yellow-500 to-orange-600',
      iconColor: 'text-yellow-500',
      link: '/smart-village/vij-vyavasthapan'
    },
    {
      title: 'शैक्षणिक सुविधा',
      description: 'गावातील शिक्षणाची गुणवत्ता, शैक्षणिक सुविधा व कौशल्य विकास कार्यक्रमांसाठी समर्पित समिती.',
      icon: BookOpen,
      gradient: 'bg-gradient-to-br from-green-500 to-green-700',
      iconColor: 'text-green-500',
      link: '/smart-village/shikshan-suvidha'
    },
    {
      title: 'स्वच्छता',
      description: 'गाव स्वच्छता, कचरा व्यवस्थापन व सार्वजनिक आरोग्य संवर्धनासाठी कार्यरत असलेली समिती.',
      icon: Shield,
      gradient: 'bg-gradient-to-br from-teal-500 to-cyan-600',
      iconColor: 'text-teal-500',
      link: '/smart-village/swachhata'
    },
    {
      title: 'आरोग्य',
      description: 'प्राथमिक आरोग्य सेवा, आरोग्य जागरूकता व निवारणात्मक आरोग्यकार्यक्रमांसाठी समर्पित समिती.',
      icon: Heart,
      gradient: 'bg-gradient-to-br from-red-500 to-pink-600',
      iconColor: 'text-red-500',
      link: '/smart-village/arogya'
    },
    {
      title: 'पायाभूत सुविधा',
      description: 'गावातील रस्ते, वाहतूक, संप्रेषण व इतर मूलभूत सुविधांच्या विकासासाठी कार्यरत समिती.',
      icon: Wrench,
      gradient: 'bg-gradient-to-br from-purple-500 to-purple-700',
      iconColor: 'text-purple-500',
      link: '/smart-village/payabhoot-suvidha'
    },
    {
      title: 'ग्रामरक्षण',
      description: 'गावाची सुरक्षा, आपत्कालीन व्यवस्थापन व सामुदायिक पोलिसिंगसाठी समर्पित समिती.',
      icon: Users,
      gradient: 'bg-gradient-to-br from-indigo-500 to-indigo-700',
      iconColor: 'text-indigo-500',
      link: '/smart-village/gramrakshan'
    },
    {
      title: 'पर्यावरण संवर्धन',
      description: 'पर्यावरण संरक्षण, हरित आच्छादन व जैवविविधता संवर्धनासाठी कार्यरत असलेली समिती.',
      icon: Leaf,
      gradient: 'bg-gradient-to-br from-emerald-500 to-green-600',
      iconColor: 'text-emerald-500',
      link: '/smart-village/paryavaran-sanvardhan'
    },
    {
      title: 'प्रशासन/ई-प्रशासन/लोकसहभाग',
      description: 'पारदर्शक प्रशासन, डिजिटल सेवा व सहभागी शासन व्यवस्थेसाठी समर्पित समिती.',
      icon: Settings,
      gradient: 'bg-gradient-to-br from-gray-600 to-gray-800',
      iconColor: 'text-gray-600',
      link: '/smart-village/prashasan-e-prashasan'
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Banner Section */}
      <section className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center text-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/vecteezy_irrigation-canal-with-flowing-water-in-rural-landscape_70867349.png"
          alt="Smart Village Yetgaon - Modern Rural Development"
          fill
          className="object-cover object-center z-0"
          priority
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-4 z-10">
          {/* Main Title */}
          <h1 className="text-yellow-400 text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-yatra-one font-bold mb-2 leading-tight typing-animation">
            स्मार्ट ग्राम येतगाव
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-white text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bakbak-one font-bold mb-6 leading-tight typing-animation-subtitle">
            आधुनिक तंत्रज्ञानाचे आदर्श गाव
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
            आधुनिक तंत्रज्ञान, पारदर्शक प्रशासन आणि शाश्वत विकास यांचे एक आदर्श उदाहरण. स्वच्छता, शिक्षण, आरोग्य आणि डिजिटल सेवांद्वारे येतगाव गाव प्रगत व सशक्त ग्रामपंचायतीचे दर्शन घडवते. स्मार्ट योजनांमुळे ग्रामीण विकासाचे नवे मानदंड स्थापित करणारे हे गाव समृद्ध आणि पर्यावरणपूरक भविष्यासाठी सतत प्रयत्नशील आहे.
          </p>
          <p className="text-sm xs:text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed font-bakbak-one px-2 mt-4">
            येतगावमध्ये डिजिटल सुविधांपासून ते हरित ऊर्जेपर्यंत सर्व क्षेत्रांत समन्वयित विकास साधला जात आहे. ग्रामस्थांच्या सहभागाने चाललेले हे स्मार्ट ग्राम प्रकल्प इतर ग्रामपंचायतीसाठी प्रेरणादायी ठरत आहेत. तंत्रज्ञानाचा सुयोग्य वापर करून परंपरा जपत विकासाचा नवा मार्ग दाखविणारे येतगाव गाव भविष्यातील स्मार्ट भारताचे ज्वलंत प्रतीक बनले आहे.
          </p>
        </div>

        {/* Cards Grid - 2 cards per row for xs to md, 3 cards for md and above */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {smartVillageServices.map((service, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{
                animationDelay: `${index * 100 + 400}ms`,
                animationFillMode: 'both'
              }}
            >
              <SmartVillageCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                gradient={service.gradient}
                iconColor={service.iconColor}
                link={service.link}
              />
            </div>
          ))}
        </div>
      </div>
      </main>
    );
};

export default SmartVillageCards;