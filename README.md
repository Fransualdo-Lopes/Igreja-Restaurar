# 🏛️ Modelo de Site para Igrejas - Projeto Restaurar

Este projeto é um **template moderno, elegante e responsivo** desenvolvido em **React** e **TypeScript**, projetado especificamente para igrejas e organizações religiosas.

O site apresenta uma identidade visual acolhedora, navegação fluida e funcionalidades essenciais para conectar a comunidade, incluindo um **Assistente Virtual com IA** e um sistema visual para **Ofertas e Dízimos**.

![Preview do Site](https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=1000&auto=format&fit=crop)

## ✨ Funcionalidades

*   **Design Premium & Responsivo:** Layout fluido que funciona perfeitamente em desktop e mobile, utilizando Tailwind CSS.
*   **📍 Navegação Suave:** Links internos com rolagem suave (Smooth Scroll) para melhor experiência do usuário.
*   **🤖 Assistente Virtual com IA:** Chatbot integrado com a **Google Gemini API** para tirar dúvidas sobre horários, localização e oferecer suporte espiritual básico.
*   **🙏 Seção de Ministérios:** Cards interativos apresentando as áreas de atuação da igreja (Kids, Jovens, Intercessão, etc.).
*   **💰 Modal de Ofertas:** Interface moderna (Pop-up) com abas para **PIX (QR Code)** e **Transferência Bancária**, facilitando a contribuição.
*   **🎥 Seção de Pregações:** Destaque para a última mensagem e galeria de cultos anteriores.
*   **📅 Agenda de Eventos:** Visualização clara dos próximos cultos e encontros.
*   **📞 Rodapé Completo:** Links rápidos, informações de contato e redes sociais.

## 🛠️ Tecnologias Utilizadas

*   [React](https://react.dev/) - Biblioteca para construção da interface.
*   [TypeScript](https://www.typescriptlang.org/) - Tipagem estática para maior segurança e produtividade.
*   [Tailwind CSS](https://tailwindcss.com/) - Framework de estilos utilitários.
*   [Lucide React](https://lucide.dev/) - Ícones leves e modernos.
*   [Google GenAI SDK](https://ai.google.dev/) - Integração com Inteligência Artificial (Gemini).
*   [Vite](https://vitejs.dev/) - Build tool rápida e otimizada.

## 🚀 Como Rodar o Projeto

Siga os passos abaixo para baixar e executar o projeto em sua máquina local.

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

### Passo a Passo

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/nome-do-repositorio.git
    cd nome-do-repositorio
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configuração da API (Opcional para o Chatbot):**
    Para que o Chatbot funcione, você precisa de uma chave de API do Google Gemini.
    *   Crie um arquivo `.env` na raiz do projeto.
    *   Adicione sua chave:
        ```env
        API_KEY=sua_chave_api_aqui
        ```
    *   *Nota: Se não configurar, o site funcionará, mas o chat não responderá.*

4.  **Rode o projeto:**
    ```bash
    npm run dev
    ```

5.  **Acesse no navegador:**
    O terminal mostrará o endereço local, geralmente:
    `http://localhost:5173/`

## 📁 Estrutura do Projeto

```
/src
  ├── components/      # Componentes reutilizáveis (Header, Hero, Modal, etc.)
  ├── services/        # Integrações com APIs (Gemini AI)
  ├── types.ts         # Definições de tipos TypeScript
  ├── App.tsx          # Componente principal
  └── index.tsx        # Ponto de entrada
```

## 🎨 Personalização

Para adaptar este modelo para sua igreja:

1.  **Cores:** Ajuste as cores no `tailwind.config` ou substitua o código hex `#D64531` (Vermelho Terra) e `#F9F7F2` (Creme) nos arquivos.
2.  **Imagens:** Substitua as URLs do Unsplash nos componentes pelas fotos reais da sua comunidade.
3.  **Textos:** Edite os arquivos dentro da pasta `components` para alterar endereços, nomes de pastores e descrições.
4.  **Ofertas:** No arquivo `components/GivingModal.tsx`, atualize a chave PIX, o QR Code e os dados bancários.

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se à vontade para usar, modificar e distribuir.

---

Desenvolvido com ❤️ para o Reino.
