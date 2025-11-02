"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { publicAPI } from '../services/service'; // Adjust path as needed

export default function KunbiRecordsPage() {
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
        const formattedItems = response.data.data.map((item) => ({
          id: item._id,
          image: item.image?.data || '/default_image.png',
          alt: item.name || 'गॅलरी फोटो',
          name: item.name || 'फोटो'
        }));
        
        setGalleryItems(formattedItems);
        setError(null);
      } else {
        setGalleryItems([]);
        setError('सध्या कोणतेही फोटो उपलब्ध नाहीत.');
      }
    } catch (err) {
      console.error('Error fetching gallery:', err);
      setGalleryItems([]);
      setError('सध्या कोणतेही फोटो उपलब्ध नाहीत.');
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
          alt="Gallery - Gram Panchayat Photo Collection"
          fill
          className="object-cover object-center z-0"
          priority
        />

        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-4 z-10">
          <h1 className="text-yellow-400 text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-yatra-one font-bold mb-2 leading-tight typing-animation">
            छायाचित्र दालन
          </h1>
          
          <h2 className="text-white text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bakbak-one font-bold mb-6 leading-tight typing-animation-subtitle">
            ग्रामपंचायत
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
            ग्रामपंचायतीच्या कार्याची आणि गावातील घडामोडींची छायाचित्र संग्रह. येथे आपल्या गावाच्या विकासाचा प्रवास पाहू शकता.
          </p>
        </div>

        {/* Gallery Section */}
        <section className="mb-12">
          
          {/* Loading State */}
          {loading && (
            <div className="flex justify-center items-center py-16">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-600"></div>
              <span className="ml-4 text-gray-600 font-bakbak-one">छायाचित्र लोड होत आहेत...</span>
            </div>
          )}

          {/* Error/Empty State */}
          {error && !loading && (
            <div className="text-center py-16 bg-gradient-to-r from-blue-50 to-yellow-50 rounded-lg border border-blue-200">
              <div className="text-6xl mb-4">📸</div>
              <p className="text-xl font-yatra-one text-gray-700 mb-2">{error}</p>
              <p className="text-gray-600 font-bakbak-one">लवकरच नवीन फोटो अपडेट होतील.</p>
            </div>
          )}

          {/* Simple Grid Gallery */}
          {!loading && !error && galleryItems.length > 0 && (
            <>
              {/* Gallery Header */}
              <div className="text-center mb-6">
              
               
              </div>

              {/* Gallery Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {galleryItems.map((item) => (
                  <div key={item.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                    
                    {/* Image Container */}
                    <div className="relative aspect-square overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.alt}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.target.src = '/default_image.png';
                        }}
                      />
                    </div>
                    
                    {/* Image Details */}
                    <div className="p-3 md:p-4">
                      <h3 className="font-yatra-one font-bold text-gray-800 text-sm md:text-base text-center truncate">
                        {item.name}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>

              {/* Gallery Footer */}
           
            </>
          )}
        </section>
      </div>
    </main>
  );
}
