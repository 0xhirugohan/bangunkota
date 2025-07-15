import { Search, CreditCard, TrendingUp } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <Search className="w-12 h-12 text-primary-600" />,
      title: "Pilih Proyek",
      description: "Lihat daftar proyek mikro (drainase, jalan, sungai) di wilayah Anda",
      color: "primary"
    },
    {
      icon: <CreditCard className="w-12 h-12 text-secondary-500" />,
      title: "Deposit Rp 50.000+",
      description: "One-click top-up via GoPay, OVO, QRIS (IDR→USDC otomatis)",
      color: "secondary"
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-accent-600" />,
      title: "Pantau & Cairkan",
      description: "Proyek selesai → pokok + bunga (≤5%) dikembalikan ke wallet Anda",
      color: "accent"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-neutral-900 mb-4">
            Cara Kerja Platform
          </h2>
          <p className="text-xl font-body text-neutral-600 max-w-3xl mx-auto">
            Solusi BangunBersama - Sederhana, Transparan, Efektif
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-neutral-900 text-white rounded-full flex items-center justify-center font-heading font-bold text-sm z-10">
                {index + 1}
              </div>
              
              {/* Card */}
              <div className="bg-neutral-50 rounded-brand p-8 h-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <div className="mb-6">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
                  {step.title}
                </h3>
                <p className="font-body text-neutral-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                  <div className="w-8 h-0.5 bg-neutral-300"></div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-neutral-300 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;