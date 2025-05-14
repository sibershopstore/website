import React from 'react';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  centered?: boolean;
}

const Section: React.FC<SectionProps> = ({
  id,
  className = '',
  children,
  title,
  subtitle,
  centered = false,
}) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;