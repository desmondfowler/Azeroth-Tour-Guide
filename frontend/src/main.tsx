import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./css/styles.css";
import Header from './components/Header';
import Azeroth from './components/Azeroth';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <Azeroth />
    </div>
  </StrictMode>,
)