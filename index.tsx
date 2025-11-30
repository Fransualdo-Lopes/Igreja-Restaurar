import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

console.log("Main script starting...");

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

try {
  // Clear any existing content (like the spinner text) to ensure clean mount
  rootElement.innerHTML = '';
  
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  
  console.log("App render scheduled successfully");
} catch (error) {
  console.error("Failed to mount app:", error);
  // Show error in the UI
  rootElement.innerHTML = `<div style="color:red; padding:20px; font-family:sans-serif;">
    <h3>Erro ao iniciar a aplicação</h3>
    <pre>${error instanceof Error ? error.message : String(error)}</pre>
  </div>`;
}