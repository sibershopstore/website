import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './ui/Button';
import { useNavigate, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#hero' },
    { name: 'Layanan', href: '#services' },
    { name: 'Keunggulan', href: '#advantages' },
    { name: 'Testimoni', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img 
            src="https://i.ibb.co.com/4ZZ3XNGr/Desain-tanpa-judul-7.png" 
            alt="Siber Shop Logo" 
            className="h-8 w-auto"
          />
          <span className="font-bold text-xl text-slate-900">Siber Shop</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-slate-700 hover:text-teal-600 font-medium transition-colors"
            >
              {link.name}
            </button>
          ))}
          <Button 
            onClick={() => scrollToSection('#contact')}
            variant="primary"
          >
            Hubungi Kami
          </Button>
        </nav>
        
        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-slate-900"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-slate-700 py-2 hover:text-teal-600 transition-colors text-left"
              >
                {link.name}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection('#contact')}
              variant="primary"
              className="w-full"
            >
              Hubungi Kami
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;