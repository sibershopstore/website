import React from 'react';
import Section from './ui/Section';
import Button from './ui/Button';

const Partners: React.FC = () => {
  const partners = [
    {
      name: 'XyberXecurity',
      logo: 'https://i.ibb.co/DHgRRYb6/xxbgremove.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      name: 'Meta',
      logo: 'https://i.ibb.co/nsbCsZV4/meta-logo.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      name: 'Google Indonesia',
      logo: 'https://i.ibb.co/gLZG7tLd/Exn46-Mk-Vo-AMCyh0.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      name: 'Microsoft',
      logo: 'https://i.ibb.co/yFKvw1n1/1708533802microsoft-logo-transparent.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  return (
    <Section
      id="partners"
      title="Partner Kami"
      subtitle="Dipercaya oleh perusahaan teknologi terkemuka"
      centered
      className="bg-white"
    >
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="w-32 h-32 relative grayscale hover:grayscale-0 transition-all duration-300"
          >
            <img
              src={partner.logo}
              alt={`${partner.name} logo`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <h3 className="text-xl font-bold text-slate-900 mb-4">Mari Bermitra dengan Kami</h3>
        <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
          Kami membuka kesempatan untuk partnership dan reseller. Bergabunglah dengan jaringan mitra kami dan kembangkan bisnis Anda bersama Siber Shop Store.
        </p>
        <Button
          variant="secondary"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Jadi Partner Kami
        </Button>
      </div>
    </Section>
  );
};

export default Partners
