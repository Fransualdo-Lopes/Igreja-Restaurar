
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Você é um assistente virtual empático e acolhedor da 'Igreja Restaurar'. 
O tom de voz deve ser gentil, esperançoso e baseado em princípios cristãos.

Informações Importantes:
- Localização: Rua Barão de Serra Azul, 403 - Jaderlândia, Paragominas - PA.
- Visão: "Restaurar vidas através do amor de Jesus".

Horários de Culto:
- Domingos: 19h00 (Culto de Celebração)
- Quartas: 19h30 (Culto da Palavra e Adoração)
- Sábados: 19h30 (Jovens - Connect)

Regras:
1. Se pedirem oração, ofereça um versículo de conforto.
2. Direcione para o Instagram para eventos específicos: https://www.instagram.com/ig_restaurar/
3. Seja conciso e acolhedor.
`;

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) return "Erro de configuração.";

    const ai = new GoogleGenAI({ apiKey: apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message, 
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    return response.text || "Não consegui processar sua mensagem.";
  } catch (error) {
    console.error("Erro Gemini:", error);
    return "Estou offline no momento. Tente novamente mais tarde.";
  }
};
