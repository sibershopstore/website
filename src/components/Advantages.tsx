import React from 'react';
import Section from './ui/Section';
import { advantages } from '../data/advantages';

const Advantages: React.FC = () => {
  return (
    <Section 
      id="advantages" 
      title="Mengapa Memilih Kami" 
      subtitle="Kami memberikan layanan terbaik dengan standar kualitas tinggi. Berikut adalah alasan mengapa Anda harus memilih Siber Shop Store."
      centered
      className="bg-slate-50"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {advantages.map((advantage) => {
          const Icon = advantage.icon;
          return (
            <div 
              key={advantage.id}
              className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              <div className="bg-orange-50 p-3 rounded-lg">
                <Icon size={24} className="text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{advantage.title}</h3>
                <p className="text-slate-600">{advantage.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Advantages;