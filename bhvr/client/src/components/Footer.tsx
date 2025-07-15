const Footer = () => {
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
              Platform mikro-pendanaan terpercaya untuk proyek-proyek infrastruktur Jakarta Selatan. 
              Bersama membangun lingkungan yang lebih baik untuk masa depan.
            </p>
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
            <a
              href="https://www.canva.com/design/DAGtM6x2qEg/gTJiz7kXpPr65Fd2Sz3zuA/edit?utm_content=DAGtM6x2qEg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
              className="hover:text-white transition-colors"
            >
              Pitch Deck
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;