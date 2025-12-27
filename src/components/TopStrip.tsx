import { Mail, MapPin, Phone } from 'lucide-react';

export default function TopStrip() {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-2 text-sm">
      <div className="container mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span>North Redington Beach, Florida</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4" />
          <a
            href="mailto:sal@satrianomarine.com?subject=Email%20from%20Website"
            className="hover:text-cyan-400 transition-colors"
          >
            Send Email Now
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4" />
          <a
            href="tel:727-954-0041"
            className="hover:text-cyan-400 transition-colors font-semibold"
          >
            727-954-0041
          </a>
        </div>
      </div>
    </div>
  );
}
