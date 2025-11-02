"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { publicAPI, formatMarathiDate } from '../services/service';
import { useTranslation } from '../hooks/useTranslation';

export default function AnnouncementsPage() {
  const { t, language } = useTranslation();
  
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch announcements from database
  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    setLoading(true);
    try {
      const response = await publicAPI.getAnnouncements();
      console.log('Announcements response:', response);
      
      if (response.data.success && response.data.data.length > 0) {
        // Format announcements with proper data
        const formattedAnnouncements = response.data.data.map((announcement) => ({
          id: announcement._id,
          date: formatMarathiDate(announcement.createdAt),
          title: announcement.message,
          message: announcement.message,
          createdAt: announcement.createdAt,
          isActive: announcement.isActive
        }));
        
        setAnnouncements(formattedAnnouncements);
        setError(null);
      } else {
        setAnnouncements([]);
        setError(t('noAnnouncementsAvailable'));
      }
    } catch (err) {
      console.error('Error fetching announcements:', err);
      setAnnouncements([]);
      setError(t('noAnnouncementsAvailable'));
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
          alt={t('announcementsBannerAlt')}
          fill
          className="object-cover object-center z-0"
          priority
        />

        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-4 z-10">
          <h1 className="text-yellow-400 text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-yatra-one font-bold mb-2 leading-tight typing-animation">
            {t('announcementsPageTitle')}
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
            {t('announcementsPageDescription')}
          </p>
        </div>

        {/* Announcements Section */}
        <section className="mb-12">
          
          {/* Loading State */}
          {loading && (
            <div className="flex justify-center items-center py-16">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              <span className="ml-4 text-gray-600 font-bakbak-one">{t('announcementsLoading')}</span>
            </div>
          )}

          {/* Error/Empty State */}
          {error && !loading && (
            <div className="text-center py-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
              <div className="text-6xl mb-4">📢</div>
              <p className="text-xl font-yatra-one text-gray-700 mb-2">{error}</p>
              <p className="text-gray-600 font-bakbak-one">{t('newAnnouncementsComingSoon')}</p>
            </div>
          )}

          {/* Announcements Grid */}
          {!loading && !error && announcements.length > 0 && (
            <>
              {/* Announcements Header */}
              <div className="text-center mb-6">
                <h2 className="text-2xl md:text-3xl font-yatra-one font-bold text-gray-800 mb-2">
                  {t('announcementsAndNotices')}
                </h2>
              </div>

              {/* Announcements Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {announcements.map((announcement, index) => (
                  <div key={announcement.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden border-l-4 border-blue-500">
                    
                    {/* Announcement Header */}
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 border-b">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <span className="text-2xl mr-2">📢</span>
                          <span className="text-sm font-bakbak-one text-blue-600 font-semibold">
                            {t('announcementNumber')} #{index + 1}
                          </span>
                        </div>
                        <span className={`w-2 h-2 rounded-full ${announcement.isActive ? 'bg-green-500' : 'bg-gray-400'}`}></span>
                      </div>
                      
                      <p className="text-xs text-blue-700 font-bakbak-one font-medium">
                        {language === 'en' ? 
                          new Date(announcement.createdAt).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          }) : 
                          announcement.date
                        }
                      </p>
                    </div>
                    
                    {/* Announcement Content */}
                    <div className="p-4">
                      <div className="mb-4">
                        <p className="text-gray-800 font-bakbak-one text-sm leading-relaxed">
                          {announcement.message}
                        </p>
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
