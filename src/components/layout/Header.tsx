import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { GivingType } from '../ui/GivingModal';

interface HeaderProps {
  onOpenGivingModal: (type: GivingType) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenGivingModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre Nós', href: '#sobre-nos' },
    { label: 'Ministérios', href: '#ministerios' },
    { label: 'Eventos', href: '#eventos' },
    { label: 'Pregações', href: '#pregacoes' },
  ];

  // TODO: Substitua estas URLs pelos caminhos das suas imagens na pasta public (ex: "/logo-escura.png")
  const logoDark = "https://placehold.co/180x50/transparent/2D2D2D?text=Logo+Escura"; 
  const logoLight = "https://placehold.co/180x50/transparent/FFFFFF?text=Logo+Branca";

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <a 
              href="#inicio" 
              onClick={(e) => scrollToSection(e, '#inicio')}
              className="block"
            >
              <img 
                src={isScrolled ? logoDark : logoLight} 
                alt="Logo Igreja Restaurar" 
                className="h-10 md:h-12 w-auto transition-all duration-300 object-contain"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`text-sm font-medium uppercase tracking-wider transition-colors hover:text-[#D64531] ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => onOpenGivingModal('dizimo')}
                className={`px-5 py-2 rounded-full font-semibold text-sm uppercase tracking-wide transition-all duration-300 shadow-md hover:scale-105 hover:shadow-lg ${
                  isScrolled 
                    ? 'bg-gray-100 text-gray-800 hover:bg-gray-200' 
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                }`}
              >
                Dízimos
              </button>
              <button 
                onClick={() => onOpenGivingModal('oferta')}
                className="bg-[#D64531] text-white px-5 py-2 rounded-full font-semibold text-sm uppercase tracking-wide transition-all duration-300 hover:bg-[#b53a29] hover:scale-105 hover:shadow-xl shadow-md"
              >
                Ofertar
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${isScrolled ? 'text-gray-800' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#F9F7F2] shadow-xl border-t border-gray-100">
          <div className="flex flex-col px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-gray-800 text-lg font-medium hover:text-[#D64531]"
              >
                {item.label}
              </a>
            ))}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <button 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenGivingModal('dizimo');
                  }}
                  className="bg-gray-200 text-gray-800 px-5 py-3 rounded-md font-semibold w-full hover:bg-gray-300 transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
                >
                Dízimos
              </button>
              <button 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenGivingModal('oferta');
                  }}
                  className="bg-[#D64531] text-white px-5 py-3 rounded-md font-semibold w-full hover:bg-[#b53a29] transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
                >
                Ofertar
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};