'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Category } from '@/types/type';
import { CATEGORIES, PROJECTS } from '@/lib/projects';
import { Search, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function PortfolioPage() {
    const [selectedCategory, setSelectedCategory] =
        useState<Category>('KARYA PILIHAN');

    const [searchQuery, setSearchQuery] = useState('');
    const projects = PROJECTS; // Use the imported PROJECTS directly

    const filteredProjects = useMemo(() => {
        return projects.filter((project) => {
            const matchCategory =
                selectedCategory === 'KARYA PILIHAN' ||
                project.categories.includes(selectedCategory);

            const matchSearch =
                project.title
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase()) ||
                project.location
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase()) ||
                project.category
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase()) ||
                project.client
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase());

            return matchCategory && matchSearch;
        });
    }, [projects, selectedCategory, searchQuery]);

    return (
        <div
            id="portfolio-page"
            className="pt-28 pb-24 bg-white text-neutral-900 min-h-screen"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Page Header */}
                <div className="mb-10 text-center max-w-3xl mx-auto space-y-3">
                    <p className="text-xs sm:text-sm font-bold tracking-[0.25em] text-neutral-400 uppercase">
                        — KATALOG ARSITEKTUR
                    </p>

                    <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-neutral-950 tracking-tight">
                        Portofolio Karya Kami
                    </h1>

                    <p className="text-sm sm:text-base text-neutral-500 leading-relaxed">
                        Kumpulan karya arsitektur tropis, vila mewah,
                        apartemen, hotel butik, dan desain interior eksklusif
                        yang dirancang dengan presisi estetika dan
                        fungsionalitas di Bali.
                    </p>
                </div>

                {/* Search & Filter Bar */}
                <div className="mb-8 flex flex-col md:flex-row items-center justify-between gap-4 bg-neutral-50 p-4 rounded-xs border border-neutral-200/80">

                    {/* Search */}
                    <div className="relative w-full md:w-80">
                        <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />

                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) =>
                                setSearchQuery(e.target.value)
                            }
                            placeholder="Cari nama proyek, lokasi, vila..."
                            className="w-full pl-10 pr-4 py-2 bg-white border border-neutral-200 rounded-xs text-xs sm:text-sm focus:outline-none focus:border-neutral-900 text-neutral-900 placeholder-neutral-400"
                        />
                    </div>

                    <div className="text-xs font-semibold text-neutral-500">
                        Menampilkan{' '}
                        <span className="font-bold text-neutral-900">
                            {filteredProjects.length}
                        </span>{' '}
                        dari {projects.length} Proyek
                    </div>
                </div>

                {/* Categories */}
                <div className="flex items-center justify-start overflow-x-auto no-scrollbar gap-3 sm:gap-5 pb-4 mb-10 border-b border-neutral-200">
                    {CATEGORIES.map((cat) => {
                        const isActive = selectedCategory === cat;

                        return (
                            <button
                                key={cat}
                                onClick={() =>
                                    setSelectedCategory(cat)
                                }
                                className={`relative pb-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap transition-colors cursor-pointer ${
                                    isActive
                                        ? 'text-neutral-950'
                                        : 'text-neutral-500 hover:text-neutral-800'
                                }`}
                            >
                                {cat}

                                {isActive && (
                                    <motion.div
                                        layoutId="portfolioActiveCat"
                                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-neutral-900"
                                    />
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* Projects */}
                {filteredProjects.length === 0 ? (
                    <div className="py-20 text-center space-y-4">
                        <p className="text-neutral-400 text-base">
                            Tidak ada proyek yang sesuai dengan kriteria
                            pencarian.
                        </p>

                        <button
                            onClick={() => {
                                setSelectedCategory('KARYA PILIHAN');
                                setSearchQuery('');
                            }}
                            className="px-5 py-2.5 bg-neutral-900 text-white text-xs font-bold uppercase tracking-wider rounded-xs cursor-pointer"
                        >
                            Reset Filter
                        </button>
                    </div>
                ) : (
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project, idx) => (
                                <motion.div
                                    key={project.id}
                                    layout
                                    initial={{
                                        opacity: 0,
                                        y: 20,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        scale: 0.95,
                                    }}
                                    transition={{
                                        duration: 0.35,
                                        delay: idx * 0.03,
                                    }}
                                    className="group bg-white border border-neutral-200/80 rounded-xs overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col"
                                >

                                    {/* Image */}
                                    <Link
                                        href={`/portfolio/${project.id}`}
                                        className="block focus:outline-none"
                                    >
                                        <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">

                                            <img
                                                src={project.heroImage}
                                                alt={project.title}
                                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                                                loading="lazy"
                                                referrerPolicy="no-referrer"
                                            />

                                            <div className="absolute top-3 left-3">
                                                <span className="px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase bg-black/70 text-white backdrop-blur-xs">
                                                    {project.category}
                                                </span>
                                            </div>

                                            <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <span className="p-2 bg-white text-neutral-950 rounded-xs shadow-md flex items-center justify-center">
                                                    <ArrowUpRight className="w-4 h-4" />
                                                </span>
                                            </div>

                                        </div>
                                    </Link>

                                    {/* Content */}
                                    <div className="p-5 flex-1 flex flex-col justify-between space-y-3">

                                        <div>
                                            <div className="flex items-center justify-between text-xs text-neutral-400 uppercase tracking-wider font-semibold mb-1">
                                                <span>
                                                    {project.location}
                                                </span>

                                                <span>
                                                    {project.year}
                                                </span>
                                            </div>

                                            <Link
                                                href={`/portfolio/${project.id}`}
                                                className="block focus:outline-none"
                                            >
                                                <h3 className="text-lg font-bold font-display uppercase tracking-wide text-neutral-950 group-hover:text-neutral-700 transition-colors">
                                                    {project.title}
                                                </h3>
                                            </Link>

                                            <p className="text-xs text-neutral-500 line-clamp-2 mt-1">
                                                {project.description}
                                            </p>
                                        </div>

                                        <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-600 font-medium">

                                            <span>
                                                Lahan:{' '}
                                                {project.landArea || '-'}
                                            </span>

                                            <Link
                                                href={`/portfolio/${project.id}`}
                                                className="font-bold text-neutral-950 uppercase tracking-wider hover:underline"
                                            >
                                                Detail Proyek →
                                            </Link>

                                        </div>
                                    </div>

                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                )}
            </div>
        </div>
    );
};