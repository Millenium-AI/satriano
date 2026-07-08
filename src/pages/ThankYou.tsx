// src/pages/ThankYou.tsx
import { useEffect } from 'react';
import { CheckCircle2, Phone, Mail } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function ThankYou() {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo(0, 0);

    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_path: '/thank-you',
        page_title: 'Thank You | Satriano Marine Construction',
        page_location: window.location.href,
      });

      window.gtag('event', 'conversion', {
        send_to: 'AW-11426589922/AmDBCKvOlc0cEOLZz8gq',
        value: 1.0,
        currency: 'USD',
      });
    }
  }, []);

  return (
    <>
      <Header />

      <section className="min-h-[60vh] flex items-center">
        <div
          className="container mx-auto px-4 text-center"
          style={{ padding: 'clamp(2rem, 6vw, 4rem) 1rem' }}
        >
          <div className="max-w-2xl mx-auto bg-cream rounded-2xl shadow-2xl border border-gold p-8 md:p-12">
            <CheckCircle2 className="w-16 h-16 text-burgundy mx-auto mb-6" />

            <h1
              className="font-montserrat font-bold text-burgundy mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw + 1rem, 3rem)' }}
            >
              Thank You!
            </h1>

            <p className="text-burgundy text-lg leading-relaxed mb-6">
              Your message has been received. A member of the Satriano Marine team will reach
              out shortly to discuss your free estimate.
            </p>

            <p className="text-burgundy leading-relaxed mb-8">
              Need immediate assistance? Give us a call or send an email directly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:727-954-0041"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-burgundy text-cream rounded-lg font-semibold hover:shadow-xl hover:scale-105 active:scale-95 transition-all touch-manipulation"
              >
                <Phone className="w-5 h-5" />
                727-954-0041
              </a>
              <a
                href="mailto:sal@satrianomarine.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-burgundy rounded-lg font-semibold border-2 border-burgundy hover:bg-burgundy hover:text-cream transition-all touch-manipulation"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
