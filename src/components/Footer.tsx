import React, { useState, useRef } from 'react';
import { Github, Send, Instagram, Linkedin } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const form = useRef<HTMLFormElement>(null);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (form.current) {
        await emailjs.sendForm(
          'service_727k195',
          'template_l9m6nzd',
          form.current,
          'ShwzX_TGYjaFSiSvO'
        );
        alert('Terima kasih telah berlangganan newsletter kami!');
        setEmail('');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Gagal mendaftar newsletter. Silakan coba lagi.');
    }
  };

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="https://i.ibb.co.com/4ZZ3XNGr/Desain-tanpa-judul-7.png" 
                alt="Siber Shop Logo" 
                className="h-8 w-auto"
              />
              <span className="font-bold text-xl">Siber Shop</span>
            </div>
            <p className="text-slate-400 mb-6">
              Jasa layanan digital terpercaya nomor 1 di Indonesia yang menyediakan solusi website dan keamanan siber untuk individu dan bisnis.
            </p>
            <p className="text-slate-400 mb-6">
              PT. Siber Shop Teknologi Indonesia
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/sibershopstore" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-2 rounded-md hover:bg-teal-600 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://t.me/sibershopstoreid" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-2 rounded-md hover:bg-teal-600 transition-colors">
                <Send size={20} />
              </a>
              <a href="https://instagram.com/sibershopstore" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-2 rounded-md hover:bg-teal-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com/company/sibershopstore" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-2 rounded-md hover:bg-teal-600 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Layanan Kami</h3>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('services')} className="text-slate-400 hover:text-teal-400 transition-colors">
                  Pembuatan Website
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-slate-400 hover:text-teal-400 transition-colors">
                  Keamanan Siber
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-slate-400 hover:text-teal-400 transition-colors">
                  Digital Forensik
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-slate-400 hover:text-teal-400 transition-colors">
                  E-Book Edukatif
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-slate-400 hover:text-teal-400 transition-colors">
                  Penghapusan Akun Media Sosial
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Tautan Cepat</h3>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('hero')} className="text-slate-400 hover:text-teal-400 transition-colors">
                  Beranda
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('advantages')} className="text-slate-400 hover:text-teal-400 transition-colors">
                  Keunggulan
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('testimonials')} className="text-slate-400 hover:text-teal-400 transition-colors">
                  Testimoni
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('faq')} className="text-slate-400 hover:text-teal-400 transition-colors">
                  FAQ
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-slate-400 hover:text-teal-400 transition-colors">
                  Kontak
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-slate-400 mb-4">
              Dapatkan tips keamanan siber dan update terbaru tentang teknologi langsung ke email Anda.
            </p>
            <form ref={form} onSubmit={handleNewsletterSubmit} className="flex">
              <input
                type="email"
                name="user_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Anda"
                className="px-4 py-2 rounded-l-md focus:outline-none flex-grow bg-slate-800 border border-slate-700"
                required
              />
              <button
                type="submit"
                className="bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded-r-md transition-colors"
              >
                Daftar
              </button>
            </form>
          </div>
        </div>
        
        <hr className="border-slate-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Siber Shop Store. All Rights Reserved.
          </p>
          <div className="flex space-x-4 text-sm text-slate-400">
            <Link to="/terms" className="hover:text-teal-400 transition-colors">
              Syarat & Ketentuan
            </Link>
            <Link to="/privacy" className="hover:text-teal-400 transition-colors">
              Kebijakan Privasi
            </Link>
            <Link to="/tos" className="hover:text-teal-400 transition-colors">
              Term of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;