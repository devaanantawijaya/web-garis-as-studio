'use client';

import { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import { GarisAsLogo } from './GarisAsLogo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const pathname = usePathname();
    const isHome = pathname === '/';

    const handleDirectWhatsApp = () => {
        const topicText =
            'Halo Garis AS Studio, saya ingin berkonsultasi mengenai rancangan rumah tinggal modern kayu. Apakah ada waktu luang untuk berdiskusi?';

        window.open(
            `https://wa.me/6281234567890?text=${encodeURIComponent(topicText)}`,
            '_blank'
        );
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navItems = [
        { label: 'HOME', path: '/', key: 'home' },
        { label: 'ABOUT', path: '/about', key: 'about' },
        { label: 'PORTFOLIO', path: '/portfolio', key: 'portfolio' },
        { label: 'CONTACT ME', path: '/contact-me', key: 'contact' },
    ];

    return (
        <header
            id="main-navbar"
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-white/95 backdrop-blur-md shadow-xs py-3.5 border-b border-neutral-200/80 text-neutral-900'
                    : isHome
                        ? 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-5 text-white'
                        : 'bg-white/95 backdrop-blur-md py-4 border-b border-neutral-200 text-neutral-900'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

                {/* Logo */}
                <Link
                    href="/"
                    id="brand-logo-btn"
                    className="flex items-center gap-3 text-left focus:outline-none"
                >
                    <GarisAsLogo
                        size="md"
                        isLightHeader={isScrolled || !isHome}
                    />
                </Link>

                {/* Navigation */}
                <nav className="hidden md:flex items-center space-x-7 lg:space-x-9">
                    {navItems.map((item) => {
                        const isActive =
                            item.path === '/'
                                ? pathname === '/'
                                : pathname.startsWith(item.path);

                        return (
                            <Link
                                key={item.key}
                                id={`nav-link-${item.key}`}
                                href={item.path}
                                className={`relative py-1 text-xs lg:text-sm font-semibold tracking-wider transition-colors duration-200 ${
                                    isActive
                                        ? isScrolled || !isHome
                                            ? 'text-neutral-950'
                                            : 'text-white'
                                        : isScrolled || !isHome
                                            ? 'text-neutral-600 hover:text-neutral-950'
                                            : 'text-white/80 hover:text-white'
                                }`}
                            >
                                {item.label}

                                {isActive && (
                                    <span
                                        className={`absolute bottom-0 left-0 right-0 h-[2px] rounded-full ${
                                            isScrolled || !isHome
                                                ? 'bg-neutral-900'
                                                : 'bg-white'
                                        }`}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </nav>

                {/* Desktop Consultation */}
                <div className="hidden md:flex items-center space-x-4">
                    <button
                        id="nav-contact-cta-btn"
                        onClick={handleDirectWhatsApp}
                        className={`flex items-center gap-1.5 px-4 py-2 rounded-xs text-xs font-bold uppercase tracking-wider transition-all shadow-xs cursor-pointer ${
                            isScrolled || !isHome
                                ? 'bg-neutral-900 text-white hover:bg-neutral-800'
                                : 'bg-white text-neutral-950 hover:bg-neutral-100'
                        }`}
                    >
                        <PhoneCall className="w-3.5 h-3.5" />
                        <span>KONSULTASI</span>
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex md:hidden items-center gap-2">
                    <button
                        id="mobile-menu-toggle-btn"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className={`p-2 rounded-xs focus:outline-none ${
                            isScrolled || !isHome
                                ? 'text-neutral-900'
                                : 'text-white'
                        }`}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Drawer */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white text-neutral-900 border-b border-neutral-200 px-6 py-5 space-y-4 shadow-xl">

                    <div className="flex flex-col space-y-3">
                        {navItems.map((item) => {
                            const isActive =
                                item.path === '/'
                                    ? pathname === '/'
                                    : pathname.startsWith(item.path);

                            return (
                                <Link
                                    key={item.key}
                                    href={item.path}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`text-left text-sm font-bold tracking-wider py-2 border-b border-neutral-100 ${
                                        isActive
                                            ? 'text-neutral-900 font-extrabold'
                                            : 'text-neutral-600'
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </div>

                    <div className="pt-2">
                        <button
                            onClick={() => {
                                setMobileMenuOpen(false);
                                handleDirectWhatsApp();
                            }}
                            className="w-full px-4 py-2.5 bg-neutral-900 text-white text-xs font-bold uppercase tracking-wider rounded-xs text-center cursor-pointer"
                        >
                            Konsultasi Desain
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};