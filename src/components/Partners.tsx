import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import SectionHeader from './SectionHeader';

const partners = [
  {
    name: 'Decks & Docks',
    image: 'src/assets/decksndocks.svg',
    url: 'https://www.decks-docks.com/'
  },
  {
    name: 'Boatlift US',
    image: 'src/assets/boatliftus.png',
    url: 'https://boatliftuscarolinas.com/'
  },
  {
    name: 'Slide Moor',
    image: 'src/assets/slidemoor.png',
    url: 'https://slidemoor.com/'
  }
];

export default function Partners() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref, 0.1);

  return (
    <section
      id="partners"
      ref={ref}
      className="bg-cream section-default"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <SectionHeader
            title="Our Trusted"
            highlightedText="Partners"
            subtitle="We work with industry-leading suppliers to bring you the best products"
            className="mb-8"
          />
        </div>

        {/* MOBILE layout: stacked cards */}
        <div className="space-y-4 md:hidden">
          {partners.map((partner, index) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gold active:scale-95 touch-manipulation cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {/* Small icon circle */}
              <div className="w-12 h-12 rounded-lg bg-burgundy flex items-center justify-center flex-shrink-0">
                <ExternalLink className="w-6 h-6 text-cream" />
              </div>

              {/* Text content */}
              <div className="flex-1">
                <h3 className="font-semibold text-burgundy mb-1">
                  {partner.name}
                </h3>
              </div>
            </a>
          ))}
        </div>

        {/* DESKTOP layout: grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gold hover:border-burgundy flex flex-col cursor-pointer hover:scale-105 active:scale-95 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img
                src={partner.image}
                alt={partner.name}
                className="w-full h-40 max-h-40 object-contain rounded-lg mb-4 bg-cream"
              />
              <h3 className="text-xl font-bold text-burgundy mb-2 text-center">
                {partner.name}
              </h3>
              <div className="text-burgundy text-sm font-semibold flex items-center justify-center gap-1 group-hover:gap-2 transition-all group-hover:text-gold mt-4">
                Visit Site
                <ExternalLink className="w-4 h-4" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
