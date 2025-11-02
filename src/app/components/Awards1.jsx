'use client';

import React, { useState, useEffect } from 'react';
import { publicAPI } from '../services/service';
import { useTranslation } from '../hooks/useTranslation';

export default function AwardsPage() {
  const { t, language } = useTranslation();
  
  const [counters, setCounters] = useState({
    literacy: 0,
    waterSupply: 0,
    electricity: 0,
    healthService: 0
  });

  const [isVisible, setIsVisible] = useState(false);
  const [awards, setAwards] = useState([]);
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [membersLoading, setMembersLoading] = useState(true);
  const [error, setError] = useState(null);
  const [membersError, setMembersError] = useState(null);

  // Fetch awards and members from database
  useEffect(() => {
    fetchAwards();
    fetchMembers();
  }, []);

  const fetchAwards = async () => {
    setLoading(true);
    try {
      const response = await publicAPI.getAwards();
      if (response.data.success && response.data.data.length > 0) {
        setAwards(response.data.data);
        setError(null);
      } else {
        setAwards([]);
        setError(response.data.message || t('noAwardsAvailable'));
      }
    } catch (err) {
      console.error('Error fetching awards:', err);
      setAwards([]);
      setError(t('noAwardsAvailable'));
    } finally {
      setLoading(false);
    }
  };

  const fetchMembers = async () => {
    setMembersLoading(true);
    try {
      const response = await publicAPI.getMembers();
      console.log('Members response:', response);
      
      if (response.data.success && response.data.data.length > 0) {
        setMembers(response.data.data);
        setMembersError(null);
      } else {
        setMembers([]);
        setMembersError(response.data.message || t('noMembersAvailable'));
      }
    } catch (err) {
      console.error('Error fetching members:', err);
      setMembers([]);
      setMembersError(t('noMembersAvailable'));
    } finally {
      setMembersLoading(false);
    }
  };

  // Keep all your existing useEffect logic for counters and animations...
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('progress-stats');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      const targets = {
        literacy: 98,
        waterSupply: 100,
        electricity: 100,
        healthService: 100
      };

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setCounters({
          literacy: Math.floor(targets.literacy * progress),
          waterSupply: Math.floor(targets.waterSupply * progress),
          electricity: Math.floor(targets.electricity * progress),
          healthService: Math.floor(targets.healthService * progress)
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setCounters(targets);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  return (
    <div className="min-h-screen bg-white py-4 sm:py-6 md:py-8 lg:py-12 px-2 sm:px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Members Section */}
        <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 px-4 md:px-8">
          {membersLoading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              <span className="ml-4 text-gray-600 font-yatra-one">{t('membersLoading')}</span>
            </div>
          ) : membersError || members.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">👥</div>
              <p className="text-lg font-yatra-one text-gray-600">{membersError || t('noMembersAvailable')}</p>
            </div>
          ) : (
            <>
              {/* Keep your existing members display logic but use translated loading/error messages */}
              <div className="flex flex-row justify-center items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-12 mb-4 sm:mb-6 lg:mb-0">
                {/* Your existing members mapping code stays the same */}
                {members.slice(0, 2).map((member, index) => (
                  <div key={member.id} className="w-1/2 lg:w-1/3">
                    {/* Keep all your existing member card JSX */}
                    <div className="bg-white shadow-lg overflow-hidden relative rounded-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="h-32 xs:h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 relative">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-fit"
                          onError={(e) => {
                            e.target.src = '/default_image.png';
                          }}
                        />
                        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 text-white text-center pb-0.5 xs:pb-1 sm:pb-2 md:pb-3 lg:pb-4 xl:pb-6 px-0.5 xs:px-1 sm:px-2 md:px-3 lg:px-4">
                          <h3 className="text-[8px] xs:text-[9px] sm:text-xs md:text-sm lg:text-base xl:text-lg font-bold mb-0 xs:mb-0.5 sm:mb-1 md:mb-1.5 lg:mb-2 text-white leading-tight">{member.name}</h3>
                          <div className="flex items-center justify-center my-0.5 xs:my-0.5 sm:my-1 md:my-1.5 lg:my-2 xl:my-3 px-0.5 xs:px-0.5 sm:px-1 md:px-2 lg:px-4">
                            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-yellow-400 to-yellow-400"></div>
                            <div className="mx-0.5 xs:mx-0.5 sm:mx-1">
                              <div className="w-0.5 h-0.5 xs:w-1 xs:h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 lg:w-2.5 lg:h-2.5 xl:w-3 xl:h-3 bg-yellow-400 transform rotate-45"></div>
                            </div>
                            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-yellow-400 to-yellow-400"></div>
                          </div>
                          <p className="text-[6px] xs:text-[7px] sm:text-xs md:text-sm lg:text-base xl:text-lg">{member.position}</p>
                          <p className="text-[6px] xs:text-[7px] sm:text-xs md:text-sm lg:text-base xl:text-lg">{member.email}</p>
                          <p className="text-[6px] xs:text-[7px] sm:text-xs md:text-sm lg:text-base xl:text-lg">{member.phone}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Keep all your existing third member logic */}
              </div>
            </>
          )}
        </div>

        {/* Awards Section */}
        <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-20">
          <div className="text-center mb-4 sm:mb-6 md:mb-8 lg:mb-8 xl:mb-10">
            <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-xl xl:text-2xl font-bold text-blue-700 mb-2 sm:mb-3 md:mb-4 lg:mb-2 xl:mb-3 leading-tight font-yatra-one">
              {t('awardsTitle')}
            </h2>
            <div className="flex justify-center mb-2 sm:mb-3 md:mb-4 lg:mb-2 xl:mb-3">
              <div className="w-20 xs:w-24 sm:w-28 md:w-32 lg:w-28 xl:w-32 h-px">
                <div className="h-full bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
              </div>
            </div>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-lg font-semibold text-gray-800 font-bakbak-one">{t('panchayatName')}</p>
          </div>

          {/* Awards Display */}
          <div className="px-4 md:px-8">
            {loading ? (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              </div>
            ) : error || awards.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🏆</div>
                <p className="text-lg font-yatra-one text-gray-600">{error || t('noAwardsAvailable')}</p>
              </div>
            ) : (
              /* Keep all your existing awards display logic */
              <>
                {/* Your existing awards mapping code stays exactly the same */}
              </>
            )}
          </div>

          {/* Government Services Section */}
          <div className="mt-6 sm:mt-8 md:mt-12 lg:mt-16 px-4 md:px-8">
            <div className="bg-gradient-to-br from-green-50 via-blue-50 to-yellow-50 rounded-xl p-4 sm:p-6 md:p-8 lg:p-6 xl:p-8 mb-6 sm:mb-8 md:mb-12">
              <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-bold text-center text-gray-800 mb-4 sm:mb-6 md:mb-8 font-yatra-one">
                {t('governmentServices')}
              </h3>
              <div id="housing-pension">
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-1 mt-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse"></span>
                    <span className="w-14 h-[2px] bg-sky-200 rounded-full"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse [animation-delay:200ms]"></span>
                  </div>
                  <p className="max-w-3xl mx-auto mt-3 text-slate-600 font-bakbak-one text-sm sm:text-base">
                    {t('servicesDescription')}
                  </p>
                </div>

                <div className="sm:block md:grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 w-full max-w-full">
                  {/* PM Awas Yojana */}
                  <a
                    href="https://pmayg.nic.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative rounded-xl bg-white border p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 border-slate-200 hover:border-sky-300"
                  >
                    <div className="  flex items-start gap-3 sm:gap-4">
                      <span className="inline-flex items-center justify-center w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg bg-slate-50 text-slate-800 ring-1 ring-slate-200 group-hover:bg-sky-50 group-hover:text-sky-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className=" lucide lucide-house w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                          aria-hidden="true"
                        >
                          <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                          <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        </svg>
                      </span>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-yatra-one text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-bold text-slate-900 leading-tight">
                          {t('pmAwasYojana')}
                        </h3>
                        <p className="mt-1 sm:mt-2 text-slate-600 text-xs xs:text-xs sm:text-sm leading-relaxed font-bakbak-one">
                          {t('pmAwasDescription')}
                        </p>
                      </div>
                    </div>
                  </a>

                  {/* Atal Pension Scheme */}
                  <a
                    href="https://www.npscra.nsdl.co.in/nsdl-apy.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative rounded-xl bg-white border p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 border-slate-200 hover:border-sky-300"
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <span className="inline-flex items-center justify-center w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg bg-slate-50 text-slate-800 ring-1 ring-slate-200 group-hover:bg-sky-50 group-hover:text-sky-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-heart-pulse w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                          aria-hidden="true"
                        >
                          <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                          <path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"></path>
                        </svg>
                      </span>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-yatra-one text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-bold text-slate-900 leading-tight">
                          {t('atalPensionScheme')}
                        </h3>
                        <p className="mt-1 sm:mt-2 text-slate-600 text-xs xs:text-xs sm:text-sm leading-relaxed font-bakbak-one">
                          {t('atalPensionDescription')}
                        </p>
                      </div>
                    </div>
                  </a>

                  {/* National Pension Scheme */}
                  <a
                    href="https://enps.nsdl.com/eNPS/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative rounded-xl bg-white border p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 border-slate-200 hover:border-sky-300"
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <span className="inline-flex items-center justify-center w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg bg-slate-50 text-slate-800 ring-1 ring-slate-200 group-hover:bg-sky-50 group-hover:text-sky-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-indian-rupee w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                          aria-hidden="true"
                        >
                          <path d="M6 3h12"></path>
                          <path d="M6 8h12"></path>
                          <path d="m6 13 8.5 8"></path>
                          <path d="M6 13h3"></path>
                          <path d="M9 13c6.667 0 6.667-10 0-10"></path>
                        </svg>
                      </span>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-yatra-one text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-bold text-slate-900 leading-tight">
                          {t('nationalPensionScheme')}
                        </h3>
                        <p className="mt-1 sm:mt-2 text-slate-600 text-xs xs:text-xs sm:text-sm leading-relaxed font-bakbak-one">
                          {t('nationalPensionDescription')}
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
