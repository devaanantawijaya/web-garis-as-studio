import { GarisAsLogo } from '@/components/GarisAsLogo';
import { FaInstagram } from "react-icons/fa";
import { FiYoutube, FiPhone, FiMail } from "react-icons/fi";
import { LuMapPin } from "react-icons/lu";
import Link from 'next/link';

export const Footer = () => {
    return (
        <footer
            id="main-footer"
            className="bg-[#0e121e] text-white pt-16 pb-12 border-t border-neutral-800/80"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-neutral-800">

                    {/* Brand & Studio Summary */}
                    <div className="lg:col-span-4 space-y-5">
                        <Link
                            href="/"
                            className="text-left focus:outline-none block"
                        >
                            <GarisAsLogo size="md" inverted={true} />
                        </Link>

                        <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                            Studio arsitektur & desain interior yang berfokus menciptakan desain rumah tinggal modern dengan kehangatan elemen kayu alami, proporsi ruang yang tenang, dan pencahayaan bernuansa tropis.
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center space-x-3 pt-2">
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noreferrer"
                                className="w-9 h-9 rounded-xs bg-[#16223b] border border-white/10 hover:border-white hover:text-white text-neutral-300 flex items-center justify-center transition-colors"
                                aria-label="Instagram Garis AS Studio"
                            >
                                <FaInstagram className="w-4 h-4" />
                            </a>

                            <a
                                href="https://youtube.com"
                                target="_blank"
                                rel="noreferrer"
                                className="w-9 h-9 rounded-xs bg-[#16223b] border border-white/10 hover:border-white hover:text-white text-neutral-300 flex items-center justify-center transition-colors"
                                aria-label="YouTube Garis AS Studio"
                            >
                                <FiYoutube className="w-4 h-4" />
                            </a>

                            <a
                                href="https://tiktok.com"
                                target="_blank"
                                rel="noreferrer"
                                className="w-9 h-9 rounded-xs bg-[#16223b] border border-white/10 hover:border-white hover:text-white text-neutral-300 flex items-center justify-center transition-colors"
                                aria-label="TikTok Garis AS Studio"
                            >
                                <svg
                                    className="w-4 h-4 fill-current"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.68 6.34 6.34 0 0 0 9.33 22a6.34 6.34 0 0 0 6.34-6.32V8.2a8.3 8.3 0 0 0 4.92 1.63V6.38a4.85 4.85 0 0 1-1-.09z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Nav Links */}
                    <div className="lg:col-span-2 space-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
                            Navigasi
                        </h4>

                        <ul className="space-y-2.5 text-xs text-neutral-400 font-semibold uppercase tracking-wider">
                            <li>
                                <Link
                                    href="/"
                                    className="hover:text-white transition-colors block"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/portfolio"
                                    className="hover:text-white transition-colors block"
                                >
                                    Portofolio
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/about"
                                    className="hover:text-white transition-colors block"
                                >
                                    Tentang Kami
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/contact-me"
                                    className="hover:text-white transition-colors block"
                                >
                                    Kontak
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Kategori Proyek / Layanan */}
                    <div className="lg:col-span-3 space-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
                            Layanan Utama
                        </h4>

                        <ul className="space-y-2 text-xs text-neutral-400">
                            <li>
                                Desain Rumah Tinggal Modern Kayu
                            </li>

                            <li>
                                Arsitektur Fasad Kisi-kisi Kayu Alami
                            </li>

                            <li>
                                Interior Living & Master Suite Bernuansa Hangat
                            </li>

                            <li>
                                Custom Timber Millwork & Perabot Kayu
                            </li>

                            <li>
                                Vila & Paviliun Hunian Tropis Modern
                            </li>
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div className="lg:col-span-3 space-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
                            Studio & Workshop
                        </h4>

                        <div className="space-y-2.5 text-xs text-neutral-400">
                            <p className="flex items-start gap-2">
                                <LuMapPin className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />

                                <span>
                                    Jl. Sunset Road No. 108, Seminyak, Bali & Jakarta
                                </span>
                            </p>

                            <p className="flex items-center gap-2">
                                <FiPhone className="w-4 h-4 text-neutral-500 shrink-0" />

                                <span>
                                    +62 812-3456-7890
                                </span>
                            </p>

                            <p className="flex items-center gap-2">
                                <FiMail className="w-4 h-4 text-neutral-500 shrink-0" />

                                <span>
                                    halo@garisasstudio.com
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Copyright */}
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
                    <p>
                        © {new Date().getFullYear()} Garis AS Studio. Hak Cipta Dilindungi Undang-Undang.
                    </p>

                    <div className="flex items-center space-x-6 text-[11px]">
                        <span className="hover:text-neutral-400 cursor-pointer">
                            Kebijakan Privasi
                        </span>

                        <span>•</span>

                        <span className="hover:text-neutral-400 cursor-pointer">
                            Syarat & Ketentuan
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};