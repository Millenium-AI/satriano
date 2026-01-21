import ServicePageLayout from '../components/ServicePageLayout';
import { useState } from 'react';

// Import your images from the assets folder
import image1 from '../assets/gallery/image-3.jpg';
import image2 from '../assets/gallery/image-4.jpg';
import image3 from '../assets/gallery/image-6.jpg';
import image4 from '../assets/gallery/image-14.jpg';
import image5 from '../assets/gallery/image-17.jpg';

export default function DockDesign() {
  const [currentImage, setCurrentImage] = useState(0);
  
  // Reference imported images
  const galleryImages = [
    image1,
    image2,
    image3,
    image4,
    image5,
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
      description="Custom dock design and construction tailored to your waterfront property. We handle everything from permits to completion."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left Column - Content */}
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gold">
            <h2 className="text-2xl font-lato font-bold text-burgundy mb-4">Our Design Process</h2>
            <ul className="space-y-3 text-burgundy">
              <li>• Site inspection and assessment</li>
              <li>• Custom design based on your needs</li>
              <li>• Permit acquisition and approval</li>
              <li>• Professional installation</li>
              <li>• Final inspection and warranty</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gold">
            <h2 className="text-2xl font-lato font-bold text-burgundy mb-4">Materials We Use</h2>
            <p className="text-burgundy">
              We specialize in pressure-treated wood, composite decking, aluminum frames, and marine-grade hardware to ensure longevity and durability.
            </p>
          </div>
        </div>

        {/* Right Column - Gallery */}
        <div className="lg:sticky lg:top-8">
          <div className="bg-white p-4 rounded-2xl shadow-lg border border-gold flex flex-col" style={{height: '100%'}}>
            <h2 className="text-2xl font-lato font-bold text-burgundy mb-4 px-4">Project Gallery</h2>
            
            {/* Slideshow Container */}
            <div className="relative group flex-1 min-h-0">
              {/* Main Image */}
              <div className="h-full overflow-hidden rounded-lg">
                <img
                  src={galleryImages[currentImage]}
                  alt={`Dock project ${currentImage + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Previous Button */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-burgundy/80 hover:bg-burgundy text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Previous image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Next Button */}
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-burgundy/80 hover:bg-burgundy text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Next image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 bg-burgundy/80 text-white px-3 py-1 rounded-full text-sm">
                {currentImage + 1} / {galleryImages.length}
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImage(idx)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    idx === currentImage ? 'border-burgundy' : 'border-gray-300 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ServicePageLayout>
  );
}
