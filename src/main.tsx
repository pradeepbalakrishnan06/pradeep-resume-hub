import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// Google Analytics Setup
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Initialize Google Analytics
function initializeGA() {
  
  const GA_MEASUREMENT_ID = 'G-4B5J7LRS5K';
  
  // Load Google Analytics script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);
  
  // Initialize dataLayer and gtag function
  window.dataLayer = window.dataLayer || [];
  window.gtag = function() {
    window.dataLayer.push(arguments);
  };
  
  // Configure Google Analytics
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID);
}

// Initialize GA before rendering the app
initializeGA();

createRoot(document.getElementById("root")!).render(<App />);
