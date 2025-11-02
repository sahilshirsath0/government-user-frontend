"use client";

import React, { useState, useEffect } from 'react';
import { publicAPI } from '../services/service';
import { useTranslation } from '../hooks/useTranslation';

export default function Temples() {
  const { t, language } = useTranslation();
  
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch gallery images from database
  useEffect(() => {
    fetchGalleryItems();
  }, []);

  const fetchGalleryItems = async () => {
    setLoading(true);
    try {
      const response = await publicAPI.getGallery();
      console.log('Gallery response:', response);
      
      if (response.data.success && response.data.data.length > 0) {
        // Format gallery items - only display images
        const formattedItems = response.data.data.map((item) => ({
          id: item._id,
          image: item.image?.data || '/default_image.png',
          alt: item.name || t('galleryPhoto'),
          name: item.name || t('photo')
        }));
        
        setGalleryItems(formattedItems);
        setError(null);
      } else {
        setGalleryItems([]);
        setError(t('noPhotosAvailable'));
      }
    } catch (err) {
      console.error('Error fetching gallery:', err);
      setGalleryItems([]);
      setError(t('noPhotosAvailable'));
    } finally {
      setLoading(false);
    }
  };

  // Always animate if we have images, but duplicate only if more than 3
  const shouldAnimate = galleryItems.length > 0;
  const shouldDuplicate = galleryItems.length > 3;
  
  // Create duplicated array for seamless scroll
  const displayItems = shouldDuplicate ? 
    [...galleryItems, ...galleryItems, ...galleryItems, ...galleryItems] : 
    [...galleryItems, ...galleryItems];

  console.log('Gallery Items:', galleryItems.length);
  console.log('Should Animate:', shouldAnimate);
  console.log('Should Duplicate:', shouldDuplicate);

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-blue-100 overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4 font-yatra-one">
            {t('galleryTitle')}
          </h2>
          
          {/* Decorative separator with diamond */}
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-gray-300 flex-1 max-w-20"></div>
            <div className="mx-4">
              <div className="w-2 h-2 bg-yellow-400 transform rotate-45"></div>
            </div>
            <div className="h-px bg-gray-300 flex-1 max-w-20"></div>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <span className="ml-4 text-gray-600 font-yatra-one">{t('galleryLoading')}</span>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🖼️</div>
            <p className="text-lg font-yatra-one text-gray-600">{error}</p>
          </div>
        )}

        {/* Gallery Images Display - ALWAYS ANIMATE */}
        {!loading && !error && galleryItems.length > 0 && (
          <div className="relative overflow-hidden">
            <div className="gallery-scroll-container">
              {displayItems.map((item, index) => (
                <div 
                  key={`${item.id}-${index}`}
                  className="gallery-item"
                >
                  <div className="relative overflow-hidden rounded-lg shadow-lg group">
                    <img 
                      src={item.image} 
                      alt={item.alt}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        console.log('Image load error:', item.image);
                        e.target.src = '/default_image.png';
                      }}
                      onLoad={() => {
                        console.log('Image loaded successfully');
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Global CSS Animation Styles */}
      <style jsx global>{`
        .gallery-scroll-container {
          display: flex;
          gap: 1.5rem;
          animation: galleryScroll 60s linear infinite;
          width: max-content;
        }
        
        .gallery-scroll-container:hover {
          animation-play-state: paused;
        }
        
        .gallery-item {
          flex: none;
          width: 320px;
          cursor: pointer;
        }
        
        @media (min-width: 768px) {
          .gallery-item {
            width: 384px;
          }
        }
        
        @media (min-width: 1024px) {
          .gallery-item {
            width: 420px;
          }
        }
        
        @keyframes galleryScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-340px * ${galleryItems.length || 1}));
          }
        }
        
        /* Alternative fixed animation */
        @keyframes galleryScrollFixed {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-2000px);
          }
        }
        
        .gallery-scroll-container {
          animation: galleryScrollFixed 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
