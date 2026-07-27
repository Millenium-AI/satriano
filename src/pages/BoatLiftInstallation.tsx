import { useMemo, useState } from 'react';
import ServicePageLayout from '../components/ServicePageLayout';
import liftImageOne from '../assets/new-lift1.jpg';
import liftImageTwo from '../assets/new-lift2.jpg';
import liftImageThree from '../assets/newlift-3.jpg';

const galleryImages = [
  {
    src: liftImageOne,
    alt: 'Aluminum boat lift structure installed over the water',
  },
  {
    src: liftImageTwo,
    alt: 'Residential dock with a boat lift installation at the end of the walkway',
  },
  {
    src: liftImageThree,
    alt: 'Newly installed boat lift with guide posts and bunks',
  },
];

export default function BoatLiftInstallation() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeImage = useMemo(() => galleryImages[activeIndex], [activeIndex]);

  const showPrevious = () => {
    setActiveIndex((current) => (current === 0 ? galleryImages.length - 1 : current - 1));
  };

  const showNext = () => {
    setActiveIndex((current) => (current === galleryImages.length - 1 ? 0 : current + 1));
  };

  return (
    <ServicePageLayout
      title="Boat Lift Design & Installation"
      description="Custom boat lift planning and installation for waterfront properties, with a focus on properly designed 4-post and 6-post systems for everyday boat use."
    >
      <section className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr] mb-8">
        <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-lg border border-gold">
          <div className="relative overflow-hidden rounded-xl bg-stone-100">
            <div className="aspect-[4/3] w-full">
              <img
                src={activeImage.src}
                alt={activeImage.alt}
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>

            <button
              type="button"
              onClick={showPrevious}
              aria-label="Show previous boat lift photo"
              className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-burgundy shadow-md transition hover:bg-white"
            >
              ‹
            </button>

            <button
              type="button"
              onClick={showNext}
              aria-label="Show next boat lift photo"
              className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-burgundy shadow-md transition hover:bg-white"
            >
              ›
            </button>

            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-burgundy/75 px-3 py-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show boat lift photo ${index + 1}`}
                  aria-pressed={index === activeIndex}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    index === activeIndex ? 'bg-white' : 'bg-white/45'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-8 content-start">
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gold">
            <span className="inline-flex items-center rounded-full bg-gold/10 px-4 py-2 text-sm font-semibold text-burgundy mb-4">
              Purpose-built for real boats and real dock use
            </span>
            <h2 className="text-xl sm:text-2xl font-lato font-bold text-burgundy mb-4 leading-snug">
              The right boat lift should protect the vessel, fit the dock, and feel effortless to use
            </h2>
            <div className="space-y-4 text-burgundy leading-relaxed">
              <p>
                A well-designed boat lift helps protect the hull, reduces long-term exposure to the water, and makes cleaning,
                maintenance, and day-to-day use of the boat much easier.
              </p>
              <p>
                Just as important, the system should feel like a natural extension of the dock rather than something forced into the space.
                That is why layout, boarding access, lift placement, and overall usability matter from the start.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gold">
            <h2 className="text-xl sm:text-2xl font-lato font-bold text-burgundy mb-4 leading-snug">
              How We Plan the Installation
            </h2>
            <ul className="space-y-4 text-burgundy leading-relaxed">
              <li><strong>Review the boat and the site:</strong> We look at vessel dimensions, operating weight, water depth, dock layout, and how the boat approaches the lift.</li>
              <li><strong>Determine the right structure:</strong> Most projects are centered around properly sized 4-post or 6-post boat lifts based on the load and overall dock conditions.</li>
              <li><strong>Coordinate the final setup:</strong> We account for clearances, access, and installation details so the finished lift feels clean, reliable, and easy to use.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-2">
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gold">
          <h2 className="text-xl sm:text-2xl font-lato font-bold text-burgundy mb-4 leading-snug">
            4-Post and 6-Post Boat Lifts
          </h2>
          <div className="space-y-4 text-burgundy leading-relaxed">
            <p>
              Our work is focused on boat lifts for vessels, especially 4-post and 6-post systems commonly used at residential waterfront properties.
              The right choice depends on the size and weight of the boat, the footprint available at the dock, and the support the installation requires.
            </p>
            <p>
              Homeowners often want to know whether a 4-post lift is enough or whether a 6-post configuration makes more sense.
              In most cases, that comes down to capacity, load distribution, vessel dimensions, and how the lift integrates with the overall dock design.
            </p>
          </div>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gold">
          <h2 className="text-xl sm:text-2xl font-lato font-bold text-burgundy mb-4 leading-snug">
            Why the Layout Matters
          </h2>
          <div className="space-y-4 text-burgundy leading-relaxed">
            <p>
              A lift should not feel oversized, cramped, or awkwardly positioned within the dock. The best installations feel balanced,
              easy to approach by boat, and convenient to board from when the lift is raised.
            </p>
            <p>
              That is why we pay attention not only to lift capacity, but also to spacing, walkway access, and how the final setup fits the overall waterfront design.
            </p>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
}