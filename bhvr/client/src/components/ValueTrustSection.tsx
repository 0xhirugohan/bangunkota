import { Shield, Smartphone, DollarSign, CheckCircle } from 'lucide-react';

const ValueTrustSection = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-primary-600" />,
      title: "Transparansi On-Chain",
      description: "Multi-sig pemerintah & audit publik untuk keamanan maksimal",
      color: "primary"
    },
    {
      icon: <Smartphone className="w-8 h-8 text-accent-600" />,
      title: "Account Abstraction",
      description: "Login dengan email atau no HP",
      color: "accent"
    },
    {
      icon: <DollarSign className="w-8 h-8 text-secondary-500" />,
      title: "Dana Jaminan 5%",
      description: "Proteksi investor jika kontraktor gagal menyelesaikan proyek",
      color: "secondary"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-primary-700" />,
      title: "Certified Audit",
      description: "Pashov & CodeHawks verifikasi smart contracts untuk keamanan terjamin",
      color: "primary"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-neutral-50 to-primary-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-neutral-900 mb-4">
            Kenapa Percaya pada Kami?
          </h2>
          <p className="text-xl font-body text-neutral-600 max-w-3xl mx-auto">
            Keuntungan & Keamanan yang Terjamin
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-brand p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className={`mb-4 p-3 bg-${feature.color}-100 rounded-brand w-fit group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-lg font-heading font-bold text-neutral-900 mb-3">
                {feature.title}
              </h3>
              <p className="font-body text-neutral-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 bg-white rounded-brand p-8 shadow-xl">
          <div className="text-center">
            <h3 className="text-2xl font-heading font-bold text-neutral-900 mb-4">Jaminan Keamanan Berlapis</h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm font-body text-neutral-600">
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent-600" />
                <span>Smart Contract Teraudit</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent-600" />
                <span>Multi-Signature Wallet</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent-600" />
                <span>Insurance Fund 5%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueTrustSection;