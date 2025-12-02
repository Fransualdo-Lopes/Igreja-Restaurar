import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Recompiling application state - Checkpoint Saved
console.log("Main script initialized...");

const rootElement = document.getElementById('root');
const loadingOverlay = document.getElementById('loading-overlay');

if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

try {
  // Clear any existing content inside root
  rootElement.innerHTML = '';
  
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  
  console.log("App render scheduled successfully");

  // Remove the loading screen smoothly after a short delay
  // This ensures the App has painted its first frame or so
  if (loadingOverlay) {
    // Wait a tiny bit to ensure the React app visual is ready behind the blur
    setTimeout(() => {
        loadingOverlay.classList.add('loader-hidden');
        // Remove from DOM after transition completes
        setTimeout(() => {
            loadingOverlay.remove();
        }, 600); // Matches CSS transition duration
    }, 500);
  }

} catch (error) {
  console.error("Failed to mount app:", error);
  
  // If loading fails, ensure the loader is removed so the error can be seen
  if (loadingOverlay) {
      loadingOverlay.style.display = 'none';
  }

  // Show error in the UI
  rootElement.innerHTML = `<div style="color:red; padding:20px; font-family:sans-serif;">
    <h3>Erro ao iniciar a aplicação</h3>
    <pre>${error instanceof Error ? error.message : String(error)}</pre>
  </div>`;
}