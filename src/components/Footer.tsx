import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Logo className="w-10 h-10" />
              <div>
                <span className="text-azure-blue font-bold">HERNOTIX</span>
                <span className="text-gold-yellow font-bold"> Tech</span>
              </div>
            </div>
            <p className="text-gray-400">
              Transformant les idées en solutions numériques puissantes du Bénin au monde.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Liens Rapides</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-azure-blue transition">Services</a></li>
              <li><a href="#portfolio" className="hover:text-azure-blue transition">Portfolio</a></li>
              <li><a href="#about" className="hover:text-azure-blue transition">À Propos</a></li>
              <li><a href="#contact" className="hover:text-azure-blue transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: <a href="mailto:hello@hernotix.com" className="text-azure-blue hover:underline">hello@hernotix.com</a></li>
              <li>Localisation: Bénin, Afrique de l'Ouest</li>
              <li className="pt-2">
                <div className="flex space-x-4">
                  <a href="#" className="text-azure-blue hover:text-gold-yellow transition">Twitter</a>
                  <a href="#" className="text-azure-blue hover:text-gold-yellow transition">LinkedIn</a>
                  <a href="#" className="text-azure-blue hover:text-gold-yellow transition">GitHub</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© {currentYear} HERNOTIX Tech. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
