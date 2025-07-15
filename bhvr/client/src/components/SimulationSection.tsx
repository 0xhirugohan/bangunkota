import { useState } from 'react';
import { Calculator, Droplets, Loader as Road, Trees, Building } from 'lucide-react';

const SimulationSection = () => {
  const [amount, setAmount] = useState(100000);
  const [selectedProject, setSelectedProject] = useState('river');

  const projects = [
    { 
      id: 'river', 
      name: 'Pembersihan Sungai', 
      icon: <Droplets className="w-6 h-6" />, 
      color: 'blue',
      multiplier: 1.2,
      duration: '6 bulan',
      description: 'Proyek pembersihan dan revitalisasi sungai di Jakarta Selatan'
    },
    { 
      id: 'road', 
      name: 'Perbaikan Jalan', 
      icon: <Road className="w-6 h-6" />, 
      color: 'gray',
      multiplier: 1.15,
      duration: '4 bulan',
      description: 'Pembangunan dan perbaikan infrastruktur jalan lingkungan'
    },
    { 
      id: 'park', 
      name: 'Taman Kota', 
      icon: <Trees className="w-6 h-6" />, 
      color: 'green',
      multiplier: 1.3,
      duration: '8 bulan',
      description: 'Pembangunan dan perawatan taman untuk ruang hijau kota'
    },
    { 
      id: 'drainage', 
      name: 'Saluran Air', 
      icon: <Building className="w-6 h-6" />, 
      color: 'indigo',
      multiplier: 1.25,
      duration: '5 bulan',
      description: 'Pembangunan dan pemeliharaan sistem drainase lingkungan'
    }
  ];

  const selectedProjectData = projects.find(p => p.id === selectedProject);
  const expectedReturn = Math.round(amount * selectedProjectData!.multiplier);
  const profit = expectedReturn - amount;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <section id="simulation" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Calculator className="w-8 h-8 text-blue-600" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Simulasi Investasi
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lihat potensi keuntungan dari investasi Anda untuk berbagai jenis proyek
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Input Section */}
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Jumlah Investasi</h3>
              <div className="space-y-4">
                <input
                  type="range"
                  min="50000"
                  max="10000000"
                  step="50000"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Rp 50rb</span>
                  <span>Rp 10jt</span>
                </div>
                <div className="text-center">
                  <span className="text-3xl font-bold text-blue-600">
                    {formatCurrency(amount)}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Pilih Proyek</h3>
              <div className="grid grid-cols-2 gap-3">
                {projects.map((project) => (
                  <button
                    key={project.id}
                    onClick={() => setSelectedProject(project.id)}
                    className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                      selectedProject === project.id
                        ? `border-${project.color}-500 bg-${project.color}-50`
                        : 'border-gray-200 bg-white hover:bg-gray-50'
                    }`}
                  >
                    <div className={`text-${project.color}-600 mb-2`}>
                      {project.icon}
                    </div>
                    <h4 className="font-semibold text-gray-900 text-sm">
                      {project.name}
                    </h4>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Hasil Simulasi: {selectedProjectData?.name}
              </h3>
              <p className="text-gray-600 mb-4">
                {selectedProjectData?.description}
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Investasi Awal:</span>
                  <span className="font-bold text-lg">{formatCurrency(amount)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Periode:</span>
                  <span className="font-semibold">{selectedProjectData?.duration}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Multiplier:</span>
                  <span className="font-semibold">{selectedProjectData?.multiplier}x</span>
                </div>
                <hr className="border-gray-300" />
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Keuntungan:</span>
                  <span className="font-bold text-lg text-green-600">
                    {formatCurrency(profit)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Total Kembali:</span>
                  <span className="font-bold text-2xl text-blue-600">
                    {formatCurrency(expectedReturn)}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
              <h4 className="font-bold text-gray-900 mb-2">Dampak Lingkungan</h4>
              <p className="text-gray-700 text-sm">
                Investasi Anda akan berkontribusi langsung pada {selectedProjectData?.name.toLowerCase()} 
                di wilayah Jakarta Selatan, memberikan manfaat nyata bagi masyarakat sekitar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimulationSection;