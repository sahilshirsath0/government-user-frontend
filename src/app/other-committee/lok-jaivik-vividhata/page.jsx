"use client";

import React from 'react';
import Image from 'next/image';

const LokJaivikVividhataPage = () => { 
  const members = [
    { id: 1, name: 'सुभाष वसंत उथळे', position: 'अध्यक्ष', mobile: 'कार्यालय संपर्क' },
    { id: 2, name: 'मनिषा संतोष सावंत', position: 'सचिव', mobile: 'कार्यालय संपर्क' },
    { id: 3, name: 'संगीता दिलीप जरग', position: 'सदस्य', mobile: 'कार्यालय संपर्क' },
    { id: 4, name: 'लतिका अशोक रसाळ', position: 'सदस्य', mobile: 'कार्यालय संपर्क' },
    { id: 5, name: 'ईश्वर विठोबा कणसे', position: 'सदस्य', mobile: 'कार्यालय संपर्क' },
    { id: 6, name: 'रामचंद्र नारायण कणसे', position: 'सदस्य', mobile: 'कार्यालय संपर्क' },
    { id: 7, name: 'शामराव एकनाथ पवार', position: 'सदस्य', mobile: 'कार्यालय संपर्क' }
  ];

  const adhyaksh = members.find(member => member.position === 'अध्यक्ष');
  const sachiv = members.find(member => member.position === 'सचिव');
  const otherMembers = members.filter(member => member.position === 'सदस्य');

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Banner Section */}
      <section className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center text-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/vecteezy_irrigation-canal-with-flowing-water-in-rural-landscape_70867349.png"
          alt="Rural agricultural setting for Lok Jaivik Vividhata Committee"
          fill
          className="object-cover object-center z-0"
          priority
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-4 z-10">
          {/* Main Title */}
          <h1 className="text-yellow-400 text-2xl xs:text-3xl sm:text-5xl lg:text-7xl font-yatra-one font-bold mb-2 leading-tight typing-animation">
            लोक जैविक विविधता समिती
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
            लोक जैविक विविधता समिती ही समिती गावातील नैसर्गिक संपदेचे संवर्धन करते. स्थानिक वनस्पती आणि प्राण्यांच्या जाती जपण्याचे काम करते. जैविक शेतीस प्रोत्साहन देते. लोकांना पर्यावरण संवर्धनासाठी जागरूक करते. गावात हरित आच्छादन वाढविण्यासाठी झाडाझडप करते. जैवविविधतेचे महत्त्व समजावून सांगते. पारंपरिक बियाणे व कृषि पद्धती जपण्यास प्रोत्साहन देते. यामुळे गावाचे नैसर्गिक पर्यावरण सुरक्षित राहिले आहे.
          </p>
        </div>

        {/* Leadership Cards - 2 Card Layout */}
        <div className="mb-8 sm:mb-10 lg:mb-12 animate-slide-in-left delay-200">
          {/* Leadership Cards Row */}
          <div className="flex flex-row justify-center items-center gap-4 sm:gap-6 lg:gap-8 mb-4 sm:mb-6">
            {adhyaksh && (
              <div className="w-1/2 sm:w-1/2 lg:w-1/3 bg-white rounded-xl shadow-lg overflow-hidden text-center p-4 sm:p-6 border-t-4 border-green-600 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 transform">
                <div className="bg-gradient-to-br from-green-600 to-green-800 text-white p-4 rounded-lg mb-4">
                  <div className="text-lg xs:text-xl sm:text-2xl font-bold mb-2 font-yatra-one">{adhyaksh.name}</div>
                  <div className="text-green-100 text-base xs:text-lg sm:text-xl font-semibold">{adhyaksh.position}</div>
                </div>
                <div className="text-gray-700 text-sm xs:text-base sm:text-lg font-bakbak-one">
                  <span className="font-semibold">संपर्क:</span> {adhyaksh.mobile}
                </div>
              </div>
            )}
            
            {sachiv && (
              <div className="w-1/2 sm:w-1/2 lg:w-1/3 bg-white rounded-xl shadow-lg overflow-hidden text-center p-4 sm:p-6 border-t-4 border-emerald-600 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 transform">
                <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 text-white p-4 rounded-lg mb-4">
                  <div className="text-lg xs:text-xl sm:text-2xl font-bold mb-2 font-yatra-one">{sachiv.name}</div>
                  <div className="text-emerald-100 text-base xs:text-lg sm:text-xl font-semibold">{sachiv.position}</div>
                </div>
                <div className="text-gray-700 text-sm xs:text-base sm:text-lg font-bakbak-one">
                  <span className="font-semibold">संपर्क:</span> {sachiv.mobile}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Members Table */}
        <div className="max-w-4xl mx-auto animate-fade-in-up delay-400">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
          {/* Table Header - Green Theme */}
          <div className="bg-gradient-to-r from-green-600 to-green-800 text-white p-3 sm:p-4">
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
                } hover:bg-green-50 hover:shadow-md hover:scale-[1.01] transition-all duration-300 transform`}
              >
                <div className="text-center text-xs xs:text-sm sm:text-base text-gray-600 font-semibold">
                  {member.id}
                </div>
                <div className="text-xs xs:text-sm sm:text-base text-gray-800 font-bakbak-one text-left">
                  {member.name}
                </div>
                <div className="text-xs xs:text-sm sm:text-base text-green-600 font-bakbak-one text-center font-medium">
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

export default LokJaivikVividhataPage;