import { Eye, FileText, Shield, BarChart3 } from 'lucide-react';

const TransparencySection = () => {
  const steps = [
    { icon: <BarChart3 className="w-8 h-8" />, title: "Deposit", description: "Dana masuk ke smart contract" },
    { icon: <Shield className="w-8 h-8" />, title: "Verifikasi", description: "Sistem blockchain memverifikasi" },
    { icon: <Eye className="w-8 h-8" />, title: "Monitoring", description: "Tracking progress real-time" },
    { icon: <FileText className="w-8 h-8" />, title: "Payout", description: "Otomatis sesuai kontrak" }
  ];

  const features = [
    {
      title: "Laporan Real-Time",
      description: "Lihat status pendanaan setiap proyek secara langsung tanpa delay."
    },
    {
      title: "Smart Contract Terverifikasi",
      description: "Kode terbuka di blockchain yang dapat diaudit oleh siapa saja."
    },
    {
      title: "Audit Publik",
      description: "Setiap transaksi dapat diperiksa dan diverifikasi oleh publik."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-neutral-900 mb-4">
            Transparansi Penuh
          </h2>
          <p className="text-xl font-body text-neutral-600 max-w-3xl mx-auto">
            Setiap rupiah yang Anda investasikan dapat dilacak dengan teknologi blockchain terdepan.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Flow Diagram */}
          <div className="space-y-6">
            <h3 className="text-2xl font-heading font-bold text-neutral-900 mb-8">Alur Pendanaan</h3>
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-neutral-50 rounded-brand">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-neutral-900">{step.title}</h4>
                    <p className="font-body text-neutral-600 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-primary-50 p-6 rounded-brand hover:bg-primary-100 transition-colors duration-300">
                <h4 className="text-xl font-heading font-bold text-neutral-900 mb-3">{feature.title}</h4>
                <p className="font-body text-neutral-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransparencySection;