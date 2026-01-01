import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import SectionHeader from './SectionHeader';

const partners = [
  {
    name: 'Partner Name 1',
    description: 'Brief description of partner',
    image: '/path-to-image-1.jpg',
    url: 'https://partner1.com'
  },
  {
    name: 'Partner Name 2',
    description: 'Brief description of partner',
    image: '/path-to-image-2.jpg',
    url: 'https://partner2.com'
  },
  {
    name: 'Partner Name 3',
    description: 'Brief description of partner',
    image: '/path-to-image-3.jpg',
    url: 'https://partner3.com'
  }
];

export default function Partners() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref, 0.1);

  return (
    <section id="partners" ref={ref} className="hidden lg:flex lg:flex-col bg-cream section-default">
      <div className="container mx-auto px-4 flex flex-col h-full max-h-screen">
        <div
          className={`flex-shrink-0 transition-all duration-1000 ${
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

        <div className="grid md:grid-cols-3 gap-8 flex-1 min-h-0 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gold hover:border-burgundy flex flex-col cursor-pointer hover:scale-105 active:scale-95 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img 
                src={partner.image} 
                alt={partner.name}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              
              <h3 className="text-xl font-bold text-burgundy mb-2 text-center">
                {partner.name}
              </h3>
              
              <p className="text-sm text-burgundy text-center flex-grow">
                {partner.description}
              </p>

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
