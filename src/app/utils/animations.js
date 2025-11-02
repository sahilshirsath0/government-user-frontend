// Animation utilities for mobile optimization
export const animateOnScroll = () => {
  if (typeof window === 'undefined') return;

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        entry.target.classList.add('animate-visible');
      }
    });
  }, observerOptions);

  // Observe all elements with animation classes
  const animatedElements = document.querySelectorAll('.animate-fade-in-up, .animate-slide-in-left, .animate-slide-in-right');
  
  animatedElements.forEach((el) => {
    // Set initial state
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    
    observer.observe(el);
  });

  return () => observer.disconnect();
};

// Mobile-specific animation handler
export const initMobileAnimations = () => {
  if (typeof window === 'undefined') return;

  // Check if device is mobile
  const isMobile = window.innerWidth <= 768;
  
  if (isMobile) {
    // Use intersection observer for better performance
    return animateOnScroll();
  }
  
  return null;
};
