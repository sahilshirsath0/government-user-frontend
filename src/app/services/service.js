// app/services/service.js - COMPLETE VERSION with Marathi date formatting

import axios from 'axios';

// Use environment variable or fallback  
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://government-backend-dbhv.onrender.com/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('admin_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    if (!(config.data instanceof FormData)) {
      config.headers['Content-Type'] = 'application/json';
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('admin_token');
    }
    return Promise.reject(error);
  }
);

// ====================
// CONSTANTS & DEFAULTS
// ====================

export const DEFAULTS = {
  DEFAULT_IMAGE: '/default_image.png',
  NO_AWARDS: 'सध्या कोणतेही बक्षीस उपलब्ध नाही.',
  NO_MEMBERS: 'सध्या कोणतेही सदस्य माहिती उपलब्ध नाही.',
  NO_NEWS: 'सध्या कोणत्याही बातम्या उपलब्ध नाहीत.',
  NO_GALLERY: 'सध्या कोणतेही फोटो उपलब्ध नाहीत.',
  DEFAULT_TITLE: 'शीर्षक लवकरच',
  DEFAULT_DESCRIPTION: 'माहिती लवकरच उपलब्ध होईल',
};

// ====================
// UTILITY FUNCTIONS
// ====================

// Marathi date formatter function
const formatMarathiDate = (dateString) => {
  if (!dateString) return 'तारीख अनुपलब्ध';
  
  const date = new Date(dateString);
  const day = date.getDate();
  const year = date.getFullYear();
  
  // Marathi month names
  const marathiMonths = [
    'जानेवारी', 'फेब्रुवारी', 'मार्च', 'एप्रिल', 'मे', 'जून',
    'जुलै', 'ऑगस्ट', 'सप्टेंबर', 'ऑक्टोबर', 'नोव्हेंबर', 'डिसेंबर'
  ];
  
  const month = marathiMonths[date.getMonth()];
  
  return `${day} ${month} ${year}`;
};

// ====================
// DATA FORMATTERS
// ====================

export const dataFormatters = {
  // Format image - CORRECTED for your backend data structure
  formatImage: (imageObj) => {
    console.log('Image object received:', imageObj); // Debug log
    
    // Check if imageObj exists and has data
    if (!imageObj || !imageObj.data || imageObj.data.trim() === '') {
      console.log('No image data, using default');
      return DEFAULTS.DEFAULT_IMAGE;
    }
    
    // Your backend already returns complete data URL: "data:image/png;base64,..."
    const dataUrl = imageObj.data;
    console.log('Using data URL (first 50 chars):', dataUrl.substring(0, 50) + '...');
    
    return dataUrl;
  },
  
  // Format text with fallback
  formatText: (text, defaultText = DEFAULTS.DEFAULT_TITLE) => {
    return text && text.trim() !== '' && text !== 'null' ? text : defaultText;
  },
  
  // Format array
  formatArray: (array) => {
    return Array.isArray(array) && array.length > 0 ? array : [];
  },
  
  // Format award from your exact database schema - UPDATED with Marathi date
  formatAward: (award) => {
    console.log('Raw award from database:', award); // Debug log
    
    const colors = ['text-red-600', 'text-blue-600', 'text-green-600', 'text-purple-600', 'text-orange-600'];
    const icons = ['🏆', '🏅', '🎖️', '🥇', '🌟'];
    
    const formattedAward = {
      id: award._id,
      title: dataFormatters.formatText(award.name, 'पुरस्कार'),
      name: dataFormatters.formatText(award.name, 'पुरस्कार'),
      description: dataFormatters.formatText(award.description, DEFAULTS.DEFAULT_DESCRIPTION),
      image: dataFormatters.formatImage(award.image), // This will use the data URL directly
      year: award.awardDate ? new Date(award.awardDate).getFullYear() : new Date().getFullYear(),
      marathiDate: formatMarathiDate(award.awardDate), // ADD: Marathi formatted date
      awardDate: award.awardDate,
      isActive: award.isActive,
      // Random icons and colors
      icon: icons[Math.floor(Math.random() * icons.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
      subtitle: `${award.awardDate ? new Date(award.awardDate).getFullYear() : new Date().getFullYear()}`
    };
    
    console.log('Formatted award:', formattedAward); // Debug log
    return formattedAward;
  },
  
  // Format member from database schema - UPDATED for your backend
  formatMember: (member) => {
  console.log('Raw member from database:', member); // Debug log
  
  const formattedMember = {
    id: member._id,
    name: dataFormatters.formatText(member.name, 'सदस्य'),
    position: dataFormatters.formatText(member.position, 'सदस्य'),
    department: dataFormatters.formatText(member.department, ''),
    email: dataFormatters.formatText(member.email, ''),
    phone: dataFormatters.formatText(member.phone, 'संपर्क लवकरच'),
    image: dataFormatters.formatImage(member.image), // This handles base64 data
    isActive: member.isActive,
    createdAt: member.createdAt,
    marathiDate: formatMarathiDate(member.createdAt)
  };
  
  console.log('Formatted member:', formattedMember); // Debug log
  return formattedMember;
},
  
  // Format announcement/news
  formatNews: (news) => ({
    id: news._id,
    title: dataFormatters.formatText(news.title, 'बातमी'),
    description: dataFormatters.formatText(news.description, DEFAULTS.DEFAULT_DESCRIPTION),
    content: dataFormatters.formatText(news.content, ''),
    image: dataFormatters.formatImage(news.image),
    date: news.createdAt || news.date,
    marathiDate: formatMarathiDate(news.createdAt || news.date), // ADD: Marathi date for news too
    isActive: news.isActive
  }),
  
  // Format gallery item
  formatGallery: (item) => ({
    id: item._id,
    title: dataFormatters.formatText(item.title, 'फोटो'),
    description: dataFormatters.formatText(item.description, ''),
    image: dataFormatters.formatImage(item.image),
    date: item.createdAt || item.date,
    marathiDate: formatMarathiDate(item.createdAt || item.date), // ADD: Marathi date for gallery too
    isActive: item.isActive
  })
};

// ====================
// PUBLIC API SERVICES - Based on your working admin API structure
// ====================

export const publicAPI = {
  // Public Awards - Using your exact endpoint pattern
  getAwards: async () => {
    try {
      console.log('Fetching awards from public API...'); // Debug log
      
      const response = await api.get('/awards/public'); // Try public first
      
      console.log('Raw API response:', response.data); // Debug log
      
      if (response.data.success && response.data.data && response.data.data.length > 0) {
        const awards = response.data.data;
        console.log('Awards received:', awards.length); // Debug log
        
        // Format the awards
        const formattedAwards = awards.map(award => dataFormatters.formatAward(award));
        
        console.log('Formatted awards:', formattedAwards); // Debug log
        
        return {
          data: {
            data: formattedAwards,
            success: true
          }
        };
      } else {
        console.log('No awards found in response');
        return {
          data: {
            data: [],
            success: false,
            message: DEFAULTS.NO_AWARDS
          }
        };
      }
    } catch (error) {
      console.error('Public awards failed, trying admin endpoint:', error.message);
      
      // Fallback to admin endpoint if public fails
      try {
        const response = await api.get('/awards');
        if (response.data.success && response.data.data && response.data.data.length > 0) {
          const awards = response.data.data.filter(award => award.isActive === true);
          const formattedAwards = awards.map(award => dataFormatters.formatAward(award));
          
          return {
            data: {
              data: formattedAwards,
              success: true
            }
          };
        }
      } catch (adminError) {
        console.error('Admin awards also failed:', adminError.message);
      }
      
      return {
        data: {
          data: [],
          success: false,
          message: DEFAULTS.NO_AWARDS
        }
      };
    }
  },
  
  // Public Members - Using your exact endpoint pattern
  getMembers: async () => {
    try {
      console.log('Fetching members from public API...'); // Debug log
      
      const response = await api.get('/members/public'); // Try public first
      
      console.log('Raw members API response:', response.data); // Debug log
      
      if (response.data.success && response.data.data && response.data.data.length > 0) {
        const members = response.data.data;
        console.log('Members received:', members.length); // Debug log
        
        // Format the members
        const formattedMembers = members.map(member => dataFormatters.formatMember(member));
        
        console.log('Formatted members:', formattedMembers); // Debug log
        
        return {
          data: {
            data: formattedMembers,
            success: true
          }
        };
      } else {
        console.log('No members found in response');
        return {
          data: {
            data: [],
            success: false,
            message: DEFAULTS.NO_MEMBERS
          }
        };
      }
    } catch (error) {
      console.error('Public members failed, trying admin endpoint:', error.message);
      
      // Fallback to admin endpoint if public fails
      try {
        const response = await api.get('/members');
        if (response.data.success && response.data.data && response.data.data.length > 0) {
          const members = response.data.data.filter(member => member.isActive === true);
          const formattedMembers = members.map(member => dataFormatters.formatMember(member));
          
          return {
            data: {
              data: formattedMembers,
              success: true
            }
          };
        }
      } catch (adminError) {
        console.error('Admin members also failed:', adminError.message);
      }
      
      return {
        data: {
          data: [],
          success: false,
          message: DEFAULTS.NO_MEMBERS
        }
      };
    }
  },
  
  // Public Announcements/News
  getAnnouncements: async () => {
  try {
    console.log('Fetching announcements from public API...'); // Debug log
    
    const response = await api.get('/announcements/public'); // Try public first
    
    console.log('Raw announcements API response:', response.data); // Debug log
    
    if (response.data.success && response.data.data && response.data.data.length > 0) {
      const announcements = response.data.data;
      console.log('Announcements received:', announcements.length); // Debug log
      
      return {
        data: {
          data: announcements,
          success: true
        }
      };
    } else {
      console.log('No announcements found in response');
      return {
        data: {
          data: [],
          success: false,
          message: DEFAULTS.NO_NEWS
        }
      };
    }
  } catch (error) {
    console.error('Public announcements failed, trying admin endpoint:', error.message);
    
    // Fallback to admin endpoint if public fails
    try {
      const response = await api.get('/announcements');
      if (response.data.success && response.data.data && response.data.data.length > 0) {
        const announcements = response.data.data.filter(announcement => announcement.isActive === true);
        
        return {
          data: {
            data: announcements,
            success: true
          }
        };
      }
    } catch (adminError) {
      console.error('Admin announcements also failed:', adminError.message);
    }
    
    return {
      data: {
        data: [],
        success: false,
        message: DEFAULTS.NO_NEWS
      }
    };
  }
},
  
  // Public Gallery
  getGallery: async () => {
  try {
    console.log('Fetching gallery from public API...'); // Debug log
    
    const response = await api.get('/gallery'); // Try public first
    
    console.log('Raw gallery API response:', response.data); // Debug log
    
    if (response.data.success && response.data.data && response.data.data.length > 0) {
      const gallery = response.data.data;
      console.log('Gallery items received:', gallery.length); // Debug log
      
      return {
        data: {
          data: gallery,
          success: true
        }
      };
    } else {
      console.log('No gallery items found in response');
      return {
        data: {
          data: [],
          success: false,
          message: DEFAULTS.NO_GALLERY
        }
      };
    }
  } catch (error) {
    console.error('Public gallery failed, trying admin endpoint:', error.message);
    
    // Fallback to admin endpoint if public fails
    try {
      const response = await api.get('/gallery');
      if (response.data.success && response.data.data && response.data.data.length > 0) {
        const gallery = response.data.data.filter(item => item.isActive === true);
        
        return {
          data: {
            data: gallery,
            success: true
          }
        };
      }
    } catch (adminError) {
      console.error('Admin gallery also failed:', adminError.message);
    }
    
    return {
      data: {
        data: [],
        success: false,
        message: DEFAULTS.NO_GALLERY
      }
    };
  }
},
  
  // Village Statistics (placeholder)
  getVillageStats: async () => {
    try {
      const response = await api.get('/village/stats');
      return response;
    } catch (error) {
      console.error('Error fetching village stats:', error);
      return {
        data: {
          data: {
            literacy: 98,
            waterSupply: 100,
            electricity: 100,
            healthService: 100
          }
        }
      };
    }
  },
  
  // Village Details
// Public Village Details - UPDATED for your exact backend structure
getVillageDetails: async () => {
  try {
    console.log('Fetching village details from API...'); // Debug log
    
    // Use your existing admin endpoint directly since it works
    const response = await api.get('/village-details');
    
    console.log('Raw village details API response:', response.data); // Debug log
    
    // Your backend returns: { success: true, data: [...] }
    if (response.data.success && response.data.data && response.data.data.length > 0) {
      const villageDetails = response.data.data;
      console.log('Village details received:', villageDetails.length); // Debug log
      
      // Filter only active village details
      const activeDetails = villageDetails.filter(detail => detail.isActive === true);
      console.log('Active village details:', activeDetails.length); // Debug log
      
      return {
        data: {
          data: activeDetails,
          success: true
        }
      };
    } else {
      console.log('No village details found in response');
      return {
        data: {
          data: [],
          success: false,
          message: 'सध्या गाव माहिती उपलब्ध नाही.'
        }
      };
    }
  } catch (error) {
    console.error('Error fetching village details:', error.response?.data || error.message);
    return {
      data: {
        data: [],
        success: false,
        message: 'सध्या गाव माहिती उपलब्ध नाही.'
      }
    };
  }
},

  // Programs
  // Public Programs - UPDATED for your exact backend structure
getPrograms: async () => {
  try {
    console.log('Fetching programs from API...'); // Debug log
    
    // Use your existing admin endpoint directly since it works
    const response = await api.get('/programs');
    
    console.log('Raw programs API response:', response.data); // Debug log
    
    // Your backend returns: { success: true, data: [...] }
    if (response.data.success && response.data.data && response.data.data.length > 0) {
      const programs = response.data.data;
      console.log('Programs received:', programs.length); // Debug log
      
      // Filter only active programs
      const activePrograms = programs.filter(program => program.isActive === true);
      console.log('Active programs:', activePrograms.length); // Debug log
      
      return {
        data: {
          data: activePrograms,
          success: true
        }
      };
    } else {
      console.log('No programs found in response');
      return {
        data: {
          data: [],
          success: false,
          message: 'सध्या कोणते कार्यक्रम उपलब्ध नाहीत.'
        }
      };
    }
  } catch (error) {
    console.error('Error fetching programs:', error.response?.data || error.message);
    return {
      data: {
        data: [],
        success: false,
        message: 'सध्या कोणते कार्यक्रम उपलब्ध नाहीत.'
      }
    };
  }
},

  
  // Submit Feedback
  submitFeedback: (data) => api.post('/feedback', data),
  
  // Submit Contact Form
  submitContactForm: (data) => api.post('/contact/submit', data),
  
  // Nagrik Seva
  // Add to your existing publicAPI object in service.js

// Get Nagrik Seva Header Image
getNagrikSevaHeader: async () => {
  try {
    console.log('Fetching nagrik seva header image...');
    
    const response = await api.get('/nagrik-seva/header');
    
    console.log('Nagrik seva header response:', response.data);
    
    if (response.data.success && response.data.data) {
      return {
        data: {
          data: response.data.data,
          success: true
        }
      };
    } else {
      return {
        data: {
          data: null,
          success: false,
          message: 'हेडर इमेज उपलब्ध नाही.'
        }
      };
    }
  } catch (error) {
    console.error('Error fetching nagrik seva header:', error.response?.data || error.message);
    return {
      data: {
        data: null,
        success: false,
        message: 'हेडर इमेज लोड करण्यात त्रुटी.'
      }
    };
  }
},

// Submit Nagrik Seva Application
submitNagrikSevaApplication: async (applicationData) => {
  try {
    console.log('Submitting nagrik seva application...');
    
    const response = await api.post('/nagrik-seva/apply', applicationData);
    
    console.log('Application submission response:', response.data);
    
    if (response.data.success) {
      return {
        data: {
          data: response.data.data,
          success: true,
          message: response.data.message || 'अर्ज यशस्वीरित्या सबमिट झाला!'
        }
      };
    } else {
      return {
        data: {
          success: false,
          message: response.data.message || 'अर्ज सबमिट करण्यात त्रुटी झाली.'
        }
      };
    }
  } catch (error) {
    console.error('Error submitting application:', error.response?.data || error.message);
    return {
      data: {
        success: false,
        message: error.response?.data?.message || 'अर्ज सबमिट करण्यात त्रुटी झाली. कृपया पुन्हा प्रयत्न करा.'
      }
    };
  }
}

};

// Export the formatMarathiDate function for direct use if needed
export { formatMarathiDate };

export default api;
