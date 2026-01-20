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
    <section id="services" ref={ref} className="hidden lg:flex lg:flex-col bg-white section-default">
      <div className="container mx-auto px-4 flex flex-col">
        <div
          className={`flex-shrink-0 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <SectionHeader 
            title="Providing Expert Dock & Boat Lift"
            highlightedText="Solutions"
            subtitle="From design to installation to maintenance; we're your one-stop shop for all dock and boat lift needs."
            className="mb-8"
          />
        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-9xl mx-auto pb-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <button
                key={service.slug}
                onClick={() => navigate(`/services/${service.slug}`)}
                className={`group bg-cream p-7 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gold hover:border-burgundy flex flex-col cursor-pointer hover:scale-105 active:scale-95 max-h-fit ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Image - Now at the top */}
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-64 object-cover rounded-lg mb-3 flex-shrink-0"
                />

                {/* Icon + Title Row */}
                <div className="flex items-center gap-2 mb-2 flex-shrink-0">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-6 h-6 text-cream" />
                  </div>
                  <h2 className="text-base xl:text-xl font-lato font-bold text-burgundy leading-tight flex-1 text-center">
                    {service.title}
                  </h2>
                </div>

                {/* Description - Centered */}
                <div className="flex-grow flex items-center justify-center mb-2">
                  <p className="text-xs xl:text-sm text-burgundy text-center">
                    {service.description}
                  </p>
                </div>


                {/* Learn More */}
                <div className="text-burgundy text-xs xl:text-sm font-semibold flex items-center justify-center gap-1 group-hover:gap-2 transition-all group-hover:text-gold mt-auto">
                  Learn More
                  <ArrowRight className="w-3 h-3" />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
