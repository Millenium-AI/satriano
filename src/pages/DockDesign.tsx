import ServicePageLayout from '../components/ServicePageLayout';
import { useState } from 'react';

import image1 from '../assets/gallery/image30.jpg';
import image2 from '../assets/gallery/image20.jpg';
import image3 from '../assets/gallery/image22.jpg';
import image4 from '../assets/gallery/image39.jpg';
import image5 from '../assets/gallery/image23.jpg';

export default function DockDesign() {
  const [currentImage, setCurrentImage] = useState(0);

  const galleryImages = [image1, image2, image3, image4, image5];

  const highlights = [
    'Custom layouts for your shoreline.',
    'Permit-ready planning.',
    'Built for long-term waterfront use.',
  ];

  const features = [
    'Fixed and floating dock options.',
    'Boat lift and access planning.',
    'Composite, wood, and aluminum options.',
    'Layouts for boating, fishing, and entertaining.',
  ];

  const process = [
    'Site visit and planning.',
    'Custom design and layout.',
    'Permitting and coordination.',
    'Professional installation.',
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <ServicePageLayout
      title="New Dock Design & Construction"
      description="Custom dock design and construction based on your property, your shoreline, and the way you use the water."
    >
      <div className="space-y-8">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gold">
              <h2 className="text-3xl font-lato font-bold text-burgundy mb-4">
                Custom docks designed for your property.
              </h2>

              <p className="text-burgundy/85 leading-relaxed mb-6">
                We design and build custom docks based on your shoreline, intended use,
                and waterfront conditions. From planning and permitting to installation,
                we keep the process clear and straightforward.
              </p>

              <div className="space-y-3">
                {highlights.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-burgundy">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-burgundy flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gold">
              <h2 className="text-2xl font-lato font-bold text-burgundy mb-4">
                What we build.
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-gold bg-cream/40 p-4 text-burgundy font-medium leading-relaxed"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gold">
              <h2 className="text-2xl font-lato font-bold text-burgundy mb-4">
                Our process.
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {process.map((step, index) => (
                  <div
                    key={step}
                    className="rounded-xl border border-gold bg-cream/30 p-4"
                  >
                    <div className="text-sm font-semibold text-burgundy/70 mb-2">
                      Step {index + 1}
                    </div>
                    <div className="text-burgundy font-medium leading-relaxed">
                      {step}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-8 space-y-6">
            <div className="bg-white p-4 rounded-2xl shadow-lg border border-gold">
              <h2 className="text-2xl font-lato font-bold text-burgundy mb-4 px-2">
                Project gallery.
              </h2>

              <div className="relative group">
                <div className="aspect-[4/3] overflow-hidden rounded-xl">
                  <img
                    src={galleryImages[currentImage]}
                    alt={`Dock project ${currentImage + 1}`}
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
                    aria-label={`View dock project ${idx + 1}`}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      idx === currentImage
                        ? 'border-burgundy'
                        : 'border-gray-300 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-burgundy text-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-lato font-bold mb-3">
                Ready to plan your dock?
              </h3>

              <p className="text-white/85 leading-relaxed mb-6">
                Tell us about your property, and we will help you plan a dock that fits
                your needs and your shoreline.
              </p>

              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-gold text-burgundy font-bold px-6 py-3 hover:bg-gold/90 transition-colors"
              >
                Request a Consultation
              </a>
            </div>
          </div>
        </section>
      </div>
    </ServicePageLayout>
  );
}