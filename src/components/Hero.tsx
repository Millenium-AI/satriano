import { useState, useEffect } from 'react';
import { ArrowRight, Anchor, ChevronLeft, ChevronRight } from 'lucide-react';
import image1 from '../assets/ElevatorAngleShot.jpg';
import image2 from '../assets/Areial.jpg';
import image3 from '../assets/Dock.jpg';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [image1, image2, image3];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  // Autoplay with 6-second intervals (optimal for viewing)
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image Carousel */}
      {images.map((img, index) => (
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

      {/* Dark gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />

      {/* Content - Left-side, vertically centered, left-aligned text */}
      <div className="relative z-10 container mx-auto px-8 py-20">
        <div className="max-w-4xl text-left">
          <h1 className="font-zalando text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
            Satriano Marine Construction
          </h1>

          <div className="flex items-center gap-2 xs:gap-3 bg-gold/30 backdrop-blur-md px-3 xs:px-4 md:px-6 lg:px-8 py-2 xs:py-3 md:py-3 lg:py-4 rounded-lg mb-6 xs:mb-8 shadow-xl border border-gold/50 max-w-fit mx-auto md:mx-0">
            <Anchor className="w-4 h-4 xs:w-5 xs:h-5 md:w-8 md:h-8 text-gold flex-shrink-0" />
            <h3 className="text-base xs:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white font-semibold">
              Florida's Premier Dock & Boat Lift Solutions
            </h3>
          </div>
          <p className="text-base xs:text-lg md:text-xl text-white/90 mb-8 leading-relaxed drop-shadow-lg text-balance max-w-2xl mx-auto">
            With over 40 years in the construction business, You can count on us to complete any job large or small.
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <button
              onClick={scrollToContact}
              className="bg-gold text-burgundy px-8 py-4 rounded-lg font-semibold hover:bg-gold/90 transition-all flex items-center gap-2 shadow-2xl hover:scale-105"
            >
              Get Your Free Quote
              <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href="tel:727-954-0041"
              className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all border-2 border-white shadow-xl hover:scale-105"
            >
              Call 727-954-0041
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg text-center shadow-lg">
              <div className="text-3xl font-bold text-gold mb-1">40+</div>
              <div className="text-white text-sm">Years Experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg text-center shadow-lg">
              <div className="text-3xl font-bold text-gold mb-1">100%</div>
              <div className="text-white text-sm">Licensed & Insured</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg text-center shadow-lg">
              <div className="text-3xl font-bold text-gold mb-1">500+</div>
              <div className="text-white text-sm">Projects Completed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg text-center shadow-lg">
              <div className="text-3xl font-bold text-gold mb-1">5★</div>
              <div className="text-white text-sm">Customer Rated</div>
            </div>
          </div>
        </div>
      </div>

      {/* Left Arrow */}
      <button
        onClick={previousSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 p-3 rounded-full transition-all"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 p-3 rounded-full transition-all"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-gold w-8' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
