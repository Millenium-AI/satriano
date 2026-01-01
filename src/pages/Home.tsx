// src/pages/Home.tsx
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Partners from '../components/Partners';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import GoogleReviews from '../components/GoogleReviews';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Partners />
      <Testimonials />
      <GoogleReviews />
      <Footer />
    </>
  );
}
