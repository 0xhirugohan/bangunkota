import React from 'react';
import { Users, Eye, BarChart3, Monitor } from 'lucide-react';

const GovernanceSection = () => {
  const governanceFeatures = [
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: "Multi-sig 2-of-3",
      description: "Dinas Bina Marga & Lingkungan sebagai validator utama"
    },
    {
      icon: <Eye className="w-6 h-6 text-green-600" />,
      title: "On-chain Milestone Validation",
      description: "Setiap tahap proyek diverifikasi secara transparan"
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-orange-500" />,
      title: "Dashboard Publik",
      description: "Update real-time & rating warga untuk setiap proyek"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Monitor className="w-8 h-8 text-blue-600" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Keputusan yang Akuntabel
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tata Kelola & Laporan Transparan
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {governanceFeatures.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="mb-4 p-3 bg-white rounded-lg w-fit">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Dashboard Preview */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-6 text-center">Preview Dashboard Publik</h3>
          
          {/* Mock Dashboard */}
          <div className="bg-gray-700 rounded-lg p-6 space-y-4">
            <div className="flex justify-between items-center border-b border-gray-600 pb-4">
              <h4 className="text-lg font-semibold">Proyek Drainase RT 05/RW 03</h4>
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">75% Complete</span>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-gray-600 p-3 rounded">
                <div className="text-gray-300">Dana Terkumpul</div>
                <div className="text-xl font-bold text-green-400">Rp 750 juta</div>
              </div>
              <div className="bg-gray-600 p-3 rounded">
                <div className="text-gray-300">Investor</div>
                <div className="text-xl font-bold text-blue-400">234 orang</div>
              </div>
              <div className="bg-gray-600 p-3 rounded">
                <div className="text-gray-300">Rating Warga</div>
                <div className="text-xl font-bold text-yellow-400">4.8/5.0</div>
              </div>
            </div>
            
            <div className="bg-gray-600 p-3 rounded">
              <div className="text-gray-300 mb-2">Progress Timeline</div>
              <div className="w-full bg-gray-500 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{width: '75%'}}></div>
              </div>
            </div>
          </div>
          
          <p className="text-center text-gray-300 mt-4 text-sm">
            *Tangkapan mock-up dashboard - Interface akan tersedia setelah peluncuran
          </p>
        </div>
      </div>
    </section>
  );
};

export default GovernanceSection;