import { Mail, MapPin, Phone } from 'lucide-react';

export default function TopStrip() {
  return (
    <div className="bg-burgundy text-cream py-2 text-sm">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left items-center">
        <div className="flex items-center gap-2 justify-center md:justify-start">
          <MapPin className="w-4 h-4" />
          <span>North Redington Beach, Florida</span>
        </div>

        <a href="mailto:sal@satrianomarine.com?subject=Email%20from%20Website" className="flex items-center gap-2 hover:text-gold transition-colors justify-center">
          <Mail className="w-4 h-4" />
          <span>Send Email Now</span>
        </a>

        <a href="tel:727-954-0041" className="flex items-center gap-2 hover:text-gold transition-colors font-semibold justify-center md:justify-end">
          <Phone className="w-4 h-4" />
          <span>727-954-0041</span>
        </a>
      </div>
    </div>
  );
}
