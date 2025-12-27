import { Anchor, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Anchor className="w-8 h-8 text-cyan-400" />
              <div>
                <h3 className="text-xl font-bold">Satriano Marine</h3>
                <p className="text-sm text-slate-300">Construction</p>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed mb-6">
              Proudly serving Pinellas County with the best in dock construction, repair, boat lift installation, and maintenance.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span className="text-slate-300">North Redington Beach, FL</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <a href="tel:727-954-0041" className="text-slate-300 hover:text-cyan-400 transition-colors">
                  727-954-0041
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <a href="mailto:sal@satrianomarine.com" className="text-slate-300 hover:text-cyan-400 transition-colors">
                  sal@satrianomarine.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-cyan-400">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('home')} className="text-slate-300 hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-slate-300 hover:text-white transition-colors">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-slate-300 hover:text-white transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-slate-300 hover:text-white transition-colors">
                  Contact
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('testimonials')} className="text-slate-300 hover:text-white transition-colors">
                  Reviews
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-cyan-400">Our Services</h4>
            <ul className="space-y-2 text-slate-300">
              <li>Dock Design & Construction</li>
              <li>Dock Repair & Maintenance</li>
              <li>Boat Lift Installation</li>
              <li>Boat Lift Repair</li>
              <li>Inspections</li>
              <li>Accessories</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-cyan-400">Service Area</h4>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Serving all of Pinellas County including St. Petersburg, Treasure Island, Clearwater, Madeira Beach, Indian Shores, and surrounding areas.
            </p>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
              <p className="text-sm font-semibold mb-2">State Certified</p>
              <p className="text-xs text-slate-300">General Contractor</p>
              <p className="text-cyan-400 font-bold mt-1">CGC 1531210</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Satriano Marine Construction, LLC. All Rights Reserved.
            </p>
            <div className="flex gap-6 text-sm text-slate-400">
              <button className="hover:text-white transition-colors">Privacy Policy</button>
              <button className="hover:text-white transition-colors">Terms & Conditions</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
