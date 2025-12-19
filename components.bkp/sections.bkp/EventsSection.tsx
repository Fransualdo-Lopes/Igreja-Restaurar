
import React, { useState } from 'react';
import { Calendar, Clock, MapPin, X } from 'lucide-react';

const weeklySchedule = [
  { day: 'Domingo', time: '10:00', event: 'Escola Bíblica & Culto Kids' },
  { day: 'Domingo', time: '19:00', event: 'Culto de Celebração' },
  { day: 'Terça-feira', time: '19:30', event: 'Células (Nos lares)' },
  { day: 'Quarta-feira', time: '19:30', event: 'Culto da Palavra e Adoração' },
  { day: 'Sábado', time: '19:30', event: 'Jovens - Connect' },
];

export const EventsSection: React.FC = () => {
  const [showScheduleModal, setShowScheduleModal] = useState(false);

  return (
    <section id="eventos" className="py-20 bg-[#F9F7F2] dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-[#D64531] text-sm font-bold tracking-widest uppercase mb-2">Programação</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-gray-900 dark:text-white">Nossa Agenda</h3>
          </div>
          <button 
            onClick={() => setShowScheduleModal(true)}
            className="flex items-center gap-2 text-gray-500 hover:text-[#D64531] border-b border-gray-300 hover:border-[#D64531] pb-1 transition-all"
          >
            <Calendar size={18} />
            <span className="font-medium">Agenda Semanal Completa</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-none border-l-4 border-[#D64531] shadow-sm group">
            <h4 className="text-2xl font-serif text-gray-900 dark:text-white mb-4">Culto de Celebração</h4>
            <div className="flex items-center gap-2 text-[#D64531] mb-2">
              <Clock size={16} />
              <span className="font-bold">Todo Domingo às 19h00</span>
            </div>
            <p className="text-gray-500 text-sm">O momento de celebrarmos juntos a vida em comunidade.</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-none border-l-4 border-[#D64531] shadow-sm group">
            <h4 className="text-2xl font-serif text-gray-900 dark:text-white mb-4">Palavra e Adoração</h4>
            <div className="flex items-center gap-2 text-[#D64531] mb-2">
              <Clock size={16} />
              <span className="font-bold">Quarta-feira às 19h30</span>
            </div>
            <p className="text-gray-500 text-sm">Ensino profundo da bíblia e adoração congregacional.</p>
          </div>
        </div>
      </div>

      {showScheduleModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowScheduleModal(false)}></div>
          <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-300">
            <div className="bg-[#D64531] text-white p-6 flex justify-between items-center">
              <h3 className="text-2xl font-serif">Agenda Semanal</h3>
              <button onClick={() => setShowScheduleModal(false)}><X size={24} /></button>
            </div>
            <div className="p-6 space-y-4 bg-[#F9F7F2] dark:bg-gray-900">
              {weeklySchedule.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                  <span className="font-bold text-gray-900 dark:text-white">{item.day}</span>
                  <div className="text-right">
                    <p className="text-sm text-[#D64531] font-bold">{item.time}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
