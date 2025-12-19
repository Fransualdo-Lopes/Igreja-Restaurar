
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowRight, MapPin, ChevronLeft, ChevronRight, Gift, Flame, Pause, Play } from 'lucide-react';
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
  const [isAutoPlay, setIsAutoPlay] = useState(true); // Controle manual do usuário
  const [isInteractionPaused, setIsInteractionPaused] = useState(false); // Pausa temporária de interação
  const [isHovered, setIsHovered] = useState(false); // Pausa por hover
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({}); // Rastreamento de erro de imagens

  // Refs para gerenciar timers e evitar re-renders desnecessários ou loops
  const autoPlayTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const interactionTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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
      subtitle: "Vamos juntos abençoar famílias e fazer um Natal diferente? Estamos arrecadando cestas básicas para doação.",
      image: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?q=80&w=2600&auto=format&fit=crop", 
      primaryButtonText: "Quero Doar",
      align: 'center',
      overlayColor: "from-red-950/90 via-red-900/60 to-black/40"
    },
    {
      id: 2,
      badge: "Quarta-feira | 19h30",
      title: <>Culto da <br /><span className="text-[#D64531] font-serif italic">Palavra e Adoração</span></>,
      subtitle: '"Buscai ao Senhor enquanto se pode achar, invocai-o enquanto está perto." (Isaías 55:6).',
      image: "https://images.unsplash.com/photo-1437603568260-1950d3ca6eab?q=80&w=2670&auto=format&fit=crop", 
      primaryButtonText: "Enviar Pedido",
      align: 'center',
      overlayColor: "from-black/95 via-gray-900/70 to-black/50"
    },
    {
      id: 3,
      badge: "Domingo | 19h00",
      title: <>Culto de <br />da <span className="text-[#D64531] font-serif italic">Celebração</span></>,
      subtitle: "O melhor dia da sua semana começa na casa do Pai. Venha receber uma palavra transformadora.",
      image: "https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=2670&auto=format&fit=crop", 
      primaryButtonText: "Localização",
      secondaryButtonText: "Programação",
      align: 'center',
      overlayColor: "from-black/80 via-black/40 to-black/30"
    }
  ];

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

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const handleUserInteraction = (action: () => void) => {
    action();
    if (isAutoPlay) {
      setIsInteractionPaused(true);
      if (interactionTimerRef.current) clearTimeout(interactionTimerRef.current);
      interactionTimerRef.current = setTimeout(() => {
        setIsInteractionPaused(false);
      }, 10000);
    }
  };

  useEffect(() => {
    if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    if (isAutoPlay && !isInteractionPaused && !isHovered) {
      autoPlayTimerRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [isAutoPlay, isInteractionPaused, isHovered, nextSlide]);

  useEffect(() => {
    return () => {
      if (interactionTimerRef.current) clearTimeout(interactionTimerRef.current);
    };
  }, []);

  const handlePrimaryAction = (slideIndex: number) => {
    switch (slideIndex) {
      case 0: handlePlanVisit(); break;
      case 1: onOpenGivingModal('oferta'); break;
      case 2: 
        const chatBtn = document.querySelector('[aria-label="Abrir chat"]') as HTMLButtonElement;
        if(chatBtn) chatBtn.click();
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
    <div 
      id="inicio" 
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-black"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div className="absolute inset-0 bg-black">
            {!imgErrors[slide.id] && (
              <img 
                src={slide.image}
                alt="Slide Background" 
                className="w-full h-full object-cover"
                onError={() => setImgErrors(prev => ({...prev, [slide.id]: true}))}
              />
            )}
            <div className={`absolute inset-0 bg-gradient-to-t ${slide.overlayColor}`}></div>
          </div>

          <div className="relative h-full flex items-center justify-center">
            <div className="text-center px-4 max-w-5xl mx-auto mt-12 md:mt-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              
              <span className="inline-flex items-center gap-2 py-1 px-3 border border-white/50 rounded-full text-white font-medium text-[10px] md:text-sm tracking-[0.2em] uppercase mb-4 md:mb-6 backdrop-blur-md bg-white/10">
                {slide.id === 1 && <Gift size={12} className="text-green-400" />}
                {slide.id === 2 && <Flame size={12} className="text-[#D64531]" />}
                {slide.badge}
              </span>
              
              <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif text-white mb-4 md:mb-6 leading-tight drop-shadow-2xl">
                {slide.title}
              </h1>
              
              <p className="text-gray-100 text-sm md:text-xl max-w-xl md:max-w-2xl mx-auto mb-8 md:mb-10 font-normal leading-relaxed drop-shadow-md">
                {slide.subtitle}
              </p>
              
              <div className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center items-center">
                <button 
                  onClick={() => handlePrimaryAction(index)}
                  className={`px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-xs md:text-sm tracking-widest uppercase hover:scale-105 transition-all duration-300 flex items-center gap-2 group shadow-lg hover:shadow-xl ${
                    slide.id === 1 
                      ? 'bg-green-600 text-white hover:bg-green-700' 
                      : 'bg-[#D64531] text-white hover:bg-[#b53a29]' 
                  }`}
                >
                  {slide.primaryButtonText}
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
                
                {slide.secondaryButtonText && (
                  <button 
                    onClick={() => handleSecondaryAction(index)}
                    className="bg-white/10 backdrop-blur-sm border border-white text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-xs md:text-sm tracking-widest uppercase hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    {slide.secondaryButtonText}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Controls (Arrows) - Smaller on Mobile */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-2 md:px-8 z-30 pointer-events-none">
        <button 
          onClick={() => handleUserInteraction(prevSlide)}
          className="pointer-events-auto p-2 md:p-3 rounded-full bg-black/20 hover:bg-black/50 text-white/50 hover:text-white backdrop-blur-sm transition-all border border-white/10 hover:border-white/30 group"
          aria-label="Slide anterior"
        >
          <ChevronLeft size={20} className="md:w-8 md:h-8 group-hover:-translate-x-0.5 transition-transform" />
        </button>
        <button 
          onClick={() => handleUserInteraction(nextSlide)}
          className="pointer-events-auto p-2 md:p-3 rounded-full bg-black/20 hover:bg-black/50 text-white/50 hover:text-white backdrop-blur-sm transition-all border border-white/10 hover:border-white/30 group"
          aria-label="Próximo slide"
        >
          <ChevronRight size={20} className="md:w-8 md:h-8 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* Navigation Indicators (Dots) and Play/Pause - More compact */}
      <div className="absolute bottom-16 md:bottom-16 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 md:gap-4 bg-black/30 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-white/10">
        <button
          onClick={() => setIsAutoPlay(!isAutoPlay)}
          className="text-white/70 hover:text-white transition-colors p-1"
          title={isAutoPlay ? "Pausar slide automático" : "Iniciar slide automático"}
        >
          {isAutoPlay ? <Pause size={12} fill="currentColor" /> : <Play size={12} fill="currentColor" />}
        </button>

        <div className="w-px h-3 bg-white/20"></div>

        <div className="flex gap-1.5 md:gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleUserInteraction(() => setCurrentSlide(index))}
              className={`rounded-full transition-all duration-500 ease-out ${
                index === currentSlide 
                  ? 'bg-[#D64531] w-5 md:w-8 h-1.5 md:h-2' 
                  : 'bg-white/40 hover:bg-white w-1.5 md:w-2 h-1.5 md:h-2'
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Footer Address - More compact on mobile */}
      <div 
        onClick={handlePlanVisit}
        className="absolute bottom-4 md:bottom-4 z-30 flex justify-center items-center text-gray-200 text-[10px] md:text-sm gap-2 cursor-pointer hover:text-white transition-colors group font-medium drop-shadow-md bg-black/30 px-3 py-1 md:px-5 md:py-2 rounded-full backdrop-blur-sm border border-white/10 hover:border-white/30"
        title="Abrir no Google Maps"
      >
        <MapPin size={12} className="text-[#D64531] group-hover:scale-110 transition-transform" />
        <p className="max-w-[200px] sm:max-w-none truncate">Rua Barão de Serra Azul, 403 - Jaderlândia</p>
      </div>
    </div>
  );
};
