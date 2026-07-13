// src/pages/ContactPage.tsx
import { useEffect } from 'react';
import Header from '../components/Header';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function ContactPage() {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <Contact />
      <Footer />
    </>
  );
}
