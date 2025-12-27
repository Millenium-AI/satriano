import { useState, useEffect, useRef } from 'react';
import { Anchor, Wrench, Search, Sparkles, Settings, ClipboardCheck } from 'lucide-react';

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
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Wrench,
      title: 'Dock Repair & Maintenance',
      description: 'Expert repair and maintenance services to keep your dock safe and functional. We fix damage from storms, age, and wear.',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Sparkles,
      title: 'Dock & Boat Lift Accessories',
      description: 'Wide selection of premium accessories to enhance your dock and boat lift including bumpers, cleats, ladders, and more.',
      color: 'from-cyan-600 to-teal-500'
    },
    {
      icon: Settings,
      title: 'New Boat Lift Design & Installation',
      description: 'Professional boat lift design and installation for vessels of all sizes. Quality motors, cables, and remote controls.',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      icon: Search,
      title: 'Boat Lift Repair & Maintenance',
      description: 'Complete boat lift service including motor replacement, cable repair, adjustments, and preventative maintenance.',
      color: 'from-teal-500 to-blue-500'
    },
    {
      icon: ClipboardCheck,
      title: 'Dock & Boat Lift Inspections',
      description: 'Thorough inspections for buyers, sellers, and owners. Detailed reports on dock and boat lift integrity and safety.',
      color: 'from-cyan-500 to-blue-600'
    }
  ];

  return (
    <section
      id="services"
      ref={ref}
      className="py-20 bg-slate-50"
    >
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Expert Dock & Boat Lift
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
              Solutions
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mt-6">
            From design to installation to maintenance, we're your one-stop shop for all dock and boat lift needs
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} p-4 mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                    <Icon className="w-full h-full text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-cyan-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <button
                    onClick={() => {
                      const element = document.getElementById('contact');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-cyan-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all"
                  >
                    Learn More
                    <span className="text-xl">→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
