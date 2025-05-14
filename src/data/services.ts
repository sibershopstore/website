import { Globe, Lock, Search, BookOpen, UserX, Megaphone } from 'lucide-react';

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: typeof Globe;
  features: string[];
}

export const services: Service[] = [
  {
    id: 1,
    title: 'Pembuatan Website & Blog',
    description: 'Jasa pembuatan website profesional dengan desain yang menarik dan fungsionalitas lengkap.',
    icon: Globe,
    features: [
      'Website Personal',
      'Toko Online / E-Commerce',
      'Company Profile',
      'Blog Profesional',
      'Landing Page',
    ],
  },
  {
    id: 2,
    title: 'Keamanan Siber',
    description: 'Layanan keamanan cyber untuk melindungi data dan sistem informasi Anda dari serangan siber.',
    icon: Lock,
    features: [
      'Audit Keamanan Website',
      'Perlindungan Data Pribadi',
      'Enkripsi Data',
      'Konsultasi Keamanan',
      'Pemantauan Keamanan',
    ],
  },
  {
    id: 3,
    title: 'Digital Forensik',
    description: 'Investigasi digital untuk mengumpulkan bukti dan menganalisis insiden keamanan siber.',
    icon: Search,
    features: [
      'Analisis Malware',
      'Pemulihan Data',
      'Investigasi Serangan Siber',
      'Bukti Digital',
      'Analisis Log',
    ],
  },
  {
    id: 4,
    title: 'E-Book Edukatif',
    description: 'E-book informatif tentang keamanan siber, teknologi informasi, dan kejahatan cyber.',
    icon: BookOpen,
    features: [
      'Panduan Keamanan Online',
      'Tutorial Teknologi',
      'Studi Kasus Kejahatan Siber',
      'Tips Keamanan Data',
      'Tren Teknologi Terbaru',
    ],
  },
  {
    id: 5,
    title: 'Penghapusan Akun Media Sosial',
    description: 'Layanan penghapusan atau pemulihan akun media sosial yang tidak aktif atau terkena hack.',
    icon: UserX,
    features: [
      'Pemulihan Akun Diretas',
      'Penghapusan Akun Permanen',
      'Pembersihan Data Pribadi',
      'Pembersihan Reputasi Online',
      'Konsultasi Privasi',
    ],
  },
  {
    id: 6,
    title: 'Digital Marketing',
    description: 'Layanan pemasaran digital komprehensif untuk meningkatkan visibilitas dan pertumbuhan bisnis Anda.',
    icon: Megaphone,
    features: [
      'Search Engine Marketing',
      'Email Marketing',
      'Desain Template',
      'Artikel SEO',
      'Meta Ads & Google Ads',
    ],
  },
];