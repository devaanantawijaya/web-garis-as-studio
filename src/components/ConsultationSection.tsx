import React from 'react';
import { MessageSquare, Phone, Mail, CheckCircle2, TreePine, Sparkles, ArrowRight, ShieldCheck, Clock } from 'lucide-react';

export const ConsultationSection: React.FC = () => {
    const handleOpenWhatsApp = (customTopic?: string) => {
        const text = encodeURIComponent(
            customTopic
                ? `Halo Garis AS Studio, saya ingin berkonsultasi mengenai ${customTopic}. Apakah bisa dibantu?`
                : `Halo Garis AS Studio, saya tertarik berkonsultasi mengenai rancangan rumah tinggal modern bernuansa kayu. Apakah bisa dijadwalkan sesi diskusi?`
        );
        window.open(`https://wa.me/6281234567890?text=${text}`, '_blank');
    };

    return (
        <section id="konsultasi-section" className="py-20 sm:py-24 bg-[#0f1523] text-white relative overflow-hidden">
            {/* Subtle architectural grid pattern background */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-30" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    {/* Left Column: Context & Value Props */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="space-y-3">
                            <p className="text-xs sm:text-sm font-bold tracking-[0.25em] text-amber-300 uppercase">
                                — DISKUSIKAN RUMAH IMPIAN ANDA
                            </p>
                            <h2
                                id="konsultasi-title"
                                className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-white leading-tight"
                            >
                                Konsultasi Kepada Kami
                            </h2>
                            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed pt-2">
                                Wujudkan rumah tinggal impian bernuansa modern dengan sentuhan kayu alami bersama arsitek Garis AS Studio. Kami mendampingi Anda mulai dari penataan denah ruang, eksplorasi material kayu, hingga pengawasan detail konstruksi.
                            </p>
                        </div>

                        {/* Benefits list */}
                        <div className="space-y-4 pt-4 border-t border-neutral-800">
                            <div className="flex items-start gap-3.5">
                                <div className="w-8 h-8 rounded-xs bg-[#1a2644] flex items-center justify-center shrink-0 mt-0.5 text-amber-300">
                                    <CheckCircle2 className="w-4 h-4" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                                        Sesi Konsultasi Desain & Zonasi Rumah Gratis
                                    </h4>
                                    <p className="text-xs text-neutral-400">
                                        Diskusi langsung mengenai orientasi matahari, sirkulasi angin, dan kebutuhan ruang keluarga.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3.5">
                                <div className="w-8 h-8 rounded-xs bg-[#1a2644] flex items-center justify-center shrink-0 mt-0.5 text-amber-300">
                                    <TreePine className="w-4 h-4" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                                        Kurasi & Estimasi Material Kayu Alami
                                    </h4>
                                    <p className="text-xs text-neutral-400">
                                        Rekomendasi jenis kayu terbaik (jati, ulin, merbau, oak) yang tahan lama dan presisi.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3.5">
                                <div className="w-8 h-8 rounded-xs bg-[#1a2644] flex items-center justify-center shrink-0 mt-0.5 text-amber-300">
                                    <Clock className="w-4 h-4" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                                        Respon Cepat via WhatsApp Studio
                                    </h4>
                                    <p className="text-xs text-neutral-400">
                                        Layanan komunikasi fleksibel langsung terhubung ke tim arsitek tanpa perantara.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Direct contact badge */}
                        <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-neutral-400">
                            <div className="flex items-center gap-2">
                                <Phone className="w-3.5 h-3.5 text-amber-300" />
                                <span>+62 812-3456-7890</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail className="w-3.5 h-3.5 text-amber-300" />
                                <span>halo@garisasstudio.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Direct WhatsApp Action Card (No Form) */}
                    <div className="lg:col-span-7">
                        <div className="bg-[#121b30] border border-white/15 p-6 sm:p-10 rounded-xs shadow-2xl space-y-8">
                            <div className="space-y-2 border-b border-white/10 pb-6">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-xs text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                    <span>ONLINE & RESPON CEPAT</span>
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
                                    Hubungi Arsitek Langsung via WhatsApp
                                </h3>
                                <p className="text-sm text-neutral-300 leading-relaxed">
                                    Tanpa perlu mengisi formulir panjang. Klik tombol di bawah untuk langsung terhubung dan berkonsultasi mengenai rencana rumah tinggal kayu modern Anda.
                                </p>
                            </div>

                            {/* Main Prominent WhatsApp Button */}
                            <div className="space-y-3">
                                <button
                                    id="konsultasi-wa-primary-btn"
                                    onClick={() => handleOpenWhatsApp()}
                                    className="w-full py-4.5 px-6 bg-[#25D366] hover:bg-[#20ba5a] text-black font-extrabold text-sm sm:text-base uppercase tracking-[0.2em] rounded-xs transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                                >
                                    <svg
                                        className="w-6 h-6 fill-current text-black"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.159.57 4.187 1.564 5.945l-1.663 6.077 6.221-1.632c1.701.928 3.649 1.454 5.722 1.454 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12zm0 21.84c-1.892 0-3.666-.549-5.163-1.492l-.37-.234-3.699.97 1.002-3.661-.247-.393c-1.042-1.654-1.643-3.612-1.643-5.71 0-5.421 4.419-9.84 9.84-9.84s9.84 4.419 9.84 9.84c0 5.421-4.419 9.84-9.84 9.84z" />
                                    </svg>
                                    <span>CHAT WHATSAPP ARSITEK</span>
                                </button>

                                <p className="text-center text-[11px] text-neutral-400">
                                    Konsultasi awal & tanya jawab estimasi biaya tidak dipungut biaya (Free)
                                </p>
                            </div>

                            {/* Quick Topic Shortcut Buttons */}
                            <div className="space-y-3 pt-2">
                                <p className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                                    Atau Pilih Topik Konsultasi Cepat:
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                                    <button
                                        onClick={() => handleOpenWhatsApp('Rancangan Desain Rumah Tinggal Kayu Modern')}
                                        className="p-3 bg-[#0a0f1d] hover:bg-[#18233f] border border-neutral-700/80 hover:border-amber-300/60 rounded-xs text-left transition-all group cursor-pointer"
                                    >
                                        <span className="block text-xs font-bold text-white group-hover:text-amber-300">
                                            Desain Rumah Kayu
                                        </span>
                                        <span className="text-[11px] text-neutral-400 flex items-center gap-1 mt-1">
                                            Tanya denah & konsep <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </button>

                                    <button
                                        onClick={() => handleOpenWhatsApp('Estimasi Biaya & Pemilihan Material Kayu')}
                                        className="p-3 bg-[#0a0f1d] hover:bg-[#18233f] border border-neutral-700/80 hover:border-amber-300/60 rounded-xs text-left transition-all group cursor-pointer"
                                    >
                                        <span className="block text-xs font-bold text-white group-hover:text-amber-300">
                                            Biaya & Material
                                        </span>
                                        <span className="text-[11px] text-neutral-400 flex items-center gap-1 mt-1">
                                            Jenis jati/ulin/merbau <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </button>

                                    <button
                                        onClick={() => handleOpenWhatsApp('Jadwal Pertemuan / Konsultasi Online via Zoom')}
                                        className="p-3 bg-[#0a0f1d] hover:bg-[#18233f] border border-neutral-700/80 hover:border-amber-300/60 rounded-xs text-left transition-all group cursor-pointer"
                                    >
                                        <span className="block text-xs font-bold text-white group-hover:text-amber-300">
                                            Jadwal Meeting
                                        </span>
                                        <span className="text-[11px] text-neutral-400 flex items-center gap-1 mt-1">
                                            Diskusi studio/online <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </button>
                                </div>
                            </div>

                            {/* Direct Hotline Alternate */}
                            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-300">
                                <span className="text-neutral-400">Telepon / WhatsApp Studio:</span>
                                <a
                                    href="https://wa.me/6281234567890"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="font-bold text-white hover:text-amber-300 flex items-center gap-1.5"
                                >
                                    <Phone className="w-3.5 h-3.5 text-amber-300" />
                                    <span>+62 812-3456-7890</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

