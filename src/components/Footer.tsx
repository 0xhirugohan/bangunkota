import React from 'react';
import { Instagram, Twitter, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, label: 'Instagram', href: '#' },
    { icon: <Twitter className="w-5 h-5" />, label: 'Twitter', href: '#' },
    { icon: <MessageCircle className="w-5 h-5" />, label: 'Telegram', href: '#' }
  ];

  const navigationLinks = [
    { title: 'Tentang', href: '#' },
    { title: 'Proyek Kami', href: '#' },
    { title: 'FAQ', href: '#' },
    { title: 'Hubungi Kami', href: '#' }
  ];

  const contactInfo = [
    { icon: <Mail className="w-4 h-4" />, text: 'info@civicfundjs.gov.id' },
    { icon: <Phone className="w-4 h-4" />, text: '+62 21 1234 5678' },
    { icon: <MapPin className="w-4 h-4" />, text: 'Jakarta Selatan, DKI Jakarta' }
  ];

  return (
    <footer className="bg-neutral-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex flex-col gap-1">
                <div className="flex gap-1">
                  <div className="w-3 h-4 bg-primary-500 rounded-sm"></div>
                  <div className="w-3 h-5 bg-secondary-500 rounded-sm"></div>
                </div>
                <div className="w-7 h-3 bg-primary-500 rounded-sm"></div>
              </div>
              <h3 className="text-2xl font-heading font-bold">BangunKota</h3>
            </div>
            <p className="font-body text-neutral-300 mb-6 leading-relaxed">
              Platform micro-funding terpercaya untuk proyek-proyek infrastruktur Jakarta Selatan. 
              Bersama membangun lingkungan yang lebih baik untuk masa depan.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Navigasi</h4>
            <ul className="space-y-2">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="font-body text-neutral-300 hover:text-white transition-colors duration-300"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Kontak</h4>
            <ul className="space-y-3">
              {contactInfo.map((contact, index) => (
                <li key={index} className="flex items-center gap-3 font-body text-neutral-300">
                  {contact.icon}
                  <span className="text-sm">{contact.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-neutral-700 mb-8" />

        {/* Copyright and Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="font-body text-neutral-400 text-sm">
            © 2025 BangunKota. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm font-body text-neutral-400">
            <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
            <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
          </div>
        </div>

        {/* Government Partnership */}
        <div className="mt-8 pt-8 border-t border-neutral-700">
          <div className="text-center">
            <div className="flex justify-center items-center gap-8 mb-4">
              <div className="text-sm font-body text-neutral-400">Didukung oleh:</div>
              <div className="flex gap-4 text-xs font-body text-neutral-500">
                <span className="bg-neutral-800 px-3 py-1 rounded">BI</span>
                <span className="bg-neutral-800 px-3 py-1 rounded">OJK</span>
                <span className="bg-neutral-800 px-3 py-1 rounded">Bappebti</span>
              </div>
            </div>
            <p className="text-sm font-body text-neutral-400 mb-2">
              Kemitraan Resmi dengan
            </p>
            <p className="text-sm font-body text-neutral-300">
              Pemerintah Kota Jakarta Selatan • Dinas Bina Marga • Dinas Lingkungan Hidup
            </p>
            <div className="mt-4 space-x-4 text-sm">
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                Whitepaper
              </a>
              <span className="text-neutral-500">•</span>
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                GitHub POC
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;