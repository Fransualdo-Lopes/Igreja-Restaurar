
import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { GivingType } from '../ui/GivingModal';

interface HeaderProps {
  onOpenGivingModal: (type: GivingType) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenGivingModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Check local storage on mount
    // Default is light. Only switch to dark if explicitly saved in localStorage.
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      }
    }
    // System preference check removed to force Light Mode as default
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reset image error when logo source changes (theme or scroll change)
  // This allows the app to try loading the other logo if one failed
  const showDarkLogo = isScrolled && theme !== 'dark';
  useEffect(() => {
    setImgError(false);
  }, [showDarkLogo]);

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

  // Logos reais da pasta public
  const logoDark = "/1.svg"; 
  const logoLight = "/2.svg";

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white dark:bg-gray-900 shadow-md h-20' 
          : 'bg-transparent h-24'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center h-full">
            <a 
              href="#inicio" 
              onClick={(e) => scrollToSection(e, '#inicio')}
              className="flex items-center group h-full"
            >
              {!imgError ? (
                <img 
                  src={showDarkLogo ? logoDark : logoLight} 
                  alt="Logo Igreja Restaurar" 
                  className="h-12 md:h-16 w-auto transition-all duration-300 object-contain -ml-3"
                  onError={() => setImgError(true)}
                />
              ) : (
                // Fallback de Texto caso a imagem não carregue
                <span className={`text-2xl font-serif font-bold tracking-tight ${isScrolled ? 'text-[#D64531] dark:text-[#D64531]' : 'text-white'}`}>
                  Restaurar
                </span>
              )}
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 h-full">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`text-sm font-medium uppercase tracking-wider transition-colors hover:text-[#D64531] relative group py-2 ${
                  isScrolled ? 'text-gray-800 dark:text-gray-200' : 'text-white'
                }`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D64531] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
            
          {/* Action Buttons Group */}
          <div className="hidden md:flex items-center gap-4 h-full">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors ${
                isScrolled 
                  ? 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800' 
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
              title={theme === 'dark' ? "Modo Claro" : "Modo Escuro"}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Separator Line */}
            <div className={`h-6 w-px ${isScrolled ? 'bg-gray-300 dark:bg-gray-700' : 'bg-white/30'}`}></div>

            <button 
              onClick={() => onOpenGivingModal('dizimo')}
              className={`h-10 px-6 rounded-full font-semibold text-sm uppercase tracking-wide transition-all duration-300 shadow-sm hover:shadow-md flex items-center ${
                isScrolled 
                  ? 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700' 
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
              }`}
            >
              Dízimos
            </button>
            <button 
              onClick={() => onOpenGivingModal('oferta')}
              className="h-10 px-6 bg-[#D64531] text-white rounded-full font-semibold text-sm uppercase tracking-wide transition-all duration-300 hover:bg-[#b53a29] hover:scale-105 hover:shadow-xl shadow-md flex items-center border border-transparent"
            >
              Ofertar
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
             <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-colors ${
                  isScrolled 
                    ? 'text-gray-600 dark:text-gray-300' 
                    : 'text-white'
                }`}
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${isScrolled ? 'text-gray-800 dark:text-white' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#F9F7F2] dark:bg-gray-900 shadow-xl border-t border-gray-100 dark:border-gray-800">
          <div className="flex flex-col px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-gray-800 dark:text-gray-200 text-lg font-medium hover:text-[#D64531] dark:hover:text-[#D64531]"
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
                  className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-5 py-3 rounded-md font-semibold w-full hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
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
