import React from 'react';
import { Award, CheckCircle } from 'lucide-react';

const GovernmentSection = () => {
  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Government Logos and Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-8">
              <Award className="w-12 h-12 text-blue-600" />
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Peran Pemerintah
                </h2>
                <p className="text-gray-600">Dukungan resmi dan terpercaya</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">DKI</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Pemprov DKI Jakarta</h3>
                  <p className="text-gray-600">Jakarta Selatan</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Platform ini dijalankan atas kerja sama Dinas Bina Marga, Dinas Lingkungan Hidup, 
                dan didukung penuh oleh Pemerintah Kota Jakarta Selatan melalui nota kesepahaman resmi.
              </p>
            </div>
          </div>

          {/* Key Points */}
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900">Legalitas Terjamin</h4>
                <p className="text-gray-600">Beroperasi dengan izin resmi dari Pemerintah DKI Jakarta</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900">Pengawasan Ketat</h4>
                <p className="text-gray-600">Diawasi langsung oleh dinas terkait untuk memastikan transparansi</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900">Dampak Nyata</h4>
                <p className="text-gray-600">Setiap proyek yang didanai memberikan manfaat langsung untuk masyarakat</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GovernmentSection;