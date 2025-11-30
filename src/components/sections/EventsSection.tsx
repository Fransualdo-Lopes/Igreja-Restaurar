import React from 'react';
import { Calendar } from 'lucide-react';
import { Event } from '../../types/index';

const events: Event[] = [
  {
    id: '1',
    title: 'Culto de Celebração',
    date: 'Domingo',
    time: '18:00',
    location: 'Templo Principal',
    category: 'Worship'
  },
  {
    id: '2',
    title: 'Connect Jovens',
    date: 'Sábado',
    time: '19:30',
    location: 'Salão Anexo',
    category: 'Youth'
  },
  {
    id: '3',
    title: 'Escola de Líderes',
    date: 'Segunda-feira',
    time: '20:00',
    location: 'Online (Zoom)',
    category: 'Community'
  },
  {
    id: '4',
    title: 'Culto de Mulheres',
    date: '1ª Sexta do mês',
    time: '19:30',
    location: 'Templo Principal',
    category: 'Community'
  },
  {
    id: '5',
    title: 'Culto de Homens',
    date: '2º Sábado do mês',
    time: '19:30',
    location: 'Salão Anexo',
    category: 'Community'
  },
];

export const EventsSection: React.FC = () => {
  return (
    <section id="eventos" className="py-20 bg-[#F9F7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-[#D64531] text-sm font-bold tracking-widest uppercase mb-2">Agenda</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-gray-900">Próximos Eventos</h3>
          </div>
          <a href="#" className="hidden md:block text-gray-500 hover:text-[#D64531] border-b border-gray-300 hover:border-[#D64531] pb-1 transition-all">
            Ver calendário completo
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-white p-8 rounded-none border-l-4 border-[#D64531] shadow-sm hover:shadow-lg transition-shadow group">
              <div className="flex justify-between items-start mb-6">
                <div className="bg-[#F9F7F2] text-gray-800 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded">
                  {event.category === 'Community' ? 'Comunhão' : 
                   event.category === 'Worship' ? 'Culto' :
                   event.category === 'Youth' ? 'Jovens' : event.category}
                </div>
                <Calendar className="text-gray-300 group-hover:text-[#D64531] transition-colors" size={24} />
              </div>
              <h4 className="text-2xl font-serif text-gray-900 mb-2">{event.title}</h4>
              <div className="space-y-1 text-gray-600">
                <p className="font-medium text-[#D64531]">{event.date} às {event.time}</p>
                <p className="text-sm">{event.location}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
           <a href="#" className="text-gray-500 hover:text-[#D64531] border-b border-gray-300 hover:border-[#D64531] pb-1 transition-all">
            Ver calendário completo
          </a>
        </div>
      </div>
    </section>
  );
};