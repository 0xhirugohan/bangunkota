import React from 'react';
import { TrendingUp, Home, Shield } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <TrendingUp className="w-12 h-12 text-primary-600" />,
      title: "Tarif Kompetitif",
      description: "Hasil hingga 5% per tahun dengan risiko minimal dan dukungan pemerintah."
    },
    {
      icon: <Home className="w-12 h-12 text-secondary-500" />,
      title: "Kepemilikan Lingkungan",
      description: "Pendanaan langsung untuk proyek di RT/RW Anda. Lihat dampak nyata di sekitar rumah."
    },
    {
      icon: <Shield className="w-12 h-12 text-accent-600" />,
      title: "Dukungan Pemerintah",
      description: "Resmi didukung oleh Pemerintah Kota Jakarta Selatan dengan jaminan transparansi penuh."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-neutral-900 mb-4">
            Mengapa Bergabung?
          </h2>
          <p className="text-xl font-body text-neutral-600 max-w-3xl mx-auto">
            Platform yang dirancang khusus untuk memberdayakan warga Jakarta Selatan dalam membangun lingkungan yang lebih baik.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-brand p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
                {benefit.title}
              </h3>
              <p className="font-body text-neutral-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;