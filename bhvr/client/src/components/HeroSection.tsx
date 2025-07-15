import { ChevronDown, Play } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-500 to-secondary-500">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 opacity-20">
        {/* Abstract city blocks pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/30 to-secondary-600/30"></div>
        <div className="absolute top-20 left-20 w-16 h-24 bg-white/10 rounded-brand transform rotate-12"></div>
        <div className="absolute top-40 left-40 w-12 h-20 bg-white/15 rounded-brand transform -rotate-6"></div>
        <div className="absolute top-60 right-32 w-20 h-32 bg-white/10 rounded-brand transform rotate-3"></div>
        <div className="absolute bottom-40 right-20 w-14 h-28 bg-white/15 rounded-brand transform -rotate-12"></div>
        <div className="absolute bottom-20 left-1/3 w-18 h-36 bg-white/10 rounded-brand transform rotate-6"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Brand Logo */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="flex flex-col gap-1">
            <div className="flex gap-1">
              <div className="w-4 h-6 bg-primary-500 rounded-sm"></div>
              <div className="w-4 h-8 bg-secondary-500 rounded-sm"></div>
            </div>
            <div className="w-9 h-4 bg-primary-500 rounded-sm"></div>
          </div>
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-white">
            BangunKota
          </h1>
        </div>
        
        <h2 className="text-4xl md:text-6xl/[72px] font-heading font-bold text-white mb-6">
          Mulai Pendanaan Lingkungan Anda 
          <span className="block text-secondary-400">Hanya dari Rp 50.000</span>
        </h2>
        
        <p className="text-xl md:text-2xl font-body text-gray-200 mb-8 leading-relaxed">
          Dukung perbaikan saluran, jalan, dan sungai di lingkungan Anda dengan investasi mikro—mudah, aman, dan transparan.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => scrollToSection('benefits')}
            className="bg-primary-500 hover:bg-secondary-500 text-white px-8 py-4 rounded-brand font-heading font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Cari Tahu Lebih Lanjut
          </button>
          <button 
            onClick={() => scrollToSection('simulation')}
            className="bg-secondary-500 hover:bg-primary-500 text-white px-8 py-4 rounded-brand font-heading font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2"
          >
            <Play size={20} />
            Mulai Sekarang
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-white opacity-70" />
      </div>
    </section>
  );
};

export default HeroSection;