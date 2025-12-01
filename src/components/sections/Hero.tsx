
import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  
  const handlePlanVisit = () => {
    // Abre o Google Maps com a localização exata
    window.open('https://maps.app.goo.gl/sMLBfgzwL28irDcJ8', '_blank');
  };

  const handleWatchOnline = () => {
    // Rola suavemente até a seção de pregações
    const element = document.getElementById('pregacoes');
    if (element) {
      const headerOffset = 80; // Compensação para o header fixo
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div id="inicio" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2673&auto=format&fit=crop"
          alt="Worship Atmosphere" 
          className="w-full h-full object-cover"
        />
        {/* Overlay escurecido para melhor contraste do texto */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
        <span className="inline-block py-1 px-3 border border-white/50 rounded-full text-white font-medium text-xs md:text-sm tracking-[0.2em] uppercase mb-6 backdrop-blur-md bg-black/10">
          Bem-vindo à Restaurar
        </span>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight drop-shadow-lg">
          Um lugar para <br/>
          <span className="italic text-[#D64531]">recomeçar</span>
        </h1>
        
        <p className="text-gray-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-normal leading-relaxed drop-shadow-md">
          Somos uma comunidade apaixonada por Jesus e comprometida em restaurar vidas através do amor, da fé e do serviço.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <button 
            onClick={handlePlanVisit}
            className="bg-[#D64531] text-white px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-[#b53a29] hover:scale-105 transition-all duration-300 flex items-center gap-2 group shadow-lg hover:shadow-xl"
          >
            Planeje sua visita
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button 
            onClick={handleWatchOnline}
            className="bg-white/10 backdrop-blur-sm border border-white text-white px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Assista Online
          </button>
        </div>

        <div 
          onClick={handlePlanVisit}
          className="mt-16 flex justify-center items-center text-gray-200 text-sm gap-2 cursor-pointer hover:text-white transition-colors group font-medium drop-shadow-md"
          title="Abrir no Google Maps"
        >
          <MapPin size={16} className="text-[#D64531] group-hover:scale-110 transition-transform" />
          <p>Rua Barão de Serra Azul, 403 - Jaderlândia, Paragominas - PA</p>
        </div>
      </div>
    </div>
  );
};
