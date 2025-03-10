import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "./css/styles.css";
import Home from './pages/Home';

const rootElement = document.getElementById('root') as HTMLElement; // Type assertion for TS
createRoot(rootElement).render(
  <StrictMode>
    <Home />
  </StrictMode>
);