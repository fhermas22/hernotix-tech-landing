import { useState } from 'react';
import Logo from './Logo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'À Propos', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="flex items-center space-x-3">
          <Logo className="w-10 h-10" />
          <div className="text-2xl font-extrabold">
            <span className="text-azure-blue">HERNOTIX</span>
            <span className="text-gold-yellow"> Tech</span>
          </div>
        </div>
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-charcoal-black hover:text-azure-blue transition duration-300 font-medium">
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}