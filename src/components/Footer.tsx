import { Anchor, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-[#800020] via-[#5a0016] to-[#800020] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand + contact */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Anchor className="w-8 h-8 text-white" />
              <div>
                <h3 className="text-xl font-bold">Satriano Marine</h3>
                <p className="text-sm text-slate-300">Construction</p>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed mb-6">
              Proudly serving Pinellas County with the best in dock construction,
              repair, boat lift installation, and maintenance.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-white flex-shrink-0" />
                <span className="text-slate-300">
                  North Redington Beach, FL
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-white flex-shrink-0" />
                <a
                  href="tel:727-954-0041"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  727-954-0041
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-white flex-shrink-0" />
                <a
                  href="mailto:sal@satrianomarine.com"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  sal@satrianomarine.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick links -> components/sections on Home */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Reviews
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Our Services -> routed pages */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Our Services</h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a
                  href="/services/new-dock-design-construction"
                  className="hover:text-white transition-colors"
                >
                  Dock Design & Construction
                </a>
              </li>
              <li>
                <a
                  href="/services/dock-repair-maintenance"
                  className="hover:text-white transition-colors"
                >
                  Dock Repair & Maintenance
                </a>
              </li>
              <li>
                <a
                  href="/services/new-boat-lift-design-installation"
                  className="hover:text-white transition-colors"
                >
                  Boat Lift Installation
                </a>
              </li>
              <li>
                <a
                  href="/services/boat-lift-repair-maintenance"
                  className="hover:text-white transition-colors"
                >
                  Boat Lift Repair
                </a>
              </li>
              <li>
                <a
                  href="/services/dock-boat-lift-inspections"
                  className="hover:text-white transition-colors"
                >
                  Inspections
                </a>
              </li>
              <li>
                <a
                  href="/services/dock-boat-lift-accessories"
                  className="hover:text-white transition-colors"
                >
                  Accessories
                </a>
              </li>
            </ul>
          </div>

          {/* Service area / license */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Service Area</h4>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Serving all of Pinellas County including St. Petersburg, Treasure
              Island, Clearwater, Madeira Beach, Indian Shores, and surrounding
              areas.
            </p>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
              <p className="text-sm font-semibold mb-2">State Certified</p>
              <p className="text-xs text-slate-300">General Contractor</p>
              <p className="text-white font-bold mt-1">CGC 1531210</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Satriano Marine Construction, LLC.
              All Rights Reserved.
            </p>
            <div className="flex gap-6 text-sm text-slate-400">
              <a href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-white transition-colors">
                Terms &amp; Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
