import React from 'react';
import { TrendingUp, Users, CheckCircle, DollarSign } from 'lucide-react';

const MetricsImpactSection = () => {
  const metrics = [
    {
      icon: <DollarSign className="w-8 h-8 text-accent-600" />,
      value: "Rp 3 miliar",
      label: "Dana Terkumpul",
      color: "accent"
    },
    {
      icon: <Users className="w-8 h-8 text-primary-600" />,
      value: "6.000+",
      label: "Mikro-Investor",
      color: "primary"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-secondary-500" />,
      value: "35+",
      label: "Proyek Selesai",
      color: "secondary"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <TrendingUp className="w-8 h-8 text-accent-600" />
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-neutral-900">
              Hasil Pilot & Proyeksi
            </h2>
          </div>
          <p className="text-xl font-body text-neutral-600 max-w-3xl mx-auto">
            Angka & Dampak Nyata dari Program Mikro-Pendanaan
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className={`bg-${metric.color}-50 rounded-brand p-8 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2`}
            >
              <div className={`mb-4 p-3 bg-${metric.color}-100 rounded-full w-fit mx-auto`}>
                {metric.icon}
              </div>
              <div className={`text-4xl font-display font-bold text-${metric.color}-600 mb-2`}>
                {metric.value}
              </div>
              <div className="font-body text-neutral-700 font-semibold">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Financial Model */}
        <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-brand p-8 shadow-xl">
          <h3 className="text-2xl font-heading font-bold text-neutral-900 mb-6 text-center">
            Model Finansial & Dampak Sosial
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-brand shadow-sm">
                <h4 className="font-heading font-semibold text-neutral-900 mb-2">Pool Dana</h4>
                <p className="text-2xl font-display font-bold text-primary-600">Rp 1 miliar</p>
              </div>
              <div className="bg-white p-4 rounded-brand shadow-sm">
                <h4 className="font-heading font-semibold text-neutral-900 mb-2">Bunga Tahunan</h4>
                <p className="text-2xl font-display font-bold text-accent-600">5% = Rp 50 juta/tahun</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-brand shadow-sm">
                <h4 className="font-heading font-semibold text-neutral-900 mb-2">Percepatan Proyek</h4>
                <p className="text-lg font-body text-secondary-600 font-semibold">10 drainase selesai</p>
              </div>
              <div className="bg-white p-4 rounded-brand shadow-sm">
                <h4 className="font-heading font-semibold text-neutral-900 mb-2">Potensi Hemat</h4>
                <p className="text-lg font-body text-primary-700 font-semibold">Kerugian banjir Rp 2 miliar</p>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="font-body text-neutral-700 italic">
              "Investasi kecil, dampak besar untuk pencegahan banjir dan peningkatan kualitas hidup warga"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricsImpactSection;