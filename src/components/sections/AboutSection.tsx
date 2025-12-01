
import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre-nos" className="py-24 bg-[#2D2D2D] dark:bg-[#050505] text-white relative overflow-hidden transition-colors duration-300">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D64531] opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="relative">
                    <div className="aspect-[4/5] w-full max-w-md mx-auto bg-gray-800 relative z-10 shadow-2xl">
                         <img 
                            src="https://images.unsplash.com/photo-1510590337019-5ef2d39aa786?q=80&w=2670&auto=format&fit=crop" 
                            alt="Pastor pregando" 
                            className="w-full h-full object-cover opacity-90"
                        />
                    </div>
                    {/* Outline Border */}
                    <div className="absolute top-6 left-6 w-full h-full border-2 border-[#D64531] -z-0 hidden md:block max-w-md ml-auto"></div>
                </div>

                <div>
                    <h2 className="text-[#D64531] text-sm font-bold tracking-widest uppercase mb-4">Nossa História</h2>
                    <h3 className="text-4xl md:text-5xl font-serif mb-8 leading-tight text-white">
                        Restaurando a essência,<br/> construindo o futuro.
                    </h3>
                    <p className="text-gray-200 text-lg mb-6 font-normal leading-relaxed">
                        A Igreja Restaurar nasceu com o propósito de ser um lugar de cura e recomeço. Acreditamos que o Evangelho não é apenas sobre religião, mas sobre um relacionamento vivo com Deus que transforma todas as áreas da vida.
                    </p>
                    <p className="text-gray-200 text-lg mb-8 font-normal leading-relaxed">
                        Nossa missão é acolher pessoas, ensinar a verdade bíblica e enviar discípulos para impactar a sociedade. Seja qual for sua história, aqui você tem um lugar.
                    </p>
                    
                    <div className="flex flex-wrap gap-8">
                        <div>
                            <span className="block text-4xl font-serif text-[#D64531] mb-1">1+</span>
                            <span className="text-sm text-gray-300 uppercase tracking-wider font-medium">Ano de História</span>
                        </div>
                        <div>
                            <span className="block text-4xl font-serif text-[#D64531] mb-1">100+</span>
                            <span className="text-sm text-gray-300 uppercase tracking-wider font-medium">Membros</span>
                        </div>
                        <div>
                            <span className="block text-4xl font-serif text-[#D64531] mb-1">2</span>
                            <span className="text-sm text-gray-300 uppercase tracking-wider font-medium">Projetos Sociais</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};
