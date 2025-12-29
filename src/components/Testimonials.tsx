import { useState, useEffect, useRef } from 'react';
import { Star, MapPin } from 'lucide-react';

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const testimonials = [
    {
      name: 'John Smith',
      location: 'Treasure Island, FL',
      text: 'Satriano Marine did an outstanding job on our new dock. Professional, timely, and the quality is exceptional. Highly recommend!',
      rating: 5,
    },
    {
      name: 'Mary Johnson',
      location: 'St. Petersburg, FL',
      text: 'We hired Satriano Marine for a boat lift installation and could not be happier. The team was knowledgeable and the work was flawless.',
      rating: 5,
    },
    {
      name: 'Robert Williams',
      location: 'Clearwater, FL',
      text: 'Best marine construction company in Pinellas County! They repaired our dock quickly and at a fair price. True professionals.',
      rating: 5,
    },
  ];

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
            Don&apos;t just take our word for it - hear from our satisfied customers
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-burgundy to-gold mx-auto mt-6" />
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 md:mb-20 lg:mb-24">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 md:p-8 border border-gold transform hover:scale-105 flex flex-col ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-4 md:mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 md:w-6 md:h-6 fill-gold text-gold" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-sm md:text-base lg:text-lg text-burgundy/80 leading-relaxed mb-6 md:mb-8 italic flex-grow">
                &quot;{testimonial.text}&quot;
              </p>

              {/* Author Info */}
              <div className="border-t border-gold/30 pt-4">
                <p className="font-semibold text-burgundy text-base md:text-lg">{testimonial.name}</p>
                <p className="text-sm md:text-base text-burgundy/60 flex items-center gap-1 mt-1">
                  <MapPin className="w-3 h-3 md:w-4 md:h-4" />
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
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

          {/* Google Maps Embed - FIXED WITH EXPLICIT CLOSING TAG */}
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
              <Star className="w-5 h-5 md:w-6 md:h-6 fill-burgundy text-burgundy" />
              <span>Write a Review</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
