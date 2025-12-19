
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowRight, MapPin, ChevronLeft, ChevronRight, Gift, Flame, Pause, Play } from 'lucide-react';
import { GivingType } from '../ui/GivingModal';

interface HeroProps {
  onOpenGivingModal: (type: GivingType) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenGivingModal }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isInteractionPaused, setIsInteractionPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const autoPlayTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const interactionTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const slides = [
    {
      id: 0,
      badge: "Bem-vindo à Restaurar",
      title: <>Um lugar para <br /><span className="italic text-[#D64531]">recomeçar</span></>,
      subtitle: "Somos uma comunidade apaixonada por Jesus e comprometida em restaurar vidas através do amor.",
      image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2673&auto=format&fit=crop",
      primaryButtonText: "Planeje sua visita",
      secondaryButtonText: "Assista Online",
      overlayColor: "from-black/95 via-black/50 to-black/40"
    },
    {
      id: 1,
      badge: "Ação Social | Dezembro",
      title: <>Natal <span className="text-green-500 font-serif italic">Solidário</span><br />Restaurar</>,
      subtitle: "Vamos juntos abençoar famílias e fazer um Natal diferente com doação de cestas básicas.",
      image: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?q=80&w=2600&auto=format&fit=crop", 
      primaryButtonText: "Quero Doar",
      overlayColor: "from-red-950/90 via-red-900/60 to-black/40"
    },
    {
      id: 2,
      badge: "Quarta-feira | 19h30",
      title: <>Palavra e <br /><span className="text-[#D64531] font-serif italic">Adoração</span></>,
      subtitle: "Venha mergulhar na presença de Deus através da exposição da Palavra e louvor profundo.",
      image: "https://images.unsplash.com/photo-1504052434139-4415555d03a3?q=80&w=2670&auto=format&fit=crop", 
      primaryButtonText: "Enviar Pedido",
      overlayColor: "from-black/95 via-gray-900/70 to-black/50"
    },
    {
      id: 3,
      badge: "Domingo | 19h00",
      title: <>Culto de <br /><span className="text-[#D64531] font-serif italic">Celebração</span></>,
      subtitle: "O melhor dia da sua semana começa na casa do Pai. Venha celebrar o que Deus tem feito.",
      image: "https://images.unsplash.com/photo-1515162305285-0293e4767cc2?q=80&w=2670&auto=format&fit=crop", 
      primaryButtonText: "Localização",
      secondaryButtonText: "Programação",
      overlayColor: "from-black/80 via-black/40 to-black/30"
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (isAutoPlay && !isInteractionPaused && !isHovered) {
      autoPlayTimerRef.current = setInterval(nextSlide, 6000);
    }
    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [isAutoPlay, isInteractionPaused, isHovered, nextSlide]);

  return (
    <div 
      id="inicio" 
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-black"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          <img src={slide.image} className="w-full h-full object-cover" alt="Church" />
          <div className={`absolute inset-0 bg-gradient-to-t ${slide.overlayColor}`}></div>
          <div className="relative h-full flex items-center justify-center text-center px-4">
            <div className="w-full max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 flex flex-col items-center">
              <span className="inline-block py-1 px-4 border border-white/50 rounded-full text-white text-[10px] md:text-sm uppercase tracking-widest mb-6 backdrop-blur-md bg-white/10">
                {slide.badge}
              </span>
              <h1 className="text-3xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight">
                {slide.title}
              </h1>
              <p className="text-gray-200 text-sm md:text-xl mb-10 max-w-2xl mx-auto px-4">
                {slide.subtitle}
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center w-full md:w-auto px-6">
                <button 
                  onClick={() => slide.id === 1 ? onOpenGivingModal('oferta') : window.open('https://maps.app.goo.gl/sMLBfgzwL28irDcJ8')}
                  className="bg-[#D64531] text-white px-8 py-4 rounded-full font-bold uppercase text-xs md:text-sm hover:scale-105 transition-transform shadow-lg"
                >
                  {slide.primaryButtonText}
                </button>
                {slide.secondaryButtonText && (
                  <button 
                    onClick={() => {
                        const el = document.querySelector(slide.id === 3 ? '#eventos' : '#pregacoes');
                        el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-white/10 backdrop-blur-sm border border-white text-white px-8 py-4 rounded-full font-bold uppercase text-xs md:text-sm hover:bg-white hover:text-black transition-all"
                  >
                    {slide.secondaryButtonText}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Nav Controls */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 z-30 pointer-events-none">
        <button onClick={prevSlide} className="pointer-events-auto p-2 md:p-4 rounded-full bg-black/20 text-white/50 hover:text-white backdrop-blur-sm border border-white/10 transition-colors">
          <ChevronLeft size={20} className="md:w-8 md:h-8" />
        </button>
        <button onClick={nextSlide} className="pointer-events-auto p-2 md:p-4 rounded-full bg-black/20 text-white/50 hover:text-white backdrop-blur-sm border border-white/10 transition-colors">
          <ChevronRight size={20} className="md:w-8 md:h-8" />
        </button>
      </div>

      {/* Address Footer - Fixado e Centralizado */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center justify-center gap-2 text-white/80 text-[10px] md:text-xs bg-black/40 px-5 py-2.5 rounded-full backdrop-blur-md border border-white/10 whitespace-nowrap">
        <MapPin size={14} className="text-[#D64531] shrink-0" />
        <span className="font-medium">Rua Barão de Serra Azul, 403 - Jaderlândia</span>
      </div>
    </div>
  );
};
