import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function GoogleReviews() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref, 0.1);

  return (
    <section id="google-reviews" ref={ref} className="section-default bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-bold text-burgundy mb-4 md:mb-6">
              Find Us on <span className="text-gold">Google</span>
            </h1>
            <h2 className="text-base md:text-lg lg:text-xl text-burgundy/80 max-w-2xl mx-auto leading-relaxed">
              Visit our Google Business page to see more Reviews and Ratings
            </h2>
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
    </section>
  );
}
