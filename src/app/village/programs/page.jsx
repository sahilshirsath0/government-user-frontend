"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { publicAPI } from '../../services/service';
import { initMobileAnimations } from '../../utils/animations';
import { useTranslation } from '../../hooks/useTranslation';

const PrashasanEPrashasanCards = () => {
  const { t, language } = useTranslation();
  
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Initialize mobile animations
    const cleanup = initMobileAnimations();
    
    // Fetch programs from database
    fetchPrograms();
    
    return cleanup;
  }, []);

  const fetchPrograms = async () => {
    setLoading(true);
    try {
      const response = await publicAPI.getPrograms();
      console.log('Programs response:', response);
      
      if (response.data.success && response.data.data.length > 0) {
        // Format programs data
        const formattedPrograms = response.data.data.map((program) => ({
          id: program._id,
          name: program.name || t('defaultProgramName'),
          description: program.description || t('informationComingSoon'),
          image: program.image?.data || '/default_image.png',
          isActive: program.isActive,
          createdAt: program.createdAt,
          updatedAt: program.updatedAt
        }));
        
        setPrograms(formattedPrograms);
        setError(null);
      } else {
        setPrograms([]);
        setError(null);
      }
    } catch (err) {
      console.error('Error fetching programs:', err);
      setPrograms([]);
      setError(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Banner Section */}
      <section className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center text-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/vecteezy_irrigation-canal-with-flowing-water-in-rural-landscape_70867349.png"
          alt={t('villageProgramsAlt')}
          fill
          className="object-cover object-center z-0"
          priority
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-4 z-10">
          {/* Main Title */}
          <h1 className="text-yellow-400 text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-yatra-one font-bold mb-2 leading-tight typing-animation">
            {t('villageProgramsTitle')}
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-white text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bakbak-one font-bold mb-6 leading-tight typing-animation-subtitle">
            {t('villageProgramsSubtitle')}
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
            {t('eGovernanceDescription')}
          </p>
        </div>

        {/* Programs Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-yatra-one font-bold text-center text-gray-800 mb-8">
            {t('villageProgramsSectionTitle')}
          </h2>

          {/* Loading State */}
          {loading && (
            <div className="flex justify-center items-center py-16">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-600"></div>
              <span className="ml-4 text-gray-600 font-bakbak-one">{t('programsLoading')}</span>
            </div>
          )}

          {/* Empty State */}
          {!loading && programs.length === 0 && (
            <div className="text-center py-16 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
              <div className="text-6xl mb-4">🚧</div>
              <p className="text-xl font-yatra-one text-gray-700 mb-2">
                {t('newFacilitiesComingSoon')}
              </p>
              <p className="text-gray-600 font-bakbak-one">
                {t('pleaseVisitAgain')}
              </p>
            </div>
          )}

          {/* Programs Grid */}
          {!loading && programs.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {programs.map((program) => (
                <div key={program.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
                  
                  {/* Program Image */}
                  <div className="h-48 overflow-hidden bg-gray-100">
                    <img
                      src={program.image}
                      alt={program.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        e.target.src = '/default_image.png';
                      }}
                    />
                  </div>
                  
                  {/* Program Details */}
                  <div className="p-6">
                    <h3 className="text-xl font-yatra-one font-bold text-gray-800 mb-3 line-clamp-2">
                      {program.name}
                    </h3>
                    
                    <p className="text-gray-600 font-bakbak-one text-sm leading-relaxed mb-4 line-clamp-3">
                      {program.description}
                    </p>
                    
                    {/* Date Info */}
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-xs text-gray-400 font-bakbak-one">
                        {t('dateLabel')}: {language === 'en' ? 
                          new Date(program.updatedAt).toLocaleDateString('en-US') : 
                          new Date(program.updatedAt).toLocaleDateString('mr-IN')
                        }
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default PrashasanEPrashasanCards;
