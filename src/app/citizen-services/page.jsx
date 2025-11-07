"use client";

import { FileText, HeartPulse, BadgeCheck, ClipboardList, Home, Droplets, Hammer, Users2, Receipt, CheckCircle, ShieldAlert, FileSearch, Tv, Train, Bus, Plane, Smartphone, Lightbulb, Shield, Link2, Globe, Users, ClipboardCheck, UserRound, FilePenLine, CalendarDays, Clock, ShieldCheck, CloudDownload, IdCard, History, CreditCard, RefreshCw, Clock3, NotebookPen, UserPlus, CarFront, Factory, Building2, Rocket, Sprout, CloudLightning, FileSpreadsheet, FileCheck2, Truck, IndianRupee, ShoppingCart, Briefcase, SquareParking, AlertTriangle, GraduationCap, Search, X } from "lucide-react";
import { useState } from "react";
import { useTranslation } from '../hooks/useTranslation';
import Image from "next/image";

export default function CitizenServicesPage() {
  const { t, language } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");

  // All services from all sections
  const allServices = [
    // ग्रामपंचायत कार्यालय सेवा
    {
      title: "जन्म प्रमाणपत्र",
      titleEn: "Birth Certificate",
      desc: "जन्म प्रमाणपत्र म्हणजे व्यक्तीच्या जन्माची अधिकृत नोंद दर्शविणारे महत्त्वाचे सरकारी दस्तऐवज.",
      descEn: "Birth Certificate is an important government document that shows the official record of a person's birth.",
      icon: FileText,
      href: "/citizen-services/janma-pramanpatra",
      category: "panchayat"
    },
    {
      title: "मृत्यू प्रमाणपत्र",
      titleEn: "Death Certificate",
      desc: "मृत्यू प्रमाणपत्र म्हणजे व्यक्तीच्या मृत्यूची अधिकृत नोंद दर्शविणारे महत्त्वाचे सरकारी दस्तऐवज.",
      descEn: "Death Certificate is an important government document that shows the official record of a person's death.",
      icon: HeartPulse,
      href: "/citizen-services/mrityu-pramanpatra",
      category: "panchayat"
    },
    {
      title: "विवाह प्रमाणपत्र",
      titleEn: "Marriage Certificate",
      desc: "विवाह प्रमाणपत्र म्हणजे वैवाहिक नोंद दर्शविणारा अधिकृत व कायदेशीर दस्तऐवज.",
      descEn: "Marriage Certificate is an important government document that shows the official record of marriage.",
      icon: BadgeCheck,
      href: "/citizen-services/vivah-pramanpatra",
      category: "panchayat"
    },
    {
      title: "७/१२ उतारा",
      titleEn: "7/12 Extract",
      desc: "७/१२ उतारा म्हणजे जमिनीच्या मालकीचा अधिकृत दस्तऐवज जो भूमी अभिलेख विभागाकडून मिळतो.",
      descEn: "7/12 Extract is an important government document that shows the official record of land ownership.",
      icon: FileSearch,
      href: "https://share.google/B2Hpd7o3zaXx8qU4S",
      category: "panchayat"
    },
    {
      title: "नमुना ८ उतारा (घराचा उतारा)",
      titleEn: "Form 8 Extract (House Extract)",
      desc: "नमुना ८ उतारा म्हणजे मालमत्तेचा चौकशीविना नोंदीतील मालमत्तेसंबंधी अधिकारांची माहिती दस्तऐवज.",
      descEn: "Form 8 Extract is an important government document that shows the official record of house ownership.",
      icon: Home,
      href: "https://share.google/B2Hpd7o3zaXx8qU4S",
      category: "panchayat"
    },
    {
      title: "रहिवासी स्वयं घोषणापत्र",
      titleEn: "Resident Self Declaration",
      desc: "रहिवासी असल्याचा अधिकृत स्वघोषित दाखला, स्थानिक कामांसाठी उपयुक्त.",
      descEn: "Resident Self Declaration is an important government document that shows the official record of residence.",
      icon: UserRound,
      href: "/citizen-services/rahibasi-swayam-ghoshanapatra",
      category: "panchayat"
    },
    {
      title: "हयातीचा स्वयंघोषणापत्र",
      titleEn: "Life Certificate",
      desc: "हयातीचा स्वयंघोषणापत्र म्हणजे व्यक्ती जिवंत असल्याचा अधिकृत प्रमाणपत्र.",
      descEn: "Life Certificate is an important government document that shows the official record that a person is alive.",
      icon: CheckCircle,
      href: "/citizen-services/hayati-swayamghoshanapatra",
      category: "panchayat"
    },
    {
      title: "इतर स्वयंघोषणापत्रे",
      titleEn: "Other Self Declarations",
      desc: "स्वयंघोषणापत्रे म्हणजे विविध सरकारी/किंवा वैयक्तिक उद्देशांसाठी आवश्यक असलेली स्वाक्षरीत घोषणापत्रे.",
      descEn: "Other Self Declarations are important government documents for various types of official records.",
      icon: ClipboardList,
      href: "/citizen-services/itar-swayamghoshanapatre",
      category: "panchayat"
    },
    {
      title: "घरफाळा व पाणीपट्टी",
      titleEn: "House Tax & Water Bill",
      desc: "घरफाळा व पाणीपट्टी म्हणजे स्थानिकस्तरीय प्रशासनाला भरायचे वार्षिक कर आणि शुल्क.",
      descEn: "House Tax & Water Bill are important government documents that show official records of house tax and water supply.",
      icon: Droplets,
      href: "/citizen-services/gharfala-panipatti",
      category: "panchayat"
    },
    {
      title: "गणेश मंडळ नोंदणी",
      titleEn: "Ganesh Mandal Registration",
      desc: "गणेश मंडळ नोंदणी म्हणजे समाजोपयोगी गणेशोत्सव मंडळांची अधिकृत नोंदणी व कायदेशीर प्रक्रिया.",
      descEn: "Ganesh Mandal Registration is an important government document that shows the official record of Ganesh festival committee.",
      icon: Users2,
      href: "/citizen-services/ganesh-mandal-nondani",
      category: "panchayat"
    },
    {
      title: "दारिद्रय रेषेखाली असलेला दाखला",
      titleEn: "Below Poverty Line Certificate",
      desc: "दारिद्रय रेषेखाली असलेला दाखला म्हणजे आर्थिकदृष्ट्या दुर्बल कुटुंबांसाठी शासनाने दिलेला अधिकृत प्रमाणपत्र.",
      descEn: "Below Poverty Line Certificate is an important government document that shows the official record of economic status.",
      icon: ShieldAlert,
      href: "/citizen-services/daridrya-reshakhali-dakhla",
      category: "panchayat"
    },

    // तिकीट व रिचार्ज सेवा
    {
      title: "बस तिकीट",
      titleEn: "Bus Ticket",
      desc: "बस तिकीट म्हणजे सार्वजनिक वाहतुकीसाठी आवश्यक असलेले प्रवासी तिकीट.",
      descEn: "Bus Ticket is a passenger ticket required for public transportation.",
      icon: Bus,
      href: "#",
      category: "tickets"
    },
    {
      title: "रेल्वे तिकीट",
      titleEn: "Railway Ticket",
      desc: "रेल्वे तिकीट म्हणजे रेल्वे प्रवासासाठी आवश्यक असलेले प्रवासी तिकीट.",
      descEn: "Railway Ticket is a passenger ticket required for train travel.",
      icon: Train,
      href: "#",
      category: "tickets"
    },
    {
      title: "विमान तिकीट",
      titleEn: "Flight Ticket",
      desc: "विमान तिकीट म्हणजे विमान प्रवासासाठी आवश्यक असलेले प्रवासी तिकीट.",
      descEn: "Flight Ticket is a passenger ticket required for air travel.",
      icon: Plane,
      href: "#",
      category: "tickets"
    },
    {
      title: "मोबाइल रिचार्ज",
      titleEn: "Mobile Recharge",
      desc: "मोबाइल रिचार्ज म्हणजे मोबाइल फोनसाठी आवश्यक असलेली रक्कम भरणे.",
      descEn: "Mobile Recharge is the process of adding money to a mobile phone.",
      icon: Smartphone,
      href: "#",
      category: "tickets"
    },
    {
      title: "डीटीएच रिचार्ज",
      titleEn: "DTH Recharge",
      desc: "डीटीएच रिचार्ज म्हणजे डीटीएच सेवेसाठी आवश्यक असलेली रक्कम भरणे.",
      descEn: "DTH Recharge is the process of adding money to DTH service.",
      icon: Tv,
      href: "#",
      category: "tickets"
    },

    // बिले व विमा संबंधित सेवा
    {
      title: "वीज बिल",
      titleEn: "Electricity Bill",
      desc: "वीज बिल म्हणजे वीज वापरासाठी आवश्यक असलेले बिल.",
      descEn: "Electricity Bill is a bill for electricity usage.",
      icon: Lightbulb,
      href: "#",
      category: "bills"
    },
    {
      title: "पाणी बिल",
      titleEn: "Water Bill",
      desc: "पाणी बिल म्हणजे पाणी वापरासाठी आवश्यक असलेले बिल.",
      descEn: "Water Bill is a bill for water usage.",
      icon: Droplets,
      href: "#",
      category: "bills"
    },
    {
      title: "गॅस बिल",
      titleEn: "Gas Bill",
      desc: "गॅस बिल म्हणजे गॅस वापरासाठी आवश्यक असलेले बिल.",
      descEn: "Gas Bill is a bill for gas usage.",
      icon: Shield,
      href: "#",
      category: "bills"
    },
    {
      title: "विमा पॉलिसी",
      titleEn: "Insurance Policy",
      desc: "विमा पॉलिसी म्हणजे विमा संरक्षणासाठी आवश्यक असलेली पॉलिसी.",
      descEn: "Insurance Policy is a policy for insurance protection.",
      icon: ShieldCheck,
      href: "#",
      category: "bills"
    }
    // Add more services as needed...
  ];

  // Filter services based on search term
  const filteredServices = allServices.filter(service => {
    const title = language === 'en' ? service.titleEn : service.title;
    const desc = language === 'en' ? service.descEn : service.desc;
    return title.toLowerCase().includes(searchTerm.toLowerCase()) || 
           desc.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const renderServiceCard = (service, index) => {
    const Icon = service.icon;
    const title = language === 'en' ? service.titleEn : service.title;
    const desc = language === 'en' ? service.descEn : service.desc;

    return (
      <a 
        href={service.href || "#"} 
        target={service.href?.startsWith('http') ? "_blank" : "_self"}
        rel="noopener noreferrer" 
        key={index} 
        className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm hover:shadow-[0_12px_36px_rgba(37,99,235,0.18)] transition-all duration-300 hover:-translate-y-0.5"
      >
        <span className="absolute -right-3 -top-3 h-16 w-16 rounded-full bg-gradient-to-br from-sky-400 via-indigo-500 to-fuchsia-600 opacity-10"></span>
        <div className="flex items-start gap-3 sm:gap-4">
          <span className="inline-flex items-center justify-center w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 text-white shadow-md">
            <Icon className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </span>
          <div className="flex-1 min-w-0">
            <h3 className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-yatra-one font-bold text-slate-900 leading-tight">
              {title}
            </h3>
            <p className="mt-1 sm:mt-2 text-slate-600 text-xs xs:text-xs sm:text-sm leading-relaxed font-bakbak-one">
              {desc}
            </p>
          </div>
        </div>
      </a>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center text-center overflow-hidden">
                    {/* Background Image */}
                    <Image
                      src="/images/vecteezy_irrigation-canal-with-flowing-water-in-rural-landscape_70867349.png"
                      alt={t('govServicesBannerAlt')}
                      fill
                      className="object-cover object-center z-0"
                      priority
                    />
            
                    {/* Overlay Content */}
                    <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-4 z-10">
                      {/* Main Title */}
                      <h1 className="text-yellow-400 text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-yatra-one font-bold mb-2 leading-tight typing-animation">
                        {t('citizenServicesTitle')}
                      </h1>
                      
                      {/* Subtitle */}
                      <h2 className="text-white text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bakbak-one font-bold mb-6 leading-tight typing-animation-subtitle">
                        {t('citizenServicesSubtitle')}
                      </h2>
                    </div>
                  </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Search Results */}
          {searchTerm ? (
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-yatra-one font-bold text-center text-gray-800 mb-2">
                {t('searchResults')} "{searchTerm}"
              </h2>
              <p className="text-center text-gray-600 font-bakbak-one mb-8">
                {filteredServices.length} {t('servicesFound')}
              </p>
              
              {filteredServices.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredServices.map((service, index) => renderServiceCard(service, index))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-yatra-one text-gray-700 mb-2">
                    {t('noServicesFound')}
                  </h3>
                  <p className="text-gray-600 font-bakbak-one">
                    {t('tryDifferentSearch')}
                  </p>
                </div>
              )}
            </div>
          ) : (
            <>
            
              {/* Panchayat Office Services */}
              <div className="mb-16">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-yatra-one font-bold text-gray-800 mb-4">
                    {t('panchayatOfficeServices')}
                  </h2>
                  <div className="flex items-center justify-center mb-6">
                    <div className="h-px bg-yellow-400 flex-1 max-w-32"></div>
                    <div className="mx-4">
                      <div className="w-3 h-3 bg-yellow-400 rotate-45"></div>
                    </div>
                    <div className="h-px bg-yellow-400 flex-1 max-w-32"></div>
                  </div>
                  <p className="text-gray-600 font-bakbak-one max-w-3xl mx-auto leading-relaxed">
                    {t('panchayatServicesDescription')}
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 w-full max-w-full">
                  {/*ustod kamgar license */}
            <a href="https://share.google/2Aqrm7focfNeM4Lwq" target="_blank" rel="noopener noreferrer" className="group relative rounded-xl bg-white  p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 border-blue-400">
              <div className="flex items-start gap-3 sm:gap-4">
                <span className="inline-flex items-center justify-center w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg bg-slate-50 text-slate-800 ring-1 ring-slate-200 group-hover:bg-blue-50 group-hover:text-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-factory w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" aria-hidden="true">
                    <path d="M12 16h.01"></path>
                    <path d="M16 16h.01"></path>
                    <path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"></path>
                    <path d="M8 16h.01"></path>
                  </svg>
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-yatra-one text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-bold text-slate-900 leading-tight">
                    <span className="relative inline-block">
                      {t('ऊसतोड कामगार नोंदणी')}
                      <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-blue-200 group-hover:bg-blue-400 transition-colors"></span>
                    </span>
                  </h3>
                  <p className="mt-1 sm:mt-2 text-slate-600 text-xs xs:text-xs sm:text-sm leading-relaxed font-bakbak-one">
                    {t('ऊसतोड कामगार नोंदणी फॉर्म भरण्याकरीता येथे क्लिक करा')}
                  </p>
                </div>
              </div>
            </a>
                  {allServices.filter(s => s.category === 'panchayat').map((service, index) => renderServiceCard(service, index))}
                </div>
                
              </div>
              

              {/* Tickets & Recharge Services */}
              <div className="mb-16">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-yatra-one font-bold text-gray-800 mb-4">
                    {t('ticketsRechargeServices')}
                  </h2>
                  <div className="flex items-center justify-center mb-6">
                    <div className="h-px bg-green-400 flex-1 max-w-32"></div>
                    <div className="mx-4">
                      <div className="w-3 h-3 bg-green-400 rotate-45"></div>
                    </div>
                    <div className="h-px bg-green-400 flex-1 max-w-32"></div>
                  </div>
                  <p className="text-gray-600 font-bakbak-one max-w-3xl mx-auto leading-relaxed">
                    {t('ticketsServicesDescription')}
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 w-full max-w-full">
                  {allServices.filter(s => s.category === 'tickets').map((service, index) => renderServiceCard(service, index))}
                </div>
              </div>

              {/* Bills & Insurance Services */}
              <div className="mb-16">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-yatra-one font-bold text-gray-800 mb-4">
                    {t('billsInsuranceServices')}
                  </h2>
                  <div className="flex items-center justify-center mb-6">
                    <div className="h-px bg-red-400 flex-1 max-w-32"></div>
                    <div className="mx-4">
                      <div className="w-3 h-3 bg-red-400 rotate-45"></div>
                    </div>
                    <div className="h-px bg-red-400 flex-1 max-w-32"></div>
                  </div>
                  <p className="text-gray-600 font-bakbak-one max-w-3xl mx-auto leading-relaxed">
                    {t('billsServicesDescription')}
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 w-full max-w-full">
                  {allServices.filter(s => s.category === 'bills').map((service, index) => renderServiceCard(service, index))}
                </div>
              </div>

              {/* Additional Government Services */}
              <div className="mb-16">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-yatra-one font-bold text-gray-800 mb-4">
                    {t('additionalGovServices')}
                  </h2>
                  <div className="flex items-center justify-center mb-6">
                    <div className="h-px bg-purple-400 flex-1 max-w-32"></div>
                    <div className="mx-4">
                      <div className="w-3 h-3 bg-purple-400 rotate-45"></div>
                    </div>
                    <div className="h-px bg-purple-400 flex-1 max-w-32"></div>
                  </div>
                  <p className="text-gray-600 font-bakbak-one max-w-3xl mx-auto leading-relaxed">
                    {t('additionalServicesDescription')}
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 w-full max-w-full">
                  {[{
                    t: language === 'en' ? "Caste Certificate" : "जातीचे प्रमाणपत्र",
                    d: language === 'en' ? "Required for social reservations, scholarships and job benefits." : "सामाजिक आरक्षण, शिष्यवृत्ती व नोकरी सवलतींसाठी आवश्यक.",
                    i: FileSpreadsheet, 
                    u: "https://aaplesarkar.mahaonline.gov.in/"
                  }, {
                    t: language === 'en' ? "New Ration Card Certificate" : "नवीन शिधापत्रिका प्रमाणपत्र",
                    d: language === 'en' ? "Application for food security scheme, document verification and approval." : "अन्नसुरक्षा योजनेसाठी अर्ज, दस्तऐवज सत्यापन व मंजुरी.",
                    i: FileText, 
                    u: "https://aaplesarkar.mahaonline.gov.in/"
                  }, {
                    t: language === 'en' ? "Village Cremation Certificate" : "गाँव क्रिमीनेशन प्रमाणपत्र",
                    d: language === 'en' ? "Documents and certificates required for local offices." : "स्थानीय कार्यालयासाठी आवश्यक दस्तऐवज व प्रमाणपत्र.",
                    i: FileCheck2, 
                    u: "https://aaplesarkar.mahaonline.gov.in/"
                  }, {
                    t: language === 'en' ? "Disability Certificate" : "अपंगत्व प्रमाणपत्र",
                    d: language === 'en' ? "Certification and benefits for health/social welfare schemes." : "आरोग्य/समाज कल्याण योजनांसाठी प्रमाणन व लाभ.",
                    i: HeartPulse, 
                    u: "https://swavlambancard.gov.in/"
                  }, {
                    t: language === 'en' ? "Housing/Home Scheme" : "आवास/घरकुल योजना",
                    d: language === 'en' ? "Government housing scheme, eligibility and application assistance." : "सरकारी गृहयोजना, पात्रता व अर्ज सहाय्य.",
                    i: Home, 
                    u: "https://pmayg.nic.in/"
                  }, {
                    t: language === 'en' ? "Employment & Skills" : "रोजगार व कौशल्य",
                    d: language === 'en' ? "Skill training, job fairs and self-employment guidance." : "कौशल्य प्रशिक्षण, नोकरी मेळावे व स्वयंरोजगार मार्गदर्शन.",
                    i: Rocket, 
                    u: "https://mahaswayam.gov.in/"
                  }].map((c, idx) => {
                    const Icon = c.i;
                    return (
                      <a href={c.u || "#"} target="_blank" rel="noopener noreferrer" key={idx} className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm hover:shadow-[0_12px_36px_rgba(37,99,235,0.18)] transition-all duration-300 hover:-translate-y-0.5">
                        <span className="absolute -right-3 -top-3 h-16 w-16 rounded-full bg-gradient-to-br from-sky-400 via-indigo-500 to-fuchsia-600 opacity-10"></span>
                        <div className="flex items-start gap-3 sm:gap-4">
                          <span className="inline-flex items-center justify-center w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 text-white shadow-md">
                            <Icon className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                          </span>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-yatra-one font-bold text-slate-900 leading-tight">{c.t}</h3>
                            <p className="mt-1 sm:mt-2 text-slate-600 text-xs xs:text-xs sm:text-sm leading-relaxed font-bakbak-one">{c.d}</p>
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
