import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.addEventListener('popstate', () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
});

window.addEventListener('beforeunload', () => {
  window.scrollTo(0, 0);
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
