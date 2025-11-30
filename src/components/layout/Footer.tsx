import React, { useState } from 'react';
import { Instagram, Youtube, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const [imgError, setImgError] = useState(false);

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
    }
  };

  const footerLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre Nós', href: '#sobre-nos' },
    { label: 'Ministérios', href: '#ministerios' },
    { label: 'Eventos', href: '#eventos' },
    { label: 'Pregações', href: '#pregacoes' },
  ];

  // Logo real da pasta public (versão branca para fundo escuro)
  const logoLight = "/logo-light.svg";

  return (
    <footer className="bg-[#1a1a1a] text-white pt-20 pb-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            {/* Logo Image */}
            <a 
              href="#inicio" 
              onClick={(e) => scrollToSection(e, '#inicio')}
              className="block cursor-pointer"
            >
              {!imgError ? (
                <img 
                  src={logoLight} 
                  alt="Logo Igreja Restaurar" 
                  className="h-10 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                  onError={() => setImgError(true)}
                />
              ) : (
                <span className="text-2xl font-serif font-bold tracking-tight text-white">
                    Restaurar
                </span>
              )}
            </a>

            <p className="text-gray-400 font-light leading-relaxed">
              Levando a mensagem de restauração e esperança para nossa cidade e para o mundo.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/ig_restaurar/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#D64531] transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#D64531] transition-colors">
                <Youtube size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#D64531] transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif mb-6">Links Rápidos</h4>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-serif mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={20} className="text-[#D64531] mt-1 shrink-0" />
                <span>Rua Barão de Serra Azul, 403<br/>Jaderlândia, Paragominas - PA</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone size={20} className="text-[#D64531] shrink-0" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail size={20} className="text-[#D64531] shrink-0" />
                <span>contato@restaurar.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h4 className="text-lg font-serif mb-6">Fique por dentro</h4>
            <p className="text-gray-400 mb-4 text-sm">
              Receba devocionais e novidades da igreja diretamente no seu e-mail.
            </p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Seu melhor e-mail" 
                className="bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded focus:outline-none focus:border-[#D64531]"
              />
              <button className="bg-[#D64531] text-white px-4 py-3 rounded font-semibold hover:bg-[#b53a29] transition-colors uppercase tracking-wider text-sm">
                Inscrever-se
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Igreja Restaurar. Todos os direitos reservados.
          </p>
          <div className="text-gray-600 text-xs">
            Feito com <span className="text-[#D64531]">♥</span> e fé.
          </div>
        </div>
      </div>
    </footer>
  );
};