import React, { useState, useEffect, useRef } from 'react';
import { Project } from '@/types/type';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';

interface HeroCarouselProps {
    projects: Project[];
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({
  projects
}) => {
  // Take exactly 5 featured projects
  const featuredProjects = projects.filter((p) => p.isFeaturedHero).slice(0, 5);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = featuredProjects.length || 5;
  const currentProject = featuredProjects[currentIndex] || projects[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleGoTo = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play timer (6 seconds per slide)
  useEffect(() => {
    if (!isAutoPlaying) return;
    timerRef.current = setInterval(() => {
      handleNext();
    }, 6000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, isAutoPlaying, totalSlides]);

  return (
    <section
      id="hero-carousel-section"
      className="relative w-full h-screen min-h-[640px] max-h-[1080px] bg-neutral-950 text-white overflow-hidden select-none"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Background Image Carousel with Smooth Crossfade & Subtle Zoom */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentProject.id}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={currentProject.heroImage}
            alt={currentProject.title}
            className="w-full h-full object-cover object-center brightness-[0.88] contrast-[1.05]"
            referrerPolicy="no-referrer"
          />

          {/* Vignette & Gradient Overlays for High Contrast Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/25 to-transparent w-full md:w-3/4" />
        </motion.div>
      </AnimatePresence>

      {/* Main Content Info (Positioned exactly matching image 1) */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col justify-end pb-28 sm:pb-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProject.id + '-content'}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="max-w-3xl space-y-3 sm:space-y-4"
          >
            {/* Category Subtitle */}
            <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-amber-300 uppercase">
              {currentProject.categoryTag || 'ARSITEKTUR RUMAH TINGGAL KAYU MODERN'}
            </p>

            {/* Main Bold Heading */}
            <h1
              id="hero-project-title"
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tight text-white font-display drop-shadow-md"
            >
              {currentProject.title}
            </h1>

            {/* Project Subtitle / Location */}
            <p className="text-xs sm:text-sm font-medium tracking-[0.2em] text-neutral-300 uppercase">
              {currentProject.subtitle || `${currentProject.location.toUpperCase()} | ${currentProject.category.toUpperCase()}`}
            </p>

            {/* Action Button: LIHAT PORTOFOLIO */}
            <div className="pt-4 sm:pt-6 flex items-center gap-4">
              <Link
                id="hero-view-portfolio-btn"
                href={`/portfolio/${currentProject.id}`}
                className="group relative inline-flex items-center gap-3 px-7 py-3.5 border border-white/70 bg-black/30 backdrop-blur-xs text-white text-xs sm:text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-white hover:text-black hover:border-white focus:outline-none"
              >
                <span>LIHAT PORTOFOLIO</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                id="hero-all-portfolio-btn"
                href="/portfolio"
                className="hidden sm:inline-flex items-center text-xs font-semibold tracking-[0.15em] text-white/80 hover:text-white uppercase underline underline-offset-4 decoration-white/40 hover:decoration-white transition-colors"
              >
                Semua Proyek ({projects.length})
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Bar: Indicators (Left) & Controls (Right) matching image 1 */}
      <div className="absolute bottom-8 sm:bottom-12 left-0 right-0 z-30 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-end justify-between">
        {/* Left: 5 Slide Bars */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {featuredProjects.map((_, idx) => (
            <button
              key={idx}
              id={`hero-indicator-${idx}`}
              onClick={() => handleGoTo(idx)}
              className="group py-2 focus:outline-none cursor-pointer"
              aria-label={`Go to slide ${idx + 1}`}
            >
              <div
                className={`h-[2.5px] sm:h-[3px] rounded-full transition-all duration-500 ${
                  currentIndex === idx
                    ? 'w-10 sm:w-16 bg-white shadow-xs'
                    : 'w-6 sm:w-8 bg-white/35 group-hover:bg-white/60'
                }`}
              />
            </button>
          ))}
        </div>

        {/* Right: Slide Counter & Nav Arrows */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Slide Counter (03 / 05 formatted) */}
          <div className="flex flex-col items-center text-right font-mono text-xs sm:text-sm tracking-wider">
            <span className="font-bold text-white">
              {String(currentIndex + 1).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs text-neutral-400">
              {String(totalSlides).padStart(2, '0')}
            </span>
          </div>

          {/* Navigation Arrows in translucent border boxes */}
          <div className="flex items-center space-x-1.5 sm:space-x-2">
            <button
              id="hero-prev-btn"
              onClick={handlePrev}
              className="p-2 sm:p-2.5 border border-white/30 bg-black/40 backdrop-blur-xs text-white/80 hover:text-white hover:border-white/80 hover:bg-black/60 transition-all focus:outline-none cursor-pointer"
              aria-label="Previous Project"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              id="hero-next-btn"
              onClick={handleNext}
              className="p-2 sm:p-2.5 border border-white/30 bg-black/40 backdrop-blur-xs text-white/80 hover:text-white hover:border-white/80 hover:bg-black/60 transition-all focus:outline-none cursor-pointer"
              aria-label="Next Project"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

