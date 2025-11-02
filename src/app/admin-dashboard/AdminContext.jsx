"use client";

import { createContext, useContext, useState } from 'react';

const AdminContext = createContext();

export function AdminProvider({ children }) {
  const [activeSection, setActiveSection] = useState("home");
  const [announcement, setAnnouncement] = useState("ग्रामसभा २७ ऑक्टोबर रोजी सकाळी १० वाजता पंचायत सभागृहात आयोजित करण्यात आली आहे. • जलसंधारण प्रकल्पाच्या दुसऱ्या टप्प्याचे काम सुरू - नागरिका");

  return (
    <AdminContext.Provider value={{ activeSection, setActiveSection, announcement, setAnnouncement }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
}
