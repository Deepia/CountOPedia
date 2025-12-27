import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Header from './Layout/Header';
import Footer from './Layout/Footer';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-fill"></main>
      <Footer />
    </div>
  </StrictMode>
);
