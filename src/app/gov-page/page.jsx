"use client";

import React from 'react';
import Link from 'next/link';
import { useTranslation } from '../hooks/useTranslation';

export default function GovPage() {
  const { t, language } = useTranslation();
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 w-full max-w-full">
      
      {/* Birth Certificate */}
      <Link href="/citizen-services/janma-pramanpatra" className="group relative rounded-2xl bg-white border border-slate-200 p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500/40">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-indigo-500/0 to-emerald-500/0 opacity-0 group-hover:opacity-100 group-hover:via-indigo-500/5 group-hover:to-emerald-500/5 transition-opacity"></div>
        <div className="relative flex items-start gap-3 sm:gap-4">
          <div className="shrink-0">
            <span className="inline-flex items-center justify-center w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-lg group-hover:scale-105 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" aria-hidden="true">
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                <path d="M10 9H8"></path>
                <path d="M16 13H8"></path>
                <path d="M16 17H8"></path>
              </svg>
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-yatra-one font-bold text-slate-900 group-hover:text-indigo-700 transition-colors leading-tight">
              {t('birthCertificate')}
            </h3>
            <p className="mt-1 sm:mt-2 text-slate-600 text-xs xs:text-xs sm:text-sm leading-relaxed font-bakbak-one">
              {t('birthCertificateDesc')}
            </p>
          </div>
        </div>
      </Link>

      {/* Death Certificate */}
      <Link href="/citizen-services/mrityu-pramanpatra" className="group relative rounded-2xl bg-white border border-slate-200 p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500/40">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-indigo-500/0 to-emerald-500/0 opacity-0 group-hover:opacity-100 group-hover:via-indigo-500/5 group-hover:to-emerald-500/5 transition-opacity"></div>
        <div className="relative flex items-start gap-3 sm:gap-4">
          <div className="shrink-0">
            <span className="inline-flex items-center justify-center w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-lg group-hover:scale-105 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart-pulse w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" aria-hidden="true">
                <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                <path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"></path>
              </svg>
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-yatra-one font-bold text-slate-900 group-hover:text-indigo-700 transition-colors leading-tight">
              {t('deathCertificate')}
            </h3>
            <p className="mt-1 sm:mt-2 text-slate-600 text-xs xs:text-xs sm:text-sm leading-relaxed font-bakbak-one">
              {t('deathCertificateDesc')}
            </p>
          </div>
        </div>
      </Link>

      {/* Marriage Certificate */}
      <Link href="/citizen-services/vivah-pramanpatra" className="group relative rounded-2xl bg-white border border-slate-200 p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500/40">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-indigo-500/0 to-emerald-500/0 opacity-0 group-hover:opacity-100 group-hover:via-indigo-500/5 group-hover:to-emerald-500/5 transition-opacity"></div>
        <div className="relative flex items-start gap-3 sm:gap-4">
          <div className="shrink-0">
            <span className="inline-flex items-center justify-center w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-lg group-hover:scale-105 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-badge-check w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" aria-hidden="true">
                <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-yatra-one font-bold text-slate-900 group-hover:text-indigo-700 transition-colors leading-tight">
              {t('marriageCertificate')}
            </h3>
            <p className="mt-1 sm:mt-2 text-slate-600 text-xs xs:text-xs sm:text-sm leading-relaxed font-bakbak-one">
              {t('marriageCertificateDesc')}
            </p>
          </div>
        </div>
      </Link>

      {/* 7/12 Extract */}
      <Link href="/citizen-services/7-12-utara" className="group relative rounded-2xl bg-white border border-slate-200 p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500/40">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-indigo-500/0 to-emerald-500/0 opacity-0 group-hover:opacity-100 group-hover:via-indigo-500/5 group-hover:to-emerald-500/5 transition-opacity"></div>
        <div className="relative flex items-start gap-3 sm:gap-4">
          <div className="shrink-0">
            <span className="inline-flex items-center justify-center w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-lg group-hover:scale-105 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-search w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" aria-hidden="true">
                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                <path d="M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"></path>
                <path d="m9 18-1.5-1.5"></path>
                <circle cx="5" cy="14" r="3"></circle>
              </svg>
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-yatra-one font-bold text-slate-900 group-hover:text-indigo-700 transition-colors leading-tight">
              {t('sevenTwelveExtract')}
            </h3>
            <p className="mt-1 sm:mt-2 text-slate-600 text-xs xs:text-xs sm:text-sm leading-relaxed font-bakbak-one">
              {t('sevenTwelveExtractDesc')}
            </p>
          </div>
        </div>
      </Link>

      {/* Sample 8 Extract */}
      <Link href="/citizen-services/namuna-8-utara" className="group relative rounded-2xl bg-white border border-slate-200 p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500/40">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-indigo-500/0 to-emerald-500/0 opacity-0 group-hover:opacity-100 group-hover:via-indigo-500/5 group-hover:to-emerald-500/5 transition-opacity"></div>
        <div className="relative flex items-start gap-3 sm:gap-4">
          <div className="shrink-0">
            <span className="inline-flex items-center justify-center w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-lg group-hover:scale-105 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-house w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" aria-hidden="true">
                <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              </svg>
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-yatra-one font-bold text-slate-900 group-hover:text-indigo-700 transition-colors leading-tight">
              {t('sampleEightExtract')}
            </h3>
            <p className="mt-1 sm:mt-2 text-slate-600 text-xs xs:text-xs sm:text-sm leading-relaxed font-bakbak-one">
              {t('sampleEightExtractDesc')}
            </p>
          </div>
        </div>
      </Link>

      {/* Residence Self Declaration */}
      <Link href="/citizen-services/rahibasi-swayam-ghoshanapatra" className="group relative rounded-2xl bg-white border border-slate-200 p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500/40">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-indigo-500/0 to-emerald-500/0 opacity-0 group-hover:opacity-100 group-hover:via-indigo-500/5 group-hover:to-emerald-500/5 transition-opacity"></div>
        <div className="relative flex items-start gap-3 sm:gap-4">
          <div className="shrink-0">
            <span className="inline-flex items-center justify-center w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-lg group-hover:scale-105 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-round w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" aria-hidden="true">
                <circle cx="12" cy="8" r="5"></circle>
                <path d="M20 21a8 8 0 0 0-16 0"></path>
              </svg>
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-yatra-one font-bold text-slate-900 group-hover:text-indigo-700 transition-colors leading-tight">
              {t('residenceSelfDeclaration')}
            </h3>
            <p className="mt-1 sm:mt-2 text-slate-600 text-xs xs:text-xs sm:text-sm leading-relaxed font-bakbak-one">
              {t('residenceSelfDeclarationDesc')}
            </p>
          </div>
        </div>
      </Link>

      {/* Life Certificate */}
      <Link href="/citizen-services/hayati-swayamghoshanapatra" className="group relative rounded-2xl bg-white border border-slate-200 p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500/40">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-indigo-500/0 to-emerald-500/0 opacity-0 group-hover:opacity-100 group-hover:via-indigo-500/5 group-hover:to-emerald-500/5 transition-opacity"></div>
        <div className="relative flex items-start gap-3 sm:gap-4">
          <div className="shrink-0">
            <span className="inline-flex items-center justify-center w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-lg group-hover:scale-105 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" aria-hidden="true">
                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                <path d="m9 11 3 3L22 4"></path>
              </svg>
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-yatra-one font-bold text-slate-900 group-hover:text-indigo-700 transition-colors leading-tight">
              {t('lifeCertificate')}
            </h3>
            <p className="mt-1 sm:mt-2 text-slate-600 text-xs xs:text-xs sm:text-sm leading-relaxed font-bakbak-one">
              {t('lifeCertificateDesc')}
            </p>
          </div>
        </div>
      </Link>

      {/* Other Self Declarations */}
      <Link href="/citizen-services/itar-swayamghoshanapatre" className="group relative rounded-2xl bg-white border border-slate-200 p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500/40">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-indigo-500/0 to-emerald-500/0 opacity-0 group-hover:opacity-100 group-hover:via-indigo-500/5 group-hover:to-emerald-500/5 transition-opacity"></div>
        <div className="relative flex items-start gap-3 sm:gap-4">
          <div className="shrink-0">
            <span className="inline-flex items-center justify-center w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-lg group-hover:scale-105 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clipboard-list w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" aria-hidden="true">
                <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                <path d="M12 11h4"></path>
                <path d="M12 16h4"></path>
                <path d="M8 11h.01"></path>
                <path d="M8 16h.01"></path>
              </svg>
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-yatra-one font-bold text-slate-900 group-hover:text-indigo-700 transition-colors leading-tight">
              {t('otherSelfDeclarations')}
            </h3>
            <p className="mt-1 sm:mt-2 text-slate-600 text-xs xs:text-xs sm:text-sm leading-relaxed font-bakbak-one">
              {t('otherSelfDeclarationsDesc')}
            </p>
          </div>
        </div>
      </Link>

      {/* House Tax & Water Bill */}
      <Link href="/citizen-services/gharfala-panipatti" className="group relative rounded-2xl bg-white border border-slate-200 p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500/40">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-indigo-500/0 to-emerald-500/0 opacity-0 group-hover:opacity-100 group-hover:via-indigo-500/5 group-hover:to-emerald-500/5 transition-opacity"></div>
        <div className="relative flex items-start gap-3 sm:gap-4">
          <div className="shrink-0">
            <span className="inline-flex items-center justify-center w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-lg group-hover:scale-105 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-droplets w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" aria-hidden="true">
                <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path>
                <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path>
              </svg>
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-yatra-one font-bold text-slate-900 group-hover:text-indigo-700 transition-colors leading-tight">
              {t('houseTaxWaterBill')}
            </h3>
            <p className="mt-1 sm:mt-2 text-slate-600 text-xs xs:text-xs sm:text-sm leading-relaxed font-bakbak-one">
              {t('houseTaxWaterBillDesc')}
            </p>
          </div>
        </div>
      </Link>

      {/* Ganesh Mandal Registration */}
      <Link href="/citizen-services/ganesh-mandal-nondani" className="group relative rounded-2xl bg-white border border-slate-200 p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500/40">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-indigo-500/0 to-emerald-500/0 opacity-0 group-hover:opacity-100 group-hover:via-indigo-500/5 group-hover:to-emerald-500/5 transition-opacity"></div>
        <div className="relative flex items-start gap-3 sm:gap-4">
          <div className="shrink-0">
            <span className="inline-flex items-center justify-center w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-lg group-hover:scale-105 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users-round w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" aria-hidden="true">
                <path d="M18 21a8 8 0 0 0-16 0"></path>
                <circle cx="10" cy="8" r="5"></circle>
                <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"></path>
              </svg>
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-yatra-one font-bold text-slate-900 group-hover:text-indigo-700 transition-colors leading-tight">
              {t('ganeshMandalRegistration')}
            </h3>
            <p className="mt-1 sm:mt-2 text-slate-600 text-xs xs:text-xs sm:text-sm leading-relaxed font-bakbak-one">
              {t('ganeshMandalRegistrationDesc')}
            </p>
          </div>
        </div>
      </Link>

      {/* Below Poverty Line Certificate */}
      <Link href="/citizen-services/daridrya-reshakhali-dakhla" className="group relative rounded-2xl bg-white border border-slate-200 p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500/40">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-indigo-500/0 to-emerald-500/0 opacity-0 group-hover:opacity-100 group-hover:via-indigo-500/5 group-hover:to-emerald-500/5 transition-opacity"></div>
        <div className="relative flex items-start gap-3 sm:gap-4">
          <div className="shrink-0">
            <span className="inline-flex items-center justify-center w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-lg group-hover:scale-105 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-alert w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" aria-hidden="true">
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                <path d="M12 8v4"></path>
                <path d="M12 16h.01"></path>
              </svg>
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-yatra-one font-bold text-slate-900 group-hover:text-indigo-700 transition-colors leading-tight">
              {t('belowPovertyLineCertificate')}
            </h3>
            <p className="mt-1 sm:mt-2 text-slate-600 text-xs xs:text-xs sm:text-sm leading-relaxed font-bakbak-one">
              {t('belowPovertyLineCertificateDesc')}
            </p>
          </div>
        </div>
      </Link>

    </div>
  );
}
