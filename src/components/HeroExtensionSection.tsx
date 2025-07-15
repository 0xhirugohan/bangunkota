import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroExtensionSection = () => {
  const scrollToForm = () => {
    const element = document.getElementById('cta-form');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-gradient-to-br from-primary-500 to-primary-700">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
          Bergabunglah Mendukung Infrastruktur Lokal—Mulai dari Rp 50.000
        </h2>
        <p className="text-xl font-body text-primary-100 mb-8 leading-relaxed">
          Pinjaman mikro Anda, dampak besar untuk saluran, jalan, dan sungai di Jakarta Selatan
        </p>
        <button 
          onClick={scrollToForm}
          className="bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-4 rounded-brand font-heading font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 mx-auto"
        >
          Mulai Pendanaan
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default HeroExtensionSection;