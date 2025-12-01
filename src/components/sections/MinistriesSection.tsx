
import React from 'react';
import { Ministry } from '../../types/index';
import { Heart, Users, Music, Flame } from 'lucide-react';

export const MinistriesSection: React.FC = () => {
  const ministries: (Ministry & { icon: React.ReactNode })[] = [
    {
      id: 'kids',
      title: 'Restaurar Kids',
      description: 'Um ambiente seguro e divertido onde as crianças aprendem sobre o amor de Deus.',
      imageUrl: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=2670&auto=format&fit=crop',
      icon: <Heart size={24} />
    },
    {
      id: 'youth',
      title: 'Juventude',
      description: 'Jovens apaixonados vivendo o propósito e impactando sua geração.',
      imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2832&auto=format&fit=crop',
      icon: <Users size={24} />
    },
    {
      id: 'worship',
      title: 'Louvor e Adoração',
      description: 'Expressando nossa gratidão e louvor através da música e das artes.',
      imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2670&auto=format&fit=crop',
      icon: <Music size={24} />
    },
    {
      id: 'intercession',
      title: 'Intercessão',
      description: 'Um ministério dedicado a clamar pelas vidas, sustentando a igreja em oração.',
      // Updated to a reliable image of holding hands/prayer group
      imageUrl: 'https://images.unsplash.com/photo-1543615462-5264b8577000?q=80&w=2670&auto=format&fit=crop',
      icon: <Flame size={24} />
    }
  ];

  return (
    <section id="ministerios" className="py-20 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[#D64531] text-sm font-bold tracking-widest uppercase mb-2">Envolva-se</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-gray-900 dark:text-white mb-6 transition-colors">Nossos Ministérios</h3>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg font-light transition-colors">
            Há um lugar para todos na família Restaurar. Descubra onde você pode servir, crescer e fazer conexões significativas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {ministries.map((ministry) => (
            <div key={ministry.id} className="group relative h-[400px] overflow-hidden cursor-pointer rounded-sm shadow-lg">
              {/* Background Image */}
              <img 
                src={ministry.imageUrl} 
                alt={ministry.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              
              {/* Overlay - Aumentado para melhor leitura */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 group-hover:via-black/60 transition-colors duration-300"></div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end items-start text-white">
                <div className="bg-[#D64531] p-3 rounded-full mb-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 text-white shadow-lg">
                  {ministry.icon}
                </div>
                <h4 className="text-2xl font-serif mb-2 font-medium drop-shadow-md">{ministry.title}</h4>
                <p className="text-gray-100 text-sm opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 leading-relaxed font-medium">
                  {ministry.description}
                </p>
                <div className="w-12 h-1 bg-[#D64531] mt-4 transition-all duration-300 group-hover:w-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
