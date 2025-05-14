export interface PricingPlan {
  id: number;
  name: string;
  price: string;
  description: string;
  features: string[];
  popular: boolean;
  buttonText: string;
  buttonLink?: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 1,
    name: 'Layanan IT',
    price: '100K',
    description: 'Mulai 100rban aja!',
    features: [
      'Hapus Akun Sosial Media',
      'Jasa SEO Web',
      'IT Consultant',
      'Recovery Files',
      'Pembuatan Blog/Web',
    ],
    popular: false,
    buttonText: 'Buy Now',
    buttonLink: 'https://wa.me/6285174155134?text=Halo,%20saya%20tertarik%20dengan%20Layanan%20IT%20Siber%20Shop%20Store'
  },
  {
    id: 2,
    name: 'Layanan Marketing',
    price: '500K',
    description: 'Mulai 500rban aja!',
    features: [
      'Search Engine Marketing',
      'Email Marketing',
      'Desain Template',
      'Artikel SEO',
      'Meta Ads & Google Ads',
    ],
    popular: true,
    buttonText: 'Buy Now',
    buttonLink: 'https://wa.me/6285174155134?text=Halo,%20saya%20tertarik%20dengan%20Layanan%20Marketing%20Siber%20Shop%20Store'
  },
  {
    id: 3,
    name: 'Partnership',
    price: 'N/A',
    description: 'Partnership Business',
    features: [
      'Kerja Sama',
      'Koneksi Profesional',
      'Terlibat Project',
      'Koneksi pebisnis',
      'Event Online/Offline',
    ],
    popular: false,
    buttonText: 'Contact Us',
    buttonLink: 'https://wa.me/6285174155134?text=Halo,%20saya%20tertarik%20dengan%20Partnership%20Siber%20Shop%20Store'
  },
  {
    id: 4,
    name: 'Reseller',
    price: 'N/A',
    description: 'Daftar sekarang Gratis!!',
    features: [
      'No Fee Daftar Reseller',
      'Layanan IT',
      'Layanan Marketing',
      'Koneksi Profesional',
      'IT Consultant',
    ],
    popular: false,
    buttonText: 'Contact Us',
    buttonLink: 'https://wa.me/6285174155134?text=Halo,%20saya%20tertarik%20menjadi%20Reseller%20Siber%20Shop%20Store'
  },
];