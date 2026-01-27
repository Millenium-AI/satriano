import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import SectionHeader from './SectionHeader';
import { services } from '../data/services';

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref, 0.1);
  const navigate = useNavigate();

  return (
    <section id="services" ref={ref} className="hidden desktop:flex desktop:flex-col bg-white section-default">
      <div className="container mx-auto px-4 flex flex-col">
        {/* Section Header with Title & Subtitle */}
        <div
          className={`flex-shrink-0 transition-all duration-1000 mb-fluid-xl ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <SectionHeader 
            title="Providing Expert Dock & Boat Lift"
            highlightedText="Solutions"
            subtitle="From design to installation to maintenance; we're your one-stop shop for all dock and boat lift needs."
          />
        </div>

        {/* Service Cards Grid */}
        <div 
          className="grid md:grid-cols-2 desktop:grid-cols-3 max-w-9xl mx-auto pb-8"
          style={{ gap: 'clamp(1.5rem, 3vw, 2rem)' }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <button
                key={service.slug}
                onClick={() => navigate(`/services/${service.slug}`)}
                className={`group bg-cream rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gold hover:border-burgundy flex flex-col cursor-pointer hover:scale-105 active:scale-95 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  padding: 'clamp(1.25rem, 2vw, 1.75rem)',
                }}
              >
                {/* Image */}
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full object-cover rounded-lg mb-fluid-sm flex-shrink-0"
                  style={{ height: 'clamp(12rem, 20vw, 16rem)' }}
                />

                {/* Icon + Title Row */}
                <div 
                  className="flex items-center mb-fluid-sm flex-shrink-0"
                  style={{ gap: 'clamp(0.4rem, 0.8vw, 0.5rem)' }}
                >
                  <div
                    className={`bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}
                    style={{ 
                      width: 'clamp(2.5rem, 4vw, 3rem)',
                      height: 'clamp(2.5rem, 4vw, 3rem)'
                    }}
                  >
                    <Icon 
                      className="text-cream"
                      style={{
                        width: 'clamp(1.25rem, 2vw, 1.5rem)',
                        height: 'clamp(1.25rem, 2vw, 1.5rem)'
                      }}
                    />
                  </div>
                  <h2 className="text-fluid-base desktop:text-fluid-lg font-lato font-bold text-burgundy leading-tight flex-1 text-center">
                    {service.title}
                  </h2>
                </div>

                {/* Description - Centered */}
                <div className="flex-grow flex items-center justify-center mb-fluid-sm">
                  <p className="text-fluid-xs desktop:text-fluid-sm text-burgundy text-center max-w-[80%] mx-auto">
                    {service.description}
                  </p>
                </div>

                {/* Learn More */}
                <div 
                  className="text-burgundy text-fluid-xs desktop:text-fluid-sm font-semibold flex items-center justify-center gap-1 group-hover:gap-2 transition-all group-hover:text-gold mt-auto"
                >
                  Learn More
                  <ArrowRight 
                    style={{
                      width: 'clamp(0.75rem, 1vw, 0.875rem)',
                      height: 'clamp(0.75rem, 1vw, 0.875rem)'
                    }}
                  />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
