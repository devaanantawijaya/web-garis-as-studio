import { TreePine, Home, SunMedium, Hammer } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
    return (
        <div id="about-page" className="pt-28 pb-24 bg-white text-neutral-900 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
                {/* Hero Section */}
                <div className="max-w-3xl mx-auto text-center space-y-4">
                    <p className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#1a2644] uppercase">
                        — TENTANG GARIS AS STUDIO
                    </p>
                    <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-neutral-950 tracking-tight leading-tight">
                        Spesialis Desain Rumah Tinggal Modern Bernuansa Kayu Hangat
                    </h1>
                    <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                        Garis AS Studio mendedikasikan keahlian arsitektur untuk merancang hunian tinggal modern yang nyaman, tenang, dan berjiwa. Kami memadukan kejernihan garis arsitektur kontemporer dengan kekayaan tekstur serta kehangatan organik dari material kayu alami.
                    </p>
                </div>

                {/* Big Studio & Wood Craft Image Showcase */}
                <div className="relative rounded-xs overflow-hidden shadow-xl bg-neutral-950 text-white">
                    <div className="relative aspect-[21/9] sm:aspect-[21/8] min-h-[340px] overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop"
                            alt="Garis AS Studio - Modern Wood Residence"
                            className="w-full h-full object-cover brightness-90"
                            referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0e1424] via-black/40 to-transparent" />
                        <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 text-white max-w-2xl">
                            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-amber-300">
                                FILOSOFI MATERIALITAS
                            </span>
                            <h2 className="text-xl sm:text-3xl font-bold font-display mt-1">
                                "Kayu bukan sekadar material, melainkan jiwa yang menghadirkan kehangatan sejati ke dalam sebuah rumah tinggal."
                            </h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 sm:p-10 bg-[#0f172a] border-t border-neutral-800">
                        <div className="space-y-1">
                            <span className="text-3xl sm:text-4xl font-extrabold text-white font-display">85+</span>
                            <p className="text-xs uppercase tracking-wider text-neutral-400 font-bold">Desain Rumah Tinggal</p>
                        </div>
                        <div className="space-y-1">
                            <span className="text-3xl sm:text-4xl font-extrabold text-white font-display">100%</span>
                            <p className="text-xs uppercase tracking-wider text-neutral-400 font-bold">Kayu Pilihan Berkualitas</p>
                        </div>
                        <div className="space-y-1">
                            <span className="text-3xl sm:text-4xl font-extrabold text-white font-display">10+</span>
                            <p className="text-xs uppercase tracking-wider text-neutral-400 font-bold">Tahun Eksplorasi Arsitektur</p>
                        </div>
                        <div className="space-y-1">
                            <span className="text-3xl sm:text-4xl font-extrabold text-white font-display">99%</span>
                            <p className="text-xs uppercase tracking-wider text-neutral-400 font-bold">Kepuasan Pemilik Rumah</p>
                        </div>
                    </div>
                </div>

                {/* 4 Pilar Pendekatan Desain Rumah Tinggal Kayu Modern */}
                <div className="space-y-10">
                    <div className="text-center space-y-2 max-w-2xl mx-auto">
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">
                            PENDEKATAN KAMI
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-neutral-950">
                            Mengapa Rumah Tinggal Kayu Modern Kami Berbeda?
                        </h2>
                        <p className="text-sm text-neutral-600">
                            Setiap detail garis denah, kisi fasad, dan perabot dirancang khusus agar rumah Anda menjadi tempat istirahat paling menenangkan.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Pilar 1 */}
                        <div className="p-7 bg-[#faf9f6] rounded-xs border border-neutral-200/80 space-y-4 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-[#1a2644] text-white rounded-xs flex items-center justify-center">
                                <TreePine className="w-6 h-6 text-amber-300" />
                            </div>
                            <h3 className="text-base font-bold font-display uppercase tracking-wide text-neutral-900">
                                1. Kurasi Kayu Alami Terbaik
                            </h3>
                            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                                Penggunaan selektif kayu jati perhutani, kayu ulin kalimantan tahan cuaca, merbau oven, hingga oak untuk menghadirkan serat dan aroma alami yang menenangkan.
                            </p>
                        </div>

                        {/* Pilar 2 */}
                        <div className="p-7 bg-[#faf9f6] rounded-xs border border-neutral-200/80 space-y-4 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-[#1a2644] text-white rounded-xs flex items-center justify-center">
                                <SunMedium className="w-6 h-6 text-amber-300" />
                            </div>
                            <h3 className="text-base font-bold font-display uppercase tracking-wide text-neutral-900">
                                2. Pencahayaan & Nuansa Hangat
                            </h3>
                            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                                Penataan orientasi sinar matahari pasif berpadu dengan pencahayaan warm ambient 2700K–3000K, menghasilkan gradasi bayangan kisi kayu yang indah di setiap waktu.
                            </p>
                        </div>

                        {/* Pilar 3 */}
                        <div className="p-7 bg-[#faf9f6] rounded-xs border border-neutral-200/80 space-y-4 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-[#1a2644] text-white rounded-xs flex items-center justify-center">
                                <Home className="w-6 h-6 text-amber-300" />
                            </div>
                            <h3 className="text-base font-bold font-display uppercase tracking-wide text-neutral-900">
                                3. Tata Ruang Terbuka & Bernapas
                            </h3>
                            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                                Desain open-plan tanpa sekat masif yang menghubungkan ruang keluarga dengan inner courtyard, teras kayu samping, dan taman hijau rimbun.
                            </p>
                        </div>

                        {/* Pilar 4 */}
                        <div className="p-7 bg-[#faf9f6] rounded-xs border border-neutral-200/80 space-y-4 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-[#1a2644] text-white rounded-xs flex items-center justify-center">
                                <Hammer className="w-6 h-6 text-amber-300" />
                            </div>
                            <h3 className="text-base font-bold font-display uppercase tracking-wide text-neutral-900">
                                4. Presisi Woodwork & Detail Joinery
                            </h3>
                            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                                Pengerjaan sambungan kayu presisi tingkat tinggi untuk kisi-kisi fasad, plafon kantilever, pintu putar pivot besar, dan custom kabinet built-in.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Layanan Desain Rumah Tinggal */}
                <div className="bg-neutral-50 p-8 sm:p-12 rounded-xs border border-neutral-200/80 space-y-8">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1a2644]">
                                LAYANAN UTAMA
                            </span>
                            <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-neutral-950 mt-1">
                                Fokus Keahlian Garis AS Studio
                            </h3>
                        </div>
                        <p className="text-xs sm:text-sm text-neutral-500 max-w-md">
                            Mulai dari konsultasi konsep awal, gambar kerja arsitektur lengkap, hingga supervisi material kayu di lokasi.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                        <div className="bg-white p-6 rounded-xs border border-neutral-200/70 space-y-3">
                            <h4 className="font-bold text-base text-neutral-900 uppercase font-display">
                                Arsitektur Rumah Tinggal Baru
                            </h4>
                            <p className="text-xs text-neutral-600 leading-relaxed">
                                Perancangan rumah tinggal 1 hingga 3 lantai dari lahan kosong dengan konsep arsitektur modern tropis yang mengoptimalkan elemen kayu, sirkulasi angin, dan privasi keluarga.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xs border border-neutral-200/70 space-y-3">
                            <h4 className="font-bold text-base text-neutral-900 uppercase font-display">
                                Renovasi & Fasad Kayu Modern
                            </h4>
                            <p className="text-xs text-neutral-600 leading-relaxed">
                                Transformasi fasad bangunan lama menjadi mahakarya modern dengan penambahan kisi-kisi kayu ulin/bengkirai, kanopi kantilever kayu, dan bukaan kaca besar.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xs border border-neutral-200/70 space-y-3">
                            <h4 className="font-bold text-base text-neutral-900 uppercase font-display">
                                Interior & Custom Timber Millwork
                            </h4>
                            <p className="text-xs text-neutral-600 leading-relaxed">
                                Perancangan interior lengkap mulai dari living room, kitchen island kayu jati, master bedroom suite dengan kisi akustik kayu, hingga wardrobe custom.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA Banner */}
                <div className="p-10 sm:p-12 bg-[#121b30] text-white rounded-xs text-center space-y-6 relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1a2644]/80 via-transparent to-[#1a2644]/80 pointer-events-none" />
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display relative z-10">
                        Wujudkan Rumah Tinggal Impian Bernuansa Kayu Hangat
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-300 max-w-xl mx-auto leading-relaxed relative z-10">
                        Diskusikan ukuran lahan, kebutuhan ruangan keluarga Anda, dan inspirasi suasana kayu yang Anda inginkan bersama tim arsitek Garis AS Studio.
                    </p>
                    <div className="pt-2 relative z-10">
                        <Link
                            href="/contact-me"
                            className="inline-block px-8 py-3.5 bg-white hover:bg-neutral-100 text-[#121b30] font-extrabold text-xs uppercase tracking-[0.2em] rounded-xs transition-colors shadow-lg cursor-pointer"
                        >
                            Konsultasi Proyek Rumah Anda
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};


