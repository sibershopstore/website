import React from 'react';
import Section from './ui/Section';
import Card from './ui/Card';
import { testimonials } from '../data/testimonials';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <Section 
      id="testimonials" 
      title="Apa Kata Klien Kami" 
      subtitle="Dengar langsung dari klien kami tentang pengalaman mereka bekerja sama dengan Siber Shop Store."
      centered
      className="bg-white"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} className="flex flex-col h-full">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-slate-900">{testimonial.name}</h3>
                  <p className="text-sm text-slate-600">{testimonial.position}, {testimonial.company}</p>
                </div>
              </div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-300'}
                  />
                ))}
              </div>
            </div>
            <p className="text-slate-700 italic">{testimonial.content}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;