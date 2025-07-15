import React, { useState } from 'react';
import { Mail, User, CreditCard, DollarSign, Send } from 'lucide-react';

const CTASection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    paymentMethod: 'bank',
    amount: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Terima kasih! Ini hanya simulasi. Integrasi akan menyusul.');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const isValidAmount = formData.amount && parseInt(formData.amount) >= 50000;

  return (
    <section id="cta-form" className="py-20 bg-brand-gradient">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Ayo Pendanaan Sekarang
          </h2>
          <p className="text-xl font-body text-primary-100 max-w-3xl mx-auto">
            Isi formulir singkat, pilih metode pembayaran, dan dukung infrastruktur lingkungan Anda.
          </p>
        </div>

        <div className="bg-white rounded-brand shadow-2xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div className="space-y-2">
              <label className="block text-sm font-heading font-semibold text-neutral-700">
                Nama Lengkap
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-brand focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 font-body"
                  placeholder="Masukkan nama lengkap Anda"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="block text-sm font-heading font-semibold text-neutral-700">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-brand focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 font-body"
                  placeholder="contoh@email.com"
                />
              </div>
            </div>

            {/* Payment Method */}
            <div className="space-y-2">
              <label className="block text-sm font-heading font-semibold text-neutral-700">
                Metode Pembayaran
              </label>
              <div className="relative">
                <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
                <select
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-brand focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 font-body"
                >
                  <option value="bank">Transfer Bank</option>
                  <option value="ewallet">E-Wallet (GoPay, OVO, Dana)</option>
                  <option value="crypto">Cryptocurrency</option>
                </select>
              </div>
            </div>

            {/* Amount */}
            <div className="space-y-2">
              <label className="block text-sm font-heading font-semibold text-neutral-700">
                Jumlah Investasi (Minimum Rp 50.000)
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  min="50000"
                  step="50000"
                  required
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300 ${
                    isValidAmount || !formData.amount 
                      ? 'border-neutral-300 focus:ring-primary-500' 
                      : 'border-secondary-300 focus:ring-secondary-500'
                  }`}
                  placeholder="50000"
                />
              </div>
              {formData.amount && !isValidAmount && (
                <p className="text-secondary-500 text-sm font-body">Minimum investasi adalah Rp 50.000</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!isValidAmount || !formData.fullName || !formData.email}
              className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 disabled:from-neutral-400 disabled:to-neutral-500 text-white font-heading font-semibold py-4 px-6 rounded-brand transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-3 disabled:cursor-not-allowed disabled:transform-none"
            >
              <Send className="w-5 h-5" />
              Kirim Permintaan
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm font-body text-neutral-500">
              * Ini hanya simulasi. Integrasi akan menyusul.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;