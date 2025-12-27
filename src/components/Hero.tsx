import { ArrowRight, Anchor } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#800020]/10 via-transparent to-[#FFD700]/10"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#800020] to-[#A0522D] text-white px-6 py-2 rounded-full mb-8 animate-fade-in">
            <Anchor className="w-4 h-4" />
            <span className="text-sm font-semibold">Florida's Premier Marine Construction</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 animate-slide-up">
            Satriano Marine Construction
          </h1>

          <p className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#800020] to-[#A0522D] font-bold mb-6 animate-slide-up animation-delay-100">
            Premier Dock & Boat Lift Solutions
          </p>

          <p className="text-lg md:text-xl text-slate-700 mb-12 max-w-3xl mx-auto animate-slide-up animation-delay-200">
          With over 40 years in the construction business you can count on us to complete any job large or small.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-slide-up animation-delay-300">
            <button onClick={scrollToContact} className="group bg-gradient-to-r from-[#800020] to-[#A0522D] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-2xl transition-all flex items-center gap-2">
              Get Your Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a href="tel:727-954-0041" className="bg-white text-[#800020] px-8 py-4 rounded-lg text-lg font-semibold border-2 border-[#800020] hover:bg-[#800020] hover:text-white transition-all">
              Call 727-954-0041
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in animation-delay-400">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#800020] to-[#A0522D] mb-2">40+</div>
              <div className="text-slate-600 font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#800020] to-[#A0522D] mb-2">100%</div>
              <div className="text-slate-600 font-medium">Licensed & Insured</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#800020] to-[#A0522D] mb-2">500+</div>
              <div className="text-slate-600 font-medium">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#800020] to-[#A0522D] mb-2">5★</div>
              <div className="text-slate-600 font-medium">Customer Rated</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
