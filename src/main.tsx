// src/main.tsx - CORRECT VERSION with Service Worker Registration
import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* NO BrowserRouter here - App.tsx already has it */}
    <App />
  </React.StrictMode>,
)

// Service Worker Registration (ritual additive, no disruption)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then((registration) => {
        console.log('Adonnow SW registered:', registration)
      })
      .catch((error) => {
        console.error('Adonnow SW registration failed:', error)
      })
  })
}
