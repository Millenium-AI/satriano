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
    <section
      id="services"
      ref={ref}
      className="section-default bg-gradient-to-b from-cream/50 to-white"
    >
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Our Services"
          subtitle="Complete Dock & Boat Lift Solutions"
        />

        <div
          className="grid sm:grid-cols-2 desktop:grid-cols-3"
          style={{ gap: 'clamp(1.5rem, 3vw, 2rem)' }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
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
                <div className="relative overflow-hidden rounded-lg mb-fluid-md">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full object-cover group-hover:scale-110 transition-transform duration-500"
                    style={{ height: 'clamp(10rem, 20vw, 12rem)' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-burgundy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Icon + Title */}
                <div
                  className="flex items-center mb-fluid-sm"
                  style={{ gap: 'clamp(0.5rem, 1vw, 0.75rem)' }}
                >
                  <div
                    className={`bg-gradient-to-br ${service.color} p-2 rounded-lg group-hover:scale-110 transition-transform`}
                  >
                    <Icon
                      className="text-cream"
                      style={{
                        width: 'clamp(1.25rem, 2vw, 1.5rem)',
                        height: 'clamp(1.25rem, 2vw, 1.5rem)',
                      }}
                    />
                  </div>
                  <h3 className="text-fluid-lg font-bold text-burgundy group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-fluid-sm text-burgundy/80 mb-fluid-md leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <div
                  className="flex items-center text-gold group-hover:text-burgundy transition-colors font-semibold text-fluid-sm"
                  style={{ gap: 'clamp(0.4rem, 0.8vw, 0.5rem)' }}
                >
                  Learn More
                  <ArrowRight
                    className="group-hover:translate-x-1 transition-transform"
                    style={{
                      width: 'clamp(1rem, 1.5vw, 1.25rem)',
                      height: 'clamp(1rem, 1.5vw, 1.25rem)',
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
