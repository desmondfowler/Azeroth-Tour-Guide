import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./css/tailwind.css";


// Import components
import Home from './pages/Home';
import AzerothPage from './pages/AzerothPage';
import Contact from './pages/Contact';



const rootElement = document.getElementById('root') as HTMLElement; // Type assertion for TS

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/azeroth' element={<AzerothPage />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  )
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);