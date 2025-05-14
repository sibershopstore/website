import React, { useState } from 'react';
import Section from './ui/Section';
import { faqItems } from '../data/faq';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section 
      id="faq" 
      title="Pertanyaan Umum" 
      subtitle="Temukan jawaban untuk pertanyaan yang sering diajukan tentang layanan kami."
      centered
      className="bg-slate-50"
    >
      <div className="max-w-3xl mx-auto">
        {faqItems.map((item, index) => (
          <div 
            key={item.id}
            className={`mb-4 border rounded-lg overflow-hidden ${
              openIndex === index ? 'border-teal-500 shadow-sm' : 'border-slate-200'
            }`}
          >
            <button
              className="w-full flex justify-between items-center p-4 bg-white text-left"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="font-semibold text-slate-900">{item.question}</h3>
              {openIndex === index ? (
                <ChevronUp className="text-teal-600 flex-shrink-0" />
              ) : (
                <ChevronDown className="text-slate-500 flex-shrink-0" />
              )}
            </button>
            
            <div 
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="p-4 text-slate-600 bg-white border-t border-slate-100">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default FAQ;