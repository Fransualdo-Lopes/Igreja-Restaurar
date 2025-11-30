import React, { useState } from 'react';
import { Header } from './src/components/layout/Header';
import { Hero } from './src/components/sections/Hero';
import { EventsSection } from './src/components/sections/EventsSection';
import { MinistriesSection } from './src/components/sections/MinistriesSection';
import { AboutSection } from './src/components/sections/AboutSection';
import { SermonsSection } from './src/components/sections/SermonsSection';
import { Footer } from './src/components/layout/Footer';
import { ChatAssistant } from './src/components/features/ChatAssistant';
import { GivingModal, GivingType } from './src/components/ui/GivingModal';

function App() {
  const [activeGivingType, setActiveGivingType] = useState<GivingType | null>(null);

  return (
    <div className="min-h-screen bg-[#F9F7F2] font-sans text-gray-900 selection:bg-[#D64531] selection:text-white">
      <Header onOpenGivingModal={(type) => setActiveGivingType(type)} />
      
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
      <GivingModal 
        isOpen={!!activeGivingType} 
        onClose={() => setActiveGivingType(null)} 
        type={activeGivingType || 'oferta'} // Default fallback
      />
    </div>
  );
}

export default App;