import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { EventsSection } from './components/EventsSection';
import { MinistriesSection } from './components/MinistriesSection';
import { AboutSection } from './components/AboutSection';
import { SermonsSection } from './components/SermonsSection';
import { Footer } from './components/Footer';
import { ChatAssistant } from './components/ChatAssistant';
import { GivingModal } from './components/GivingModal';

function App() {
  const [isGivingModalOpen, setIsGivingModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F9F7F2] font-sans text-gray-900 selection:bg-[#D64531] selection:text-white">
      <Header onOpenGivingModal={() => setIsGivingModalOpen(true)} />
      
      <main>
        <Hero />
        <AboutSection />
        <MinistriesSection />
        
        {/* Quote Break */}
        <div className="py-24 bg-[#D64531] text-white text-center px-4">
          <div className="max-w-4xl mx-auto">
             <blockquote className="text-3xl md:text-5xl font-serif italic leading-tight mb-8">
              "Portanto, se alguém está em Cristo, é nova criação. As coisas antigas já passaram; eis que surgiram coisas novas!"
             </blockquote>
             <cite className="text-white/80 font-medium tracking-widest uppercase not-italic">2 Coríntios 5:17</cite>
          </div>
        </div>

        <SermonsSection />
        <EventsSection />
      </main>

      <Footer />
      <ChatAssistant />
      <GivingModal isOpen={isGivingModalOpen} onClose={() => setIsGivingModalOpen(false)} />
    </div>
  );
}

export default App;
