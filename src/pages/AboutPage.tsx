// src/pages/AboutPage.tsx
import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import About from '../components/About';
import Footer from '../components/Footer';

export default function AboutPage() {
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo(0, 0);
  }, []);

  const handleBackToHome = () => {
    navigate('/', { replace: true });
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <>
      <Header />
      <div
        className="container mx-auto px-4"
        style={{ paddingTop: 'clamp(1.5rem, 2vw, 2rem)', paddingBottom: '0' }}
      >
        <button
          onClick={handleBackToHome}
          className="inline-flex items-center bg-white text-burgundy rounded-lg font-semibold border-2 border-burgundy hover:bg-burgundy hover:text-cream transition-all group"
          style={{
            gap: 'clamp(0.4rem, 0.8vw, 0.5rem)',
            padding: 'clamp(0.4rem, 1vw, 0.5rem) clamp(0.75rem, 1.5vw, 1rem)',
            fontSize: 'clamp(0.8rem, 1vw + 0.4rem, 0.95rem)',
          }}
        >
          <ArrowLeft
            className="group-hover:-translate-x-1 transition-transform"
            style={{
              width: 'clamp(0.9rem, 1.2vw, 1rem)',
              height: 'clamp(0.9rem, 1.2vw, 1rem)',
            }}
          />
          Back to Home
        </button>
      </div>
      <About />
      <Footer />
    </>
  );
}
