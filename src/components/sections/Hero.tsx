
import React, { useState, useEffect } from 'react';
import { ArrowRight, MapPin, ChevronLeft, ChevronRight, Calendar, Gift, Flame } from 'lucide-react';
import { GivingType } from '../ui/GivingModal';

interface HeroProps {
  onOpenGivingModal: (type: GivingType) => void;
}

interface Slide {
  id: number;
  badge: string;
  title: React.ReactNode;
  subtitle: string;
  image: string;
  primaryButtonText: string;
  secondaryButtonText?: string;
  align: 'center' | 'left';
  overlayColor: string; // Custom overlay opacity/color per slide
}

export const Hero: React.FC<HeroProps> = ({ onOpenGivingModal }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePlanVisit = () => {
    window.open('https://maps.app.goo.gl/sMLBfgzwL28irDcJ8', '_blank');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const slides: Slide[] = [
    {
      id: 0,
      badge: "Bem-vindo à Restaurar",
      title: <>Um lugar para <br /><span className="italic text-[#D64531]">recomeçar</span></>,
      subtitle: "Somos uma comunidade apaixonada por Jesus e comprometida em restaurar vidas através do amor, da fé e do serviço.",
      image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2673&auto=format&fit=crop",
      primaryButtonText: "Planeje sua visita",
      secondaryButtonText: "Assista Online",
      align: 'center',
      overlayColor: "from-black/95 via-black/50 to-black/40"
    },
    {
      id: 1,
      badge: "Ação Social | Até 20 Dez",
      title: <>Natal <span className="text-green-500 font-serif italic">Solidário</span><br />Restaurar</>,
      subtitle: "Vamos juntos abençoar famílias e fazer um Natal diferente? Estamos arrecadando cestas básicas para doação. Faça parte você também!",
      image: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?q=80&w=2600&auto=format&fit=crop", // Christmas theme
      primaryButtonText: "Quero Doar",
      align: 'center',
      overlayColor: "from-red-950/90 via-red-900/60 to-black/40"
    },
    {
      id: 2,
      badge: "Quarta-feira | 20h00",
      title: <>Culto de <br /><span className="text-[#D64531] font-serif italic">Oração</span></>,
      subtitle: '"Buscai ao Senhor enquanto se pode achar, invocai-o enquanto está perto." (Isaías 55:6). Uma noite de intercessão e milagres.',
      image: "https://images.unsplash.com/photo-1437603568260-1950d3ca6eab?q=80&w=2670&auto=format&fit=crop", // Praying hands
      primaryButtonText: "Enviar Pedido de Oração",
      align: 'center',
      overlayColor: "from-black/95 via-gray-900/70 to-black/50"
    },
    {
      id: 3,
      badge: "Domingo | 19h00",
      title: <>Grande Culto <br />da <span className="text-[#D64531] font-serif italic">Família</span></>,
      subtitle: "O melhor dia da sua semana começa na casa do Pai. Venha receber uma palavra que vai transformar a sua história.",
      image: "https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=2670&auto=format&fit=crop", // Worship
      primaryButtonText: "Ver Localização",
      secondaryButtonText: "Programação Completa",
      align: 'center',
      overlayColor: "from-black/80 via-black/40 to-black/30"
    }
  ];

  // Auto-play logic (4 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handlePrimaryAction = (slideIndex: number) => {
    switch (slideIndex) {
      case 0: handlePlanVisit(); break;
      case 1: onOpenGivingModal('oferta'); break; // Opens the donation modal
      case 2: 
        const chatBtn = document.querySelector('[aria-label="Abrir chat"]') as HTMLButtonElement;
        if(chatBtn) chatBtn.click(); // Tenta abrir o chat
        break;
      case 3: handlePlanVisit(); break;
      default: break;
    }
  };

  const handleSecondaryAction = (slideIndex: number) => {
    if (slideIndex === 0) scrollToSection('pregacoes');
    if (slideIndex === 3) scrollToSection('eventos');
  };

  return (
    <div id="inicio" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-black">
      
      {/* Slides */}
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src={slide.image}
              alt="Slide Background" 
              className="w-full h-full object-cover"
            />
            {/* Dynamic Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t ${slide.overlayColor}`}></div>
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center px-4 max-w-5xl mx-auto mt-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              
              <span className="inline-flex items-center gap-2 py-1 px-3 border border-white/50 rounded-full text-white font-medium text-xs md:text-sm tracking-[0.2em] uppercase mb-6 backdrop-blur-md bg-white/10">
                {slide.id === 1 && <Gift size={14} className="text-green-400" />}
                {slide.id === 2 && <Flame size={14} className="text-[#D64531]" />}
                {slide.badge}
              </span>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight drop-shadow-2xl">
                {slide.title}
              </h1>
              
              <p className="text-gray-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-normal leading-relaxed drop-shadow-md">
                {slide.subtitle}
              </p>
              
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <button 
                  onClick={() => handlePrimaryAction(index)}
                  className={`px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase hover:scale-105 transition-all duration-300 flex items-center gap-2 group shadow-lg hover:shadow-xl ${
                    slide.id === 1 
                      ? 'bg-green-600 text-white hover:bg-green-700' // Botão Verde para Natal
                      : 'bg-[#D64531] text-white hover:bg-[#b53a29]' // Padrão Vermelho
                  }`}
                >
                  {slide.primaryButtonText}
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
                
                {slide.secondaryButtonText && (
                  <button 
                    onClick={() => handleSecondaryAction(index)}
                    className="bg-white/10 backdrop-blur-sm border border-white text-white px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    {slide.secondaryButtonText}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Controls (Arrows) */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-8 z-30 pointer-events-none">
        <button 
          onClick={prevSlide}
          className="pointer-events-auto p-3 rounded-full bg-black/20 hover:bg-black/50 text-white/50 hover:text-white backdrop-blur-sm transition-all border border-white/10 hover:border-white/30"
        >
          <ChevronLeft size={32} />
        </button>
        <button 
          onClick={nextSlide}
          className="pointer-events-auto p-3 rounded-full bg-black/20 hover:bg-black/50 text-white/50 hover:text-white backdrop-blur-sm transition-all border border-white/10 hover:border-white/30"
        >
          <ChevronRight size={32} />
        </button>
      </div>

      {/* Navigation Indicators (Dots) */}
      <div className="absolute bottom-24 md:bottom-20 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-[#D64531] w-8' 
                : 'bg-white/50 hover:bg-white'
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Footer Address (Static Overlay) */}
      <div 
        onClick={handlePlanVisit}
        className="absolute bottom-6 md:bottom-8 z-30 flex justify-center items-center text-gray-200 text-sm gap-2 cursor-pointer hover:text-white transition-colors group font-medium drop-shadow-md bg-black/30 px-6 py-2 rounded-full backdrop-blur-sm border border-white/10 hover:border-white/30"
        title="Abrir no Google Maps"
      >
        <MapPin size={16} className="text-[#D64531] group-hover:scale-110 transition-transform" />
        <p>Rua Barão de Serra Azul, 403 - Jaderlândia, Paragominas - PA</p>
      </div>
    </div>
  );
};
