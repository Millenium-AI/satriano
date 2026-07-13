// src/pages/ReviewsPage.tsx
import { useEffect } from 'react';
import Header from '../components/Header';
import Testimonials from '../components/Testimonials';
import GoogleReviews from '../components/GoogleReviews';
import Footer from '../components/Footer';

export default function ReviewsPage() {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <Testimonials />
      <GoogleReviews />
      <Footer />
    </>
  );
}
