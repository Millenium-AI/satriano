import { useState, useEffect, useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';
import side from '../assets/Side.jpg';

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
      className="py-20 bg-gradient-to-b from-cream to-cream/80"
    >
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-burgundy mb-4">
            Pinellas County&apos;s Leading
            <span className="block text-gold">
              Dock &amp; Boat Lift Company
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-burgundy to-gold mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-10'
            }`}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-burgundy mb-6">
              Experienced in New Dock Design, Construction &amp; Boat Lifts
            </h3>

            <p className="text-lg text-burgundy mb-4 leading-relaxed">
              Satriano Marine Construction, a family-owned and operated business
              dedicated to providing a high-quality marine construction service. 
              We take pride in our work and are personal in our service.
            </p>

            <div className="bg-gold/20 p-8 rounded-2xl border border-gold shadow-lg mb-6">
              <h4 className="text-xl font-bold text-burgundy mb-4">
                Our Services Include:
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-3 transition-all duration-500 ${
                      isVisible
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 -translate-x-5'
                    }`}
                    style={{ transitionDelay: `${300 + index * 50}ms` }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-burgundy flex-shrink-0 mt-0.5" />
                    <span className="text-burgundy">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-lg text-burgundy mb-4 leading-relaxed">
              We serve all of Pinellas County with expert craftsmanship and
              unmatched customer service.
            </p>

            <p className="text-lg text-burgundy mb-6 leading-relaxed">
              If you have waterfront property and are in need of dock or boat
              lift services, please contact us today to see how we can offer
              professional, quality dock and boat lift solutions that set us
              apart from our competitors!
            </p>
          </div>

          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-burgundy to-gold rounded-3xl opacity-20 blur-2xl" />
              <img
                src={side}
                alt="Dock and Boat Lift"
                className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-cream p-6 rounded-xl shadow-lg border border-gold hover:shadow-xl transition-shadow">
                <div className="text-3xl font-bold text-burgundy mb-2">
                  CGC 1531210
                </div>
                <div className="text-sm text-burgundy">
                  State Certified General Contractor
                </div>
              </div>
              <div className="bg-cream p-6 rounded-xl shadow-lg border border-gold hover:shadow-xl transition-shadow">
                <div className="text-3xl font-bold text-gold mb-2">
                  Family
                </div>
                <div className="text-sm text-burgundy">
                  Owned &amp; Operated
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
