import React, { useState, useMemo } from 'react';
import { Project, Category } from '@/types/type';
import { CATEGORIES } from '@/lib/projects';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';

interface ProyekPilihanProps {
    projects: Project[];
}

export const ProyekPilihan: React.FC<ProyekPilihanProps> = ({
    projects
}) => {
    const [activeCategory, setActiveCategory] = useState<Category>('KARYA PILIHAN');

    // Filter projects according to category, taking up to 9 for the homepage
    const displayedProjects = useMemo(() => {
        let filtered = projects;
        if (activeCategory !== 'KARYA PILIHAN') {
            filtered = projects.filter((p) => p.categories.includes(activeCategory));
            // Fallback if few items in exact category
            if (filtered.length === 0) {
                filtered = projects;
            }
        }
        return filtered.slice(0, 9);
    }, [projects, activeCategory]);

    return (
        <section id="proyek-pilihan-section" className="py-20 sm:py-24 bg-white text-neutral-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header (matching screenshot 2) */}
                <div className="text-center space-y-2 mb-10 sm:mb-14">
                    <p className="text-xs sm:text-sm font-bold tracking-[0.25em] text-neutral-600 uppercase flex items-center justify-center gap-2">
                        <span>—</span>
                        <span>KARYA KAMI</span>
                    </p>
                    <h2
                        id="proyek-pilihan-title"
                        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-950 font-display tracking-tight"
                    >
                        Proyek Pilihan
                    </h2>
                </div>

                {/* Filter Categories Bar (matching screenshot 2) */}
                <div className="flex items-center justify-start md:justify-center overflow-x-auto no-scrollbar gap-4 sm:gap-6 pb-4 mb-8 border-b border-neutral-100 px-2">
                    {CATEGORIES.map((cat) => {
                        const isActive = activeCategory === cat;
                        return (
                            <button
                                key={cat}
                                id={`filter-category-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                                onClick={() => setActiveCategory(cat)}
                                className={`relative pb-3 text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap transition-colors duration-200 cursor-pointer ${isActive ? 'text-neutral-950' : 'text-neutral-500 hover:text-neutral-800'
                                    }`}
                            >
                                {cat}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeCategoryIndicator"
                                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-neutral-900"
                                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* 9 Projects Grid (3x3 on desktop) */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {displayedProjects.map((project, idx) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.96 }}
                                transition={{ duration: 0.4, delay: idx * 0.04 }}
                                className="group relative overflow-hidden bg-neutral-100 rounded-xs shadow-xs"
                            >
                                <Link
                                    href={`/portfolio/${project.id}`}
                                    className="block relative w-full h-full focus:outline-none"
                                >
                                    {/* Image Container with Aspect Ratio (4:3 or 16:10) */}
                                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                                        <img
                                            src={project.heroImage}
                                            alt={project.title}
                                            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                                            loading="lazy"
                                            referrerPolicy="no-referrer"
                                        />

                                        {/* Gradient Overlay for Text Readability */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300" />

                                        {/* Top Category Badge */}
                                        <div className="absolute top-4 left-4 z-10">
                                            <span className="px-2.5 py-1 text-[10px] font-bold tracking-widest uppercase bg-black/60 backdrop-blur-xs text-white border border-white/20">
                                                {project.category}
                                            </span>
                                        </div>

                                        {/* Bottom Text Content (matching screenshot 2 style: CASA INFINITO / CANGGU, BALI 2023) */}
                                        <div className="absolute bottom-0 left-0 right-0 p-5 z-10 text-white flex flex-col justify-end">
                                            <div className="space-y-1">
                                                <h3 className="text-lg sm:text-xl font-bold uppercase tracking-wide font-display text-white group-hover:text-amber-200 transition-colors">
                                                    {project.title}
                                                </h3>
                                                <div className="flex items-center gap-2 text-xs font-medium text-neutral-300 uppercase tracking-wider">
                                                    <span>{project.location}</span>
                                                    <span>•</span>
                                                    <span>{project.year}</span>
                                                </div>
                                            </div>

                                            {/* Hover detail indicator */}
                                            <div className="mt-3 pt-2 border-t border-white/20 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <span className="text-[11px] font-bold tracking-wider uppercase text-white/90">
                                                    Lihat Detail Proyek
                                                </span>
                                                <ArrowRight className="w-4 h-4 text-white transform group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Bottom CTA: "Lihat Portofolio Lainnya" (Directs to portfolio page via Link) */}
                <div className="mt-14 sm:mt-16 text-center">
                    <Link
                        id="view-all-portfolio-btn"
                        href="/portfolio"
                        className="group inline-flex items-center gap-3 px-8 py-4 bg-neutral-900 hover:bg-neutral-800 text-white text-xs sm:text-sm font-bold uppercase tracking-[0.2em] rounded-xs transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none"
                    >
                        <span>LIHAT PORTOFOLIO LAINNYA</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </section>
    );
};


