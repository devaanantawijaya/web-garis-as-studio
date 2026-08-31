'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const FloatingButtons: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/6281234567890?text=Halo%20Garis%20AS%20Studio%2C%20saya%20tertarik%20berkonsultasi%20rancangan%20desain%20rumah%20kayu%20modern.', '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
      {/* Scroll to top button (Black circle with chevron up matching screenshot) */}
      {showScrollTop && (
        <button
          id="scroll-to-top-btn"
          onClick={scrollToTop}
          className="w-11 h-11 bg-neutral-900/90 hover:bg-black text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-xs border border-white/20"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating WhatsApp button (Black circle with WhatsApp icon matching screenshot) */}
      <button
        id="floating-whatsapp-btn"
        onClick={openWhatsApp}
        className="w-12 h-12 bg-neutral-950 hover:bg-black text-white rounded-full flex items-center justify-center shadow-xl transition-all duration-300 transform hover:scale-105 border border-white/20"
        aria-label="Chat WhatsApp"
      >
        <svg
          className="w-6 h-6 fill-current text-white"
          viewBox="0 0 24 24"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.159.57 4.187 1.564 5.945l-1.663 6.077 6.221-1.632c1.701.928 3.649 1.454 5.722 1.454 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12zm0 21.84c-1.892 0-3.666-.549-5.163-1.492l-.37-.234-3.699.97 1.002-3.661-.247-.393c-1.042-1.654-1.643-3.612-1.643-5.71 0-5.421 4.419-9.84 9.84-9.84s9.84 4.419 9.84 9.84c0 5.421-4.419 9.84-9.84 9.84z"/>
        </svg>
      </button>
    </div>
  );
};
