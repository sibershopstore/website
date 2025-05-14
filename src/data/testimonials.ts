export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Budi Santoso',
    position: 'CEO',
    company: 'Santoso Digital',
    content: 'Siber Shop Store telah membantu bisnis kami dengan layanan keamanan siber yang sangat profesional. Mereka cepat tanggap dan selalu memberikan solusi yang tepat untuk kebutuhan kami.',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 5,
  },
  {
    id: 2,
    name: 'Dewi Rahayu',
    position: 'Pemilik',
    company: 'Rahayu Fashion',
    content: 'Website toko online kami menjadi lebih profesional dan penjualan meningkat drastis sejak dibuatkan oleh Siber Shop Store. Desainnya menarik dan mudah digunakan oleh pelanggan kami.',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 5,
  },
  {
    id: 3,
    name: 'Ahmad Faisal',
    position: 'Manager IT',
    company: 'PT Maju Bersama',
    content: 'Layanan digital forensik mereka sangat membantu kami mengungkap kasus peretasan data perusahaan. Tim Siber Shop sangat kompeten dan profesional dalam menangani masalah kami.',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 5,
  },
  {
    id: 4,
    name: 'Siti Nurhayati',
    position: 'Blogger',
    company: 'SitiTravels.com',
    content: 'Berkat e-book dari Siber Shop Store, saya jadi lebih paham tentang keamanan online. Blog saya juga lebih aman setelah menerapkan tips-tips dari mereka. Sangat direkomendasikan!',
    avatar: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4,
  },
];