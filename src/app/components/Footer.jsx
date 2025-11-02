"use client";

import { useTranslation } from '../hooks/useTranslation';

export default function Footer() {
  const { t, language } = useTranslation();
  
  return (
    <footer className="bg-[#1a2b5b] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#ffcc00] mb-2 font-yatra-one">
            {t('footerSlogan')}
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-[#ffcc00] mb-4 font-yatra-one">
            {t('panchayatName')}
          </h3>
          <p className="text-white text-center max-w-4xl mx-auto text-base md:text-lg leading-relaxed font-bakbak-one">
            {t('footerDescription')}
          </p>
        </div>

        {/* Three Column Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 px-4 sm:px-8 text-center sm:text-left">
  {/* Column 2: Services */}
  <div className="w-full sm:w-auto">
    <h4 className="text-[#ffcc00] text-lg sm:text-xl font-bold mb-3 sm:mb-4 font-yatra-one">
      {t('services')}
    </h4>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
      <ol className="space-y-2 list-disc list-inside">
        <li className="text-white font-bakbak-one text-sm sm:text-base">{t('cleanlinessWaterSupply')}</li>
        <li className="text-white font-bakbak-one text-sm sm:text-base">{t('villageDevelopmentScheme')}</li>
        <li className="text-white font-bakbak-one text-sm sm:text-base">{t('educationHealth')}</li>
        <li className="text-white font-bakbak-one text-sm sm:text-base">{t('cementRoads')}</li>
      </ol>
      <ol className="space-y-2 list-disc list-inside">
        <li className="text-white font-bakbak-one text-sm sm:text-base">{t('drainageSystem')}</li>
        <li className="text-white font-bakbak-one text-sm sm:text-base">{t('digitalIndiaInitiative')}</li>
        <li className="text-white font-bakbak-one text-sm sm:text-base">{t('cctvCamera')}</li>
        <li className="text-white font-bakbak-one text-sm sm:text-base">{t('waterAtmMachine')}</li>
      </ol>
    </div>
  </div>

  {/* Column 3: Contact */}
  <div className="w-full sm:w-auto mt-6 sm:mt-0">
    <h4 className="text-[#ffcc00] text-lg sm:text-xl font-bold mb-3 sm:mb-4 font-yatra-one">
      {t('contact')}
    </h4>
    <div className="space-y-1 sm:space-y-2">
      <p className="text-white font-bakbak-one text-sm sm:text-base">{t('panchayatName')}</p>
      <p className="text-white font-bakbak-one text-sm sm:text-base">gpsawargavghat171853@gmail.com</p>
      <p className="text-white font-bakbak-one text-sm sm:text-base">7887406359</p>
    </div>
  </div>
</div>


        {/* Separator Line */}
        <div className="border-t border-gray-600 mb-8"></div>

        {/* Government Logos Section */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
          {/* Digital India Logo */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 mb-2 flex items-center justify-center">
              <img 
                src="/images/digital-india.jpg" 
                alt="Digital India Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* 75 Azadi Ka Amrit Mahotsav Logo */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 mb-2 flex items-center justify-center">
              <img 
                src="/images/azadi-ka-amrit-mahotsav.jpg" 
                alt="75 Azadi Ka Amrit Mahotsav Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* MyGov Logo */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 mb-2 flex items-center justify-center">
              <img 
                src="/images/mygov.jpg" 
                alt="MyGov Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Gram Panchayat Logo */}
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 mb-2 flex items-center justify-center">
              <img 
                src="/images/mazi-vasundhara.jpg" 
                alt="Gram Panchayat Yetgaon Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-[#0f1a3d] py-4">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-white text-xs leading-relaxed font-bakbak-one mb-2">
              {t('copyrightText')}
            </p>
            <div className="flex items-center justify-center gap-2 mt-3">
              <span className="text-white text-xs font-bakbak-one">{t('designedBy')}</span>
              <div className="flex items-center gap-2">
                <span className="text-[#ffcc00] text-xs font-bold font-bakbak-one">PRASHANT KHEDKAR</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
