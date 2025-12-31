import { useState, useEffect, useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

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
    <section id="testimonials" ref={ref} className="py-16 md:py-24 lg:py-32 bg-cream">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div
          className={`text-center mb-12 md:mb-16 lg:mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-bold text-burgundy mb-4 md:mb-6">
            What Our <span className="text-gold">Clients Say</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-burgundy max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it - hear from our Satisfied Customers
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-burgundy to-gold mx-auto mt-6" />
        </div>

        {/* Featurable Google Reviews Widget */}
        <div
          className={`mb-16 md:mb-20 lg:mb-24 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div 
            id="featurable-1d0aacbb-c0bb-488b-8ce7-f7a7dd99ac80" 
            data-featurable-async
          ></div>
        </div>

        {/* Google Reviews Section */}
        <div
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-bold text-burgundy mb-4 md:mb-6">
              Find Us on <span className="text-gold">Google</span>
            </h3>
            <p className="text-base md:text-lg lg:text-xl text-burgundy/80 max-w-2xl mx-auto leading-relaxed">
              Visit our Google Business page to see more Reviews and Ratings
            </p>
          </div>

          {/* Google Maps Embed */}
          <div className="max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-2xl border-2 border-gold bg-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3528.583700119941!2d-82.819318!3d27.822582299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2fd78750437c7%3A0xa1c03e39f5b066d6!2sSatriano%20Marine%20Construction%2C%20LLC.!5e0!3m2!1sen!2sus!4v1766973561487!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* CTA Button - Write Review */}
          <div className="flex items-center justify-center mt-8 md:mt-12">
            <a
              href="https://g.page/r/CdZmsPU5PsChEBM/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 md:px-10 lg:px-12 py-4 md:py-5 bg-gold text-burgundy rounded-lg font-semibold text-base md:text-lg lg:text-xl hover:bg-gold/90 hover:shadow-xl hover:scale-105 transition-all min-h-touch"
            >
              <svg 
                className="w-5 h-5 md:w-6 md:h-6 fill-burgundy text-burgundy" 
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <span>Write a Review</span>
            </a>
          </div>
        </div>
      </div>

      {/* Custom Styles for Featurable Widget */}
      <style>{`
        /* Override Featurable widget styles to match your theme */
        #featurable-1d0aacbb-c0bb-488b-8ce7-f7a7dd99ac80 {
          /* Card backgrounds */
          --featurable-card-bg: #ffffff;
          --featurable-card-border: rgba(206, 151, 61, 0.2);
          
          /* Text colors */
          --featurable-text-primary: #5B191B;
          --featurable-text-secondary: rgba(91, 25, 27, 0.7);
          
          /* Star rating colors */
          --featurable-star-filled: #CE973D;
          --featurable-star-empty: rgba(206, 151, 61, 0.3);
          
          /* Button/Link colors */
          --featurable-accent: #5B191B;
          --featurable-accent-hover: rgba(91, 25, 27, 0.9);
        }

        /* Style review cards */
        #featurable-1d0aacbb-c0bb-488b-8ce7-f7a7dd99ac80 [class*="ReviewCard"] {
          border-color: rgba(206, 151, 61, 0.5) !important;
          background: white !important;
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1) !important;
        }

        #featurable-1d0aacbb-c0bb-488b-8ce7-f7a7dd99ac80 [class*="ReviewCard"]:hover {
          box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1) !important;
          transform: scale(1.02);
        }

        /* Style reviewer names */
        #featurable-1d0aacbb-c0bb-488b-8ce7-f7a7dd99ac80 [class*="reviewerName"] {
          color: #5B191B !important;
          font-weight: 600 !important;
        }

        /* Style review text */
        #featurable-1d0aacbb-c0bb-488b-8ce7-f7a7dd99ac80 [class*="reviewBody"] {
          color: rgba(91, 25, 27, 0.8) !important;
        }

        /* Style dates */
        #featurable-1d0aacbb-c0bb-488b-8ce7-f7a7dd99ac80 [class*="reviewerDate"] {
          color: rgba(91, 25, 27, 0.6) !important;
        }

        /* Style star ratings to gold */
        #featurable-1d0aacbb-c0bb-488b-8ce7-f7a7dd99ac80 svg[fill*="rgb"] path,
        #featurable-1d0aacbb-c0bb-488b-8ce7-f7a7dd99ac80 svg path[fill] {
          fill: #CE973D !important;
        }

        /* Style navigation arrows */
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

        /* Style carousel dots */
        #featurable-1d0aacbb-c0bb-488b-8ce7-f7a7dd99ac80 .slick-dots li button:before {
          color: rgba(206, 151, 61, 0.4) !important;
        }

        #featurable-1d0aacbb-c0bb-488b-8ce7-f7a7dd99ac80 .slick-dots li.slick-active button:before {
          color: #CE973D !important;
        }

        /* Ensure mobile responsiveness */
        @media (max-width: 640px) {
          #featurable-1d0aacbb-c0bb-488b-8ce7-f7a7dd99ac80 [class*="ReviewCard"] {
            padding: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
