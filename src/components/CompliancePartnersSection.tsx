import React from 'react';
import { Shield, Handshake, Building, CreditCard } from 'lucide-react';

const CompliancePartnersSection = () => {
  const regulators = [
    {
      name: "OJK/BI",
      description: "Legal opinion & sandbox",
      timeline: "Bulan 1-2",
      status: "In Progress"
    },
    {
      name: "Bappebti",
      description: "KYC/AML compliance",
      timeline: "Bulan 2-3",
      status: "Planned"
    }
  ];

  const partners = [
    {
      name: "Bank DKI",
      description: "Escrow IDR & settlement",
      type: "Banking"
    },
    {
      name: "GoPay & OVO",
      description: "Payment on-ramps",
      type: "Fintech"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Handshake className="w-8 h-8 text-blue-600" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Kolaborasi & Kepatuhan
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Regulator & Mitra Terpercaya
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Regulators */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900">Regulator</h3>
            </div>
            
            <div className="space-y-4">
              {regulators.map((regulator, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-xl font-bold text-gray-900">{regulator.name}</h4>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      regulator.status === 'In Progress' 
                        ? 'bg-orange-100 text-orange-600' 
                        : 'bg-blue-100 text-blue-600'
                    }`}>
                      {regulator.status}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-2">{regulator.description}</p>
                  <p className="text-sm text-gray-500">Timeline: {regulator.timeline}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Partners */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Building className="w-8 h-8 text-green-600" />
              <h3 className="text-2xl font-bold text-gray-900">Mitra Fintech & Bank</h3>
            </div>
            
            <div className="space-y-4">
              {partners.map((partner, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-green-100 rounded-lg">
                      {partner.type === 'Banking' ? (
                        <Building className="w-6 h-6 text-green-600" />
                      ) : (
                        <CreditCard className="w-6 h-6 text-green-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{partner.name}</h4>
                      <p className="text-gray-600 mb-2">{partner.description}</p>
                      <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold">
                        {partner.type}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Compliance Statement */}
        <div className="mt-12 bg-blue-600 text-white rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Komitmen Kepatuhan</h3>
          <p className="text-blue-100 leading-relaxed max-w-3xl mx-auto">
            Kami berkomitmen penuh untuk mematuhi seluruh regulasi keuangan Indonesia dan bekerja sama 
            dengan otoritas terkait untuk memastikan platform yang aman dan terpercaya bagi semua pengguna.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompliancePartnersSection;