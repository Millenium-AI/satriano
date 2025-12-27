import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg'
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Satriano Marine
            </h1>
            <p className="text-xs text-slate-600">Construction Excellence</p>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="text-slate-700 hover:text-cyan-600 transition-colors font-medium">
              HOME
            </button>
            <button onClick={() => scrollToSection('about')} className="text-slate-700 hover:text-cyan-600 transition-colors font-medium">
              ABOUT
            </button>
            <button onClick={() => scrollToSection('services')} className="text-slate-700 hover:text-cyan-600 transition-colors font-medium">
              SERVICES
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-slate-700 hover:text-cyan-600 transition-colors font-medium">
              CONTACT
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-slate-700 hover:text-cyan-600 transition-colors font-medium">
              REVIEWS
            </button>
          </nav>

          <a
            href="tel:727-954-0041"
            className="hidden lg:flex items-center gap-2 ml-8 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold"
          >
            <Phone className="w-4 h-4" />
            <span>727-954-0041</span>
          </a>

          <button
            className="lg:hidden text-slate-700 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-slate-200 animate-fadeIn">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('home')} className="text-slate-700 hover:text-cyan-600 transition-colors font-medium text-left">
                HOME
              </button>
              <button onClick={() => scrollToSection('about')} className="text-slate-700 hover:text-cyan-600 transition-colors font-medium text-left">
                ABOUT
              </button>
              <button onClick={() => scrollToSection('services')} className="text-slate-700 hover:text-cyan-600 transition-colors font-medium text-left">
                SERVICES
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-700 hover:text-cyan-600 transition-colors font-medium text-left">
                CONTACT
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-slate-700 hover:text-cyan-600 transition-colors font-medium text-left">
                REVIEWS
              </button>
              <a
                href="tel:727-954-0041"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full hover:shadow-lg transition-all duration-300 font-semibold"
              >
                <Phone className="w-4 h-4" />
                <span>727-954-0041</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
