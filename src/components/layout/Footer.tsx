
import React, { useState } from 'react';
import { Instagram, Youtube, Facebook, Mail, Phone, MapPin, MessageCircle, Heart, X } from 'lucide-react';

type ModalType = 'whatsapp' | 'youtube' | 'facebook' | null;

export const Footer: React.FC = () => {
  const [imgError, setImgError] = useState(false);
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [activeModal, setActiveModal] = useState<ModalType>(null);

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

  const handleWhatsappSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveModal('whatsapp');
  };

  const handleSocialClick = (e: React.MouseEvent, type: ModalType) => {
    e.preventDefault();
    setActiveModal(type);
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

  // Helper para conteúdo do modal
  const getModalContent = () => {
    switch (activeModal) {
      case 'whatsapp':
        return {
          icon: <Heart size={28} fill="currentColor" className="opacity-90" />,
          title: "Graça e Paz! ❤️",
          text: (
            <>
              Que alegria ver seu interesse em caminhar mais perto de Deus através dos nossos devocionais!
              <br/><br/>
              Estamos finalizando com muito carinho o nosso sistema de envio automático para que você tenha a melhor experiência possível. Em breve, esta funcionalidade estará disponível!
            </>
          )
        };
      case 'youtube':
        return {
          icon: <Youtube size={28} />,
          title: "Canal em Construção 🎥",
          text: (
            <>
              Estamos preparando nosso canal com muito carinho!
              <br/><br/>
              Em breve você poderá assistir aos cultos ao vivo, pregações e conteúdos exclusivos por aqui. Agradecemos sua paciência e orações!
            </>
          )
        };
      case 'facebook':
        return {
          icon: <Facebook size={28} />,
          title: "Página em Construção 👍",
          text: (
            <>
              Estamos organizando nossa página no Facebook para ficarmos mais conectados.
              <br/><br/>
              Em breve teremos novidades e conteúdos edificantes para você compartilhar com seus amigos e família.
            </>
          )
        };
      default:
        return null;
    }
  };

  const modalContent = getModalContent();

  return (
    <footer className="bg-[#1a1a1a] text-white pt-20 pb-10 border-t border-gray-800 relative">
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
              <a 
                href="#" 
                onClick={(e) => handleSocialClick(e, 'youtube')}
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#D64531] transition-colors"
              >
                <Youtube size={18} />
              </a>
              <a 
                href="#" 
                onClick={(e) => handleSocialClick(e, 'facebook')}
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#D64531] transition-colors"
              >
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

          {/* Newsletter / CTA - Agora WhatsApp */}
          <div>
            <h4 className="text-lg font-serif mb-6">Fique por dentro</h4>
            <p className="text-gray-400 mb-4 text-sm">
              Receba devocionais e novidades da igreja diretamente no seu WhatsApp.
            </p>
            <form onSubmit={handleWhatsappSubscribe} className="flex flex-col gap-3">
              <div className="relative">
                <input 
                  type="tel" 
                  value={whatsappNumber}
                  onChange={(e) => setWhatsappNumber(e.target.value)}
                  placeholder="(DDD) 99999-9999" 
                  className="w-full bg-gray-800 border border-gray-700 text-white pl-4 pr-4 py-3 rounded focus:outline-none focus:border-[#25D366] transition-colors"
                />
              </div>
              <button 
                type="submit"
                className="bg-[#25D366] text-white px-4 py-3 rounded font-semibold hover:bg-[#20bd5a] transition-colors uppercase tracking-wider text-sm flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} />
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

      {/* Modal Dinâmico de "Em Breve" */}
      {activeModal && modalContent && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
            onClick={() => setActiveModal(null)}
          ></div>
          
          <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-sm p-6 animate-in fade-in zoom-in-95 duration-300 text-center">
            <button 
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-[#D64531] transition-colors"
            >
              <X size={20} />
            </button>

            <div className="w-14 h-14 bg-red-50 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-4 text-[#D64531]">
              {modalContent.icon}
            </div>

            <h3 className="text-xl font-serif text-gray-900 dark:text-white mb-3">{modalContent.title}</h3>
            
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
              {modalContent.text}
            </p>

            <button 
              onClick={() => setActiveModal(null)}
              className="w-full bg-[#D64531] text-white py-3 rounded-lg font-bold text-sm uppercase tracking-wider hover:bg-[#b53a29] transition-colors"
            >
              Entendi, vou aguardar!
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
