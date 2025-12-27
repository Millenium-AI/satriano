import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navigate = useNavigate();

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
      setIsServicesOpen(false);
    }
  };

  const goToService = (slug: string) => {
    navigate(`/services/${slug}`);
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="text-2xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#800020] to-[#A0522D]">
                Satriano Marine
              </span>
            </div>
            <div className="hidden md:block text-sm text-slate-600 border-l-2 border-[#FFD700] pl-3">
              Construction Excellence
            </div>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-slate-700 hover:text-[#800020] transition-colors font-medium"
            >
              HOME
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-slate-700 hover:text-[#800020] transition-colors font-medium"
            >
              ABOUT
            </button>

            {/* SERVICES DROPDOWN (DESKTOP) */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={(e) => {
                const related = e.relatedTarget as HTMLElement | null;
                if (!related || !e.currentTarget.contains(related)) {
                  setIsServicesOpen(false);
                }
              }}
            >
              <button className="text-slate-700 hover:text-[#800020] transition-colors font-medium flex items-center gap-1">
                SERVICES
                <span className="text-xs">▼</span>
              </button>

              {isServicesOpen && (
                <div className="absolute left-0 mt-2 w-80 bg-white shadow-lg rounded-lg border border-slate-200 py-2 text-left">
                  <button
                    onClick={() => goToService('new-dock-design-construction')}
                    className="block w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
                  >
                    New Dock Design & Construction
                  </button>
                  <button
                    onClick={() => goToService('dock-repair-maintenance')}
                    className="block w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
                  >
                    Dock Repair & Maintenance
                  </button>
                  <button
                    onClick={() => goToService('dock-boat-lift-accessories')}
                    className="block w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
                  >
                    Dock & Boat Lift Accessories
                  </button>
                  <button
                    onClick={() =>
                      goToService('new-boat-lift-design-installation')
                    }
                    className="block w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
                  >
                    New Boat Lift Design & Installation
                  </button>
                  <button
                    onClick={() => goToService('boat-lift-repair-maintenance')}
                    className="block w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
                  >
                    Boat Lift Repair & Maintenance
                  </button>
                  <button
                    onClick={() => goToService('dock-boat-lift-inspections')}
                    className="block w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
                  >
                    Dock & Boat Lift Inspections
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection('contact')}
              className="text-slate-700 hover:text-[#800020] transition-colors font-medium"
            >
              CONTACT
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-slate-700 hover:text-[#800020] transition-colors font-medium"
            >
              REVIEWS
            </button>
          </nav>

          <a
            href="tel:727-954-0041"
            className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-[#800020] to-[#A0522D] text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all"
          >
            <Phone className="w-4 h-4" />
            <span className="font-semibold">727-954-0041</span>
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-[#800020]" />
            ) : (
              <Menu className="w-6 h-6 text-[#800020]" />
            )}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-slate-700 hover:text-[#800020] transition-colors font-medium text-left"
              >
                HOME
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-slate-700 hover:text-[#800020] transition-colors font-medium text-left"
              >
                ABOUT
              </button>

              {/* SERVICES DROPDOWN (MOBILE) */}
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => setIsServicesOpen((prev) => !prev)}
                  className="text-slate-700 hover:text-[#800020] transition-colors font-medium text-left flex justify-between items-center"
                >
                  <span>SERVICES</span>
                  <span className="text-xs">{isServicesOpen ? '▲' : '▼'}</span>
                </button>

                {isServicesOpen && (
                  <div className="pl-4 flex flex-col gap-2">
                    <button
                      onClick={() =>
                        goToService('new-dock-design-construction')
                      }
                      className="text-slate-700 hover:text-[#800020] transition-colors font-medium text-left text-sm"
                    >
                      New Dock Design & Construction
                    </button>
                    <button
                      onClick={() => goToService('dock-repair-maintenance')}
                      className="text-slate-700 hover:text-[#800020] transition-colors font-medium text-left text-sm"
                    >
                      Dock Repair & Maintenance
                    </button>
                    <button
                      onClick={() => goToService('dock-boat-lift-accessories')}
                      className="text-slate-700 hover:text-[#800020] transition-colors font-medium text-left text-sm"
                    >
                      Dock & Boat Lift Accessories
                    </button>
                    <button
                      onClick={() =>
                        goToService('new-boat-lift-design-installation')
                      }
                      className="text-slate-700 hover:text-[#800020] transition-colors font-medium text-left text-sm"
                    >
                      New Boat Lift Design & Installation
                    </button>
                    <button
                      onClick={() =>
                        goToService('boat-lift-repair-maintenance')
                      }
                      className="text-slate-700 hover:text-[#800020] transition-colors font-medium text-left text-sm"
                    >
                      Boat Lift Repair & Maintenance
                    </button>
                    <button
                      onClick={() => goToService('dock-boat-lift-inspections')}
                      className="text-slate-700 hover:text-[#800020] transition-colors font-medium text-left text-sm"
                    >
                      Dock & Boat Lift Inspections
                    </button>
                  </div>
                )}
              </div>

              <button
                onClick={() => scrollToSection('contact')}
                className="text-slate-700 hover:text-[#800020] transition-colors font-medium text-left"
              >
                CONTACT
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-slate-700 hover:text-[#800020] transition-colors font-medium text-left"
              >
                REVIEWS
              </button>
              <a
                href="tel:727-954-0041"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#800020] to-[#A0522D] text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all mt-2"
              >
                <Phone className="w-4 h-4" />
                <span className="font-semibold">727-954-0041</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
