import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import side from '../assets/Side.jpg';
import logo from '../assets/SMClogoNO.svg';


export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref, 0.1);


  const dockServices = [
    { name: 'New Dock Construction', slug: 'new-dock-design-construction' },
    { name: 'Dock & Piling Repair & Maintenance', slug: 'dock-repair-maintenance' },
    { name: 'Dock & Piling Accessories', slug: 'dock-boat-lift-accessories' },
    { name: 'Dock & Piling Inspection', slug: 'dock-boat-lift-inspections' },
  ];


  const boatLiftServices = [
    { name: 'New Boat Lift Construction', slug: 'new-boat-lift-design-installation' },
    { name: 'Boat Lift Repair & Maintenance', slug: 'boat-lift-repair-maintenance' },
    { name: 'Boat Lift Accessories', slug: 'dock-boat-lift-accessories' },
    { name: 'Boat Lift Inspection', slug: 'dock-boat-lift-inspections' }
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
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center justify-center md:gap-4 max-w-full lg:max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center md:text-left md:flex-1">
              <div className="inline-block">
                <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-montserrat font-bold text-burgundy mb-4">
                  Pinellas County's Leading
                  <span className="text-gold block"> Dock & Boat Lift Company</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-burgundy to-gold mx-auto mt-2" />
              </div>
            </div>
            
            <img 
              src={logo} 
              alt="Satriano Marine Construction Logo" 
              className="hidden md:block w-48 h-48 lg:w-56 lg:h-56 flex-shrink-0" 
            />
          </div>
        </div>


        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-2xl lg:text-3xl font-bold text-burgundy mb-4 xs:mb-6 text-center">
              Experienced in New Dock Design, Construction & Boat Lifts
            </h3>
            <p className="text-base md:text-lg text-burgundy mb-4 leading-relaxed">
              Satriano Marine Construction, a family-owned and operated business
              dedicated to providing a high-quality marine construction service. 
              We take pride in our work and are personal in our service.
            </p>


            <div className="bg-gold/20 p-8 rounded-2xl border border-gold shadow-lg mb-6">
              <h4 className="text-2xl font-lato font-bold text-burgundy mb-4">
                Our Services Include:
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-3">
                  {dockServices.map((service, index) => (
                    <div
                      key={index}
                      className={`transition-all duration-500 ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
                      }`}
                      style={{ transitionDelay: `${300 + index * 50}ms` }}
                    >
                      <div className="hidden lg:flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-burgundy flex-shrink-0 mt-0.5" />
                        <span className="text-burgundy">{service.name}</span>
                      </div>
                      <Link
                        to={`/services/${service.slug}`}
                        className="lg:hidden flex items-start gap-3 hover:text-gold transition-colors"
                      >
                        <CheckCircle2 className="w-5 h-5 text-burgundy flex-shrink-0 mt-0.5" />
                        <span className="text-burgundy hover:text-gold">{service.name}</span>
                      </Link>
                    </div>
                  ))}
                </div>


                <div className="space-y-3">
                  {boatLiftServices.map((service, index) => (
                    <div
                      key={index}
                      className={`transition-all duration-500 ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
                      }`}
                      style={{ transitionDelay: `${400 + index * 50}ms` }}
                    >
                      <div className="hidden lg:flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-burgundy flex-shrink-0 mt-0.5" />
                        <span className="text-burgundy">{service.name}</span>
                      </div>
                      <Link
                        to={`/services/${service.slug}`}
                        className="lg:hidden flex items-start gap-3 hover:text-gold transition-colors"
                      >
                        <CheckCircle2 className="w-5 h-5 text-burgundy flex-shrink-0 mt-0.5" />
                        <span className="text-burgundy hover:text-gold">{service.name}</span>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>


            <p className="text-base md:text-lg text-burgundy mb-4 leading-relaxed">
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
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
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
              <div className="bg-cream p-6 rounded-xl shadow-lg border border-gold hover:shadow-xl transition-shadow text-center">
                <div className="text-3xl font-bold text-burgundy mb-2">
                  CGC 1531210
                </div>
                <div className="text-sm text-burgundy">
                  State Certified General Contractor
                </div>
              </div>
              <div className="bg-cream p-6 rounded-xl shadow-lg border border-gold hover:shadow-xl transition-shadow text-center">
                <div className="text-3xl font-bold text-gold mb-2">
                  Family
                </div>
                <div className="text-sm text-burgundy">
                  Owned & Operated
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
