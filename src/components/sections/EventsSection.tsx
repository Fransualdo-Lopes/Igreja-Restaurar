import React, { useState } from 'react';
import { Calendar, Clock, MapPin, X, ChevronRight } from 'lucide-react';
import { Event } from '../../types/index';

// Destaques para os Cards (Eventos Principais e Especiais)
const featuredEvents: Event[] = [
  {
    id: '1',
    title: 'Grande Culto',
    date: 'Domingo',
    time: '19:00',
    location: 'Templo Principal',
    category: 'Worship'
  },
  {
    id: '2',
    title: 'Culto de Ensino',
    date: 'Quarta-feira',
    time: '19:30',
    location: 'Templo Principal',
    category: 'Worship'
  },
  {
    id: '3',
    title: 'Culto de Jovens',
    date: 'Sábado',
    time: '19:30',
    location: 'Salão Anexo',
    category: 'Youth'
  },
  {
    id: '4',
    title: 'Células',
    date: 'Terça-feira',
    time: '19:30',
    location: 'Nos Lares',
    category: 'Community'
  },
  {
    id: '5',
    title: 'Conferência Identidade',
    date: 'Em Breve',
    time: '19:00',
    location: 'Templo Principal',
    category: 'Community'
  },
  {
    id: '6',
    title: 'Oração de Mulheres',
    date: 'Quinta-feira',
    time: '19:30',
    location: 'Salão de Oração',
    category: 'Community'
  },
];

// Lista completa para o Modal de Agenda Semanal
const weeklySchedule = [
  { day: 'Domingo', time: '10:00', event: 'Escola Bíblica & Culto Kids' },
  { day: 'Domingo', time: '19:00', event: 'Grande Culto da Família' },
  { day: 'Terça-feira', time: '19:30', event: 'Células (Nos lares)' },
  { day: 'Quarta-feira', time: '19:30', event: 'Culto de Ensino' },
  { day: 'Quinta-feira', time: '19:30', event: 'Oração de Mulheres' },
  { day: 'Sábado', time: '19:30', event: 'Culto de Jovens' },
];

const monthlyEvents = [
  { name: 'Culto de Mulheres', info: '1ª Sexta-feira do mês' },
  { name: 'Culto de Homens', info: '2º Sábado do mês' },
  { name: 'Vigília', info: 'Última Sexta-feira do mês' },
];

export const EventsSection: React.FC = () => {
  const [showScheduleModal, setShowScheduleModal] = useState(false);

  return (
    <section id="eventos" className="py-20 bg-[#F9F7F2] dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-[#D64531] text-sm font-bold tracking-widest uppercase mb-2">Programação</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-gray-900 dark:text-white transition-colors">Nossa Agenda</h3>
          </div>
          
          <button 
            onClick={() => setShowScheduleModal(true)}
            className="group flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-[#D64531] dark:hover:text-[#D64531] border-b border-gray-300 dark:border-gray-700 hover:border-[#D64531] pb-1 transition-all"
          >
            <Calendar size={18} />
            <span className="font-medium">Ver agenda semanal completa</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredEvents.map((event) => (
            <div key={event.id} className="bg-white dark:bg-gray-800 p-8 rounded-none border-l-4 border-[#D64531] shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="flex justify-between items-start mb-6">
                <div className="bg-[#F9F7F2] dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded transition-colors">
                  {event.category === 'Community' ? 'Comunhão' : 
                   event.category === 'Worship' ? 'Culto' :
                   event.category === 'Youth' ? 'Jovens' : event.category}
                </div>
                <button 
                  onClick={() => setShowScheduleModal(true)}
                  className="text-gray-300 dark:text-gray-600 hover:text-[#D64531] dark:hover:text-[#D64531] transition-colors p-1"
                  title="Ver detalhes na agenda"
                >
                  <Calendar size={24} />
                </button>
              </div>
              <h4 className="text-2xl font-serif text-gray-900 dark:text-white mb-2 transition-colors">{event.title}</h4>
              <div className="space-y-2 text-gray-600 dark:text-gray-300 transition-colors mt-4">
                <div className="flex items-center gap-2">
                   <Clock size={16} className="text-[#D64531]" />
                   <p className="font-medium text-[#D64531]">{event.date} às {event.time}</p>
                </div>
                <div className="flex items-center gap-2">
                   <MapPin size={16} className="text-gray-400" />
                   <p className="text-sm">{event.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
           <button 
            onClick={() => setShowScheduleModal(true)}
            className="text-gray-500 dark:text-gray-400 hover:text-[#D64531] border-b border-gray-300 dark:border-gray-700 hover:border-[#D64531] pb-1 transition-all"
          >
            Ver agenda completa
          </button>
        </div>
      </div>

      {/* Modal de Agenda Semanal */}
      {showScheduleModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setShowScheduleModal(false)}
          ></div>
          
          <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300 flex flex-col max-h-[90vh]">
            
            {/* Header Modal */}
            <div className="bg-[#D64531] text-white p-6 flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-serif">Agenda Semanal</h3>
                <p className="text-white/80 text-sm">Programação fixa da Igreja Restaurar</p>
              </div>
              <button 
                onClick={() => setShowScheduleModal(false)}
                className="text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content Scrollable */}
            <div className="overflow-y-auto p-6 space-y-8 bg-[#F9F7F2] dark:bg-gray-900">
              
              {/* Eventos Semanais */}
              <div className="space-y-4">
                {weeklySchedule.map((item, index) => (
                  <div key={index} className="flex items-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border-l-4 border-gray-300 hover:border-[#D64531] transition-all">
                    <div className="w-32 flex-shrink-0">
                      <span className="block font-bold text-gray-900 dark:text-white">{item.day}</span>
                      <span className="text-sm text-[#D64531] font-medium">{item.time}</span>
                    </div>
                    <div className="flex-1 border-l border-gray-100 dark:border-gray-700 pl-4 ml-2">
                      <span className="text-gray-700 dark:text-gray-200 font-medium">{item.event}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Eventos Mensais/Especiais */}
              <div>
                <h4 className="text-[#D64531] font-bold uppercase tracking-widest text-xs mb-4">Programações Mensais</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {monthlyEvents.map((event, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center border border-gray-100 dark:border-gray-700">
                      <h5 className="font-serif text-lg text-gray-900 dark:text-white mb-1">{event.name}</h5>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{event.info}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Footer Modal */}
            <div className="p-4 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 text-center text-xs text-gray-500 dark:text-gray-400">
              * Programação sujeita a alterações em feriados. Acompanhe nosso Instagram.
            </div>

          </div>
        </div>
      )}
    </section>
  );
};