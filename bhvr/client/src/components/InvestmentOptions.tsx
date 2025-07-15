import { useState } from 'react';
import { Clock, TrendingUp, Calendar } from 'lucide-react';

const InvestmentOptions = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('3');

  const periods = [
    { id: '1', label: '1 Bulan', return: '0.4%', minimum: '50,000', icon: <Clock className="w-5 h-5" /> },
    { id: '3', label: '3 Bulan', return: '1.2%', minimum: '50,000', icon: <Calendar className="w-5 h-5" /> },
    { id: '6', label: '6 Bulan', return: '2.5%', minimum: '100,000', icon: <TrendingUp className="w-5 h-5" /> },
    { id: '12', label: '12 Bulan', return: '5.0%', minimum: '200,000', icon: <TrendingUp className="w-5 h-5" /> }
  ];

  const selectedOption = periods.find(p => p.id === selectedPeriod);

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50" id="simulasi">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Pilih Jangka Waktu Anda
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fleksibilitas investasi sesuai kemampuan dan kebutuhan Anda
          </p>
        </div>

        {/* Period Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {periods.map((period) => (
            <button
              key={period.id}
              onClick={() => setSelectedPeriod(period.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                selectedPeriod === period.id
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
              }`}
            >
              {period.icon}
              {period.label}
            </button>
          ))}
        </div>

        {/* Selected Option Details */}
        {selectedOption && (
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                {selectedOption.icon}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {selectedOption.label}
              </h3>
              <p className="text-gray-600">Periode investasi optimal untuk hasil maksimal</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Minimum Deposit</h4>
                <p className="text-2xl font-bold text-blue-600">Rp {selectedOption.minimum}</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Imbal Hasil</h4>
                <p className="text-2xl font-bold text-green-600">{selectedOption.return}</p>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Periode</h4>
                <p className="text-2xl font-bold text-orange-600">{selectedOption.label}</p>
              </div>
            </div>

            <div className="text-center">
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Mulai dari Rp {selectedOption.minimum}
              </button>
              <p className="text-sm text-gray-500 mt-2">*Simulasi</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default InvestmentOptions;