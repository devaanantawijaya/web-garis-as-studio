import { Project, Category } from '@/types/type';

export const CATEGORIES: Category[] = [
    'KARYA PILIHAN',
    'RESIDENSIAL',
    'VILA',
    'INTERIOR',
    'DESAIN INTERIOR',
    'KOMPLEKS VILA',
    'PROYEK SELESAI',
    'APARTEMEN',
    'BOUTIQUE HOTEL',
    'RESORT'
];

export const PROJECTS: Project[] = [
    {
        id: 'djelantik-house',
        slug: 'djelantik-house',
        title: 'Djelantik House',
        subtitle: 'DEWI SRI | RESIDENCE & VILLA',
        categoryTag: 'RUMAH TINGGAL MODERN TROPIS KAYU',
        categories: ['KARYA PILIHAN', 'RESIDENSIAL', 'VILA', 'PROYEK SELESAI'],
        location: 'Dewi Sri, Bali',
        year: '2025',
        type: 'Rumah Tinggal Modern',
        buildingArea: '850 m²',
        landArea: '1580 m²',
        category: 'Modern Wood Residence',
        client: 'Ivan Tanjaya',
        heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop'
        ],
        description: 'Djelantik House merupakan perwujudan rumah tinggal modern tropis dengan dominasi material kayu jati solid dan ulin kalimantan. Menggabungkan fasad kisi-kisi kayu vertikal dengan ruang keluarga open-plan berpemandangan kolam dan taman dalam, hunian ini menghadirkan ketenangan termal dan suasana hangat di setiap sudutnya.',
        conceptPoints: [
            'Fasad kisi-kisi kayu ulin vertikal untuk pembiasan sinar matahari & privasi keluarga',
            'Ruang keluarga berpenerangan alami dengan plafon exposed teak wood setinggi 6 meter',
            'Kombinasi material lokal: Batu paras abu Bali, lantai kayu ulin, dan marmer travertin',
            'Sirkulasi ventilasi silang aktif yang menyejukkan seluruh ruang hunian'
        ],
        features: [
            'Private Timber Lagoon Pool',
            'Master Suite dengan Balkon Kayu Jati',
            'Kitchen Island Custom Teak Millwork',
            'Double-height Timber Living Pavilion',
            'Courtyard Zen Garden dengan Deck Kayu'
        ],
        isFeaturedHero: true,
        isChoice: true
    },
    {
        id: 'casa-infinito',
        slug: 'casa-infinito',
        title: 'Casa Infinito',
        subtitle: 'CANGGU, BALI 2023',
        categoryTag: 'RUMAH TINGGAL MINIMALIS KAYU',
        categories: ['KARYA PILIHAN', 'RESIDENSIAL', 'VILA', 'PROYEK SELESAI'],
        location: 'Canggu, Bali',
        year: '2023',
        type: 'Private Residence',
        buildingArea: '650 m²',
        landArea: '1200 m²',
        category: 'Modern Wood Residence',
        client: 'Alexander M.',
        heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2000&auto=format&fit=crop'
        ],
        description: 'Terletak di kawasan Canggu, Casa Infinito memadukan struktur modern minimalis warna hangat dengan pergola kayu jati kantilever dan dinding aksen kayu bengkirai yang menyatu dengan pantulan air kolam.',
        conceptPoints: [
            'Kanopi kantilever kayu jati presisi sebagai peneduh teras utama',
            'Plafon kayu warm oak dengan pencahayaan cove light tersembunyi',
            'Dinding batu alam andesit berpadu panel kayu vertikal'
        ],
        features: [
            'Timber Sun Deck & Infinity Pool',
            'Outdoor Wooden Lounge Pavilion',
            'Open-plan Teak Chef Kitchen',
            'Sunken Living Room dengan Lantai Kayu'
        ],
        isFeaturedHero: true,
        isChoice: true
    },
    {
        id: 'casa-alyce',
        slug: 'casa-alyce',
        title: 'Casa Alyce',
        subtitle: 'ULUWATU, BALI | PRIVATE VILLA',
        categoryTag: 'TIMBER & NATURAL STONE RESIDENCE',
        categories: ['KARYA PILIHAN', 'RESIDENSIAL', 'VILA', 'BOUTIQUE HOTEL'],
        location: 'Uluwatu, Bali',
        year: '2024',
        type: 'Private Clifftop Home',
        buildingArea: '780 m²',
        landArea: '1450 m²',
        category: 'Residential Villa',
        client: 'Alyce Holdings',
        heroImage: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2000&auto=format&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?q=80&w=2000&auto=format&fit=crop'
        ],
        description: 'Casa Alyce dirancang menghadap perbukitan Uluwatu dengan gerbang portal kayu merbau tebal, pergola kayu cedar berprofil tegas, dan pencahayaan temaram hangat yang menghadirkan suasana santai dan mewah.',
        conceptPoints: [
            'Portal gerbang masuk kayu merbau solid dengan sistem engsel pivot tersembunyi',
            'Pergola peneduh kayu cedar alami tahan iklim pesisir laut',
            'Penataan interior kayu serasi mulai dari ruang makan hingga kamar tidur utama'
        ],
        features: ['Solid Timber Portal Entrance', 'Decking Kayu Ulin Kolam', 'Master Spa Bathroom Kayu & Batu', 'Alfresco Dining Pavilion'],
        isFeaturedHero: true,
        isChoice: true
    },
    {
        id: 'the-sanctuary-pool-villa',
        slug: 'the-sanctuary-pool-villa',
        title: 'The Sanctuary Courtyard',
        subtitle: 'PERERENAN | RESIDENTIAL HOME',
        categoryTag: 'BRICK & WARM TIMBER RESIDENCE',
        categories: ['KARYA PILIHAN', 'RESIDENSIAL', 'KOMPLEKS VILA', 'PROYEK SELESAI'],
        location: 'Pererenan, Bali',
        year: '2024',
        type: 'Courtyard Residence',
        buildingArea: '580 m²',
        landArea: '1100 m²',
        category: 'Residential Home',
        client: 'PT Garis Selaras Hunian',
        heroImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2000&auto=format&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop'
        ],
        description: 'Sebuah rumah tinggal keluarga dengan koridor simetris menghadap kolam renang yang dikelilingi bata merah ekspos terakota dan lantai kayu ulin. Menghadirkan kesejukan mikro-klimat dan keheningan pribadi.',
        conceptPoints: [
            'Susunan bata terakota kontemporer disandingkan dengan balok kayu ekspos',
            'Pemanfaatan deck kayu ulin lebar di sekeliling kolam renang',
            'Plafon kayu meranti pilihan dengan detail shadowline arsitektural'
        ],
        features: ['25m Lap Pool dengan Teras Kayu', 'Ruang Keluarga Sayap Ganda', 'Timber Sun Deck', 'Pintu Geser Kaca Rangka Kayu'],
        isFeaturedHero: true,
        isChoice: true
    },
    {
        id: 'ubud-cliff-haven',
        slug: 'ubud-cliff-haven',
        title: 'Ubud Wood Haven',
        subtitle: 'SAYAN, UBUD | FOREST HOME',
        categoryTag: 'FOREST RETREAT RESIDENCE',
        categories: ['KARYA PILIHAN', 'RESIDENSIAL', 'VILA', 'RESORT'],
        location: 'Sayan, Ubud, Bali',
        year: '2025',
        type: 'Hillside Timber Estate',
        buildingArea: '920 m²',
        landArea: '2100 m²',
        category: 'Forest Residence',
        client: 'Sutanto Family Trust',
        heroImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2000&auto=format&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop'
        ],
        description: 'Dibangun menjorok ke lembah hutan Ubud, hunian tinggal ini mengadopsi struktur kantilever bertingkat berlapis kayu jati gelap dengan bukaan kaca penuh dari lantai hingga langit-langit.',
        conceptPoints: [
            'Struktur kantilever kayu jati & baja yang menyatu dengan kontur lereng alami',
            'Kaca performa tinggi Low-E berpadu panel kayu akustik interior',
            'Material kayu daur ulang berkarakter kuat untuk meja dan lantai utama'
        ],
        features: ['Cantilevered Wooden Balconies', 'Infinity Valley Deck', 'Private Timber Library & Studio', 'Teak Wine & Dining Lounge'],
        isFeaturedHero: true,
        isChoice: true
    },
    {
        id: 'the-glass-terrace-villa',
        slug: 'the-glass-terrace-villa',
        title: 'The Teak Terrace Residence',
        subtitle: 'SEMINYAK | RESIDENTIAL HOME',
        categoryTag: 'RUMAH TINGGAL KAYU MODERN',
        categories: ['KARYA PILIHAN', 'RESIDENSIAL', 'DESAIN INTERIOR', 'VILA'],
        location: 'Petitenget, Seminyak',
        year: '2024',
        type: 'Residential Home',
        buildingArea: '520 m²',
        landArea: '800 m²',
        category: 'Residential',
        client: 'Christian & Maya',
        heroImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2000&auto=format&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop'
        ],
        description: 'Konsep hunian tropis modern yang mengutamakan ruang hidup minim sekat dengan pintu kaca geser selebar 8 meter yang menyatukan ruang keluarga berlantai kayu jati dengan teras kolam renang.',
        conceptPoints: [
            'Konsep indoor-outdoor seamless dengan lantai kayu yang menerus dari ruang dalam ke teras luar',
            'Plafon kayu jati alami dengan aksen pencahayaan tersembunyi (cove lighting)',
            'Kisi kayu vertical louver sebagai penyaring privasi dari jalan depan'
        ],
        features: ['Retractable Glass Wall Rangka Kayu', 'Sunken Wooden Firepit Lounge', 'Bespoke Teak Millwork', 'Taman Tropis Privat'],
        isFeaturedHero: false,
        isChoice: true
    },
    {
        id: 'padma-lounge-interior',
        slug: 'padma-lounge-interior',
        title: 'Padma Living & Wooden Interior',
        subtitle: 'SANUR, BALI | INTERIOR DESIGN',
        categoryTag: 'BESPOKE TIMBER INTERIOR CRAFT',
        categories: ['INTERIOR', 'DESAIN INTERIOR', 'KARYA PILIHAN', 'RESIDENSIAL'],
        location: 'Sanur, Bali',
        year: '2023',
        type: 'Interior & Custom Woodwork',
        buildingArea: '420 m²',
        landArea: '-',
        category: 'Interior Design',
        client: 'Dr. Hendra Wijaya',
        heroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2000&auto=format&fit=crop'
        ],
        description: 'Desain interior rumah tinggal mewah yang mengedepankan kehangatan serat kayu jati tua, sofa kustom linen netral, panel dinding kisi kayu akustik, dan kabinet dapur kayu tanpa sambungan baut kasat mata.',
        conceptPoints: [
            'Palet warna earth-tone yang menenangkan (oat, warm teak, stone gray)',
            'Pencahayaan tersembunyi bergradasi temperatur 2700K (warm glow)',
            'Furnitur kustom ergonomis dari kayu jati solid tersertifikasi'
        ],
        features: ['Custom Teak Wood Kitchen Island', 'Artisan Brass Light Fixtures', 'Acoustic Wooden Wall Paneling', 'Smart Climate Automation'],
        isFeaturedHero: false,
        isChoice: true
    },
    {
        id: 'samudra-cliff-apartments',
        slug: 'samudra-cliff-apartments',
        title: 'Samudra Wooden Loft Residence',
        subtitle: 'JIMBARAN | OCEAN RESIDENCE',
        categoryTag: 'OCEANFRONT WOODEN RESIDENCE',
        categories: ['APARTEMEN', 'KARYA PILIHAN', 'RESIDENSIAL', 'PROYEK SELESAI'],
        location: 'Jimbaran Bay, Bali',
        year: '2024',
        type: 'Penthouse Residence',
        buildingArea: '3200 m²',
        landArea: '4500 m²',
        category: 'Luxury Residence',
        client: 'Samudra Group',
        heroImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000&auto=format&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop'
        ],
        description: 'Hunian penthouse tebing Jimbaran dengan mezanin kayu ulin dan balkon gantung berlantai kayu yang memandang langsung panorama matahari terbenam.',
        conceptPoints: [
            'Orientasi barat daya untuk sunset dengan kisi kayu penahan panas sore',
            'Mezanin kayu oak elegan dengan tangga kantilever melayang',
            'Finishing interior kayu natural matte tanpa bahan kimia menyengat'
        ],
        features: ['Private Balcony Timber Pool', 'Mezzanine Wooden Lounge', 'Oceanview Master Suite', 'Private Lift Access'],
        isFeaturedHero: false,
        isChoice: true
    },
    {
        id: 'bambu-nirwana-boutique-hotel',
        slug: 'bambu-nirwana-boutique-hotel',
        title: 'Nirwana Timber & Bamboo Retreat',
        subtitle: 'TABANAN, BALI | ECO RETREAT',
        categoryTag: 'SUSTAINABLE TIMBER ARCHITECTURE',
        categories: ['BOUTIQUE HOTEL', 'RESORT', 'KARYA PILIHAN', 'PROYEK SELESAI'],
        location: 'Jatiluwih, Tabanan',
        year: '2024',
        type: 'Eco Retreat Estate',
        buildingArea: '1850 m²',
        landArea: '5600 m²',
        category: 'Eco Living Residence',
        client: 'Nirwana Eco Living',
        heroImage: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2000&auto=format&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2000&auto=format&fit=crop'
        ],
        description: 'Perpaduan arsitektur ramah lingkungan berbahan kayu jati daur ulang dan rekayasa bambu lengkung modern, berdiri harmonis di tengah terasering sawah Jatiluwih.',
        conceptPoints: [
            'Struktur rangka kayu ulin dan bambu petung tahan cuaca tropis',
            'Sistem pemanenan air hujan terintegrasi dengan dek kayu kolam alami',
            'Ventilasi alamiah 100% dengan atap peneduh kayu sirap tradisional'
        ],
        features: ['Timber Pavilion Dining', 'Natural Spring Decking Bath', 'Panoramic Terrace Wooden Walkway', 'Zero Carbon Design'],
        isFeaturedHero: false,
        isChoice: true
    },
    {
        id: 'canggu-modern-loft-apartment',
        slug: 'canggu-modern-loft-apartment',
        title: 'Canggu Timber Lofts',
        subtitle: 'BERAWA, CANGGU | RESIDENCE',
        categoryTag: 'URBAN WOODEN LOFT RESIDENCE',
        categories: ['APARTEMEN', 'RESIDENSIAL', 'PROYEK SELESAI'],
        location: 'Pantai Berawa, Canggu',
        year: '2023',
        type: 'Loft Residence',
        buildingArea: '1400 m²',
        landArea: '950 m²',
        category: 'Loft Residence',
        client: 'Berawa Capital Partners',
        heroImage: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2000&auto=format&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop'
        ],
        description: 'Unit hunian loft dua lantai dengan mezanin kayu jati dan dinding kaca ganda di Berawa, dirancang untuk kenyamanan tinggal modern yang hangat dan fungsional.',
        conceptPoints: [
            'Tangga gantung kantilever kayu jati solid dengan railing ramping',
            'Dapur kompak dengan kabinet kayu natural dan top table granit hitam',
            'Jendela tinggi berpadu kisi kayu penahan panas matahari barat'
        ],
        features: ['Duplex High Ceilings dengan Mezanin Kayu', 'Rooftop Wooden Lounge', 'Smart Lock Teak Doors', 'Courtyard Garden View'],
        isFeaturedHero: false,
        isChoice: false
    },
    {
        id: 'villa-alila-interior-suite',
        slug: 'villa-alila-interior-suite',
        title: 'Alila Master Suite & Living',
        subtitle: 'NUSA DUA | INTERIOR DESIGN',
        categoryTag: 'WARM MINIMALIST WOODEN SUITE',
        categories: ['INTERIOR', 'DESAIN INTERIOR', 'RESIDENSIAL'],
        location: 'Nusa Dua, Bali',
        year: '2024',
        type: 'Interior Architecture',
        buildingArea: '360 m²',
        landArea: '-',
        category: 'Interior Design',
        client: 'Keluarga Danumiharja',
        heroImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2000&auto=format&fit=crop'
        ],
        description: 'Penataan interior suite utama rumah tinggal yang menghadirkan ketenangan zen dengan perpaduan lantai microcement hangat, panel dinding kayu jati bermotif vertikal, dan bathtub freestanding dari batu monolit.',
        conceptPoints: [
            'Panel dinding kisi kayu jati bermotif vertikal yang menyembunyikan pintu lemari',
            'Kamar mandi terbuka semi-alfresco berlantai dek kayu ulin',
            'Pencahayaan linier warm white yang tersembunyi di balik kisi kayu plafon'
        ],
        features: ['Monolith Stone Bathtub', 'Walk-in Teak Wardrobe', 'Acoustic Slatted Headboard', 'Integrated Ambient Warm Audio'],
        isFeaturedHero: false,
        isChoice: false
    },
    {
        id: 'uluwatu-ridge-villa',
        slug: 'uluwatu-ridge-villa',
        title: 'Uluwatu Ridge Residence',
        subtitle: 'PECATU, BALI | PRIVATE RESIDENCE',
        categoryTag: 'CLIFFTOP WOODEN RESIDENCE',
        categories: ['VILA', 'RESIDENSIAL', 'PROYEK SELESAI'],
        location: 'Pecatu, Uluwatu',
        year: '2024',
        type: 'Private Clifftop Home',
        buildingArea: '680 m²',
        landArea: '1350 m²',
        category: 'Residential',
        client: 'Arthur Sterling',
        heroImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000&auto=format&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop'
        ],
        description: 'Rumah tinggal pribadi di tebing bukit Pecatu yang mengalirkan angin sejuk samudera. Dilengkapi teras dek kayu ulin lebar dan kolam renang tanpa batas yang menyatu dengan cakrawala laut.',
        conceptPoints: [
            'Struktur kanopi kayu tebal penahan angin laut berkecepatan tinggi',
            'Pagar kaca tempered transparan penuh tanpa merusak pemandangan cakrawala',
            'Dek kayu ulin tahan garam laut di sekeliling kolam renang'
        ],
        features: ['180° Ocean Wooden Deck Pool', 'Sunset Cocktail Pavilion', 'BBQ Grill Teak Kitchen', 'Subterranean Wine Cellar'],
        isFeaturedHero: false,
        isChoice: false
    }
];