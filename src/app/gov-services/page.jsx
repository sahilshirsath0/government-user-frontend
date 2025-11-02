"use client";

import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useTranslation } from '../hooks/useTranslation';

// Dynamically import ImageZoomViewer to prevent SSR issues
const ImageZoomViewer = dynamic(() => import('../components/ImageZoomViewer'), {
  ssr: false,
  loading: () => {
    const { t } = useTranslation();
    return (
      <div className="flex items-center justify-center h-96 bg-gray-100 rounded-lg">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 font-bakbak-one">{t('imageViewerLoading')}</p>
        </div>
      </div>
    );
  }
});

export default function MapsVillegePage() {
  const { t, language } = useTranslation();
  
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Banner Section */}
      <section className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center text-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/vecteezy_irrigation-canal-with-flowing-water-in-rural-landscape_70867349.png"
          alt={t('govServicesBannerAlt')}
          fill
          className="object-cover object-center z-0"
          priority
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-4 z-10">
          {/* Main Title */}
          <h1 className="text-yellow-400 text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-yatra-one font-bold mb-2 leading-tight typing-animation">
            {t('governmentServices')}
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-white text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bakbak-one font-bold mb-6 leading-tight typing-animation-subtitle">
            {t('panchayatName')}
          </h2>
        </div>
      </section>

      <div id="government-services">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-1 mt-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="w-14 h-[2px] bg-blue-200 rounded-full"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse [animation-delay:200ms]"></span>
          </div>
          <p className="max-w-3xl mx-auto mt-3 text-slate-600 font-bakbak-one text-sm sm:text-base">
            {t('govServicesDescription')}
          </p>
        </div>
        
        <div className=' md:mx-20 mb-4'>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 w-full max-w-full">
            
            {/* Business License */}
            <a href="https://aaplesarkar.mahaonline.gov.in/" target="_blank" rel="noopener noreferrer" className="group relative rounded-xl bg-white border p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 border-blue-400">
              <div className="flex items-start gap-3 sm:gap-4">
                <span className="inline-flex items-center justify-center w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg bg-slate-50 text-slate-800 ring-1 ring-slate-200 group-hover:bg-blue-50 group-hover:text-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-factory w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" aria-hidden="true">
                    <path d="M12 16h.01"></path>
                    <path d="M16 16h.01"></path>
                    <path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"></path>
                    <path d="M8 16h.01"></path>
                  </svg>
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-yatra-one text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-bold text-slate-900 leading-tight">
                    <span className="relative inline-block">
                      {t('businessLicense')}
                      <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-blue-200 group-hover:bg-blue-400 transition-colors"></span>
                    </span>
                  </h3>
                  <p className="mt-1 sm:mt-2 text-slate-600 text-xs xs:text-xs sm:text-sm leading-relaxed font-bakbak-one">
                    {t('businessLicenseDesc')}
                  </p>
                </div>
              </div>
            </a>

            {/* Income Certificate */}
            <a href="https://aaplesarkar.mahaonline.gov.in/" target="_blank" rel="noopener noreferrer" className="group relative rounded-xl bg-white border p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 border-slate-200 hover:border-blue-300">
              <div className="flex items-start gap-3 sm:gap-4">
                <span className="inline-flex items-center justify-center w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg bg-slate-50 text-slate-800 ring-1 ring-slate-200 group-hover:bg-blue-50 group-hover:text-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-check2 lucide-file-check-2 w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" aria-hidden="true">
                    <path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"></path>
                    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                    <path d="m3 15 2 2 4-4"></path>
                  </svg>
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-yatra-one text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-bold text-slate-900 leading-tight">
                    <span className="relative inline-block">
                      {t('incomeCertificate')}
                      <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-blue-200 group-hover:bg-blue-400 transition-colors"></span>
                    </span>
                  </h3>
                  <p className="mt-1 sm:mt-2 text-slate-600 text-xs xs:text-xs sm:text-sm leading-relaxed font-bakbak-one">
                    {t('incomeCertificateDesc')}
                  </p>
                </div>
              </div>
            </a>

            {/* Residence Certificate */}
            <a href="https://aaplesarkar.mahaonline.gov.in/" target="_blank" rel="noopener noreferrer" className="group relative rounded-xl bg-white border p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 border-slate-200 hover:border-blue-300">
              <div className="flex items-start gap-3 sm:gap-4">
                <span className="inline-flex items-center justify-center w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg bg-slate-50 text-slate-800 ring-1 ring-slate-200 group-hover:bg-blue-50 group-hover:text-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-house w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" aria-hidden="true">
                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                    <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  </svg>
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-yatra-one text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-bold text-slate-900 leading-tight">
                    <span className="relative inline-block">
                      {t('residenceCertificate')}
                      <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-blue-200 group-hover:bg-blue-400 transition-colors"></span>
                    </span>
                  </h3>
                  <p className="mt-1 sm:mt-2 text-slate-600 text-xs xs:text-xs sm:text-sm leading-relaxed font-bakbak-one">
                    {t('residenceCertificateDesc')}
                  </p>
                </div>
              </div>
            </a>

            {/* Senior Citizen Certificate */}
            <a href="https://aaplesarkar.mahaonline.gov.in/" target="_blank" rel="noopener noreferrer" className="group relative rounded-xl bg-white border p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 border-slate-200 hover:border-blue-300">
              <div className="flex items-start gap-3 sm:gap-4">
                <span className="inline-flex items-center justify-center w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg bg-slate-50 text-slate-800 ring-1 ring-slate-200 group-hover:bg-blue-50 group-hover:text-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" aria-hidden="true">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                  </svg>
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-yatra-one text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-bold text-slate-900 leading-tight">
                    <span className="relative inline-block">
                      {t('seniorCitizenCertificate')}
                      <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-blue-200 group-hover:bg-blue-400 transition-colors"></span>
                    </span>
                  </h3>
                  <p className="mt-1 sm:mt-2 text-slate-600 text-xs xs:text-xs sm:text-sm leading-relaxed font-bakbak-one">
                    {t('seniorCitizenCertificateDesc')}
                  </p>
                </div>
              </div>
            </a>

            {/* Agriculture Certificate */}
            <a href="https://mahadbt.maharashtra.gov.in/" target="_blank" rel="noopener noreferrer" className="group relative rounded-xl bg-white border p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 border-slate-200 hover:border-blue-300">
              <div className="flex items-start gap-3 sm:gap-4">
                <span className="inline-flex items-center justify-center w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg bg-slate-50 text-slate-800 ring-1 ring-slate-200 group-hover:bg-blue-50 group-hover:text-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sprout w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" aria-hidden="true">
                    <path d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3"></path>
                    <path d="M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4"></path>
                    <path d="M5 21h14"></path>
                  </svg>
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-yatra-one text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-bold text-slate-900 leading-tight">
                    <span className="relative inline-block">
                      {t('agriculturalCertificate')}
                      <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-blue-200 group-hover:bg-blue-400 transition-colors"></span>
                    </span>
                  </h3>
                  <p className="mt-1 sm:mt-2 text-slate-600 text-xs xs:text-xs sm:text-sm leading-relaxed font-bakbak-one">
                    {t('agriculturalCertificateDesc')}
                  </p>
                </div>
              </div>
            </a>

            {/* Landowner Certificate */}
            <a href="https://mahabhulekh.maharashtra.gov.in/" target="_blank" rel="noopener noreferrer" className="group relative rounded-xl bg-white border p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 border-slate-200 hover:border-blue-300">
              <div className="flex items-start gap-3 sm:gap-4">
                <span className="inline-flex items-center justify-center w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg bg-slate-50 text-slate-800 ring-1 ring-slate-200 group-hover:bg-blue-50 group-hover:text-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building2 lucide-building-2 w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" aria-hidden="true">
                    <path d="M10 12h4"></path>
                    <path d="M10 8h4"></path>
                    <path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
                    <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
                    <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
                  </svg>
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-yatra-one text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-bold text-slate-900 leading-tight">
                    <span className="relative inline-block">
                      {t('landownerCertificate')}
                      <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-blue-200 group-hover:bg-blue-400 transition-colors"></span>
                    </span>
                  </h3>
                  <p className="mt-1 sm:mt-2 text-slate-600 text-xs xs:text-xs sm:text-sm leading-relaxed font-bakbak-one">
                    {t('landownerCertificateDesc')}
                  </p>
                </div>
              </div>
            </a>

            {/* Rural Employment */}
            <div className="group relative rounded-xl bg-white border p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 border-slate-200 hover:border-blue-300 cursor-pointer"
                 onClick={() => window.open('https://nrega.nic.in/', '_blank', 'noopener,noreferrer')}>
              <div className="flex items-start gap-3 sm:gap-4">
                <span className="inline-flex items-center justify-center w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg bg-slate-50 text-slate-800 ring-1 ring-slate-200 group-hover:bg-blue-50 group-hover:text-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hammer w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" aria-hidden="true">
                    <path d="m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9"></path>
                    <path d="m18 15 4-4"></path>
                    <path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path>
                  </svg>
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-yatra-one text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-bold text-slate-900 leading-tight">
                    <span className="relative inline-block">
                      {t('ruralEmployment')}
                      <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-blue-200 group-hover:bg-blue-400 transition-colors"></span>
                    </span>
                  </h3>
                  <p className="mt-1 sm:mt-2 text-slate-600 text-xs xs:text-xs sm:text-sm leading-relaxed font-bakbak-one">
                    {t('ruralEmploymentDesc')}
                  </p>
                </div>
              </div>
            </div>

            {/* Shop Registration */}
            <a href="https://lms.mahaonline.gov.in/" target="_blank" rel="noopener noreferrer" className="group relative rounded-xl bg-white border p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 border-slate-200 hover:border-blue-300">
              <div className="flex items-start gap-3 sm:gap-4">
                <span className="inline-flex items-center justify-center w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg bg-slate-50 text-slate-800 ring-1 ring-slate-200 group-hover:bg-blue-50 group-hover:text-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" aria-hidden="true">
                    <circle cx="8" cy="21" r="1"></circle>
                    <circle cx="19" cy="21" r="1"></circle>
                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                  </svg>
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-yatra-one text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-bold text-slate-900 leading-tight">
                    <span className="relative inline-block">
                      {t('shopRegistration')}
                      <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-blue-200 group-hover:bg-blue-400 transition-colors"></span>
                    </span>
                  </h3>
                  <p className="mt-1 sm:mt-2 text-slate-600 text-xs xs:text-xs sm:text-sm leading-relaxed font-bakbak-one">
                    {t('shopRegistrationDesc')}
                  </p>
                </div>
              </div>
            </a>

          </div>
        </div>
      </div>
    </main>
  );
}
