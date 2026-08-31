export type Category = 
  | 'KARYA PILIHAN'
  | 'APARTEMEN'
  | 'BOUTIQUE HOTEL'
  | 'KOMPLEKS VILA'
  | 'PROYEK SELESAI'
  | 'INTERIOR'
  | 'DESAIN INTERIOR'
  | 'RESIDENSIAL'
  | 'RESORT'
  | 'VILA';

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  categoryTag: string; // e.g. "ARSITEKTUR MODERN TROPIS BALI"
  categories: Category[];
  location: string;
  year: string;
  type: string;
  buildingArea: string;
  landArea: string;
  category: string;
  client: string;
  heroImage: string;
  gallery: string[];
  description: string;
  conceptPoints: string[];
  features: string[];
  isFeaturedHero?: boolean;
  isChoice?: boolean;
}

export type PageView = 'home' | 'portfolio' | 'about' | 'contact' | 'project-detail';
