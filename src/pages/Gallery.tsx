import { useState } from 'react';
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import TopStrip from '../components/TopStrip';

// Import all images dynamically
const imageModules = import.meta.glob('../assets/gallery/image-*.jpg', { eager: true, query: '?url', import: 'default' });
const images = Object.entries(imageModules)
  .map(([path, url], index) => ({
    id: index + 1,
    src: url as string,
    alt: `Marine construction project ${index + 1}`
  }))
  .sort((a, b) => {
    // Extract number from filename for proper sorting
    const getNum = (id: number) => {
      const entry = Object.entries(imageModules)[id - 1];
      const match = entry[0].match(/image-(\d+)\.jpg/);
      return match ? parseInt(match[1]) : id;
    };
    return getNum(a.id) - getNum(b.id);
  });

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

export default function Gallery() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const handleBackToHome = () => {
    navigate('/', { replace: true });

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }, 100);
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedImage) return;
    
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setSelectedImage(images[prevIndex]);
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedImage) return;
    
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setSelectedImage(images[nextIndex]);
  };

  return (
    <>
      <TopStrip />
      <div className="min-h-screen" style={{ backgroundColor: '#FEF7EB' }}>
        {/* Header Section */}
        <div className="container mx-auto px-4 py-10">
          <button
            onClick={handleBackToHome}
            className="inline-flex items-center gap-2 bg-white text-burgundy px-4 py-2 rounded-lg text-sm font-semibold border-2 border-burgundy hover:bg-burgundy hover:text-cream transition-all group mb-6"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>

          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-burgundy mb-4">
              Project Gallery
            </h1>
            <p className="text-lg text-burgundy/80 max-w-2xl mx-auto">
              Explore our completed marine construction projects showcasing quality craftsmanship and attention to detail.
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center overflow-auto"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="fixed top-4 right-4 text-white hover:text-gold transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Previous Button */}
            <button
              onClick={handlePrevImage}
              className="fixed left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNextImage}
              className="fixed right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Image Counter */}
            <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm z-10">
              {images.findIndex(img => img.id === selectedImage.id) + 1} / {images.length}
            </div>

            {/* Full Size Image Container */}
            <div className="p-4 md:p-8">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full h-auto rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
