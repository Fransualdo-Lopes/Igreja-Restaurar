
import React, { useState } from 'react';
import { Ministry } from '../../types/index';
import { Heart, Users, Music, Flame, X, Calendar, User, MapPin, ArrowRight, Mic2 } from 'lucide-react';

export const MinistriesSection: React.FC = () => {
  const [selectedMinistry, setSelectedMinistry] = useState<Ministry | null>(null);

  const ministries: (Ministry & { icon: React.ReactNode })[] = [
    {
      id: 'kids',
      title: 'Restaurar Kids',
      description: 'Um ambiente seguro e divertido onde as crianças aprendem sobre o amor de Deus.',
      longDescription: 'No Restaurar Kids, acreditamos que não existe idade para conhecer a Jesus. Nossas aulas são divididas por faixa etária (2 a 10 anos) com currículo bíblico adaptado, brincadeiras e muito amor. Nossa equipe é treinada para garantir a segurança e o bem-estar do seu filho enquanto você aproveita o culto.',
      leader: 'Tawana & Equipe',
      schedule: 'Domingos às 10h e 19h',
      location: 'Salão Kids (Anexo 1)',
      imageUrl: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=2670&auto=format&fit=crop',
      icon: <Heart size={24} />
    },
    {
      id: 'youth',
      title: 'Juventude',
      description: 'Jovens apaixonados vivendo o propósito e impactando sua geração.',
      longDescription: 'A Juventude Restaurar é um movimento de jovens que não se conformam com este mundo. Nossos encontros são marcados por louvor intenso, palavra contextualizada e muita comunhão. É o lugar perfeito para fazer amizades verdadeiras e crescer espiritualmente.',
      leader: 'Irmão Lucas',
      schedule: 'Sábados às 19h30',
      location: 'Salão Anexo',
      imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2832&auto=format&fit=crop',
      icon: <Users size={24} />
    },
    {
      id: 'worship',
      title: 'Louvor e Adoração',
      description: 'Expressando nossa gratidão e louvor através da música e das artes.',
      longDescription: 'O Ministério de Louvor existe para criar uma atmosfera onde a igreja possa se conectar com Deus. Buscamos excelência musical e, acima de tudo, uma vida de adoração. Se você toca algum instrumento ou canta, venha fazer uma audição!',
      leader: 'Pr. Pedro',
      schedule: 'Ensaios: Sexta-feira às 19h30',
      location: 'Templo Principal',
      imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2670&auto=format&fit=crop',
      icon: <Music size={24} />,
      team: [
        { name: 'Rozenir Reis', role: 'Vocal', imageUrl: 'link-da-foto' },
        { name: 'Rose Santos', role: 'Vocal', imageUrl: 'link-da-foto' },
        { name: 'Eduarda Almeida', role: 'Vocal', imageUrl: 'link-da-foto' },
        { name: 'Raiane Matos', role: 'Vocal', imageUrl: 'link-da-foto' },
        { name: 'Rafaela Lopes', role: 'Vocal', imageUrl: 'link-da-foto' },
        { name: 'Gerson Diego', role: 'Bateria', imageUrl: 'link-da-foto' },
        { name: 'Fabio Arruda', role: 'Guitarra', imageUrl: 'link-da-foto' },
        { name: 'Fransualdo Lopes', role: 'Violão', imageUrl: 'link-da-foto' },
        { name: 'Marcos Jhow', role: 'Contra Baixo', imageUrl: 'link-da-foto' },
      ]
    },
    {
      id: 'intercession',
      title: 'Intercessão',
      description: 'Um ministério dedicado a clamar pelas vidas, sustentando a igreja em oração.',
      longDescription: 'Acreditamos que a oração move a mão de Deus. A equipe de intercessão se reúne semanalmente para orar pelos pedidos da igreja, pelos líderes e pela nossa cidade. Se você tem um chamado para a oração, junte-se a nós nesta batalha espiritual.',
      leader: 'Irmã Rosa',
      schedule: 'Terças às 19h e Domingos às 09h',
      location: 'Sala de Oração',
      imageUrl: 'https://images.unsplash.com/photo-1543615462-5264b8577000?q=80&w=2670&auto=format&fit=crop',
      icon: <Flame size={24} />
    }
  ];

  const handleOpenModal = (ministry: Ministry) => {
    setSelectedMinistry(ministry);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedMinistry(null);
    document.body.style.overflow = 'unset';
  };

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ministries.map((ministry) => (
            <div 
              key={ministry.id} 
              onClick={() => handleOpenModal(ministry)}
              className="group relative h-[400px] overflow-hidden cursor-pointer rounded-lg shadow-lg transform transition-all duration-300 hover:-translate-y-2"
            >
              <img 
                src={ministry.imageUrl} 
                alt={ministry.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/20 group-hover:via-black/70 transition-colors duration-300"></div>

              <div className="absolute inset-0 p-8 flex flex-col justify-end items-start text-white">
                <div className="bg-[#D64531] p-3 rounded-full mb-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 text-white shadow-lg">
                  {ministry.icon}
                </div>
                
                <h4 className="text-2xl font-serif mb-2 font-medium drop-shadow-md group-hover:text-[#D64531] transition-colors">
                  {ministry.title}
                </h4>
                
                <p className="text-gray-200 text-sm opacity-90 line-clamp-2 mb-4 group-hover:opacity-100 transition-opacity">
                  {ministry.description}
                </p>

                <span className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 text-[#D64531] opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                  Saiba mais <ArrowRight size={14} />
                </span>
                
                <div className="absolute bottom-0 left-0 h-1 bg-[#D64531] transition-all duration-500 w-0 group-hover:w-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedMinistry && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={handleCloseModal}
          ></div>
          
          <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden animate-in fade-in zoom-in-95 duration-300 flex flex-col md:flex-row max-h-[90vh]">
            
            <button 
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-20 md:hidden bg-black/50 text-white p-2 rounded-full"
            >
              <X size={20} />
            </button>

            <div className="w-full md:w-2/5 h-64 md:h-auto relative shrink-0">
              <img 
                src={selectedMinistry.imageUrl} 
                alt={selectedMinistry.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#D64531]/20 mix-blend-multiply"></div>
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent md:hidden">
                 <h3 className="text-3xl font-serif text-white">{selectedMinistry.title}</h3>
              </div>
            </div>

            <div className="w-full md:w-3/5 p-8 overflow-y-auto bg-white dark:bg-gray-900">
              <div className="flex justify-between items-start mb-6">
                 <h3 className="text-3xl md:text-4xl font-serif text-gray-900 dark:text-white hidden md:block">
                   {selectedMinistry.title}
                 </h3>
                 <button 
                  onClick={handleCloseModal}
                  className="hidden md:block text-gray-400 hover:text-[#D64531] transition-colors"
                >
                  <X size={28} />
                </button>
              </div>

              <div className="prose dark:prose-invert max-w-none mb-8">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {selectedMinistry.longDescription || selectedMinistry.description}
                </p>
              </div>

              <div className="space-y-4 mb-8 bg-[#F9F7F2] dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
                <h4 className="text-sm font-bold uppercase tracking-widest text-[#D64531] mb-2">Informações</h4>
                
                {selectedMinistry.schedule && (
                  <div className="flex items-center gap-3 text-gray-700 dark:text-gray-200">
                    <Calendar size={20} className="text-[#D64531]" />
                    <span className="font-medium">{selectedMinistry.schedule}</span>
                  </div>
                )}
                
                {selectedMinistry.location && (
                  <div className="flex items-center gap-3 text-gray-700 dark:text-gray-200">
                    <MapPin size={20} className="text-[#D64531]" />
                    <span>{selectedMinistry.location}</span>
                  </div>
                )}

                {selectedMinistry.leader && (
                  <div className="flex items-center gap-3 text-gray-700 dark:text-gray-200">
                    <User size={20} className="text-[#D64531]" />
                    <span>Líder: {selectedMinistry.leader}</span>
                  </div>
                )}
              </div>

              {/* Seção da Equipe (Se houver) */}
              {selectedMinistry.team && (
                <div className="mb-8">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-[#D64531] mb-4 flex items-center gap-2">
                    <Mic2 size={16} /> Integrantes
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {selectedMinistry.team.map((member, idx) => (
                      <div key={idx} className="flex flex-col items-center text-center p-2 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                        <div className="w-12 h-12 rounded-full overflow-hidden mb-2 border-2 border-[#D64531]/20">
                          {member.imageUrl ? (
                            <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-400">
                              <User size={20} />
                            </div>
                          )}
                        </div>
                        <span className="text-sm font-bold text-gray-800 dark:text-gray-200 leading-tight">{member.name}</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">{member.role}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  className="flex-1 bg-[#D64531] text-white py-3 px-6 rounded-lg font-bold uppercase tracking-wide hover:bg-[#b53a29] transition-all transform hover:scale-[1.02] shadow-lg text-sm"
                  onClick={() => alert("Em breve: Formulário de audição integrado!")}
                >
                  {selectedMinistry.id === 'worship' ? 'Agendar Audição' : 'Quero Participar'}
                </button>
                <button 
                   onClick={handleCloseModal}
                   className="flex-1 border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 py-3 px-6 rounded-lg font-bold uppercase tracking-wide hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-sm"
                >
                  Fechar
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};
