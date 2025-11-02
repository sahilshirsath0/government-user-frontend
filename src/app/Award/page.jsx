"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { publicAPI, formatMarathiDate } from '../services/service';
import { useTranslation } from '../hooks/useTranslation';

export default function AwardsPage() {
  const { t, language } = useTranslation();
  
  const [awards, setAwards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch awards from database
  useEffect(() => {
    fetchAwards();
  }, []);

  const fetchAwards = async () => {
    setLoading(true);
    try {
      const response = await publicAPI.getAwards();
      console.log('Awards response:', response);
      
      if (response.data.success && response.data.data.length > 0) {
        setAwards(response.data.data);
        setError(null);
      } else {
        setAwards([]);
        setError(t('noAwardsAvailable'));
      }
    } catch (err) {
      console.error('Error fetching awards:', err);
      setAwards([]);
      setError(t('noAwardsAvailable'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      
      {/* Hero Banner Section */}
      <section className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/images/vecteezy_irrigation-canal-with-flowing-water-in-rural-landscape_70867349.png"
          alt={t('awardsBannerAlt')}
          fill
          className="object-cover object-center z-0"
          priority
        />

        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-4 z-10">
          <h1 className="text-yellow-400 text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-yatra-one font-bold mb-2 leading-tight typing-animation">
            {t('awardsPageTitle')}
          </h1>
          
          <h2 className="text-white text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bakbak-one font-bold mb-6 leading-tight typing-animation-subtitle">
            {t('panchayatName')}
          </h2>
        </div>
      </section>

      <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
            <div className="w-3 h-3 bg-yellow-500 transform rotate-45 mx-2 shadow-lg" style={{boxShadow: '0 0 10px rgba(234, 179, 8, 0.5)'}}></div>
            <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
          </div>
          <p className="text-sm xs:text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed font-bakbak-one px-2">
            {t('awardsPageDescription')}
          </p>
        </div>

        {/* Awards Section */}
        <section className="mb-12">
          
          {/* Loading State */}
          {loading && (
            <div className="flex justify-center items-center py-16">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-600"></div>
              <span className="ml-4 text-gray-600 font-bakbak-one">{t('awardsLoading')}</span>
            </div>
          )}

          {/* Error/Empty State */}
          {error && !loading && (
            <div className="text-center py-16 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
              <div className="text-6xl mb-4">🏆</div>
              <p className="text-xl font-yatra-one text-gray-700 mb-2">{error}</p>
              <p className="text-gray-600 font-bakbak-one">{t('newAwardsComingSoon')}</p>
            </div>
          )}

          {/* Awards Grid */}
          {!loading && !error && awards.length > 0 && (
            <>
              {/* Awards Header */}
              <div className="text-center mb-6">
                <h2 className="text-2xl md:text-3xl font-yatra-one font-bold text-gray-800 mb-2">
                  {t('awardsCollection')}
                </h2>
              </div>

              {/* Awards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {awards.map((award) => (
                  <div key={award.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                    
                    {/* Award Image */}
                    {award.image !== '/default_image.png' && (
                      <div className="relative aspect-square overflow-hidden bg-gray-50">
                        <img 
                          src={award.image} 
                          alt={award.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                      </div>
                    )}
                    
                    {/* Award Details */}
                    <div className="p-4">
                      {/* Award Icon (if no image) */}
                      {award.image === '/default_image.png' && (
                        <div className="text-center mb-3">
                          <div className={`text-4xl ${award.color || 'text-yellow-500'}`}>
                            {award.icon || '🏆'}
                          </div>
                        </div>
                      )}
                      
                      {/* Award Title */}
                      <h3 className={`font-yatra-one font-bold text-sm md:text-base text-center mb-2 ${award.color || 'text-gray-800'}`}>
                        {award.title}
                      </h3>
                      
                      {/* Award Date */}
                      <p className="text-xs text-gray-600 font-bakbak-one text-center mb-3">
                        {language === 'en' ? 
                          new Date(award.awardDate).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          }) : 
                          (award.marathiDate || new Date(award.awardDate).toLocaleDateString('mr-IN', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          }))
                        }
                      </p>
                      
                      {/* Award Description */}
                      {award.description && award.description !== 'माहिती लवकरच उपलब्ध होईल' && (
                        <p className="text-xs text-gray-500 font-bakbak-one text-center leading-relaxed">
                          {award.description.length > 60 ? award.description.substring(0, 60) + '...' : award.description}
                        </p>
                      )}
                      
                      {/* Award Badge */}
                      <div className="mt-3 text-center">
                        <span className="inline-block bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-bakbak-one">
                          {t('awardYear')} {award.year || new Date(award.awardDate).getFullYear()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </section>
      </div>
    </main>
  );
}
