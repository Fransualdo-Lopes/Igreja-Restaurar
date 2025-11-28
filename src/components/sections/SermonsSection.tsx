import React from 'react';
import { Play, Clock, Calendar, User } from 'lucide-react';
import { Sermon } from '../../types';

const featuredSermon: Sermon = {
  id: 'featured',
  title: "O Poder de um Novo Começo",
  preacher: "Pr. Pedro",
  date: "Domingo, 25 Fev",
  thumbnailUrl: "https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=2670&auto=format&fit=crop",
  videoUrl: "#"
};

const recentSermons: Sermon[] = [
  {
    id: '1',
    title: "Vencendo a Ansiedade",
    preacher: "Pra. Kerly",
    date: "18 Fev",
    thumbnailUrl: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2673&auto=format&fit=crop"
  },
  {
    id: '2',
    title: "Fundamentos da Fé",
    preacher: "Pr. Pedro",
    date: "11 Fev",
    thumbnailUrl: "https://images.unsplash.com/photo-1544427920-c49ccfb85579?q=80&w=2574&auto=format&fit=crop"
  },
  {
    id: '3',
    title: "Comunidade Viva",
    preacher: "Pra. Kerly",
    date: "04 Fev",
    thumbnailUrl: "https://images.unsplash.com/photo-1510590337019-5ef2d39aa786?q=80&w=2670&auto=format&fit=crop"
  }
];

export const SermonsSection: React.FC = () => {
  return (
    <section id="pregacoes" className="py-20 bg-[#F9F7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-[#D64531] text-sm font-bold tracking-widest uppercase mb-2">Edificação</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-gray-900">Nossas Pregações</h3>
        </div>

        {/* Featured Sermon */}
        <div className="bg-white rounded-none shadow-xl overflow-hidden mb-16 group cursor-pointer border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto overflow-hidden">
              <img 
                src={featuredSermon.thumbnailUrl} 
                alt={featuredSermon.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 lg:absolute lg:inset-0 lg:h-full"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                <div className="w-16 h-16 bg-[#D64531]/90 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Play fill="currentColor" size={24} className="ml-1" />
                </div>
              </div>
            </div>
            
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-[#D64531] font-bold text-xs uppercase tracking-widest mb-4">
                <span className="w-2 h-2 rounded-full bg-[#D64531] animate-pulse"></span>
                Última Mensagem
              </div>
              <h4 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4 leading-tight">
                {featuredSermon.title}
              </h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Uma mensagem poderosa sobre renovação e propósito. Descubra como Deus quer restaurar áreas da sua vida que pareciam perdidas.
              </p>
              
              <div className="flex flex-wrap gap-6 text-sm text-gray-500 mb-8">
                <div className="flex items-center gap-2">
                  <User size={16} className="text-[#D64531]" />
                  {featuredSermon.preacher}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-[#D64531]" />
                  {featuredSermon.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-[#D64531]" />
                  45 min
                </div>
              </div>

              <button className="bg-gray-900 text-white px-8 py-3 rounded-md font-semibold hover:bg-[#D64531] transition-colors self-start uppercase text-sm tracking-wider">
                Assistir Mensagem
              </button>
            </div>
          </div>
        </div>

        {/* Recent Grid */}
        <div className="flex justify-between items-end mb-8">
          <h4 className="text-2xl font-serif text-gray-900">Mensagens Anteriores</h4>
          <a href="#" className="text-gray-500 hover:text-[#D64531] border-b border-gray-300 hover:border-[#D64531] pb-1 transition-all text-sm hidden sm:block">
            Ver todas as mensagens
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentSermons.map((sermon) => (
            <div key={sermon.id} className="group cursor-pointer">
              <div className="relative aspect-video overflow-hidden rounded-md mb-4 bg-gray-200">
                 <img 
                  src={sermon.thumbnailUrl} 
                  alt={sermon.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-[#D64531] shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <Play fill="currentColor" size={20} className="ml-1" />
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                  <span>{sermon.date}</span>
                  <span>•</span>
                  <span>{sermon.preacher}</span>
                </div>
                <h5 className="text-xl font-serif text-gray-900 group-hover:text-[#D64531] transition-colors line-clamp-2">
                  {sermon.title}
                </h5>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center sm:hidden">
           <a href="#" className="text-gray-500 hover:text-[#D64531] border-b border-gray-300 hover:border-[#D64531] pb-1 transition-all text-sm">
            Ver todas as mensagens
          </a>
        </div>

      </div>
    </section>
  );
};