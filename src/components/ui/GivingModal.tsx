import React, { useState } from 'react';
import { X, Copy, Check, QrCode, Building2, CreditCard } from 'lucide-react';

export type GivingType = 'dizimo' | 'oferta';

interface GivingModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: GivingType;
}

export const GivingModal: React.FC<GivingModalProps> = ({ isOpen, onClose, type }) => {
  const [activeTab, setActiveTab] = useState<'pix' | 'bank'>('pix');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const pixKey = "00.000.000/0001-00"; // Exemplo CNPJ

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Configuração de conteúdo dinâmico baseada no tipo
  const content = type === 'dizimo' ? {
    title: "Devolva seu Dízimo",
    text: '"Trazei todos os dízimos à casa do tesouro, para que haja mantimento na minha casa, e depois fazei prova de mim nisto, diz o Senhor dos Exércitos."',
    verse: "MALAQUIAS 3:10"
  } : {
    title: "Faça sua Oferta",
    text: '"Cada um dê conforme determinou em seu coração, não com pesar ou por obrigação, pois Deus ama quem dá com alegria."',
    verse: "2 CORÍNTIOS 9:7"
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Card */}
      <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-300 transition-colors">
        
        {/* Header */}
        <div className="bg-[#2D2D2D] dark:bg-[#1a1a1a] p-6 text-center relative transition-colors">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
          
          <h3 className="text-2xl font-serif text-white mb-2">{content.title}</h3>
          <p className="text-gray-300 text-sm font-light italic">
            {content.text}
          </p>
          <span className="text-[#D64531] text-xs font-bold tracking-widest uppercase mt-2 block">{content.verse}</span>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-100 dark:border-gray-700">
          <button
            onClick={() => setActiveTab('pix')}
            className={`flex-1 py-4 text-sm font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 ${
              activeTab === 'pix' 
                ? 'text-[#D64531] border-b-2 border-[#D64531] bg-red-50/30 dark:bg-red-900/10' 
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
            }`}
          >
            <QrCode size={18} />
            PIX
          </button>
          <button
            onClick={() => setActiveTab('bank')}
            className={`flex-1 py-4 text-sm font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 ${
              activeTab === 'bank' 
                ? 'text-[#D64531] border-b-2 border-[#D64531] bg-red-50/30 dark:bg-red-900/10' 
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
            }`}
          >
            <Building2 size={18} />
            Transferência
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          {activeTab === 'pix' ? (
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="bg-white p-2 border-2 border-gray-100 rounded-lg shadow-sm">
                 {/* Placeholder QR Code - In a real app, generate this dynamically */}
                 <img 
                   src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=00020126580014BR.GOV.BCB.PIX0136123e4567-e89b-12d3-a456-4266141740005204000053039865802BR5913IgrejaRestaurar6011Paragominas62070503***63041D3D" 
                   alt="QR Code Pix" 
                   className="w-48 h-48"
                 />
              </div>
              
              <div className="w-full">
                <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 font-semibold transition-colors">Chave PIX (CNPJ)</p>
                <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 p-3 rounded-lg border border-gray-200 dark:border-gray-600 transition-colors">
                  <span className="flex-1 font-mono text-gray-800 dark:text-gray-200 text-lg">{pixKey}</span>
                  <button 
                    onClick={() => handleCopy(pixKey)}
                    className="text-[#D64531] hover:bg-white dark:hover:bg-gray-600 p-2 rounded-md transition-colors"
                    title="Copiar chave"
                  >
                    {copied ? <Check size={20} /> : <Copy size={20} />}
                  </button>
                </div>
                {copied && <span className="text-xs text-green-600 mt-1 block">Chave copiada!</span>}
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-100 dark:border-gray-600 transition-colors">
                <div className="bg-[#D64531]/10 p-3 rounded-full text-[#D64531]">
                    <CreditCard size={24} />
                </div>
                <div className="space-y-1">
                    <p className="text-xs text-gray-500 dark:text-gray-400 uppercase font-bold transition-colors">Banco</p>
                    <p className="text-gray-900 dark:text-white font-medium transition-colors">Banco do Brasil (001)</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-100 dark:border-gray-600 transition-colors">
                    <p className="text-xs text-gray-500 dark:text-gray-400 uppercase font-bold mb-1 transition-colors">Agência</p>
                    <p className="text-gray-900 dark:text-white font-mono transition-colors">1234-5</p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-100 dark:border-gray-600 transition-colors">
                    <p className="text-xs text-gray-500 dark:text-gray-400 uppercase font-bold mb-1 transition-colors">Conta Corrente</p>
                    <p className="text-gray-900 dark:text-white font-mono transition-colors">99999-X</p>
                </div>
              </div>

              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-100 dark:border-gray-600 flex justify-between items-center transition-colors">
                 <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 uppercase font-bold mb-1 transition-colors">CNPJ</p>
                    <p className="text-gray-900 dark:text-white font-mono transition-colors">00.000.000/0001-00</p>
                 </div>
                 <button 
                    onClick={() => handleCopy("00.000.000/0001-00")}
                    className="text-[#D64531] hover:bg-white dark:hover:bg-gray-600 p-2 rounded-md transition-colors"
                  >
                    <Copy size={18} />
                  </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-gray-50 dark:bg-gray-700 p-4 text-center border-t border-gray-100 dark:border-gray-600 transition-colors">
          <p className="text-xs text-gray-500 dark:text-gray-400 transition-colors">
            Dúvidas? Entre em contato com a tesouraria pelo WhatsApp.
          </p>
        </div>

      </div>
    </div>
  );
};