"use client";

import { useState, useEffect } from 'react';
import { publicAPI, formatMarathiDate } from '../services/service';
import { useTranslation } from '../hooks/useTranslation';

export default function LatestNews() {
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
        const formattedAnnouncements = response.data.data.map((announcement, index) => ({
          id: announcement._id,
          date: formatMarathiDate(announcement.createdAt),
          title: announcement.message,
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
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-bold text-blue-700 mb-2 font-yatra-one">
            {t('importantAnnouncements')}
          </h2>
          <div className="w-20 h-px bg-blue-300 mx-auto"></div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <p className="mt-2 text-gray-600 font-bakbak-one">{t('announcementsLoading')}</p>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="text-center py-8">
            <p className="text-gray-600 font-bakbak-one">{error}</p>
          </div>
        )}

        {/* Announcements List - Simple Bullet Points */}
        {!loading && !error && announcements.length > 0 && (
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <ul className="space-y-4">
              {announcements.map((announcement) => (
                <li key={announcement.id} className="flex items-start">
                  {/* Bullet Point */}
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4"></div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <p className="text-gray-800 font-bakbak-one leading-relaxed mb-1">
                      {announcement.title}
                    </p>
                    <p className="text-sm text-blue-600 font-bakbak-one">
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
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* View More Button - Only show if we have more than 5 announcements */}
        {!loading && !error && announcements.length > 5 && (
          <div className="text-center mt-6">
            <button className="text-blue-600 hover:text-blue-800 font-bakbak-one text-sm underline">
              {t('viewMoreAnnouncements')}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
