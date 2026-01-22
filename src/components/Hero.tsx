import { useState, useEffect } from 'react';
import { ArrowRight, Anchor, ChevronLeft, ChevronRight } from 'lucide-react';
import image1 from '../assets/ElevatorAngleShot.jpg';
import image2 from '../assets/Areial.jpg';
import image3 from '../assets/Dock.jpg';

const IMAGES = [image1, image2, image3];
const AUTOPLAY_INTERVAL = 6000;

const STATS = [
  { value: '40+', label: 'Years Experience' },
  { value: '100%', label: 'Licensed & Insured' },
  { value: '5★', label: 'Customer Rated' },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % IMAGES.length);
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image Carousel */}
      {IMAGES.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={img}
            alt={`Marine construction ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />

      {/* Content */}
      <div 
        className="relative z-10 container mx-auto"
        style={{ padding: 'clamp(3rem, 5vw, 5rem) clamp(1rem, 2vw, 2rem)' }}
      >
        <div className="max-w-4xl text-left">
          {/* Main Headline */}
          <h1 
            className="font-zalando font-bold text-white mb-fluid-lg leading-tight drop-shadow-2xl"
            style={{ fontSize: 'clamp(2rem, 5vw + 1rem, 4.5rem)' }}
          >
            Satriano Marine Construction
          </h1>

          {/* Subheadline Badge */}
          <div 
            className="flex items-center bg-gold/30 backdrop-blur-md rounded-lg mb-fluid-xl shadow-xl border border-gold/50 max-w-fit mx-auto md:mx-0"
            style={{ 
              gap: 'clamp(0.5rem, 1vw, 0.75rem)',
              padding: 'clamp(0.5rem, 1.5vw, 1rem) clamp(0.75rem, 2vw, 2rem)'
            }}
          >
            <Anchor 
              className="text-gold flex-shrink-0"
              style={{ 
                width: 'clamp(1rem, 2vw, 2rem)',
                height: 'clamp(1rem, 2vw, 2rem)'
              }}
            />
            <h2 
              className="text-white font-semibold"
              style={{ fontSize: 'clamp(1rem, 2vw + 0.5rem, 1.875rem)' }}
            >
              Florida's Premier Dock & Boat Lift Solutions
            </h2>
          </div>

          {/* Description */}
          <p 
            className="text-white/90 mb-fluid-xl leading-relaxed drop-shadow-lg max-w-2xl mx-auto"
            style={{ fontSize: 'clamp(1rem, 1.5vw + 0.5rem, 1.25rem)' }}
          >
            With over 40 years in the construction business, You can count on us to complete any job large or small.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-wrap mb-fluid-2xl"
            style={{ gap: 'clamp(0.75rem, 1.5vw, 1rem)' }}
          >
            <button
              onClick={scrollToContact}
              className="bg-gold text-burgundy rounded-lg font-semibold hover:bg-gold/90 transition-all flex items-center shadow-2xl hover:scale-105"
              style={{ 
                padding: 'clamp(0.75rem, 1.5vw, 1rem) clamp(1.5rem, 3vw, 2rem)',
                fontSize: 'clamp(0.9rem, 1vw + 0.5rem, 1.1rem)',
                gap: 'clamp(0.4rem, 0.8vw, 0.5rem)'
              }}
            >
              Get Your Free Quote
              <ArrowRight style={{ width: 'clamp(1rem, 1.5vw, 1.25rem)', height: 'clamp(1rem, 1.5vw, 1.25rem)' }} />
            </button>
            <a
              href="tel:727-954-0041"
              className="bg-white/10 backdrop-blur-md text-white rounded-lg font-semibold hover:bg-white/20 transition-all border-2 border-white shadow-xl hover:scale-105"
              style={{ 
                padding: 'clamp(0.75rem, 1.5vw, 1rem) clamp(1.5rem, 3vw, 2rem)',
                fontSize: 'clamp(0.9rem, 1vw + 0.5rem, 1.1rem)'
              }}
            >
              Call 727-954-0041
            </a>
          </div>

          {/* Stats Grid */}
          <div 
            className="grid grid-cols-3 md:grid-cols-3"
            style={{ gap: 'clamp(1rem, 2vw, 1.5rem)' }}
          >
            {STATS.map(({ value, label }) => (
              <div 
                key={label}
                className="bg-white/10 backdrop-blur-md rounded-lg text-center shadow-lg"
                style={{ padding: 'clamp(0.75rem, 1.5vw, 1rem)' }}
              >
                <div 
                  className="font-bold text-gold mb-1"
                  style={{ fontSize: 'clamp(1.5rem, 3vw, 3rem)' }}
                >
                  {value}
                </div>
                <div 
                  className="text-white"
                  style={{ fontSize: 'clamp(0.7rem, 1vw, 0.875rem)' }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={previousSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 rounded-full transition-all"
        style={{ padding: 'clamp(0.5rem, 1vw, 0.75rem)' }}
        aria-label="Previous image"
      >
        <ChevronLeft 
          className="text-white"
          style={{ width: 'clamp(1.25rem, 2vw, 1.5rem)', height: 'clamp(1.25rem, 2vw, 1.5rem)' }}
        />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 rounded-full transition-all"
        style={{ padding: 'clamp(0.5rem, 1vw, 0.75rem)' }}
        aria-label="Next image"
      >
        <ChevronRight 
          className="text-white"
          style={{ width: 'clamp(1.25rem, 2vw, 1.5rem)', height: 'clamp(1.25rem, 2vw, 1.5rem)' }}
        />
      </button>

      {/* Slide Indicators */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex"
        style={{ gap: 'clamp(0.4rem, 0.8vw, 0.5rem)' }}
      >
        {IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`rounded-full transition-all ${
              index === currentSlide ? 'bg-gold' : 'bg-white/50'
            }`}
            style={{ 
              width: index === currentSlide ? 'clamp(1.5rem, 2vw, 2rem)' : 'clamp(0.6rem, 1vw, 0.75rem)',
              height: 'clamp(0.6rem, 1vw, 0.75rem)'
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
