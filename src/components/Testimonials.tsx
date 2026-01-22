import { useEffect, useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import SectionHeader from './SectionHeader';

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref, 0.1);
  const scriptLoaded = useRef(false);

  // Load Featurable script
  useEffect(() => {
    if (!scriptLoaded.current) {
      const script = document.createElement('script');
      script.src = 'https://featurable.com/assets/bundle.js';
      script.defer = true;
      script.charset = 'UTF-8';
      document.body.appendChild(script);

      scriptLoaded.current = true;
    }
  }, []);

  return (
    <section id="testimonials" ref={ref} className="section-default bg-cream">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <SectionHeader 
            title="What Our"
            highlightedText="Clients Say"
            subtitle="Don't just take our word for it - hear from our Satisfied Customers."
            className="mb-12 md:mb-16 lg:mb-20"
          />
        </div>

        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div 
            id="featurable-1d0aacbb-c0bb-488b-8ce7-f7a7dd99ac80" 
            data-featurable-async
          ></div>
        </div>
      </div>

      {/* Custom Styles for Featurable Widget */}
      <style>{`
        #featurable-1d0aacbb-c0bb-488b-8ce7-f7a7dd99ac80 {
          --featurable-card-bg: #ffffff;
          --featurable-card-border: rgba(206, 151, 61, 0.2);
          --featurable-text-primary: #5B191B;
          --featurable-text-secondary: rgba(91, 25, 27, 0.7);
          --featurable-star-filled: #CE973D;
          --featurable-star-empty: rgba(206, 151, 61, 0.3);
          --featurable-accent: #5B191B;
          --featurable-accent-hover: rgba(91, 25, 27, 0.9);
        }

        #featurable-1d0aacbb-c0bb-488b-8ce7-f7a7dd99ac80 [class*="ReviewCard"] {
          border-color: rgba(206, 151, 61, 0.5) !important;
          background: white !important;
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1) !important;
        }

        #featurable-1d0aacbb-c0bb-488b-8ce7-f7a7dd99ac80 [class*="ReviewCard"]:hover {
          box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1) !important;
          transform: scale(1.02);
        }

        #featurable-1d0aacbb-c0bb-488b-8ce7-f7a7dd99ac80 [class*="reviewerName"] {
          color: #5B191B !important;
          font-weight: 600 !important;
        }

        #featurable-1d0aacbb-c0bb-488b-8ce7-f7a7dd99ac80 [class*="reviewBody"] {
          color: rgba(91, 25, 27, 0.8) !important;
        }

        #featurable-1d0aacbb-c0bb-488b-8ce7-f7a7dd99ac80 [class*="reviewerDate"] {
          color: rgba(91, 25, 27, 0.6) !important;
        }

        #featurable-1d0aacbb-c0bb-488b-8ce7-f7a7dd99ac80 svg[fill*="rgb"] path,
        #featurable-1d0aacbb-c0bb-488b-8ce7-f7a7dd99ac80 svg path[fill] {
          fill: #CE973D !important;
        }

        #featurable-1d0aacbb-c0bb-488b-8ce7-f7a7dd99ac80 button[class*="btn"] {
          background: white !important;
          border: 1px solid rgba(206, 151, 61, 0.5) !important;
          color: #5B191B !important;
        }

        #featurable-1d0aacbb-c0bb-488b-8ce7-f7a7dd99ac80 button[class*="btn"]:hover {
          background: #FCF1DF !important;
          border-color: #CE973D !important;
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1) !important;
          transform: scale(1.05);
        }

        #featurable-1d0aacbb-c0bb-488b-8ce7-f7a7dd99ac80 .slick-dots li button:before {
          color: rgba(206, 151, 61, 0.4) !important;
        }

        #featurable-1d0aacbb-c0bb-488b-8ce7-f7a7dd99ac80 .slick-dots li.slick-active button:before {
          color: #CE973D !important;
        }

        @media (max-width: 640px) {
          #featurable-1d0aacbb-c0bb-488b-8ce7-f7a7dd99ac80 [class*="ReviewCard"] {
            padding: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
