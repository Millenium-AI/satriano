import ServicePageLayout from '../components/ServicePageLayout';
import { useState } from 'react';

import image1 from '../assets/gallery/image25.jpg';
import image2 from '../assets/gallery/image45.jpg';
import image3 from '../assets/gallery/image38.jpg';
import image4 from '../assets/gallery/image44.jpg';

export default function DockAccessories() {
  const [currentImage, setCurrentImage] = useState(0);

  const galleryImages = [image1, image2, image3, image4];

  const accessories = [
    'Dock ladders and steps.',
    'Cleats, bumpers, and fenders.',
    'Lighting systems.',
    'Kayak and PWC lifts.',
    'Dock boxes and storage solutions.',
    'Fish cleaning stations and utility add-ons.',
  ];

  const benefits = [
    'Improve access and day-to-day use.',
    'Add protection for boats and dock edges.',
    'Make your setup safer and more convenient.',
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <ServicePageLayout
      title="Dock, Piling & Boat Lift Accessories"
      description="Enhance your dock and boat lift with quality accessories designed for safety, convenience, and everyday waterfront use."
    >
      <div className="space-y-8">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gold">
              <div className="inline-flex items-center rounded-full bg-gold/10 text-burgundy px-4 py-2 text-sm font-semibold mb-4">
                Accessories and upgrades
              </div>

              <h2 className="text-3xl md:text-4xl font-lato font-bold text-burgundy mb-4 leading-tight">
                Finish your dock with the right accessories
              </h2>

              <p className="text-burgundy/85 leading-relaxed max-w-3xl mb-6">
                The right accessories make your dock easier to use, safer around the
                water, and better suited to the way you spend time on your property.
                We help source and install the details that complete the setup.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {benefits.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl bg-cream/40 border border-gold p-4"
                  >
                    <p className="text-burgundy font-semibold leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gold">
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                <div>
                  <h2 className="text-2xl font-lato font-bold text-burgundy mb-4">
                    Popular accessories
                  </h2>

                  <div className="space-y-3">
                    {accessories.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-burgundy flex-shrink-0" />
                        <p className="text-burgundy leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-lato font-bold text-burgundy mb-4">
                    Custom solutions
                  </h2>

                  <p className="text-burgundy/85 leading-relaxed mb-4">
                    Every property and boat setup is different. We help match accessories
                    to your dock layout, access needs, and the way you use your
                    waterfront.
                  </p>

                  <div className="space-y-3">
                    <div className="rounded-xl border border-gold bg-cream/30 px-4 py-4">
                      <p className="text-burgundy font-medium leading-relaxed">
                        Options selected for function, durability, and fit.
                      </p>
                    </div>
                    <div className="rounded-xl border border-gold bg-cream/30 px-4 py-4">
                      <p className="text-burgundy font-medium leading-relaxed">
                        Accessories that improve safety, protection, and convenience.
                      </p>
                    </div>
                    <div className="rounded-xl border border-gold bg-cream/30 px-4 py-4">
                      <p className="text-burgundy font-medium leading-relaxed">
                        Installation that works with your existing dock or lift system.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-full">
            <div className="lg:sticky lg:top-8 h-full flex flex-col gap-6">
              <div className="bg-white p-4 rounded-2xl shadow-lg border border-gold flex flex-col flex-[4] min-h-[520px]">
                <h2 className="text-2xl font-lato font-bold text-burgundy mb-4 px-2">
                  Project gallery
                </h2>

                <div className="relative group flex-1 min-h-0">
                  <div className="h-full overflow-hidden rounded-xl">
                    <img
                      src={galleryImages[currentImage]}
                      alt={`Dock accessories project ${currentImage + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-burgundy/85 hover:bg-burgundy text-white p-3 rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity"
                    aria-label="Previous image"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>

                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-burgundy/85 hover:bg-burgundy text-white p-3 rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity"
                    aria-label="Next image"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>

                  <div className="absolute bottom-4 right-4 bg-burgundy/85 text-white px-3 py-1 rounded-full text-sm">
                    {currentImage + 1} / {galleryImages.length}
                  </div>
                </div>

                <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                  {galleryImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImage(idx)}
                      aria-label={`View dock accessories project ${idx + 1}`}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        idx === currentImage
                          ? 'border-burgundy'
                          : 'border-gray-300 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Accessory thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-burgundy text-white rounded-2xl shadow-xl p-6 flex flex-col justify-center flex-1 min-h-[140px]">
                <h3 className="text-2xl font-lato font-bold mb-3">
                  Need the right finishing touches?
                </h3>

                <p className="text-white/85 leading-relaxed mb-4">
                  Tell us what you want to add, improve, or replace, and we will help you
                  choose accessories that fit your dock and your waterfront routine.
                </p>

                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-gold text-burgundy font-bold px-6 py-3 hover:bg-gold/90 transition-colors self-start"
                >
                  Request a Consultation
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ServicePageLayout>
  );
}