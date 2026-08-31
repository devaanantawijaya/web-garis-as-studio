'use client';

import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

export default function ContactMePage() {
    const handleWhatsApp = (topic?: string) => {
        const text = encodeURIComponent(
            topic
                ? `Halo Garis AS Studio, saya ingin berkonsultasi mengenai ${topic}.`
                : `Halo Garis AS Studio, saya ingin mendiskusikan rancangan arsitektur rumah tinggal bernuansa kayu modern.`
        );
        window.open(`https://wa.me/6281234567890?text=${text}`, '_blank');
    };

    return (
        <div id="contact-page" className="pt-28 pb-24 bg-white text-neutral-900 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto space-y-3">
                    <p className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#1a2644] uppercase">
                        — HUBUNGI GARIS AS STUDIO
                    </p>
                    <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-neutral-950 tracking-tight">
                        Mari Mulai Berdiskusi
                    </h1>
                    <p className="text-sm sm:text-base text-neutral-600">
                        Kunjungi studio kami atau langsung hubungi arsitek kami via WhatsApp untuk konsultasi denah, fasad kayu, dan estimasi proyek rumah tinggal.
                    </p>
                </div>

                {/* Contact Information & WhatsApp Action Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Left: Office Locations */}
                    <div className="lg:col-span-5 space-y-6">
                        {/* Main Studio */}
                        <div className="p-6 bg-neutral-50 rounded-xs border border-neutral-200/80 space-y-4">
                            <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
                                <h3 className="font-bold text-base uppercase font-display text-neutral-900">
                                    Garis AS Studio Headquarters
                                </h3>
                                <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 bg-[#121b30] text-white">
                                    Main Studio
                                </span>
                            </div>
                            <div className="space-y-3 text-xs sm:text-sm text-neutral-700">
                                <div className="flex items-start gap-3">
                                    <MapPin className="w-4 h-4 text-[#1a2644] shrink-0 mt-0.5" />
                                    <span>Jl. Senopati Raya No. 28, Kebayoran Baru, Jakarta Selatan 12190</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone className="w-4 h-4 text-[#1a2644] shrink-0" />
                                    <span>+62 812-3456-7890 / +62 (21) 7288 1902</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Mail className="w-4 h-4 text-[#1a2644] shrink-0" />
                                    <span>halo@garisasstudio.com</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Clock className="w-4 h-4 text-[#1a2644] shrink-0" />
                                    <span>Senin - Sabtu: 09.00 - 18.00 WIB</span>
                                </div>
                            </div>
                        </div>

                        {/* Bali Studio */}
                        <div className="p-6 bg-neutral-50 rounded-xs border border-neutral-200/80 space-y-4">
                            <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
                                <h3 className="font-bold text-base uppercase font-display text-neutral-900">
                                    Bali Workshop & Design Gallery
                                </h3>
                                <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 bg-neutral-200 text-neutral-800">
                                    By Appointment
                                </span>
                            </div>
                            <div className="space-y-3 text-xs sm:text-sm text-neutral-700">
                                <div className="flex items-start gap-3">
                                    <MapPin className="w-4 h-4 text-[#1a2644] shrink-0 mt-0.5" />
                                    <span>Jl. Sunset Road No. 88, Seminyak, Kuta, Bali 80361</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone className="w-4 h-4 text-[#1a2644] shrink-0" />
                                    <span>+62 (361) 8499 123</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Mail className="w-4 h-4 text-[#1a2644] shrink-0" />
                                    <span>project@garisasstudio.com</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Direct WhatsApp Hub (No Form) */}
                    <div className="lg:col-span-7 bg-[#121b30] text-white p-8 sm:p-10 rounded-xs space-y-8 flex flex-col justify-between">
                        <div className="space-y-6">
                            <div className="space-y-2 border-b border-white/10 pb-5">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-xs text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                    <span>KONSULTASI LANGSUNG DENGAN ARSITEK</span>
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-bold font-display uppercase tracking-wide text-white">
                                    Kirim Pesan WhatsApp
                                </h3>
                                <p className="text-sm text-neutral-300 leading-relaxed">
                                    Tidak perlu mengisi formulir panjang. Dapatkan respon cepat dan panduan langsung dari tim arsitek Garis AS Studio melalui pesan WhatsApp resmi kami.
                                </p>
                            </div>

                            {/* Big Primary WhatsApp Button */}
                            <div className="space-y-3">
                                <button
                                    onClick={() => handleWhatsApp()}
                                    className="w-full py-4.5 px-6 bg-[#25D366] hover:bg-[#20ba5a] text-black font-extrabold text-sm sm:text-base uppercase tracking-[0.2em] rounded-xs transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                                >
                                    <svg
                                        className="w-6 h-6 fill-current text-black"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.159.57 4.187 1.564 5.945l-1.663 6.077 6.221-1.632c1.701.928 3.649 1.454 5.722 1.454 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12zm0 21.84c-1.892 0-3.666-.549-5.163-1.492l-.37-.234-3.699.97 1.002-3.661-.247-.393c-1.042-1.654-1.643-3.612-1.643-5.71 0-5.421 4.419-9.84 9.84-9.84s9.84 4.419 9.84 9.84c0 5.421-4.419 9.84-9.84 9.84z" />
                                    </svg>
                                    <span>CHAT WHATSAPP ARSITEK GARIS AS</span>
                                </button>
                                <p className="text-center text-[11px] text-neutral-400">
                                    Nomor Resmi: +62 812-3456-7890 (Online Setiap Hari)
                                </p>
                            </div>

                            {/* Quick Topic Prompts */}
                            <div className="space-y-3 pt-2">
                                <p className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                                    Pilihan Topik Diskusi Cepat:
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                                    <button
                                        onClick={() => handleWhatsApp('Desain & Denah Rumah Kayu Modern')}
                                        className="p-3 bg-[#0a0f1d] hover:bg-[#18233f] border border-neutral-700/80 hover:border-amber-300/60 rounded-xs text-left transition-all group cursor-pointer"
                                    >
                                        <span className="block text-xs font-bold text-white group-hover:text-amber-300">
                                            Rencana Desain
                                        </span>
                                        <span className="text-[11px] text-neutral-400 flex items-center gap-1 mt-1">
                                            Denah & fasad <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </button>

                                    <button
                                        onClick={() => handleWhatsApp('Estimasi Biaya & Struktur Kayu Jati/Ulin/Merbau')}
                                        className="p-3 bg-[#0a0f1d] hover:bg-[#18233f] border border-neutral-700/80 hover:border-amber-300/60 rounded-xs text-left transition-all group cursor-pointer"
                                    >
                                        <span className="block text-xs font-bold text-white group-hover:text-amber-300">
                                            Estimasi Biaya
                                        </span>
                                        <span className="text-[11px] text-neutral-400 flex items-center gap-1 mt-1">
                                            RAB & material <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </button>

                                    <button
                                        onClick={() => handleWhatsApp('Jadwal Pertemuan / Konsultasi Daring Zoom')}
                                        className="p-3 bg-[#0a0f1d] hover:bg-[#18233f] border border-neutral-700/80 hover:border-amber-300/60 rounded-xs text-left transition-all group cursor-pointer"
                                    >
                                        <span className="block text-xs font-bold text-white group-hover:text-amber-300">
                                            Jadwal Diskusi
                                        </span>
                                        <span className="text-[11px] text-neutral-400 flex items-center gap-1 mt-1">
                                            Studio / Online <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Email Alternative */}
                        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-400">
                            <span>Pertanyaan melalui email:</span>
                            <a
                                href="mailto:halo@garisasstudio.com"
                                className="text-amber-300 font-bold hover:underline flex items-center gap-1.5"
                            >
                                <Mail className="w-3.5 h-3.5" />
                                <span>halo@garisasstudio.com</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
