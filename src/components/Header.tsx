import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/SMClogo.svg';
import PhoneLink from '../components/PhoneLink';

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

// Actions that ALWAYS navigate to a dedicated route (never scroll)
const ALWAYS_ROUTE: Record<string, string> = {
  gallery: '/gallery',
  about: '/about',
  contact: '/contact',
  testimonials: '/reviews',
};

// Actions that scroll to a section on home (no dedicated page)
const SCROLL_SECTION: Record<string, string> = {
  partners: 'partners',
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 50);

      const shouldHide = y > lastY && y > 50;
      setHidden(shouldHide);

      if (shouldHide) closeMenus();

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
    // HOME — scroll to top if on home, else navigate home
    if (action === 'home') {
      if (isHome) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
      }
      setIsMobileMenuOpen(false);
      return;
    }

    // Always-route actions — go directly to their page regardless of current location
    if (ALWAYS_ROUTE[action]) {
      navigate(ALWAYS_ROUTE[action]);
      setIsMobileMenuOpen(false);
      return;
    }

    // Scroll-only actions (partners) — scroll on home, navigate home then scroll on other pages
    if (SCROLL_SECTION[action]) {
      if (isHome) {
        scrollToSection(SCROLL_SECTION[action]);
      } else {
        navigate('/');
        setTimeout(() => {
          document.getElementById(SCROLL_SECTION[action])?.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
      setIsMobileMenuOpen(false);
      return;
    }

    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      } ${isScrolled ? 'shadow-lg' : 'backdrop-blur-sm'}`}
      style={{ backgroundColor: '#FEF7EB' }}
    >
      <div className="container mx-auto px-4">
        <div
          className="flex items-center justify-between"
          style={{ height: 'clamp(4rem, 5vw + 2rem, 5rem)' }}
        >
          {/* LOGO & BRAND */}
          <div
            className="flex items-center cursor-pointer"
            style={{ gap: 'clamp(0.5rem, 1vw, 0.75rem)' }}
            onClick={() => {
              if (isHome) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else {
                navigate('/');
              }
            }}
          >
            <img
              src={logo}
              alt="Satriano Marine Construction"
              className="flex-shrink-0"
              style={{
                width: 'clamp(2.5rem, 3vw + 1.5rem, 3.5rem)',
                height: 'clamp(2.5rem, 3vw + 1.5rem, 3.5rem)'
              }}
            />
            <div
              className="font-bold text-burgundy whitespace-nowrap"
              style={{ fontSize: 'clamp(1.25rem, 2vw + 0.5rem, 1.75rem)' }}
            >
              Satriano Marine
            </div>
            <div
              className="hidden md:block text-burgundy border-l-2 border-gold"
              style={{
                paddingLeft: 'clamp(0.5rem, 1vw, 0.75rem)',
                fontSize: 'clamp(0.75rem, 1vw + 0.25rem, 1rem)'
              }}
            >
              Construction LLC
            </div>
          </div>

          {/* DESKTOP NAV */}
          <nav
            className="hidden min-[1400px]:flex items-center"
            style={{ gap: 'clamp(1rem, 2vw, 2rem)' }}
          >
            {NAV_ITEMS.map(({ label, action }) => (
              <button
                key={action}
                onClick={() => handleNavClick(action)}
                className="text-burgundy hover:text-gold transition-colors font-medium whitespace-nowrap"
                style={{ fontSize: 'clamp(0.75rem, 0.9vw, 1rem)' }}
              >
                {label}
              </button>
            ))}

            {/* SERVICES DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className="text-burgundy hover:text-gold transition-colors font-medium flex items-center whitespace-nowrap"
                style={{
                  fontSize: 'clamp(0.75rem, 0.9vw, 1rem)',
                  gap: 'clamp(0.25rem, 0.5vw, 0.5rem)'
                }}
              >
                SERVICES
                <span className="text-xs">▼</span>
              </button>

              {isServicesOpen && (
                <div
                  className="absolute left-0 top-full shadow-lg rounded-lg border border-gold py-2"
                  style={{
                    backgroundColor: '#FEF7EB',
                    width: 'clamp(18rem, 25vw, 22rem)'
                  }}
                >
                  {SERVICE_ITEMS.map(({ label, slug }) => (
                    <button
                      key={slug}
                      onClick={() => goToService(slug)}
                      className="block w-full text-left text-burgundy hover:bg-gold/10 transition-colors"
                      style={{
                        padding: 'clamp(0.5rem, 1vw, 0.75rem) clamp(0.75rem, 1.5vw, 1rem)',
                        fontSize: 'clamp(0.8rem, 0.9vw, 0.95rem)'
                      }}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* PHONE BUTTON */}
          <PhoneLink
            className="hidden min-[1400px]:flex items-center bg-burgundy text-cream rounded-lg hover:shadow-lg transition-all whitespace-nowrap"
            style={{
              gap: 'clamp(0.4rem, 0.8vw, 0.6rem)',
              padding: 'clamp(0.5rem, 1vw, 0.75rem) clamp(1rem, 2vw, 1.5rem)',
              fontSize: 'clamp(0.8rem, 0.9vw, 1rem)',
            }}
          >
            <Phone
              style={{
                width: 'clamp(0.9rem, 1.2vw, 1.1rem)',
                height: 'clamp(0.9rem, 1.2vw, 1.1rem)',
              }}
            />
            <span className="font-semibold">727-954-0041</span>
          </PhoneLink>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="min-[1400px]:hidden p-2 hover:bg-gold/10 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-burgundy" />
            ) : (
              <Menu className="w-6 h-6 text-burgundy" />
            )}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <div className="min-[1400px]:hidden py-4 border-t border-gold">
            <nav className="flex flex-col gap-4">
              {NAV_ITEMS.map(({ label, action }) => (
                <button
                  key={action}
                  onClick={() => handleNavClick(action)}
                  className="text-burgundy hover:text-gold transition-colors font-medium text-left"
                >
                  {label}
                </button>
              ))}

              <div className="flex flex-col gap-2">
                <button
                  onClick={() => setIsServicesOpen((prev) => !prev)}
                  className="text-burgundy hover:text-gold transition-colors font-medium text-left flex justify-between items-center"
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
                        className="text-burgundy hover:text-gold transition-colors font-medium text-left text-sm"
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
