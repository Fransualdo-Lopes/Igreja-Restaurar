import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Você é um assistente virtual empático e acolhedor da 'Igreja Restaurar'. 
O tom de voz deve ser gentil, esperançoso e baseado em princípios cristãos, mas sem ser excessivamente religioso ou julgador.
Seu objetivo é:
1. Responder dúvidas sobre a igreja (horários, localização).
2. Oferecer versículos bíblicos de conforto se a pessoa pedir oração.
3. Explicar brevemente sobre a visão da igreja: 'Restaurar vidas através do amor de Jesus'.
4. Nunca invente eventos específicos que não foram fornecidos. Se não souber, peça para entrarem em contato pelo Instagram oficial: https://www.instagram.com/ig_restaurar/

Horários de Culto (use como base):
- Domingos: 10h e 18h
- Quartas: 20h (Culto de Oração)
- Sábados: 19h30 (Jovens - Connect)
`;

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY;
    
    if (!apiKey) {
      console.error("API Key não encontrada.");
      return "Configuração da API ausente. Verifique o arquivo .env ou a configuração do projeto.";
    }
    
    const ai = new GoogleGenAI({ apiKey: apiKey });
    
    const model = 'gemini-2.5-flash';
    
    // Uso simplificado para texto conforme documentação oficial
    const response = await ai.models.generateContent({
      model: model,
      contents: message, 
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    return response.text || "Desculpe, não consegui processar sua mensagem no momento.";
  } catch (error) {
    console.error("Erro ao comunicar com Gemini:", error);
    return "No momento estou indisponível. Por favor, tente novamente mais tarde.";
  }
};