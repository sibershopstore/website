import { Award, Clock, Users, HeartHandshake, Zap, Shield } from 'lucide-react';

export interface Advantage {
  id: number;
  title: string;
  description: string;
  icon: typeof Award;
}

export const advantages: Advantage[] = [
  {
    id: 1,
    title: 'Tim Ahli Berpengalaman',
    description: 'Didukung oleh tim profesional dengan pengalaman lebih dari 5 tahun di bidang teknologi dan keamanan siber.',
    icon: Award,
  },
  {
    id: 2,
    title: 'Layanan 24/7',
    description: 'Dukungan teknis tersedia 24 jam setiap hari untuk membantu Anda kapan pun dibutuhkan.',
    icon: Clock,
  },
  {
    id: 3,
    title: 'Pendekatan Personal',
    description: 'Kami memberikan solusi yang dipersonalisasi sesuai dengan kebutuhan spesifik setiap klien.',
    icon: Users,
  },
  {
    id: 4,
    title: 'Kepuasan Klien',
    description: 'Komitmen kami untuk memberikan layanan terbaik dengan garansi kepuasan 100%.',
    icon: HeartHandshake,
  },
  {
    id: 5,
    title: 'Proses Cepat & Efisien',
    description: 'Metodologi kerja yang efisien untuk memberikan hasil maksimal dalam waktu singkat.',
    icon: Zap,
  },
  {
    id: 6,
    title: 'Keamanan Terjamin',
    description: 'Prioritas utama kami adalah menjaga kerahasiaan dan keamanan data Anda.',
    icon: Shield,
  },
];