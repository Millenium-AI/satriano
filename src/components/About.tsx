import { useRef } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import side from "../assets/Side.jpg";
import logo from "../assets/SMClogoNO.png";

interface Service {
  name: string;
  slug: string;
}

const DOCK_SERVICES: Service[] = [
  { name: "New Dock Construction", slug: "new-dock-design-construction" },
  { name: "Dock & Piling Repair & Maintenance", slug: "dock-repair-maintenance" },
  { name: "Dock & Piling Accessories", slug: "dock-boat-lift-accessories" },
  { name: "Dock & Piling Inspection", slug: "dock-boat-lift-inspections" },
];

const BOAT_LIFT_SERVICES: Service[] = [
  { name: "New Boat Lift Construction", slug: "new-boat-lift-design-installation" },
  { name: "Boat Lift Repair & Maintenance", slug: "boat-lift-repair-maintenance" },
  { name: "Boat Lift Accessories", slug: "dock-boat-lift-accessories" },
  { name: "Boat Lift Inspection", slug: "dock-boat-lift-inspections" },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref, 0.1);

  const renderService = (service: Service, index: number, baseDelay: number) => {
    const delay = `${baseDelay + index * 50}ms`;
    const serviceContent = (
      <>
        <CheckCircle2 className="w-5 h-5 text-burgundy flex-shrink-0 mt-0.5" />
        <span className="text-burgundy desktop:group-hover:text-gold transition-colors">
          {service.name}
        </span>
      </>
    );

    return (
      <div
        key={service.slug}
        className={`transition-all duration-500 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
        }`}
        style={{ transitionDelay: delay }}
      >
        {/* Desktop - non-clickable */}
        <div className="hidden desktop:flex items-start gap-fluid-sm group">
          {serviceContent}
        </div>

        {/* Mobile/Tablet - clickable links */}
        <Link
          to={`/services/${service.slug}`}
          className="desktop:hidden flex items-start gap-fluid-sm hover:text-gold transition-colors group"
        >
          {serviceContent}
        </Link>
      </div>
    );
  };

  return (
    <section
      id="about"
      ref={ref}
      className="section-default bg-gradient-to-b from-cream to-cream/80"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          className={`text-center mb-fluid-2xl transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div 
            className="flex items-center justify-center max-w-7xl mx-auto"
            style={{ gap: 'clamp(1rem, 2vw, 1.5rem)', padding: '0 clamp(1rem, 2vw, 2rem)' }}
          >
            <div className="text-center md:text-left flex-1">
              <h1 className="text-fluid-3xl md:text-fluid-4xl desktop:text-fluid-5xl font-montserrat font-bold text-burgundy mb-fluid-md">
                Pinellas County's Leading
                <span className="text-gold block"> Dock & Boat Lift Company</span>
              </h1>
              <div 
                className="h-1 bg-gradient-to-r from-burgundy to-gold mx-auto mt-2"
                style={{ width: 'clamp(4rem, 10vw, 6rem)' }}
              />
            </div>

            <img
              src={logo}
              alt="Satriano Marine Construction Logo"
              className="hidden md:block h-auto object-contain flex-shrink-0"
              style={{ width: 'clamp(10rem, 15vw, 14rem)' }}
            />
          </div>
        </div>

        {/* Main Grid */}
        <div 
          className="grid desktop:grid-cols-2 items-center"
          style={{ gap: 'clamp(2rem, 4vw, 3rem)' }}
        >
          {/* Left Column - Content */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h2 className="text-fluid-xl md:text-fluid-2xl desktop:text-fluid-3xl font-bold text-burgundy mb-fluid-lg text-center">
              Experienced in New Dock Design, Construction & Boat Lift Installation
            </h2>

            <p className="text-fluid-base md:text-fluid-lg text-burgundy mb-fluid-md leading-relaxed">
              Satriano Marine Construction is a family-owned and operated business 
              dedicated to providing high-quality marine construction services. 
              We take pride in our work and in our personnel.
            </p>

            {/* Services Box */}
            <div 
              className="bg-gold/20 rounded-2xl border border-gold shadow-lg mb-fluid-lg"
              style={{ padding: 'clamp(1.5rem, 3vw, 2rem)' }}
            >
              <h2 className="text-fluid-xl desktop:text-fluid-2xl font-lato font-bold text-burgundy mb-fluid-md">
                Our Services Include:
              </h2>

              <div 
                className="grid grid-cols-1 sm:grid-cols-2"
                style={{ gap: 'clamp(0.75rem, 1.5vw, 1rem)' }}
              >
                {/* Dock Services Column */}
                <div 
                  className="flex flex-col"
                  style={{ gap: 'clamp(0.75rem, 1.5vw, 1rem)' }}
                >
                  {DOCK_SERVICES.map((service, index) => 
                    renderService(service, index, 300)
                  )}
                </div>

                {/* Boat Lift Services Column */}
                <div 
                  className="flex flex-col"
                  style={{ gap: 'clamp(0.75rem, 1.5vw, 1rem)' }}
                >
                  {BOAT_LIFT_SERVICES.map((service, index) => 
                    renderService(service, index, 400)
                  )}
                </div>
              </div>
            </div>

            <p className="text-fluid-base md:text-fluid-lg text-burgundy mb-fluid-md leading-relaxed">
              If you have waterfront property and are in need of dock or boat
              lift services, please contact us today to see how we can offer
              professional, quality dock and boat lift solutions that set us
              apart from our competitors!
            </p>

            <p className="text-fluid-lg text-burgundy mb-fluid-lg leading-relaxed">
              We serve all of Pinellas County with expert craftsmanship and
              unmatched customer service.
            </p>
          </div>

          {/* Right Column - Image & Stats */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-burgundy to-gold rounded-3xl opacity-20 blur-2xl" />
              <img
                src={side}
                alt="Dock and Boat Lift"
                className="relative rounded-2xl shadow-2xl w-full object-cover"
                style={{ height: 'clamp(20rem, 40vw, 31.25rem)' }}
              />
            </div>

            {/* Stats Cards */}
            <div 
              className="mt-fluid-xl grid grid-cols-2"
              style={{ gap: 'clamp(0.75rem, 1.5vw, 1rem)' }}
            >
              <div 
                className="bg-cream rounded-xl shadow-lg border border-gold hover:shadow-xl transition-shadow text-center"
                style={{ padding: 'clamp(1rem, 2vw, 1.5rem)' }}
              >
                <div className="text-fluid-2xl desktop:text-fluid-3xl font-bold text-burgundy mb-2">
                  CGC 1531210
                </div>
                <div className="text-fluid-xs desktop:text-fluid-sm text-burgundy">
                  State Certified General Contractor
                </div>
              </div>

              <div 
                className="bg-cream rounded-xl shadow-lg border border-gold hover:shadow-xl transition-shadow text-center"
                style={{ padding: 'clamp(1rem, 2vw, 1.5rem)' }}
              >
                <div className="text-fluid-2xl desktop:text-fluid-3xl font-bold text-gold mb-2">
                  Family
                </div>
                <div className="text-fluid-xs desktop:text-fluid-sm text-burgundy">
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
