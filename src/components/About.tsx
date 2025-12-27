import { useState, useEffect, useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
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
    'New Dock Construction',
    'Dock & Piling Repair',
    'Dock & Piling Maintenance',
    'Dock & Piling Inspection',
    'New Boat Lift Construction',
    'Boat Lift Repair',
    'Boat Lift Maintenance',
    'Boat Lift Inspection'
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 bg-gradient-to-b from-white to-amber-50"
    >
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Pinellas County's Leading
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#800020] to-[#A0522D]">
              Dock & Boat Lift Company
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#800020] to-[#FFD700] mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              Experienced in New Dock Design, Construction & Boat Lifts
            </h3>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              Satriano Marine Construction is a family-owned and operated business dedicated to providing
              high-quality marine construction service. We take pride in our work and are personal in our service.
            </p>
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              With over 40 years in the construction business, you can count on us to complete any job large or small.
              We serve all of Pinellas County with expert craftsmanship and unmatched customer service.
            </p>

            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-2xl border border-[#FFD700] shadow-lg">
              <h4 className="text-xl font-bold text-slate-900 mb-4">Our Services Include:</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-3 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`}
                    style={{ transitionDelay: `${300 + index * 50}ms` }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#800020] flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#800020] to-[#FFD700] rounded-3xl opacity-20 blur-2xl"></div>
              <img
                src="https://images.pexels.com/photos/1350592/pexels-photo-1350592.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Dock and Boat Lift"
                className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
                <div className="text-3xl font-bold text-[#800020] mb-2">CGC 1531210</div>
                <div className="text-sm text-slate-600">State Certified General Contractor</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
                <div className="text-3xl font-bold text-[#FFD700] mb-2">Family</div>
                <div className="text-sm text-slate-600">Owned & Operated</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
