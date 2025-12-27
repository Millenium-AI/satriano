import { useState, useEffect, useRef } from 'react';import { Anchor, Wrench, Search, Sparkles, Settings,ArrowRight,  ClipboardCheck } from 'lucide-react';

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const services = [
    {
      icon: Anchor,
      title: 'New Dock Design & Construction',
      description: 'Custom dock design and construction tailored to your waterfront property. We handle everything from permits to completion.',
      color: 'from-[#800020] to-[#A0522D]'
    },
    {
      icon: Wrench,
      title: 'Dock Repair & Maintenance',
      description: 'Expert repair and maintenance services to keep your dock safe and functional. We fix damage from storms, age, and wear.',
      color: 'from-[#800020] to-[#A0522D]'
    },
    {
      icon: Sparkles,
      title: 'Dock & Boat Lift Accessories',
      description: 'Wide selection of premium accessories to enhance your dock and boat lift including bumpers, cleats, ladders, and more.',
      color: 'from-[#A0522D] to-[#FFD700]'
    },
    {
      icon: Settings,
      title: 'New Boat Lift Design & Installation',
      description: 'Professional boat lift design and installation for vessels of all sizes. Quality motors, cables, and remote controls.',
      color: 'from-[#800020] to-[#FFD700]'
    },
    {
      icon: Search,
      title: 'Boat Lift Repair & Maintenance',
      description: 'Complete boat lift service including motor replacement, cable repair, adjustments, and preventative maintenance.',
      color: 'from-[#800020] to-[#A0522D]'
    },
    {
      icon: ClipboardCheck,
      title: 'Dock & Boat Lift Inspections',
      description: 'Thorough inspections for buyers, sellers, and owners. Detailed reports on dock and boat lift integrity and safety.',
      color: 'from-[#A0522D] to-[#FFD700]'
    }
  ];

  return (
    <section id="services" ref={ref} className="py-20">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Expert Dock & Boat Lift
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#800020] to-[#A0522D]">
              Solutions
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            From design to installation to maintenance, we're your one-stop shop for all dock and boat lift needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-[#FFD700] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.description}</p>
                <button
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-[#800020] font-semibold flex items-center gap-2 group-hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
