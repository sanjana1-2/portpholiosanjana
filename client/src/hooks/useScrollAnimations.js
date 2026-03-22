import { useEffect } from 'react';

export const useScrollAnimations = () => {
  useEffect(() => {
    // Simple scroll-based animations using CSS and vanilla JS
    const handleScroll = () => {
      // Section animations
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
          section.style.opacity = '1';
          section.style.transform = 'translateY(0)';
        }
      });

      // Parallax effect
      const parallaxElements = document.querySelectorAll('[data-parallax]');
      parallaxElements.forEach((element) => {
        const scrollPosition = window.scrollY;
        const parallaxValue = parseFloat(element.dataset.parallax) || 0.5;
        element.style.transform = `translateY(${scrollPosition * parallaxValue}px)`;
      });

      // Accent line animations
      const accentLines = document.querySelectorAll('.accent-line');
      accentLines.forEach((line) => {
        const rect = line.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;
        
        if (isVisible) {
          line.style.animation = 'accentLineDraw 1s ease-out forwards';
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};
