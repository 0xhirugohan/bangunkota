import React from 'react';
import { MapPin, Calendar, Target } from 'lucide-react';

const RoadmapSection = () => {
  const roadmapItems = [
    {
      quarter: "Q1 2026",
      title: "Pilot Jakarta Selatan",
      description: "Peluncuran resmi platform dengan 10 proyek pilot",
      status: "current",
      icon: <Target className="w-6 h-6" />
    },
    {
      quarter: "Q2 2026",
      title: "Ekspansi DKI Jakarta",
      description: "Jakarta Barat, Jakarta Utara, Jakarta Pusat",
      status: "upcoming",
      icon: <MapPin className="w-6 h-6" />
    },
    {
      quarter: "H2 2026",
      title: "Kota Tier-2",
      description: "Bandung, Surabaya, dan kota besar lainnya",
      status: "future",
      icon: <Calendar className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Dari Jaksel ke Seluruh Indonesia
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Roadmap Ekspansi Platform Mikro-Pendanaan
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300 hidden md:block"></div>
          
          <div className="space-y-12">
            {roadmapItems.map((item, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
                    item.status === 'current' ? 'border-l-4 border-blue-500' :
                    item.status === 'upcoming' ? 'border-l-4 border-orange-500' :
                    'border-l-4 border-gray-300'
                  }`}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-2 rounded-lg ${
                        item.status === 'current' ? 'bg-blue-100 text-blue-600' :
                        item.status === 'upcoming' ? 'bg-orange-100 text-orange-600' :
                        'bg-gray-100 text-gray-600'
                      }`}>
                        {item.icon}
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        item.status === 'current' ? 'bg-blue-100 text-blue-600' :
                        item.status === 'upcoming' ? 'bg-orange-100 text-orange-600' :
                        'bg-gray-100 text-gray-600'
                      }`}>
                        {item.quarter}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <div className={`w-4 h-4 rounded-full border-4 ${
                    item.status === 'current' ? 'bg-blue-500 border-blue-200' :
                    item.status === 'upcoming' ? 'bg-orange-500 border-orange-200' :
                    'bg-gray-300 border-gray-100'
                  }`}></div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Statement */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Visi 2027</h3>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Menjadi platform mikro-pendanaan infrastruktur terdepan di Indonesia, 
            menghubungkan masyarakat dengan proyek-proyek yang memberikan dampak nyata 
            bagi kehidupan sehari-hari mereka.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;