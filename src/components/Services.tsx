import React from 'react';
import Section from './ui/Section';
import Card from './ui/Card';
import { services } from '../data/services';
import { CheckCircle2 } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <Section 
      id="services" 
      title="Layanan Kami" 
      subtitle="Solusi digital terlengkap untuk kebutuhan Anda. Kami menyediakan berbagai layanan dengan kualitas premium dan harga terjangkau."
      centered
      className="bg-white"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <Card key={service.id} hoverable className="flex flex-col h-full">
              <div className="bg-teal-50 p-3 w-fit rounded-lg mb-4">
                <Icon size={24} className="text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">{service.title}</h3>
              <p className="text-slate-600 mb-6">{service.description}</p>
              
              <div className="mt-auto">
                <h4 className="text-sm font-semibold text-slate-700 mb-3">Layanan meliputi:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 size={16} className="text-teal-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
};

export default Services;