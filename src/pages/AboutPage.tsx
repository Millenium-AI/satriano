// src/pages/AboutPage.tsx
import { useEffect } from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Footer from '../components/Footer';

export default function AboutPage() {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <About />
      <Footer />
    </>
  );
}
