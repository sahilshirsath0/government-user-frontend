"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { publicAPI } from '../services/service';
import { useTranslation } from '../hooks/useTranslation';

const AdministrativeCommitteePage = () => {
  const { t, language } = useTranslation();
  
  const [villageDetails, setVillageDetails] = useState([]);
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [membersLoading, setMembersLoading] = useState(true);
  const [error, setError] = useState(null);
  const [membersError, setMembersError] = useState(null);

  // Fetch village details and members from database
  useEffect(() => {
    fetchVillageDetails();
    fetchMembers();
  }, []);

  const fetchVillageDetails = async () => {
    setLoading(true);
    try {
      const response = await publicAPI.getVillageDetails();
      console.log('Village details response:', response);
      
      if (response.data.success && response.data.data.length > 0) {
        setVillageDetails(response.data.data);
        setError(null);
      } else {
        setVillageDetails([]);
        setError(t('noVillageDetailsAvailable'));
      }
    } catch (err) {
      console.error('Error fetching village details:', err);
      setVillageDetails([]);
      setError(t('noVillageDetailsAvailable'));
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
        setMembersError(t('noMembersAvailable'));
      }
    } catch (err) {
      console.error('Error fetching members:', err);
      setMembers([]);
      setMembersError(t('noMembersAvailable'));
    } finally {
      setMembersLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Banner Section */}
      <section className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center text-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/vecteezy_irrigation-canal-with-flowing-water-in-rural-landscape_70867349.png"
          alt="Rural agricultural setting for Administrative Committee"
          fill
          className="object-cover object-center z-0"
          priority
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-4 z-10">
          {/* Main Title */}
          <h1 className="text-yellow-400 text-5xl xs:text-6xl sm:text-7xl lg:text-8xl font-yatra-one font-bold mb-2 leading-tight typing-animation">
            {t('villageDetailsTitle')}
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-white text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bakbak-one font-bold mb-6 leading-tight typing-animation-subtitle">
            {t('panchayatName')}
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
            {t('villageDetailsDescription')}
          </p>
        </div>

        {/* Village Details Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-yatra-one font-bold text-center text-gray-800 mb-8">
            {t('villageInfo')}
          </h2>

          {/* Loading State for Village Details */}
          {loading && (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-600"></div>
              <span className="ml-4 text-gray-600 font-bakbak-one">{t('villageDetailsLoading')}</span>
            </div>
          )}

          {/* Error State for Village Details */}
          {error && !loading && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🏘️</div>
              <p className="text-lg font-yatra-one text-gray-600">{error}</p>
            </div>
          )}

          {/* Village Details Display */}
          {!loading && !error && villageDetails.length > 0 && (
            <div className="grid md:mx-20 gap-8">
              {villageDetails.map((village) => (
                <div key={village._id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="md:flex">
                    
                    {/* Village Image */}
                    {village.image?.data && (
                      <div className="md:w-1/2 lg:w-2/5">
                        <img
                          src={village.image.data}
                          alt={village.title}
                          className="w-full h-64 md:h-full object-cover"
                          onError={(e) => {
                            e.target.src = '/default_image.png';
                          }}
                        />
                      </div>
                    )}
                    
                    {/* Village Content */}
                    <div className={`${village.image?.data ? 'md:w-1/2 lg:w-3/5' : 'w-full'} p-6 md:p-8`}>
                      <h3 className="text-2xl md:text-3xl font-yatra-one font-bold text-gray-800 mb-4">
                        {village.title}
                      </h3>
                      <p className="text-gray-600 font-bakbak-one text-base md:text-lg leading-relaxed">
                        {village.description}
                      </p>
                      
                      {/* Additional Details */}
                      
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Members Section */}
        <section className="mb-12">
          {/* Loading State for Members */}
          {membersLoading && (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-600"></div>
              <span className="ml-4 text-gray-600 font-bakbak-one">{t('membersLoading')}</span>
            </div>
          )}

          {/* Error State for Members */}
          {membersError && !membersLoading && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">👥</div>
              <p className="text-lg font-yatra-one text-gray-600">{membersError}</p>
            </div>
          )}

          {/* Members Display */}
          {!membersLoading && !membersError && members.length > 0 && (
            <div className="grid md:mx-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {members.map((member) => (
                <div key={member.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  
                  {/* Member Image */}
                  {member.image !== '/default_image.png' && (
                    <div className="h-auto mx-auto overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-100 h-100 object-fit mx-auto mt-2"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                  )}
                  
                  {/* Member Details */}
                  <div className="p-6">
                    <h3 className="text-xl font-yatra-one font-bold text-gray-800 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-yellow-600 font-bakbak-one font-semibold mb-2">
                      {member.position}
                    </p>
                    
                    {/* Contact Info */}
                    {member.phone && (
                      <div className="flex items-center text-gray-600 mb-2">
                        <span className="text-sm">📱</span>
                        <span className="ml-2 font-bakbak-one text-sm">{member.phone}</span>
                      </div>
                    )}
                    
                    {member.email && (
                      <div className="flex items-center text-gray-600 mb-2">
                        <span className="text-sm">📧</span>
                        <span className="ml-2 font-bakbak-one text-sm">{member.email}</span>
                      </div>
                    )}
                    
                    {member.department && (
                      <div className="mt-3 pt-3 border-t border-gray-200">
                        <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-bakbak-one">
                          {member.department}
                        </span>
                      </div>
                    )}
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

export default AdministrativeCommitteePage;
