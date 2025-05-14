import React from 'react';
import Section from './ui/Section';
import { pricingPlans } from '../data/pricing';
import { Check } from 'lucide-react';
import Button from './ui/Button';

const Pricing: React.FC = () => {
  return (
    <Section
      id="pricing"
      title="Paket Layanan"
      subtitle="Pilih paket layanan yang sesuai dengan kebutuhan Anda"
      centered
      className="bg-slate-50"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {pricingPlans.map((plan) => (
          <div
            key={plan.id}
            className={`relative bg-white rounded-2xl shadow-lg overflow-hidden ${
              plan.popular ? 'border-2 border-teal-500' : ''
            }`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0 bg-teal-500 text-white px-4 py-1 rounded-bl-lg text-sm font-medium">
                TERPOPULER
              </div>
            )}
            {plan.name === 'Partnership' && (
              <div className="absolute top-0 right-0 bg-orange-500 text-white px-4 py-1 rounded-bl-lg text-sm font-medium">
                PREMIUM
              </div>
            )}
            {plan.name === 'Reseller' && (
              <div className="absolute top-0 right-0 bg-emerald-500 text-white px-4 py-1 rounded-bl-lg text-sm font-medium">
                NEW
              </div>
            )}
            <div className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-bold text-slate-900">{plan.price === 'N/A' ? '' : `Rp.${plan.price}`}</span>
                <span className="text-slate-600 ml-1">{plan.price === 'N/A' ? plan.price : '/start'}</span>
              </div>
              <p className="text-slate-600 mb-6">{plan.description}</p>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="text-teal-500 h-5 w-5 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href={plan.buttonLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block w-full text-center px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                  plan.popular
                    ? 'bg-teal-600 hover:bg-teal-700 text-white'
                    : 'bg-orange-500 hover:bg-orange-600 text-white'
                }`}
              >
                {plan.buttonText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Pricing;