"use client";

import { useState, useEffect } from 'react';

export default function Infrastructure() {
  const buildings = [
    {
      id: 1,
      name: "स्वागत ठिकाण",
      image: "/images/home/intro.png",
      alt: "स्वागत ठिकाण"
    },
    {
      id: 2,
      name: "ग्रामपंचायत",
      image: "/images/home/grampanchayt.png",
      alt: "ग्रामपंचायत"
    },
    {
      id: 3,
      name: "पतसंस्था",
      image: "/images/home/patsantha.png",
      alt: "पतसंस्था"
    },
    {
      id: 4,
      name: "आरोग्य केंद्र",
      image: "/images/home/hospital.png",
      alt: "आरोग्य केंद्र"
    },
    {
      id: 5,
      name: "प्राथमिक शाळा",
      image: "/images/home/zp-school1.png",
      alt: "प्राथमिक शाळा"
    },
    {
      id: 6,
      name: "प्राथमिक शाळा सावंतपूर",
      image: "/images/home/prathmikshala-sanvantpur.png",
      alt: "प्राथमिक शाळा सावंतपूर"
    },
    {
      id: 7,
      name: "प्राथमिक शाळा येतगाव",
      image: "/images/home/zp-school2.png",
      alt: "प्राथमिक शाळा येतगाव"
    },
    {
      id: 8,
      name: "हायस्कूल",
      image: "/images/home/highschool.png",
      alt: "हायस्कूल"
    },
    {
      id: 9,
      name: "अंगणवाडी",
      image: "/images/home/balvadi.png",
      alt: "अंगणवाडी"
    },
    {
      id: 10,
      name: "सेवा केंद्र",
      image: "/images/home/seva-center.png",
      alt: "सेवा केंद्र"
    },
    {
      id: 11,
      name: "सांगली जिल्हा बँक",
      image: "/images/home/sdc-bank.png",
      alt: "सांगली बँक"
    },
    {
      id: 12,
      name: "स्मशानभूमी",
      image: "/images/home/vaikuthdham.png",
      alt: "स्मशानभूमी"
    }
  ];

  // Create groups of 4 buildings
  const createGroups = (items, groupSize) => {
    const groups = [];
    for (let i = 0; i < items.length; i += groupSize) {
      groups.push(items.slice(i, i + groupSize));
    }
    return groups;
  };

  const buildingGroups = createGroups(buildings, 4);
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-slide every 8 seconds with smoother transition
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      // Start transition
      setTimeout(() => {
        setCurrentGroupIndex((prevIndex) => 
          prevIndex === buildingGroups.length - 1 ? 0 : prevIndex + 1
        );
        
        // End transition
        setTimeout(() => {
          setIsTransitioning(false);
        }, 100);
      }, 500);
    }, 8000);

    return () => clearInterval(interval);
  }, [buildingGroups.length]);

  return (
    <section className=" bg-white">
     
    </section>
  );
}