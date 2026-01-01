import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Anchor,
  Wrench,
  Search,
  Sparkles,
  Settings,
  ArrowRight,
  ClipboardCheck,
} from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';



export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref, 0.1);
  const navigate = useNavigate();



  const services = [
    {
      icon: Anchor,
      title: 'New Dock Design & Construction',
      description:
        'Custom dock design and construction tailored to your waterfront property. We handle everything from permits to completion.',
      color: 'from-burgundy to-burgundy',
      slug: 'new-dock-design-construction',
    },
    {
      icon: Wrench,
      title: 'Dock Repair & Maintenance',
      description:
        'Expert repair and maintenance services to keep your dock safe and functional. We fix damage from storms, age, and wear.',
      color: 'from-burgundy to-burgundy',
      slug: 'dock-repair-maintenance',
    },
    {
      icon: Sparkles,
      title: 'Dock & Boat Lift Accessories',
      description:
        'Wide selection of premium accessories to enhance your dock and boat lift including bumpers, cleats, ladders, and more.',
      color: 'from-gold to-gold',
      slug: 'dock-boat-lift-accessories',
    },
    {
      icon: Settings,
      title: 'New Boat Lift Design & Installation',
      description:
        'Professional boat lift design and installation for vessels of all sizes. Quality motors, cables, and remote controls.',
      color: 'from-burgundy to-gold',
      slug: 'new-boat-lift-design-installation',
    },
    {
      icon: Search,
      title: 'Boat Lift Repair & Maintenance',
      description:
        'Complete boat lift service including motor replacement, cable repair, adjustments, and preventative maintenance.',
      color: 'from-burgundy to-burgundy',
      slug: 'boat-lift-repair-maintenance',
    },
    {
      icon: ClipboardCheck,
      title: 'Dock & Boat Lift Inspections',
      description:
        'Thorough inspections for buyers, sellers, and owners. Detailed reports on dock and boat lift integrity and safety.',
      color: 'from-gold to-gold',
      slug: 'dock-boat-lift-inspections',
    },
  ];



  return (
    <section id="services" ref={ref} className="hidden lg:flex lg:flex-col lg:h-screen bg-cream py-8">
      <div className="container mx-auto px-4 flex flex-col h-full max-h-screen">
        <div
          className={`text-center mb-8 flex-shrink-0 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-4xl xl:text-5xl font-montserrat font-bold text-burgundy mb-3 leading-tight">
            Providing <span className="text-gold">Expert</span> Dock & Boat Lift{' '}
            <span className="text-gold">Solutions</span>
          </h1>
          <h2 className="text-xl xl:text-2xl font-lato text-burgundy max-w-3xl mx-auto mt-3">
            From design to installation to maintenance;
            <br />
            we're your one-stop shop for all dock and boat lift needs.
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-burgundy to-gold mx-auto mt-4"></div>
        </div>



        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 flex-1 min-h-0 max-w-5xl mx-auto">          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.slug}
                className={`group bg-white p-3 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gold hover:border-burgundy flex flex-col max-h-64 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0`}
                  >
                    <Icon className="w-6 h-6 text-cream" />
                  </div>
                  <h2 className="text-sm xl:text-base font-lato font-bold text-burgundy leading-tight flex-1 text-center">
                    {service.title}
                  </h2>
                </div>
                <p className="text-xs xl:text-sm text-burgundy mb-2 flex-grow">{service.description}</p>
                <button
                  onClick={() => navigate(`/services/${service.slug}`)}
                  className="text-burgundy text-xs xl:text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all hover:text-gold mt-auto"
                >
                  Learn More
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
