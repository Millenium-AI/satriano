import { ArrowRight, Anchor } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via- to-rose-900">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>

      <div className="absolute inset-0 bg-gradient-to-b -900/90"></div>

      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-rose-800/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose-700/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="flex justify-center mb-6 animate-fadeIn">
          <Anchor className="w-16 h-16 text-yellow-500" />
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-fadeIn">
          Satriano Marine Construction
        </h1>

        <p className="text-xl md:text-3xl text-yellow-400 mb-8 font-light animate-fadeIn animation-delay-200">
          Premier Dock & Boat Lift Services
        </p>

        <p className="text-lg md:text-xl text-slate-200 mb-12 max-w-3xl mx-auto animate-fadeIn animation-delay-400">
          Over 40 years of excellence serving Pinellas County with expert dock construction, boat lift installation, and marine services
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeIn animation-delay-600">
          <button
            onClick={scrollToContact}
            className="group px-8 py-4 bg-gradient-to-r from-rose-800 to-yellow-600 text-white rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold text-lg flex items-center gap-2"
          >
            <span>Get Your Free Quote</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="tel:727-954-0041"
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-full hover:bg-white/20 hover:scale-105 transition-all duration-300 font-semibold text-lg"
          >
            Call 727-954-0041
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fadeIn animation-delay-800">
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-500 mb-2">40+</div>
            <div className="text-slate-300 text-sm">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-500 mb-2">100%</div>
            <div className="text-slate-300 text-sm">Licensed & Insured</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-500 mb-2">500+</div>
            <div className="text-slate-300 text-sm">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-500 mb-2">5★</div>
            <div className="text-slate-300 text-sm">Customer Rated</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
