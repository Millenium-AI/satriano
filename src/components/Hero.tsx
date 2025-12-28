import { ArrowRight, Anchor } from 'lucide-react';
import logo from '../assets/SMClogo.svg';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream">
      <div className="absolute inset-0 bg-gradient-to-br from-burgundy/5 via-transparent to-gold/10"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <div className="flex-shrink-0">
              <img src={logo} alt="Satriano Marine Construction Logo" className="h-48 w-48 md:h-64 md:w-64" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-burgundy text-cream px-6 py-2 rounded-full mb-6 animate-fade-in">
                <Anchor className="w-4 h-4" />
                <span className="text-sm font-semibold">Florida's Premier Marine Construction</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-burgundy mb-6 animate-slide-up">
                Satriano Marine Construction
              </h1>
            </div>
          </div>

          <div className="text-center">

            <p className="text-2xl md:text-3xl text-gold font-bold mb-6 animate-slide-up animation-delay-100">
              Premier Dock & Boat Lift Solutions
            </p>

            <p className="text-lg md:text-xl text-burgundy mb-12 max-w-3xl mx-auto animate-slide-up animation-delay-200">
            With over 40 years in the construction business;
            <br />
            you can count on us to complete any job large or small.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-slide-up animation-delay-300">
              <button onClick={scrollToContact} className="group bg-burgundy text-cream px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-2xl transition-all flex items-center gap-2">
                Get Your Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a href="tel:727-954-0041" className="bg-gold text-burgundy px-8 py-4 rounded-lg text-lg font-semibold border-2 border-gold hover:bg-burgundy hover:text-cream transition-all">
                Call 727-954-0041
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in animation-delay-400">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gold mb-2">40+</div>
                <div className="text-burgundy font-medium">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gold mb-2">100%</div>
                <div className="text-burgundy font-medium">Licensed & Insured</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gold mb-2">500+</div>
                <div className="text-burgundy font-medium">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gold mb-2">5★</div>
                <div className="text-burgundy font-medium">Customer Rated</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
