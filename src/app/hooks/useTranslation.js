import { useLanguage } from '../context/LanguageContext';

// Simple translations object
const translations = {
  mr: {
    // Navigation
    home: 'मुखपृष्ठ',
    about: 'आमच्याबद्दल', 
    services: 'नागरिक सेवा',
    contact: 'संपर्क',
    feedback: 'प्रतिसाद',
    home: 'मुखपृष्ठ',
    villageDetails: 'ग्राम तपशील',
    villagePrograms: 'ग्राम कार्यक्रम',
    gallery: 'छायाचित्र दालन',
    awards: 'पुरस्कार',
    announcements: 'महत्वाच्या सूचना',
    govFacilities: 'शासकीय सेवा',
    division: 'नागरीक सेवा',
    services: 'विभाग',
    contact: 'संपर्क',

    adminLogin: 'ग्रामपंचायत लॉगीन',
    menu: 'मेनू',
    governmentTitle: 'Government of Maharashtra | महाराष्ट्र शासन',
    panchayatName: 'ग्रामपंचायत सावरगाव घाट',
    panchayatLocation: 'तालुका : पाटोदा , जिल्हा : बीड',
    birthCertificate: 'जन्म प्रमाणपत्र',
    deathCertificate: 'मृत्यू प्रमाणपत्र',
    marriageCertificate: 'विवाह प्रमाणपत्र',
    sevenTwelve: '७/१२ उतारा',
    namuna8: 'नमुना ८ उतारा (घराचा उतारा)',
    residentDeclaration: 'रहिवासी स्वयं घोषणापत्र',
    lifeDeclaration: 'हयातीचा स्वयंघोषणापत्र',
    otherDeclarations: 'इतर स्वयंघोषणापत्रे',
    houseTax: 'घरफाळा व पाणीपट्टी',
    ganeshRegistration: 'गणेश मंडळ नोंदणी',
    povertyLineCertificate: 'दारिद्रय रेषेखाली असलेला दाखला',
 footerSlogan: 'आपल्या गावाचा विकास, आपल्या हातात !',
    footerDescription: 'सेवा, माहिती आणि उपयुक्त साधनांचे एकत्र व्यासपीठ. स्वच्छ, सुरक्षित आणि प्रगत येतगावसाठी आमची वचनबद्धता.',
    
    // Services in footer
    cleanlinessWaterSupply: 'स्वच्छता आणि पाणीपुरवठा',
    villageDevelopmentScheme: 'ग्रामविकास योजना',
    educationHealth: 'शिक्षण आणि आरोग्य',
    cementRoads: 'सिमेंट रस्ते',
    drainageSystem: 'बदिस्त नाले',
    digitalIndiaInitiative: 'डिजिटल भारत उपक्रम',
    cctvCamera: 'CCTV कॅमेरा',
    waterAtmMachine: 'वॉटर ए.टी.एम मशीन',
    
    // Copyright and credits
    copyrightText: '© 2025 grampanchayat.com. सर्व हक्क राखीव. या वेबसाइटवरील सामग्री, प्रतिमा आणि डेटा ग्रामपंचायत येतगावची मालमत्ता आहे आणि लागू कॉपीराइट कायद्यांतर्गत संरक्षित आहे. पूर्व लेखी परवानगीशिवाय कोणत्याही सामग्रीचे अनधिकृत पुनरुत्पादन, वितरण किंवा बदल करणे सक्त प्रतिबंधित आहे.',
    designedBy: 'डिझाइन आणि विकसित केले',
    
    
    // Common form fields
    firstName: 'पहिले नाव',
    middleName: 'मधले नाव',
    lastName: 'आडनाव',
    fullName: 'पूर्ण नाव',
    email: 'ईमेल',
    whatsappNumber: 'व्हाट्सअप नंबर',
    subject: 'विषय',
    message: 'संदेश',
    submit: 'अर्ज सादर करा',
    submitting: 'सबमिट होत आहे...',
    required: 'आवश्यक',
    
    // Success/Error messages
    successMessage: 'प्रतिसाद यशस्वीरित्या सबमिट झाला!',
    errorMessage: 'प्रतिसाद सबमिट करण्यात त्रुटी झाली आहे. कृपया पुन्हा प्रयत्न करा.',
    
    // Services
    sevenTwelve: '७/१२ उतारा',
    birthCertificate: 'जन्म प्रमाणपत्र विभाग',
    deathCertificate: 'मृत्यू प्रमाणपत्र विभाग',
    marriageCertificate: 'विवाह प्रमाणपत्र विभाग',
      awardsTitle: 'ग्रामपंचायतीस प्राप्त पुरस्कार व बक्षीसे',
       galleryTitle: 'छायाचित्र',
    galleryPhoto: 'गॅलरी फोटो',
    photo: 'फोटो',
    galleryLoading: 'छायाचित्र लोड होत आहेत...',
    noPhotosAvailable: 'सध्या कोणतेही फोटो उपलब्ध नाहीत.',
    noAwardsAvailable: 'सध्या कोणतेही बक्षीस उपलब्ध नाही.',
    noMembersAvailable: 'सध्या कोणतेही सदस्य माहिती उपलब्ध नाही.',
    membersLoading: 'सदस्य माहिती लोड होत आहे...',
    importantAnnouncements: 'महत्वाच्या सूचना',
    announcementsLoading: 'सूचना लोड होत आहेत...',
    noAnnouncementsAvailable: 'सध्या कोणत्याही सूचना उपलब्ध नाहीत.',
    viewMoreAnnouncements: 'आणखी सूचना पहा',
    // Government services section
    governmentServices: 'शासकीय सेवा',
    servicesDescription: 'प्रधानमंत्री आवास योजना, वृद्धापक्य पेन्शन, इतर सामाजिक योजनांसाठी मार्गदर्शन व सहाय्य मिळवा.',
     contactTitle: 'प्रतिसाद',
    contactSubtitle: 'आपला प्रतिसाद आम्हाला पाठवा.',
    contactFormTitle: 'प्रतिसाद',
    contactFormSubtitle: 'आपला संदेश आम्हाला पाठवा',
    
    // Form fields
    fullName: 'पूर्ण नाव',
    email: 'ईमेल',
    subject: 'विषय',
    message: 'संदेश',
    
    // Placeholders
    enterFullName: 'आपले पूर्ण नाव येथे लिहा',
    enterEmail: 'आपला ईमेल येथे लिहा',
    enterSubject: 'आपला विषय प्रविष्ट करा',
    enterMessage: 'आपला संदेश येथे लिहा (व्हाट्सअप नंबर समाविष्ट करा)',
    
    // Validation errors
    nameRequired: 'नाव आवश्यक आहे',
    subjectRequired: 'विषय आवश्यक आहे',
    messageRequired: 'संदेश आवश्यक आहे',
    validEmailRequired: 'वैध ईमेल पत्ता टाका',
    
    // Success/Error messages
    feedbackSuccessTitle: 'प्रतिसाद यशस्वीरित्या सबमिट झाला!',
    feedbackSuccessMessage: 'तुमचा प्रतिसाद प्राप्त झाला आहे. लवकरच तुम्हाला संपर्क केला जाईल.',
    feedbackSubmitError: 'प्रतिसाद सबमिट करण्यात त्रुटी झाली आहे. कृपया पुन्हा प्रयत्न करा.',
    errorTitle: 'त्रुटी!',
    
    // Button texts
    submitting: 'सबमिट होत आहे...',
    submitFeedback: 'प्रतिसाद सादर करा',
    
    // Contact info labels
    emailLabel: 'ईमेल',
    phoneLabel: 'फोन नंबर',
    addressLabel: 'पत्ता',
    addressText: 'ग्रामपंचायत सावरगाव घाट, तालुका - पाटोदा,\nजिल्हा - बीड, महाराष्ट्र 413207',
    
    // Scheme names and descriptions
    pmAwasYojana: 'प्रधानमंत्री आवास योजना',
    pmAwasDescription: 'गोरगरिबांसाठी पक्केघर, अनुदान, कमी व्याजदर, लाभ व ग्रामीन पात्रतांसाठी सुविधा.',
    atalPensionScheme: 'अटल पेन्शन योजना',
    atalPensionDescription: 'निश्चित निवृत्ती वेतन, नियमित योजना, सरकारची मदत, सुरक्षित भविष्य आणि डिजिटल खाते.',
    nationalPensionScheme: 'नॅशनल पेन्शन योजना',
    nationalPensionDescription: 'म्युच्युअल फंड योजना, निवृत्ती साठवण, कर सवलत, सुरक्षित प्रक्रिया, सरकारी व खासगी कर्मचारी.',
     villageDetailsTitle: 'ग्राम तपशील',
    villageInfo: 'गाव माहिती',
    villageDetailsDescription: 'गावाच्या प्रशासनाची जबाबदारी सुयोग्यपणे पार पाडणारी एक महत्त्वाची संस्था. ही समिती ग्रामपंचायतीच्या विविध योजना आणि धोरणांची अंमलबजावणी, संसाधनांचे नियोजन आणि व्यवस्थापन, तसेच ग्रामस्थांना आवश्यक असलेल्या सेवा पुरविण्याचे काम करते.',
    villageDetailsLoading: 'गाव माहिती लोड होत आहे...',
    noVillageDetailsAvailable: 'सध्या गाव माहिती उपलब्ध नाही.',
    membersLoading: 'सदस्य माहिती लोड होत आहे...',
    noMembersAvailable: 'सध्या कोणतेही सदस्य माहिती उपलब्ध नाही.',
     villageProgramsTitle: 'ग्राम कार्यक्रम',
    villageProgramsSubtitle: 'सावरगाव घाट ग्रामपंचायत',
    villageProgramsSectionTitle: 'ग्राम कार्यक्रम',
    villageProgramsAlt: 'प्रशासन/ई-प्रशासन/लोकसहभाग',
    
    // E-governance description
    eGovernanceDescription: 'ग्रामपंचायतीने प्रशासनिक क्षेत्रात आधुनिक तंत्रज्ञानाचा वापर केला आहे. ग्रामपंचायत कार्यालयात ई-गव्हर्नन्स प्रणाली अंमलात आणली आहे. ऑनलाइन सेवा व अर्ज व्यवस्था सुरू करण्यात आली आहे.',
    
    // Loading and empty states
    programsLoading: 'कार्यक्रम लोड होत आहेत...',
    newFacilitiesComingSoon: 'आमच्या नवीन सुविधा लवकरच उपलब्ध होतील.',
    pleaseVisitAgain: 'कृपया पुन्हा भेट द्या.',
    
    // Default values
    defaultProgramName: 'कार्यक्रम',
    informationComingSoon: 'माहिती लवकरच उपलब्ध होईल',
    dateLabel: 'तारीख',
     awardsPageTitle: 'पुरस्कार व बक्षीसे',
    awardsPageDescription: 'ग्रामपंचायतीस मिळालेले पुरस्कार व बक्षीसे. या सन्मानांमुळे आमच्या गावाचा विकास आणि प्रगती दिसून येते.',
    awardsBannerAlt: 'Awards - Gram Panchayat Awards Collection',
    awardsLoading: 'पुरस्कार लोड होत आहेत...',
    noAwardsAvailable: 'सध्या कोणतेही बक्षीस उपलब्ध नाही.',
    newAwardsComingSoon: 'लवकरच नवीन पुरस्कार अपडेट होतील.',
    awardsCollection: 'पुरस्कार संग्रह',
    awardYear: 'पुरस्कार',
    announcementsPageTitle: 'महत्वाच्या सूचना',
    announcementsPageDescription: 'ग्रामपंचायतीच्या महत्वाच्या सूचना व घोषणा. नागरिकांसाठी आवश्यक माहिती आणि अद्यतन बातम्या येथे उपलब्ध आहेत.',
    announcementsBannerAlt: 'Announcements - Gram Panchayat Notices',
    announcementsLoading: 'सूचना लोड होत आहेत...',
    noAnnouncementsAvailable: 'सध्या कोणत्याही सूचना उपलब्ध नाहीत.',
    newAnnouncementsComingSoon: 'लवकरच नवीन सूचना अपडेट होतील.',
    announcementsAndNotices: 'सूचना व घोषणा',
    announcementNumber: 'सूचना',

     // Government Services page specific
    govServicesBannerAlt: 'Village Maps - Gram Panchayat',
    imageViewerLoading: 'प्रतिमा व्यूअर लोड होत आहे...',
    govServicesDescription: 'महाराष्ट्र सरकारच्या विविध ऑनलाइन सेवा, प्रमाणपत्रे आणि परवाने यासाठी आवश्यक माहिती आणि लिंक्स.',
    
    // Service titles and descriptions
    businessLicense: 'उद्योगधंदा परवाना',
    businessLicenseDesc: 'स्थानिक परवान्यांची माहिती, सरकारी योजना व सवलतीसाठी आवश्यक दस्तऐवज.',
    incomeCertificate: 'उत्पन्न दाखला',
    incomeCertificateDesc: 'आर्थिक स्थितीसाठी आवश्यक, सरकारी योजना व शिष्यवृत्तीसाठी उपयोगी.',
    residenceCertificate: 'रहिवासी निवास प्रमाणपत्र',
    residenceCertificateDesc: 'निवास पत्त्याची अधिकृत पुष्टी, शाळा/नोकरीसाठी उपयुक्त.',
    seniorCitizenCertificate: 'जेष्ठ नागरिक प्रमाणपत्र',
    seniorCitizenCertificateDesc: 'जेष्ठ नागरिकांसाठी सवलती, योजना व आरोग्य सुविधा लाभासाठी.',
    agriculturalCertificate: 'कृषी प्रमाणपत्र',
    agriculturalCertificateDesc: 'शेती संबंधित जमीन नोंद, अनुदान व विम्यासाठी आवश्यक दस्तऐवज.',
    landownerCertificate: 'भूधारक प्रमाणपत्र',
    landownerCertificateDesc: 'भूधारकांसाठी जमिनीची नोंद, अनुदान व इतर आर्थिक सहाय्य.',
    ruralEmployment: 'ग्रामिण रोजगार',
    ruralEmploymentDesc: 'रोजगार हमी, प्रशिक्षण व कौशल्य विकासासाठी संधी.',
    shopRegistration: 'दुकान व आस्थापना नोंदणी',
    shopRegistrationDesc: 'व्यवसायासाठी अधिकृत नोंदणी, कायदेशीर वैधता व कल्याणकारी योजना.',

     // Citizen Services Grid
    birthCertificate: 'जन्म प्रमाणपत्र',
    birthCertificateDesc: 'जन्म प्रमाणपत्र म्हणजे व्यक्तीच्या जन्माची अधिकृत नोंद दर्शविणारे महत्त्वाचे सरकारी दस्तऐवज.',
    
    deathCertificate: 'मृत्यू प्रमाणपत्र',
    deathCertificateDesc: 'मृत्यू प्रमाणपत्र म्हणजे व्यक्तीच्या मृत्यूची अधिकृत नोंद दर्शविणारे महत्त्वाचे सरकारी दस्तऐवज.',
    
    marriageCertificate: 'विवाह प्रमाणपत्र',
    marriageCertificateDesc: 'विवाह प्रमाणपत्र म्हणजे वैवाहिक नोंद दर्शविणारा अधिकृत व कायदेशीर दस्तऐवज.',
    
    sevenTwelveExtract: '७/१२ उतारा',
    sevenTwelveExtractDesc: '७/१२ उतारा म्हणजे जमिनीच्या मालकीचा अधिकृत दस्तऐवज जो भूमी अभिलेख विभागाकडून मिळतो.',
    
    sampleEightExtract: 'नमुना ८ उतारा (घराचा उतारा)',
    sampleEightExtractDesc: 'नमुना ८ उतारा म्हणजे मालमत्तेचा चौकशीविना नोंदीतील मालमत्तेसंबंधी अधिकारांची माहिती दस्तऐवज.',
    
    residenceSelfDeclaration: 'रहिवासी स्वयं घोषणापत्र',
    residenceSelfDeclarationDesc: 'रहिवासी असल्याचा अधिकृत स्वघोषित दाखला, स्थानिक कामांसाठी उपयुक्त.',
    
    lifeCertificate: 'हयातीचा स्वयंघोषणापत्र',
    lifeCertificateDesc: 'हयातीचा स्वयंघोषणापत्र म्हणजे व्यक्ती जिवंत असल्याचा अधिकृत प्रमाणपत्र.',
    
    otherSelfDeclarations: 'इतर स्वयंघोषणापत्रे',
    otherSelfDeclarationsDesc: 'स्वयंघोषणापत्रे म्हणजे विविध सरकारी/किंवा वैयक्तिक उद्देशांसाठी आवश्यक असलेली स्वाक्षरीत घोषणापत्रे.',
    
    houseTaxWaterBill: 'घरफाळा व पाणीपट्टी',
    houseTaxWaterBillDesc: 'घरफाळा व पाणीपट्टी म्हणजे स्थानिकस्तरीय प्रशासनाला भरायचे वार्षिक कर आणि शुल्क.',
    
    ganeshMandalRegistration: 'गणेश मंडळ नोंदणी',
    ganeshMandalRegistrationDesc: 'गणेश मंडळ नोंदणी म्हणजे समाजोपयोगी गणेशोत्सव मंडळांची अधिकृत नोंदणी व कायदेशीर प्रक्रिया.',
    
    belowPovertyLineCertificate: 'दारिद्रय रेषेखाली असलेला दाखला',
    belowPovertyLineCertificateDesc: 'दारिद्रय रेषेखाली असलेला दाखला म्हणजे आर्थिकदृष्ट्या दुर्बल कुटुंबांसाठी शासनाने दिलेला अधिकृत प्रमाणपत्र.',

      // Contact page specific translations
    contactTitle: 'प्रतिसाद',
    contactSubtitle: 'आपला प्रतिसाद आम्हाला पाठवा.',
    contactFormTitle: 'प्रतिसाद',
    contactFormSubtitle: 'आपला संदेश आम्हाला पाठवा',
    
    // Form fields
    fullName: 'पूर्ण नाव',
    email: 'ईमेल',
    subject: 'विषय',
    message: 'संदेश',
    
    // Placeholders
    enterFullName: 'आपले पूर्ण नाव येथे लिहा',
    enterEmail: 'आपला ईमेल येथे      लिहा',
    enterSubject: 'आपला विषय प्रविष्ट करा',
    enterMessage: 'आपला संदेश येथे लिहा (व्हाट्सअप नंबर समाविष्ट करा)',
    
    // Validation errors
    nameRequired: 'नाव आवश्यक आहे',
    subjectRequired: 'विषय आवश्यक आहे',
    messageRequired: 'संदेश आवश्यक आहे',
    validEmailRequired: 'वैध ईमेल पत्ता टाका',
    
    // Success/Error messages
    feedbackSuccessTitle: 'प्रतिसाद यशस्वीरित्या सबमिट झाला!',
    feedbackSuccessMessage: 'तुमचा प्रतिसाद प्राप्त झाला आहे. लवकरच तुम्हाला संपर्क केला जाईल.',
    feedbackSubmitError: 'प्रतिसाद सबमिट करण्यात त्रुटी झाली आहे. कृपया पुन्हा प्रयत्न करा.',
    errorTitle: 'त्रुटी!',
    
    // Button texts
    submitting: 'सबमिट होत आहे...',
    submitFeedback: 'प्रतिसाद सादर करा',
    
    // Contact info labels
    emailLabel: 'ईमेल',
    phoneLabel: 'फोन नंबर',
    addressLabel: 'पत्ता',
    addressText: 'ग्रामपंचायत सावरगाव घाट, तालुका - पाटोदा,\nजिल्हा - बीड, महाराष्ट्र 413207',

     // Citizen Services Page
    citizenServicesTitle: 'नागरिक सेवा',
    citizenServicesSubtitle: 'सर्व सरकारी सेवा एका ठिकाणी. सहज, जलद आणि विश्वसनीय.',
    searchServices: 'सेवा शोधा...',
    searchResults: 'शोध परिणाम',
    servicesFound: 'सेवा सापडल्या',
    noServicesFound: 'कोणत्याही सेवा सापडल्या नाहीत',
    tryDifferentSearch: 'कृपया वेगळे शब्द वापरून शोधा.',
    
    // Service Categories
    panchayatOfficeServices: 'ग्रामपंचायत कार्यालयीन सेवा',
    panchayatServicesDescription: 'ग्रामपंचायत कार्यालयातील सर्व आवश्यक दस्तऐवज आणि प्रमाणपत्रे येथे मिळवा.',
    
    ticketsRechargeServices: 'तिकीट व रिचार्ज सेवा',
    ticketsServicesDescription: 'प्रवास तिकिटे आणि विविध रिचार्ज सेवा सहज आणि जलद.',
    
    billsInsuranceServices: 'बिले व विमा संबंधित सेवा',
    billsServicesDescription: 'सर्व प्रकारची बिले आणि विमा संबंधित सेवा येथे उपलब्ध.',
    
    additionalGovServices: 'अतिरिक्त सरकारी सेवा',
    additionalServicesDescription: 'इतर महत्त्वाच्या सरकारी योजना आणि सेवांची माहिती.',

    


    
  
  },
  
  en: {
    // Navigation  
    home: 'Home',
    about: 'About Us',
    services: 'Citizen Services', 
    contact: 'Contact',
    feedback: 'Feedback',
     // Footer specific translations
    footerSlogan: 'Development of Our Village, In Our Hands!',
    footerDescription: 'A unified platform for services, information and useful resources. Our commitment to a clean, safe and progressive.',
    contactTitle: 'Feedback',
    contactSubtitle: 'Send us your feedback.',
    contactFormTitle: 'Feedback',
    contactFormSubtitle: 'Send us your message',
    villageDetailsTitle: 'Village Details',
    villageInfo: 'Village Information',
    villageDetailsDescription: 'An important institution that efficiently carries out the responsibility of village administration. This committee works to implement various schemes and policies of the Gram Panchayat, planning and management of resources, as well as providing necessary services to the villagers.',
    villageDetailsLoading: 'Loading village information...',
    noVillageDetailsAvailable: 'Village information is currently not available.',
    membersLoading: 'Loading member information...',
    noMembersAvailable: 'No member information is currently available.',
     villageProgramsTitle: 'Village Programs',
    villageProgramsSubtitle: 'Savargaon Ghat Gram Panchayat',
    villageProgramsSectionTitle: 'Village Programs',
    villageProgramsAlt: 'Administration/E-Administration/Public Participation',
    
    // E-governance description
    eGovernanceDescription: 'The Gram Panchayat has implemented modern technology in the administrative field. E-governance system has been implemented in the Gram Panchayat office. Online services and application system have been started.',
    awardsPageTitle: 'Awards & Recognitions',
    awardsPageDescription: 'Awards and recognitions received by the Gram Panchayat. These honors reflect the development and progress of our village.',
    awardsBannerAlt: 'Awards - Gram Panchayat Awards Collection',
    awardsLoading: 'Loading awards...',
    noAwardsAvailable: 'No awards are currently available.',
    newAwardsComingSoon: 'New awards will be updated soon.',
    awardsCollection: 'Awards Collection',
    awardYear: 'Award',
// Announcements page specific
    


    
    // Loading and empty states
    programsLoading: 'Loading programs...',
    newFacilitiesComingSoon: 'Our new facilities will be available soon.',
    pleaseVisitAgain: 'Please visit again.',
    
    // Default values
    defaultProgramName: 'Program',
    informationComingSoon: 'Information will be available soon',
    dateLabel: 'Date',

    
    // Form fields
    fullName: 'Full Name',
    email: 'Email',
    subject: 'Subject',
    message: 'Message',
    
    // Placeholders
    enterFullName: 'Enter your full name here',
    enterEmail: 'Enter your email here',
    enterSubject: 'Enter your subject',
    enterMessage: 'Enter your message here (include WhatsApp number)',

    // Citizen Services Grid
    birthCertificate: 'Birth Certificate',
    birthCertificateDesc: 'Birth certificate is an important government document showing the official record of a person\'s birth.',
    
    deathCertificate: 'Death Certificate',
    deathCertificateDesc: 'Death certificate is an important government document showing the official record of a person\'s death.',
    
    marriageCertificate: 'Marriage Certificate',
    marriageCertificateDesc: 'Marriage certificate is an official and legal document showing marital registration.',
    
    sevenTwelveExtract: '7/12 Extract',
    sevenTwelveExtractDesc: '7/12 extract is an official document of land ownership obtained from the Land Records Department.',
    
    sampleEightExtract: 'Sample 8 Extract (Property Extract)',
    sampleEightExtractDesc: 'Sample 8 extract is a document containing information about property rights in registration without inquiry.',
    
    residenceSelfDeclaration: 'Residence Self Declaration',
    residenceSelfDeclarationDesc: 'Official self-declared certificate of being a resident, useful for local purposes.',
    
    lifeCertificate: 'Life Certificate',
    lifeCertificateDesc: 'Life certificate is an official certificate that a person is alive.',
    
    otherSelfDeclarations: 'Other Self Declarations',
    otherSelfDeclarationsDesc: 'Self declarations are signed declaration documents required for various government or personal purposes.',
    
    houseTaxWaterBill: 'House Tax & Water Bill',
    houseTaxWaterBillDesc: 'House tax and water bill are annual taxes and fees to be paid to local level administration.',
    
    ganeshMandalRegistration: 'Ganesh Mandal Registration',
    ganeshMandalRegistrationDesc: 'Ganesh Mandal registration is the official registration and legal process of social Ganesh festival committees.',
    
    belowPovertyLineCertificate: 'Below Poverty Line Certificate',
    belowPovertyLineCertificateDesc: 'Below poverty line certificate is an official certificate issued by the government for economically weak families.',

     // Contact page specific translations
    contactTitle: 'Feedback',
    contactSubtitle: 'Send us your feedback.',
    contactFormTitle: 'Feedback',
    contactFormSubtitle: 'Send us your message',
    
    // Form fields
    fullName: 'Full Name',
    email: 'Email',
    subject: 'Subject',
    message: 'Message',
    
    // Placeholders
    enterFullName: 'Enter your full name here',
    enterEmail: 'Enter your email here',
    enterSubject: 'Enter your subject',
    enterMessage: 'Enter your message here (include WhatsApp number)',
    
    // Validation errors
    nameRequired: 'Name is required',
    subjectRequired: 'Subject is required',
    messageRequired: 'Message is required',
    validEmailRequired: 'Please enter a valid email address',
    
    // Success/Error messages
    feedbackSuccessTitle: 'Feedback submitted successfully!',
    feedbackSuccessMessage: 'Your feedback has been received. We will contact you soon.',
    feedbackSubmitError: 'Error submitting feedback. Please try again.',
    errorTitle: 'Error!',
    
    // Button texts
    submitting: 'Submitting...',
    submitFeedback: 'Submit Feedback',
    
    // Contact info labels
    emailLabel: 'Email',
    phoneLabel: 'Phone Number',
    addressLabel: 'Address',
    addressText: 'Gram Panchayat Savargaon Ghat, Taluka - Patoda,\nDistrict - Beed, Maharashtra 413207',
    
    // Validation errors
    nameRequired: 'Name is required',
    subjectRequired: 'Subject is required',
    messageRequired: 'Message is required',
    validEmailRequired: 'Please enter a valid email address',
    
    // Success/Error messages
    feedbackSuccessTitle: 'Feedback submitted successfully!',
    feedbackSuccessMessage: 'Your feedback has been received. We will contact you soon.',
    feedbackSubmitError: 'Error submitting feedback. Please try again.',
    errorTitle: 'Error!',
    
    // Button texts
    submitting: 'Submitting...',
    submitFeedback: 'Submit Feedback',
    
    // Contact info labels
    emailLabel: 'Email',
    phoneLabel: 'Phone Number',
    addressLabel: 'Address',
    addressText: 'Gram Panchayat Savargaon Ghat, Taluka - Patoda,\nDistrict - Beed, Maharashtra 413207'
 ,
    
    // Services in footer
    cleanlinessWaterSupply: 'Cleanliness and Water Supply',
    villageDevelopmentScheme: 'Village Development Scheme',
    educationHealth: 'Education and Health',
    cementRoads: 'Cement Roads',
    drainageSystem: 'Drainage System',
    digitalIndiaInitiative: 'Digital India Initiative',
    cctvCamera: 'CCTV Camera',
    waterAtmMachine: 'Water ATM Machine',
     importantAnnouncements: 'Important Announcements',
    announcementsLoading: 'Loading announcements...',
    noAnnouncementsAvailable: 'No announcements are currently available.',
    viewMoreAnnouncements: 'View More Announcements',
    // Announcements page specific
    announcementsPageTitle: 'Important Announcements',
    announcementsPageDescription: 'Important announcements and notices from the Gram Panchayat. Essential information and latest updates for citizens are available here.',
    announcementsBannerAlt: 'Announcements - Gram Panchayat Notices',
    announcementsLoading: 'Loading announcements...',
    noAnnouncementsAvailable: 'No announcements are currently available.',
    newAnnouncementsComingSoon: 'New announcements will be updated soon.',
    announcementsAndNotices: 'Announcements & Notices',
    announcementNumber: 'Notice',

    
    // Copyright and credits
    copyrightText: '© 2025 grampanchayat.com. All rights reserved. The content, images, and data on this website are the property of Grampanchayat and are protected under applicable copyright laws. Unauthorized reproduction, distribution, or modification of any material without prior written permission is strictly prohibited. Users may access and use the content for personal and non-commercial purposes, provided they do not alter or remove any copyright notices. Any unauthorized use may result in legal action.',
    designedBy: 'Designed and developed by',

     // Citizen Services Page
    citizenServicesTitle: 'Citizen Services',
    citizenServicesSubtitle: 'All government services in one place. Easy, fast and reliable.',
    searchServices: 'Search services...',
    searchResults: 'Search Results for',
    servicesFound: 'services found',
    noServicesFound: 'No services found',
    tryDifferentSearch: 'Please try searching with different keywords.',
    
    // Service Categories
    panchayatOfficeServices: 'Gram Panchayat Office Services',
    panchayatServicesDescription: 'Get all necessary documents and certificates from the Gram Panchayat office here.',
    
    ticketsRechargeServices: 'Tickets & Recharge Services',
    ticketsServicesDescription: 'Travel tickets and various recharge services made easy and fast.',
    
    billsInsuranceServices: 'Bills & Insurance Services',
    billsServicesDescription: 'All types of bills and insurance related services available here.',
    
    additionalGovServices: 'Additional Government Services',
    additionalServicesDescription: 'Information about other important government schemes and services.',

    // Government Services page specific
    govServicesBannerAlt: 'Village Maps - Gram Panchayat',
    imageViewerLoading: 'Loading image viewer...',
    govServicesDescription: 'Essential information and links for various online services, certificates and licenses of Maharashtra Government.',
    
    // Service titles and descriptions
    businessLicense: 'Business License',
    businessLicenseDesc: 'Local license information, necessary documents for government schemes and benefits.',
    incomeCertificate: 'Income Certificate',
    incomeCertificateDesc: 'Essential for financial status, useful for government schemes and scholarships.',
    residenceCertificate: 'Residence Certificate',
    residenceCertificateDesc: 'Official confirmation of residential address, useful for school/employment.',
    seniorCitizenCertificate: 'Senior Citizen Certificate',
    seniorCitizenCertificateDesc: 'Discounts, schemes and health facility benefits for senior citizens.',
    agriculturalCertificate: 'Agricultural Certificate',
    agriculturalCertificateDesc: 'Agricultural land records, necessary documents for subsidies and insurance.',
    landownerCertificate: 'Landowner Certificate',
    landownerCertificateDesc: 'Land records for landowners, subsidies and other financial assistance.',
    ruralEmployment: 'Rural Employment',
    ruralEmploymentDesc: 'Employment guarantee, training and skill development opportunities.',
    shopRegistration: 'Shop & Establishment Registration',
    shopRegistrationDesc: 'Official registration for business, legal validity and welfare schemes.',
    
    // Common form fields
    firstName: 'First Name',
    middleName: 'Middle Name', 
    lastName: 'Last Name',
    fullName: 'Full Name',
    email: 'Email',
    whatsappNumber: 'WhatsApp Number',
    subject: 'Subject',
    message: 'Message',
    submit: 'Submit Application',
    submitting: 'Submitting...',
    required: 'Required',
     galleryTitle: 'Photo Gallery',
    galleryPhoto: 'Gallery Photo',
    photo: 'Photo',
    galleryLoading: 'Loading photos...',
    noPhotosAvailable: 'No photos are currently available.',
    
    // Success/Error messages
    successMessage: 'Feedback submitted successfully!',
    errorMessage: 'Error submitting feedback. Please try again.',
    
    // Services
    sevenTwelve: '7/12 Extract',
    birthCertificate: 'Birth Certificate Section',
    deathCertificate: 'Death Certificate Section', 
    marriageCertificate: 'Marriage Certificate Section',
     home: 'Home',
    villageDetails: 'Village Details',
    villagePrograms: 'Village Programs',
    gallery: 'Gallery',
    awards: 'Awards',
    announcements: 'Announcements',
    govFacilities: 'Government Facilities',
    division: 'Division',
    services: 'Citizen Services',
    contact: 'Contact',
    
    // Admin and menu
    adminLogin: 'Admin Login',
    menu: 'Menu',
    
    // Header titles
    governmentTitle: 'Government of Maharashtra | महाराष्ट्र शासन',
    panchayatName: 'Gram Panchayat Savargaon Ghat',
    panchayatLocation: 'Taluka: Patoda, District: Beed',
    
    // Service submenu items
    birthCertificate: 'Birth Certificate',
    deathCertificate: 'Death Certificate',
    marriageCertificate: 'Marriage Certificate',
    sevenTwelve: '7/12 Extract',
    namuna8: 'Namuna 8 Extract (Property Extract)',
    residentDeclaration: 'Resident Self Declaration',
    lifeDeclaration: 'Life Certificate Self Declaration',
    otherDeclarations: 'Other Self Declarations',
    houseTax: 'House Tax & Water Tax',
    awardsTitle: 'Awards and Recognitions Received by Gram Panchayat',
    noAwardsAvailable: 'No awards are currently available.',
    noMembersAvailable: 'No member information is currently available.',
    membersLoading: 'Loading member information...',
    
    // Government services section
    governmentServices: 'Government Services',
    servicesDescription: 'Get guidance and assistance for Pradhan Mantri Awas Yojana, old age pension, and other social schemes.',
    
    // Scheme names and descriptions
    pmAwasYojana: 'Pradhan Mantri Awas Yojana',
    pmAwasDescription: 'Pucca houses for the poor, subsidies, low interest rates, benefits and facilities for rural eligibility.',
    atalPensionScheme: 'Atal Pension Yojana',
    atalPensionDescription: 'Fixed retirement pension, regular scheme, government assistance, secure future and digital account.',
    nationalPensionScheme: 'National Pension Scheme',
    nationalPensionDescription: 'Mutual fund scheme, retirement savings, tax benefits, secure process, government and private employees.',
    ganeshRegistration: 'Ganesh Mandal Registration',
    povertyLineCertificate: 'Below Poverty Line Certificate'
  }
};

export const useTranslation = () => {
  const { language } = useLanguage();
  
  const t = (key) => {
    return translations[language][key] || key;
  };
  
  return { t, language };
};
