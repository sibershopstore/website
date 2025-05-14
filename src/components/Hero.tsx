import React from 'react';
import { ShieldCheck, CheckCircle } from 'lucide-react';
import Button from './ui/Button';

const Hero: React.FC = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <div className="inline-flex items-center gap-2 bg-teal-600/20 px-4 py-2 rounded-full mb-6">
              <ShieldCheck className="h-5 w-5 text-teal-500" />
              <span className="text-sm font-medium text-teal-300">Layanan Terpercaya Sejak 2023</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Jasa Layanan Digital Terpercaya Nomor 1 di Indonesia
            </h1>
            <p className="text-lg text-slate-300 mb-8 max-w-xl">
              Solusi digital lengkap untuk bisnis dan individu. Kami menyediakan layanan pembuatan website, keamanan siber, dan forensik digital dengan kualitas terbaik.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                onClick={scrollToContact}
                size="lg"
                variant="primary"
              >
                Konsultasi Gratis
              </Button>
              <Button 
                onClick={scrollToServices}
                size="lg"
                variant="outline"
                className="border-slate-600 text-white hover:bg-slate-700"
              >
                Lihat Layanan
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-teal-500" />
                <span className="text-slate-300">5+ Tahun Pengalaman</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-teal-500" />
                <span className="text-slate-300">100% Garansi Kepuasan</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-teal-500" />
                <span className="text-slate-300">24/7 Dukungan</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="relative z-10 bg-white p-2 rounded-lg shadow-xl">
              <img 
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Siber Security Services" 
                className="w-full h-auto rounded-md"
              />
            </div>
            <div className="absolute -top-4 -right-4 -bottom-4 -left-4 bg-gradient-to-r from-teal-400 to-orange-400 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;