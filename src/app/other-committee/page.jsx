"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Users, Shield, Target, Building2, Scale, Baby, Droplet, Leaf } from 'lucide-react';
import { initMobileAnimations } from '../utils/animations';

const CommitteeCard = ({ title, description, icon: Icon, gradient, link, iconColor }) => {
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

const CommitteeCards = () => {
  useEffect(() => {
    // Initialize mobile animations
    const cleanup = initMobileAnimations();
    return cleanup;
  }, []);

  const committees = [
    {
      title: 'समृद्ध पंचायतराज अभियान समिती',
      description: 'ग्रामपंचायत विकास व सशक्तीकरणासाठी समृद्ध पंचायतराज अभियानाचे नियोजन व अंमलबजावणी करणारी समिती.',
      icon: Building2,
      gradient: 'bg-gradient-to-br from-purple-600 to-purple-800',
      iconColor: 'text-purple-600',
      link: '/other-committee/samriddha-panchayatraaj'
    },
    {
      title: 'नारी आदिशक्ती समिती',
      description: 'महिला सक्षमीकरण, आर्थिक स्वावलंबन व सामाजिक सुरक्षेसाठी कार्यरत असलेली महत्त्वाची समिती.',
      icon: Users,
      gradient: 'bg-gradient-to-br from-pink-500 to-pink-700',
      iconColor: 'text-pink-500',
      link: '/other-committee/nari-adishakti'
    },
    {
      title: 'ग्राम दक्षता समिती',
      description: 'गावाच्या कौशल्य विकास, प्रशिक्षण कार्यक्रम व रोजगार निर्मितीसाठी प्रभावी भूमिका बजावणारी समिती.',
      icon: Target,
      gradient: 'bg-gradient-to-br from-blue-500 to-blue-700',
      iconColor: 'text-blue-500',
      link: '/other-committee/gram-dakshata'
    },
    {
      title: 'ग्राम सुरक्षा दल समिती',
      description: 'गावातील सुरक्षा, शांतता व नागरिकांच्या संरक्षणासाठी कार्यरत असलेली सुरक्षा समिती.',
      icon: Shield,
      gradient: 'bg-gradient-to-br from-red-500 to-red-700',
      iconColor: 'text-red-500',
      link: '/other-committee/gram-suraksha-dal'
    },
    {
      title: 'तंटामुक्त समिती',
      description: 'ग्रामीण भागातील वादविवाद निराकरण व न्यायिक प्रक्रियेसाठी शांततापूर्ण उपाय शोधणारी समिती.',
      icon: Scale,
      gradient: 'bg-gradient-to-br from-orange-500 to-orange-700',
      iconColor: 'text-orange-500',
      link: '/other-committee/tantamukt'
    },
    {
      title: 'ग्राम बाल संरक्षक समिती',
      description: 'मुलांचे हक्क, शिक्षण, आरोग्य व संपूर्ण विकासासाठी समर्पित असलेली बालकल्याण समिती.',
      icon: Baby,
      gradient: 'bg-gradient-to-br from-teal-500 to-teal-700',
      iconColor: 'text-teal-500',
      link: '/other-committee/gram-bal-sanrakshak'
    },
    {
      title: 'ग्रामपोषण स्वच्छता व पाणीपुरवठा समिती',
      description: 'पोषणयुक्त आहार, स्वच्छता अभियान व शुद्ध पाणी पुरवठ्यासाठी महत्त्वपूर्ण कार्य करणारी समिती.',
      icon: Droplet,
      gradient: 'bg-gradient-to-br from-cyan-500 to-cyan-700',
      iconColor: 'text-cyan-500',
      link: '/other-committee/gramposhan-swachhata-pani'
    },
    {
      title: 'लोक जैविक विविधता समिती',
      description: 'पर्यावरण संरक्षण, जैवविविधता संवर्धन व शाश्वत विकासासाठी प्रयत्नशील असलेली समिती.',
      icon: Leaf,
      gradient: 'bg-gradient-to-br from-green-500 to-green-700',
      iconColor: 'text-green-500',
      link: '/other-committee/lok-jaivik-vividhata'
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Banner Section */}
      <section className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center text-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/vecteezy_irrigation-canal-with-flowing-water-in-rural-landscape_70867349.png"
          alt="Rural agricultural setting for Gram Panchayat Committees"
          fill
          className="object-cover object-center z-0"
          priority
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-4 z-10">
          {/* Main Title */}
          <h1 className="text-yellow-400 text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-yatra-one font-bold mb-2 leading-tight typing-animation">
            ग्रामपंचायत येतगाव सर्व समिती
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
            गावाच्या प्रगतीसाठी समर्पित असलेल्या विविध समित्या ग्रामीण विकासाच्या महत्त्वाच्या क्षेत्रांत कार्यरत आहेत. शिक्षण, आरोग्य, स्वच्छता, पाणीपुरवठा, महिला व बालकल्याण, कृषी विकास आणि सामाजिक कल्याण या क्षेत्रांत त्यांचे योगदान सतत चालू आहे. येतगाव ग्रामपंचायतीच्या या समित्या पारदर्शकता, एकता आणि जनतेशी जवळीक राखून, गावकऱ्यांच्या आकांक्षा पूर्ण करण्यासाठी समर्पितपणे काम करत आहेत.
          </p>
        </div>

        {/* Cards Grid - 2 cards per row for xs to md, 3 cards for md and above */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {committees.map((committee, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{
                animationDelay: `${index * 100 + 400}ms`,
                animationFillMode: 'both'
              }}
            >
              <CommitteeCard
                title={committee.title}
                description={committee.description}
                icon={committee.icon}
                gradient={committee.gradient}
                iconColor={committee.iconColor}
                link={committee.link}
              />
            </div>
          ))}
        </div>
      </div>
      </main>
    );
};

export default CommitteeCards;