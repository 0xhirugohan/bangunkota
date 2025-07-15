import React from 'react';
import { AlertTriangle, Clock, Droplets, Car } from 'lucide-react';

const ProblemImpactSection = () => {
  const challenges = [
    {
      icon: <Clock className="w-8 h-8 text-secondary-500" />,
      title: "Birokrasi Panjang",
      description: "Anggaran terbatas dengan proses persetujuan yang memakan waktu"
    },
    {
      icon: <Droplets className="w-8 h-8 text-primary-500" />,
      title: "Genangan & Banjir Lokal",
      description: "Masalah drainase yang kerap kembali setiap musim hujan"
    },
    {
      icon: <Car className="w-8 h-8 text-neutral-700" />,
      title: "Jalan Rusak",
      description: "Infrastruktur jalan yang memperlambat mobilitas warga"
    }
  ];

  return (
    <section className="py-20 bg-secondary-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <AlertTriangle className="w-8 h-8 text-secondary-600" />
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-neutral-900 mb-4">
              Tantangan Infrastruktur Kecil
            </h2>
          </div>
          <p className="text-xl font-body text-neutral-600 max-w-3xl mx-auto mb-8">
            Mengapa Mikro-Pendanaan?
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {challenges.map((challenge, index) => (
            <div 
              key={index}
              className="bg-white rounded-brand p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="mb-4 flex justify-center">
                {challenge.icon}
              </div>
              <h3 className="text-xl font-heading font-bold text-neutral-900 mb-3">
                {challenge.title}
              </h3>
              <p className="font-body text-neutral-600">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quick Stat */}
        <div className="bg-white rounded-brand p-8 shadow-xl border-l-4 border-secondary-500">
          <div className="text-center">
            <h3 className="text-2xl font-heading font-bold text-neutral-900 mb-4">Fakta APBD Jakarta Selatan</h3>
            <p className="text-lg font-body text-neutral-700 leading-relaxed">
              <span className="font-bold text-secondary-600">APBD Jaksel: &gt;Rp 10 triliun</span>—namun proyek kecil 
              molor hingga berminggu-minggu karena kompleksitas birokrasi dan alokasi anggaran.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemImpactSection;