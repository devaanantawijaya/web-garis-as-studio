'use client'

import { use, useState } from 'react';
import { PROJECTS } from '@/lib/projects';

import {
    ArrowLeft,
    Share2,
    Maximize2,
    Sparkles,
    Check,
    X,
    ChevronRight,
    ChevronLeft,
    Images,
    Eye
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';


export default function DetailProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = use(params)
    const id = slug || "";

    const allProjects = PROJECTS; // Use the imported PROJECTS directly
    const project = allProjects.find((p) => p.id === id || p.slug === id) || allProjects[0];

    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [copied, setCopied] = useState(false);

    if (!project) {
        return (
            <div className="pt-36 pb-24 text-center min-h-[60vh] flex flex-col items-center justify-center space-y-4">
                <h2 className="text-2xl font-bold">Proyek Tidak Ditemukan</h2>
                <p className="text-neutral-500">Proyek yang Anda cari tidak tersedia atau tautan salah.</p>
                <Link
                    href="/portfolio"
                    className="px-6 py-3 bg-neutral-900 text-white text-xs font-bold uppercase tracking-wider rounded-xs"
                >
                    Kembali ke Portofolio
                </Link>
            </div>
        );
    }

    const images = project.gallery && project.gallery.length > 0 ? project.gallery : [project.heroImage];
    const activeImage = images[activeImageIndex] || project.heroImage;

    // Filter related projects
    const relatedProjects = allProjects
        .filter((p) => p.id !== project.id)
        .slice(0, 3);

    const handleShare = () => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const handleWhatsAppInquiry = () => {
        const text = encodeURIComponent(
            'Halo Garis AS Studio, saya ingin berkonsultasi mengenai rancangan arsitektur dan interior rumah tinggal modern bernuansa kayu. Apakah ada waktu luang untuk berdiskusi?'
        );
        window.open(`https://wa.me/6281234567890?text=${text}`, '_blank');
    };

    const handlePrevImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setActiveImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNextImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setActiveImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div id="project-detail-page" className="pt-24 pb-24 bg-white text-neutral-900 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Navigation Breadcrumb & Back button */}
                <div className="flex items-center justify-between py-4 mb-6 border-b border-neutral-100">
                    <Link
                        id="back-to-portfolio-btn"
                        href="/portfolio"
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-700 hover:text-black transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Kembali ke Portofolio</span>
                    </Link>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={handleShare}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-neutral-600 hover:text-black border border-neutral-200 rounded-xs transition-colors cursor-pointer"
                        >
                            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
                            <span>{copied ? 'Tersalin' : 'Bagikan'}</span>
                        </button>
                    </div>
                </div>

                {/* Project Main Title (matching screenshot 3) */}
                <div className="mb-8">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1a2644] bg-neutral-100 px-2.5 py-1 rounded-xs">
                            {project.categoryTag || project.category}
                        </span>
                        <span className="text-[11px] text-neutral-400 font-semibold">•</span>
                        <span className="text-[11px] text-neutral-500 font-semibold uppercase tracking-wider">
                            {project.location}
                        </span>
                    </div>
                    <h1
                        id="project-detail-title"
                        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-950 font-display tracking-tight"
                    >
                        {project.title}
                    </h1>
                </div>

                {/* 2-Column Layout (Matching Screenshot 3) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    {/* Left Column: Main Photo & Quick Carousel */}
                    <div className="lg:col-span-7 space-y-4">
                        {/* Main Active Image */}
                        <div className="relative aspect-[4/3] w-full bg-neutral-100 overflow-hidden rounded-xs group shadow-sm">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={activeImage}
                                    src={activeImage}
                                    alt={project.title}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.25 }}
                                    className="w-full h-full object-cover object-center cursor-pointer"
                                    onClick={() => setLightboxOpen(true)}
                                    referrerPolicy="no-referrer"
                                />
                            </AnimatePresence>

                            {/* Prev / Next Overlay Controls on Main Image */}
                            {images.length > 1 && (
                                <>
                                    <button
                                        onClick={handlePrevImage}
                                        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/60 hover:bg-black text-white rounded-xs flex items-center justify-center backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                                        aria-label="Gambar sebelumnya"
                                    >
                                        <ChevronLeft className="w-5 h-5" />
                                    </button>
                                    <button
                                        onClick={handleNextImage}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/60 hover:bg-black text-white rounded-xs flex items-center justify-center backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                                        aria-label="Gambar berikutnya"
                                    >
                                        <ChevronRight className="w-5 h-5" />
                                    </button>
                                </>
                            )}

                            {/* Counter Badge */}
                            <div className="absolute top-4 left-4 px-2.5 py-1 bg-black/70 backdrop-blur-xs text-white text-[11px] font-bold rounded-xs flex items-center gap-1.5">
                                <Images className="w-3.5 h-3.5 text-amber-300" />
                                <span>{activeImageIndex + 1} / {images.length} Foto</span>
                            </div>

                            {/* Lightbox Trigger Button */}
                            <button
                                onClick={() => setLightboxOpen(true)}
                                className="absolute bottom-4 right-4 p-2.5 bg-black/70 hover:bg-black text-white rounded-xs backdrop-blur-xs flex items-center gap-1.5 text-xs font-semibold opacity-90 group-hover:opacity-100 transition-opacity cursor-pointer"
                                title="Perbesar Galeri"
                            >
                                <Maximize2 className="w-4 h-4" />
                                <span className="hidden sm:inline">Perbesar</span>
                            </button>
                        </div>

                        {/* Gallery Thumbnails */}
                        {images.length > 1 && (
                            <div className="space-y-2">
                                <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                                    PILIHAN SUDUT & DETAIL ({images.length} FOTO)
                                </p>
                                <div className="grid grid-cols-5 sm:grid-cols-6 gap-2">
                                    {images.map((img, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setActiveImageIndex(idx)}
                                            className={`relative aspect-[4/3] w-full overflow-hidden rounded-xs border-2 transition-all cursor-pointer ${activeImageIndex === idx
                                                ? 'border-[#1a2644] ring-2 ring-[#1a2644]/20 scale-102'
                                                : 'border-transparent opacity-65 hover:opacity-100'
                                                }`}
                                        >
                                            <img
                                                src={img}
                                                alt={`${project.title} ${idx + 1}`}
                                                className="w-full h-full object-cover"
                                                referrerPolicy="no-referrer"
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right Column: Metadata Specification Table (Matching Screenshot 3) */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="space-y-4 text-sm divide-y divide-neutral-200/80 bg-neutral-50 p-6 rounded-xs border border-neutral-200/80">
                            {/* LOKASI */}
                            <div className="pt-1 flex items-baseline justify-between">
                                <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                                    LOKASI
                                </span>
                                <span className="font-semibold text-neutral-900 text-right">
                                    {project.location}
                                </span>
                            </div>

                            {/* TAHUN */}
                            <div className="pt-3 flex items-baseline justify-between">
                                <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                                    TAHUN
                                </span>
                                <span className="font-semibold text-neutral-900 text-right">
                                    {project.year}
                                </span>
                            </div>

                            {/* TIPE */}
                            <div className="pt-3 flex items-baseline justify-between">
                                <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                                    TIPE
                                </span>
                                <span className="font-semibold text-neutral-900 text-right">
                                    {project.type}
                                </span>
                            </div>

                            {/* LUAS BANGUNAN */}
                            <div className="pt-3 flex items-baseline justify-between">
                                <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                                    LUAS BANGUNAN
                                </span>
                                <span className="font-semibold text-neutral-900 text-right">
                                    {project.buildingArea || '-'}
                                </span>
                            </div>

                            {/* LUAS LAHAN */}
                            <div className="pt-3 flex items-baseline justify-between">
                                <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                                    LUAS LAHAN
                                </span>
                                <span className="font-semibold text-neutral-900 text-right">
                                    {project.landArea || '-'}
                                </span>
                            </div>

                            {/* KATEGORI */}
                            <div className="pt-3 flex items-baseline justify-between">
                                <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                                    KATEGORI
                                </span>
                                <span className="font-semibold text-neutral-900 text-right">
                                    {project.category}
                                </span>
                            </div>

                            {/* DEVELOPER / KLIEN */}
                            <div className="pt-3 flex items-baseline justify-between">
                                <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                                    DEVELOPER / KLIEN
                                </span>
                                <span className="font-semibold text-neutral-900 text-right">
                                    {project.client}
                                </span>
                            </div>
                        </div>

                        {/* Action Buttons (Matching Screenshot 3) */}
                        <div className="space-y-3 pt-2">
                            {/* TANYA (White outline with dark border) */}
                            <button
                                id="project-tanya-btn"
                                onClick={handleWhatsAppInquiry}
                                className="w-full py-3.5 px-6 border-2 border-[#121b30] hover:bg-neutral-100 text-[#121b30] font-extrabold text-xs uppercase tracking-[0.25em] rounded-xs transition-colors text-center focus:outline-none cursor-pointer"
                            >
                                KONSULTASI DESAIN
                            </button>

                            {/* WHATSAPP (Solid Dark with WhatsApp icon) */}
                            <button
                                id="project-whatsapp-btn"
                                onClick={handleWhatsAppInquiry}
                                className="w-full py-3.5 px-6 bg-[#121b30] hover:bg-black text-white font-extrabold text-xs uppercase tracking-[0.25em] rounded-xs transition-colors flex items-center justify-center gap-2.5 focus:outline-none cursor-pointer shadow-xs"
                            >
                                {/* SVG WhatsApp icon */}
                                <svg
                                    className="w-4 h-4 fill-current text-white"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.159.57 4.187 1.564 5.945l-1.663 6.077 6.221-1.632c1.701.928 3.649 1.454 5.722 1.454 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12zm0 21.84c-1.892 0-3.666-.549-5.163-1.492l-.37-.234-3.699.97 1.002-3.661-.247-.393c-1.042-1.654-1.643-3.612-1.643-5.71 0-5.421 4.419-9.84 9.84-9.84s9.84 4.419 9.84 9.84c0 5.421-4.419 9.84-9.84 9.84z" />
                                </svg>
                                <span>WHATSAPP STUDIO</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Complete Project Photo Gallery Showcase Section */}
                {images.length > 1 && (
                    <div className="mt-16 pt-12 border-t border-neutral-200">
                        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
                            <div>
                                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1a2644]">
                                    EKSPLORASI DETAIL VISUAL
                                </span>
                                <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-neutral-900 mt-1">
                                    Galeri Foto & Sudut Ruang {project.title}
                                </h3>
                            </div>
                            <p className="text-xs sm:text-sm text-neutral-500">
                                Klik gambar untuk melihat dalam resolusi penuh
                            </p>
                        </div>

                        {/* Multi-Image Bento/Grid Gallery */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {images.map((img, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => {
                                        setActiveImageIndex(idx);
                                        setLightboxOpen(true);
                                    }}
                                    className="group relative aspect-[4/3] bg-neutral-100 rounded-xs overflow-hidden cursor-pointer shadow-xs hover:shadow-md transition-all"
                                >
                                    <img
                                        src={img}
                                        alt={`${project.title} - Foto ${idx + 1}`}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        referrerPolicy="no-referrer"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4 text-white">
                                        <span className="text-xs font-bold uppercase tracking-wider">
                                            Foto {idx + 1} of {images.length}
                                        </span>
                                        <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center">
                                            <Eye className="w-4 h-4" />
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Narrative & Concept Description Section */}
                <div className="mt-16 pt-12 border-t border-neutral-200 grid grid-cols-1 lg:grid-cols-12 gap-10">
                    <div className="lg:col-span-7 space-y-6">
                        <div className="space-y-2">
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1a2644]">
                                DESKRIPSI ARSITEKTUR & KAYU
                            </span>
                            <h3 className="text-2xl font-bold font-display text-neutral-900">
                                Filosofi & Konsep Desain Rumah
                            </h3>
                        </div>
                        <p className="text-base text-neutral-700 leading-relaxed">
                            {project.description}
                        </p>

                        <div className="space-y-3 pt-4">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                                Poin Kunci Konsep Rumah
                            </h4>
                            <ul className="space-y-2.5">
                                {project.conceptPoints.map((point, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm text-neutral-700">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#1a2644] mt-2 shrink-0" />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="lg:col-span-5 bg-neutral-50 p-6 sm:p-8 rounded-xs border border-neutral-200/70 space-y-6">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-200 pb-3">
                            Fasilitas & Fitur Material Kayu
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {project.features.map((feat, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-neutral-800 bg-white p-2.5 rounded-xs border border-neutral-200/60">
                                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                                    <span>{feat}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-4 border-t border-neutral-200 space-y-2">
                            <p className="text-xs text-neutral-500 leading-relaxed">
                                Ingin mendiskusikan konsep rumah tinggal kayu modern serupa untuk kebutuhan lahan Anda?
                            </p>
                            <button
                                onClick={handleWhatsAppInquiry}
                                className="text-xs font-bold text-neutral-950 underline underline-offset-4 hover:text-neutral-700 uppercase tracking-wider flex items-center gap-1.5 cursor-pointer"
                            >
                                <span>Konsultasikan dengan Arsitek Garis AS Studio</span>
                                <ChevronRight className="w-3.5 h-3.5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Related Projects Section */}
                {relatedProjects.length > 0 && (
                    <div className="mt-20 pt-14 border-t border-neutral-200">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <p className="text-xs font-bold tracking-[0.2em] text-[#1a2644] uppercase">
                                    EKSPLORASI LAINNYA
                                </p>
                                <h3 className="text-2xl font-bold font-display text-neutral-900">
                                    Proyek Rumah Terkait
                                </h3>
                            </div>
                            <Link
                                href="/portfolio"
                                className="text-xs font-bold uppercase tracking-wider text-neutral-600 hover:text-black cursor-pointer"
                            >
                                Lihat Semua
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {relatedProjects.map((rel) => (
                                <Link
                                    key={rel.id}
                                    href={`/portfolio/${rel.id}`}
                                    onClick={() => {
                                        setActiveImageIndex(0);
                                    }}
                                    className="group bg-neutral-100 rounded-xs overflow-hidden block focus:outline-none"
                                >
                                    <div className="relative aspect-[4/3] overflow-hidden">
                                        <img
                                            src={rel.heroImage}
                                            alt={rel.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            referrerPolicy="no-referrer"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-90" />
                                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                            <h4 className="font-bold text-base uppercase font-display">
                                                {rel.title}
                                            </h4>
                                            <p className="text-xs text-neutral-300">
                                                {rel.location} • {rel.year}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Fullscreen Lightbox Modal with Next / Prev */}
            {lightboxOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-8"
                    onClick={() => setLightboxOpen(false)}
                >
                    {/* Close button */}
                    <button
                        onClick={() => setLightboxOpen(false)}
                        className="absolute top-6 right-6 p-2.5 text-white/80 hover:text-white bg-neutral-900/80 hover:bg-neutral-900 rounded-full z-10 cursor-pointer"
                        aria-label="Tutup preview"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    {/* Prev / Next Navigation in Lightbox */}
                    {images.length > 1 && (
                        <>
                            <button
                                onClick={handlePrevImage}
                                className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 text-white bg-neutral-900/80 hover:bg-neutral-900 rounded-full z-10 cursor-pointer"
                                aria-label="Foto sebelumnya"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={handleNextImage}
                                className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 text-white bg-neutral-900/80 hover:bg-neutral-900 rounded-full z-10 cursor-pointer"
                                aria-label="Foto berikutnya"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </>
                    )}

                    {/* Modal Image Display */}
                    <div
                        className="relative max-w-5xl max-h-[85vh] flex flex-col items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={activeImage}
                            alt={project.title}
                            className="max-w-full max-h-[75vh] object-contain rounded-xs shadow-2xl"
                            referrerPolicy="no-referrer"
                        />
                        <div className="mt-4 text-center text-white text-xs sm:text-sm font-medium">
                            <span>{project.title}</span> — Foto {activeImageIndex + 1} dari {images.length}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};


