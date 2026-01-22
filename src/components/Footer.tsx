import { Anchor, Phone, Mail, MapPin } from 'lucide-react';

interface QuickLink {
  label: string;
  action: string;
  isExternal?: boolean;
}

interface ServiceLink {
  label: string;
  slug: string;
}

const QUICK_LINKS: QuickLink[] = [
  { label: 'Home', action: 'home' },
  { label: 'About', action: 'about' },
  { label: 'Gallery', action: '/gallery', isExternal: true },
  { label: 'Services', action: 'services' },
  { label: 'Reviews', action: 'testimonials' },
  { label: 'Contact', action: 'contact' },
];

const SERVICE_LINKS: ServiceLink[] = [
  { label: 'Dock Design & Construction', slug: 'new-dock-design-construction' },
  { label: 'Dock Repair & Maintenance', slug: 'dock-repair-maintenance' },
  { label: 'Boat Lift Installation', slug: 'new-boat-lift-design-installation' },
  { label: 'Boat Lift Repair', slug: 'boat-lift-repair-maintenance' },
  { label: 'Inspections', slug: 'dock-boat-lift-inspections' },
  { label: 'Accessories', slug: 'dock-boat-lift-accessories' },
];

export default function Footer() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleQuickLinkClick = (link: QuickLink) => {
    if (link.isExternal) {
      window.location.href = link.action;
    } else {
      scrollToSection(link.action);
    }
  };

  return (
    <footer className="bg-burgundy text-cream">
      <div className="container mx-auto px-4" style={{ padding: 'clamp(3rem, 5vw, 4rem) 1rem' }}>
        <div 
          className="grid md:grid-cols-2 desktop:grid-cols-4 mb-12"
          style={{ gap: 'clamp(2rem, 4vw, 3rem)' }}
        >
          {/* Brand + Contact */}
          <div>
            <div 
              className="flex items-center mb-4"
              style={{ gap: 'clamp(0.5rem, 1vw, 0.75rem)' }}
            >
              <Anchor style={{ width: 'clamp(1.75rem, 2.5vw, 2rem)', height: 'clamp(1.75rem, 2.5vw, 2rem)' }} className="text-cream flex-shrink-0" />
              <div>
                <h3 className="text-fluid-xl font-bold">Satriano Marine</h3>
                <p className="text-fluid-sm text-cream/60">Construction</p>
              </div>
            </div>
            <p className="text-cream/80 leading-relaxed text-fluid-sm" style={{ marginBottom: 'clamp(1rem, 2vw, 1.5rem)' }}>
              Proudly serving Pinellas County with the best in dock construction,
              repair, boat lift installation, and maintenance.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(0.5rem, 1vw, 0.75rem)' }}>
              <div className="flex items-center text-fluid-sm" style={{ gap: 'clamp(0.4rem, 0.8vw, 0.6rem)' }}>
                <MapPin style={{ width: 'clamp(0.9rem, 1.2vw, 1rem)', height: 'clamp(0.9rem, 1.2vw, 1rem)' }} className="text-cream flex-shrink-0" />
                <span className="text-cream/80">North Redington Beach, FL</span>
              </div>
              <div className="flex items-center text-fluid-sm" style={{ gap: 'clamp(0.4rem, 0.8vw, 0.6rem)' }}>
                <Phone style={{ width: 'clamp(0.9rem, 1.2vw, 1rem)', height: 'clamp(0.9rem, 1.2vw, 1rem)' }} className="text-cream flex-shrink-0" />
                <a
                  href="tel:727-954-0041"
                  className="text-cream/80 hover:text-cream transition-colors"
                >
                  727-954-0041
                </a>
              </div>
              <div className="flex items-center text-fluid-sm" style={{ gap: 'clamp(0.4rem, 0.8vw, 0.6rem)' }}>
                <Mail style={{ width: 'clamp(0.9rem, 1.2vw, 1rem)', height: 'clamp(0.9rem, 1.2vw, 1rem)' }} className="text-cream flex-shrink-0" />
                <a
                  href="mailto:sal@satrianomarine.com"
                  className="text-cream/80 hover:text-cream transition-colors"
                >
                  sal@satrianomarine.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-fluid-lg font-bold mb-4 text-cream">Quick Links</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(0.4rem, 0.8vw, 0.6rem)' }}>
              {QUICK_LINKS.map((link) => (
                <li key={link.action}>
                  <button
                    onClick={() => handleQuickLinkClick(link)}
                    className="text-cream/80 hover:text-cream transition-colors text-left text-fluid-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-fluid-lg font-bold mb-4 text-cream">Our Services</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(0.4rem, 0.8vw, 0.6rem)' }}>
              {SERVICE_LINKS.map(({ label, slug }) => (
                <li key={slug}>
                  <a
                    href={`/services/${slug}`}
                    className="text-cream/80 hover:text-cream transition-colors text-fluid-sm"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Area / License */}
          <div>
            <h4 className="text-fluid-lg font-bold mb-4 text-cream">Service Area</h4>
            <p 
              className="text-cream/80 text-fluid-sm leading-relaxed"
              style={{ marginBottom: 'clamp(0.75rem, 1.5vw, 1rem)' }}
            >
              Serving all of Pinellas County including St. Petersburg, Treasure
              Island, Clearwater, Madeira Beach, Indian Shores, and surrounding
              areas.
            </p>
            <div 
              className="bg-cream/10 backdrop-blur-sm rounded-lg border border-cream/20"
              style={{ padding: 'clamp(0.75rem, 1.5vw, 1rem)' }}
            >
              <p className="text-fluid-sm font-semibold mb-2 text-cream">State Certified</p>
              <p className="text-fluid-xs text-cream/80">General Contractor</p>
              <p className="text-cream font-bold mt-1 text-fluid-sm">CGC 1531210</p>
            </div>
          </div>
        </div>

        <div 
          className="border-t border-cream/10"
          style={{ paddingTop: 'clamp(1.5rem, 3vw, 2rem)' }}
        >
          <div 
            className="flex flex-col md:flex-row justify-between items-center"
            style={{ gap: 'clamp(0.75rem, 1.5vw, 1rem)' }}
          >
            <p className="text-cream/60 text-fluid-sm text-center md:text-left">
              © {new Date().getFullYear()} Satriano Marine Construction, LLC.
              All Rights Reserved.
            </p>
            <div 
              className="flex text-fluid-sm text-cream/60"
              style={{ gap: 'clamp(1rem, 2vw, 1.5rem)' }}
            >
              <a href="/privacy" className="hover:text-cream transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-cream transition-colors">
                Terms &amp; Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
