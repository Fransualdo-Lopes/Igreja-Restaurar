import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div id="inicio" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2673&auto=format&fit=crop"
          alt="Worship Atmosphere" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
        <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-white/80 text-xs md:text-sm tracking-[0.2em] uppercase mb-6 backdrop-blur-sm">
          Bem-vindo à Restaurar
        </span>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight">
          Um lugar para <br/>
          <span className="italic text-[#D64531]">recomeçar</span>
        </h1>
        
        <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
          Somos uma comunidade apaixonada por Jesus e comprometida em restaurar vidas através do amor, da fé e do serviço.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <button className="bg-[#D64531] text-white px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-[#b53a29] transition-all flex items-center gap-2 group">
            Planeje sua visita
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="bg-transparent border border-white text-white px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all">
            Assista Online
          </button>
        </div>

        <div className="mt-16 flex justify-center items-center text-white/70 text-sm gap-2">
          <MapPin size={16} className="text-[#D64531]" />
          <p>Rua Barão de Serra Azul, 123 - Jaderlândia, Paragominas - PA</p>
        </div>
      </div>
    </div>
  );
};