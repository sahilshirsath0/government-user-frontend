"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from '../hooks/useTranslation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  
  const { t, language } = useTranslation(); // Get both t and language

  useEffect(() => {
    setIsMounted(true);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: false });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Updated navigation items with translation keys
  const navigationItems = [
    { name: t('home'), nameEn: 'Home', href: '/', key: 'home' },
    { name: t('villageDetails'), nameEn: 'Village Details', href: '/administrative-committee', key: 'villageDetails' }, 
    { name: t('villagePrograms'), nameEn: 'Village Programs', href: '/village/programs', key: 'villagePrograms' },   
    { name: t('gallery'), nameEn: 'Gallery', href: '/gallery', key: 'gallery' },   
    { name: t('awards'), nameEn: 'Awards', href: '/Award', key: 'awards' }, 
    { name: t('announcements'), nameEn: 'Announcements', href: '/announcements', key: 'announcements' },
    { name: t('govFacilities'), nameEn: 'Government Facilities', href: '/gov-services', key: 'govFacilities' },
    { name: t('division'), nameEn: 'Division', href: '/gov-page', key: 'division' },
    { 
      name: t('services'), 
      nameEn: 'Citizen Services', 
      href: '/citizen-services',
      key: 'citizenServices',
      submenu: [
        { name: t('birthCertificate'), href: '/citizen-services/janma-pramanpatra' },
        { name: t('deathCertificate'), href: '/citizen-services/mrityu-pramanpatra' },
        { name: t('marriageCertificate'), href: '/citizen-services/vivah-pramanpatra' },
        { name: t('sevenTwelve'), href: '/citizen-services/7-12-utara' },
        { name: t('namuna8'), href: '/citizen-services/namuna-8-utara' },
        { name: t('residentDeclaration'), href: '/citizen-services/rahibasi-swayam-ghoshanapatra' },
        { name: t('lifeDeclaration'), href: '/citizen-services/hayati-swayamghoshanapatra' },
        { name: t('otherDeclarations'), href: '/citizen-services/itar-swayamghoshanapatre' },
        { name: t('houseTax'), href: '/citizen-services/gharfala-panipatti' },
        { name: t('ganeshRegistration'), href: '/citizen-services/ganesh-mandal-nondani' },
        { name: t('povertyLineCertificate'), href: '/citizen-services/daridrya-reshakhali-dakhla' }
      ]
    },
    { name: t('contact'), nameEn: 'Contact', href: '/contact', key: 'contact' }
  ];

  const adminLoginItem = { 
    name: t('adminLogin'), 
    nameEn: 'Admin Login', 
    href: 'https://government-frontend-steel.vercel.app/' 
  };

  const toggleDropdown = (itemName) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Second Header - Light Blue */}
      <div className="bg-blue-100 text-blue-900 py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row   space-y-2 md:space-y-0">
            
            {/* Government Title */}
            <p className="text-center  md:text-left text-sm sm:text-base font-bakbak-one">
              {t('governmentTitle')}
            </p>

            {/* Logo + Title Section */}
            <div className="flex   md:mx-50 md:justify-end space-x-3 md:space-x-4">
              
              {/* Hidden on small devices */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 hidden lg:block">
                <Image
                  src="/images/home/satyamev-jayte.png"
                  alt="Emblem of India"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>

              {/* Hidden on small devices */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 hidden lg:block">
                <Image
                  src="/images/home/golden-emblem.png"
                  alt="Golden Emblem"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>

              {/* Title Section */}
              <div className="text-center mx-auto  md:text-center">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold font-yatra-one">
                  {t('panchayatName')}
                </h1>
                <p className="text-xs sm:text-sm font-bakbak-one mt-1">
                  {t('panchayatLocation')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Section - White Background */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-2">
          {/* Mobile Menu Button */}
          <div className="flex items-center justify-between md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 flex items-center"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <span className="ml-2 font-bakbak-one font-bold">{t('menu')}</span>
            </button>
            
            {/* Mobile Language Switcher */}
            <div className="md:hidden">
              <LanguageSwitcher />
            </div>
          </div>

          <nav>
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex flex-wrap gap-1 justify-center items-center">
                {/* Regular navigation items */}
                {navigationItems.map((item) => (
                  <div 
                    key={item.key || item.name} 
                    className="relative"
                    onMouseEnter={() => item.submenu && setActiveDropdown(item.name)}
                    onMouseLeave={() => item.submenu && setActiveDropdown(null)}
                  >
                    {item.submenu ? (
                      <>
                        <a
                          href={item.href}
                          className="px-2 py-2 text-base font-bold text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200 flex items-center"
                          title={item.nameEn}
                        >
                          {item.name}
                          <svg className={`w-4 h-4 ml-1 transition-none`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </a>
                        
                        {/* Dropdown Menu */}
                        {activeDropdown === item.name && (
                          <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                            <div className="py-2">
                              {item.submenu.map((subItem) => (
                                <a
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  {subItem.name}
                                </a>
                              ))}
                            </div>
                          </div>
                        )}
                      </>
                    ) : (
                      <a
                        href={item.href}
                        className="px-2 py-2 text-base font-bold text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200"
                        title={item.nameEn}
                      >
                        {item.name}
                      </a>
                    )}
                  </div>
                ))}
                
                {/* Desktop Language Switcher */}
                <div className="hidden md:block">
                  <LanguageSwitcher />
                </div>
                
                {/* Admin Login Button - Yellow Rounded */}
                <a
                  href={adminLoginItem.href}
                  className="px-3 py-2 text-base font-bold text-gray-800 bg-yellow-400 hover:bg-yellow-500 rounded-full transition-colors duration-200 shadow-md hover:shadow-lg"
                  title={adminLoginItem.nameEn}
                >
                  {adminLoginItem.name}
                </a>
              </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="md:hidden mt-4 pb-4 border-t border-gray-200 max-h-[70vh] overflow-y-auto">
                <div className="pt-4 space-y-2">
                  {/* Regular navigation items */}
                  {navigationItems.map((item) => (
                    <div key={item.key || item.name}>
                      {item.submenu ? (
                        <div className="space-y-1">
                          <div className="flex items-center">
                            <a
                              href={item.href}
                              className="flex-1 px-3 py-3 text-base font-bold text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200 text-center"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {item.name}
                            </a>
                            <button
                              onClick={() => toggleDropdown(item.name)}
                              className="px-2 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200"
                            >
                              <svg className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? 'rotate-45' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                              </svg>
                            </button>
                          </div>
                          
                          {/* Mobile Dropdown Menu */}
                          {activeDropdown === item.name && (
                            <div className="ml-4 space-y-1 border-l-2 border-blue-200 pl-2">
                              {item.submenu.map((subItem) => (
                                <a
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="block px-3 py-2.5 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200"
                                  onClick={() => {
                                    setIsMenuOpen(false);
                                    setActiveDropdown(null);
                                  }}
                                >
                                  {subItem.name}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <a
                          href={item.href}
                          className="block px-3 py-3 text-base font-bold text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200 text-center"
                          onClick={() => setIsMenuOpen(false)}
                          title={item.nameEn}
                        >
                          {item.name}
                        </a>
                      )}
                    </div>
                  ))}
                  
                  {/* Admin Login Button - Yellow Rounded for Mobile */}
                  <a
                    href={adminLoginItem.href}
                    className="block px-3 py-3 text-base font-bold text-gray-800 bg-yellow-400 hover:bg-yellow-500 rounded-full transition-colors duration-200 text-center shadow-md hover:shadow-lg mt-2"
                    onClick={() => setIsMenuOpen(false)}
                    title={adminLoginItem.nameEn}
                  >
                    {adminLoginItem.name}
                  </a>
                </div>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
