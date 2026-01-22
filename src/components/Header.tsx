import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/SMClogo.svg';

interface NavItem {
  label: string;
  action: string;
}

interface ServiceItem {
  label: string;
  slug: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'HOME', action: 'home' },
  { label: 'ABOUT', action: 'about' },
  { label: 'GALLERY', action: 'gallery' },
  { label: 'CONTACT', action: 'contact' },
  { label: 'PARTNERS', action: 'partners' },
  { label: 'REVIEWS', action: 'testimonials' },
];

const SERVICE_ITEMS: ServiceItem[] = [
  { label: 'New Dock Design & Construction', slug: 'new-dock-design-construction' },
  { label: 'Dock Repair & Maintenance', slug: 'dock-repair-maintenance' },
  { label: 'Dock & Boat Lift Accessories', slug: 'dock-boat-lift-accessories' },
  { label: 'New Boat Lift Design & Installation', slug: 'new-boat-lift-design-installation' },
  { label: 'Boat Lift Repair & Maintenance', slug: 'boat-lift-repair-maintenance' },
  { label: 'Dock & Boat Lift Inspections', slug: 'dock-boat-lift-inspections' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 50);
      setHidden(y > lastY && y > 50);
      setLastY(y);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastY]);

  const closeMenus = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    closeMenus();
  };

  const goToService = (slug: string) => {
    navigate(`/services/${slug}`);
    closeMenus();
  };

  const handleNavClick = (action: string) => {
    action === 'gallery' ? navigate('/gallery') : scrollToSection(action);
    setIsMobileMenuOpen(false);
  };

  const navBtnClass = 'text-burgundy hover:text-gold transition-colors font-medium';
  const desktopNavBtnClass = `${navBtnClass} text-sm xl:text-base`;
  const serviceItemClass = 'block w-full text-left px-4 py-2 text-sm text-burgundy hover:bg-gold/10 transition-colors';

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      } ${isScrolled ? 'shadow-lg' : 'backdrop-blur-sm'}`}
      style={{ backgroundColor: '#FEF7EB' }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 min-[1100px]:h-16">
          
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img
              src={logo}
              alt="Satriano Marine Construction"
              className="h-12 w-12 md:h-10 md:w-10 min-[1100px]:h-12 min-[1100px]:w-12"
            />
            <div className="text-2xl md:text-xl min-[1100px]:text-2xl font-bold">
              <span className="text-burgundy">Satriano Marine</span>
            </div>
            <div className="hidden md:block text-sm min-[1100px]:text-base text-burgundy border-l-2 border-gold pl-3">
              Construction
            </div>
          </div>

          <nav className="hidden min-[1100px]:flex items-center gap-6 xl:gap-8">
            {NAV_ITEMS.map(({ label, action }) => (
              <button
                key={action}
                onClick={() => handleNavClick(action)}
                className={desktopNavBtnClass}
              >
                {label}
              </button>
            ))}

            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className={`${desktopNavBtnClass} flex items-center gap-1`}>
                SERVICES
                <span className="text-xs">▼</span>
              </button>

              {isServicesOpen && (
                <div
                  className="absolute left-0 top-full w-72 xl:w-80 shadow-lg rounded-lg border border-gold py-2 text-left"
                  style={{ backgroundColor: '#FEF7EB' }}
                >
                  {SERVICE_ITEMS.map(({ label, slug }) => (
                    <button
                      key={slug}
                      onClick={() => goToService(slug)}
                      className={serviceItemClass}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <a
            href="tel:727-954-0041"
            className="hidden min-[1100px]:flex items-center gap-2 bg-burgundy text-cream px-4 py-2 xl:px-6 xl:py-2.5 rounded-lg hover:shadow-lg transition-all"
          >
            <Phone className="w-4 h-4" />
            <span className="font-semibold text-sm xl:text-base">727-954-0041</span>
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="min-[1100px]:hidden p-2 hover:bg-gold/10 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-burgundy" />
            ) : (
              <Menu className="w-6 h-6 text-burgundy" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="min-[1100px]:hidden py-4 border-t border-gold">
            <nav className="flex flex-col gap-4">
              {NAV_ITEMS.map(({ label, action }) => (
                <button
                  key={action}
                  onClick={() => handleNavClick(action)}
                  className={`${navBtnClass} text-left`}
                >
                  {label}
                </button>
              ))}

              <div className="flex flex-col gap-2">
                <button
                  onClick={() => setIsServicesOpen((prev) => !prev)}
                  className={`${navBtnClass} text-left flex justify-between items-center`}
                >
                  <span>SERVICES</span>
                  <span className="text-xs">{isServicesOpen ? '▲' : '▼'}</span>
                </button>

                {isServicesOpen && (
                  <div className="pl-4 flex flex-col gap-2">
                    {SERVICE_ITEMS.map(({ label, slug }) => (
                      <button
                        key={slug}
                        onClick={() => goToService(slug)}
                        className={`${navBtnClass} text-left text-sm`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="tel:727-954-0041"
                className="flex items-center justify-center gap-2 bg-burgundy text-cream px-6 py-3 rounded-lg hover:shadow-lg transition-all mt-2"
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
