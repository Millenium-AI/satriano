// src/pages/ThankYou.tsx
import { useEffect } from 'react';
import { ArrowLeft, CheckCircle2, Phone, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function ThankYou() {
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo(0, 0);

    // This is a single-page app, so React Router navigations don't trigger a
    // real page load — gtag.js only auto-fires a page_view on the initial
    // load. We send one manually here so Google Ads / Analytics sees a visit
    // to /thank-you every time the contact form is submitted successfully,
    // from any page on the site.
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_path: '/thank-you',
        page_title: 'Thank You | Satriano Marine Construction',
        page_location: window.location.href,
      });

      // Google Ads "Submit lead form" conversion — fires once per landing on
      // this page, which happens right after a successful form submission.
      window.gtag('event', 'conversion', {
        send_to: 'AW-11426589922/AmDBCKvOlc0cEOLZz8gq',
        value: 1.0,
        currency: 'USD',
      });
    }
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
