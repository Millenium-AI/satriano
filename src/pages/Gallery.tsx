import { useState, useEffect } from 'react';
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import TopStrip from '../components/TopStrip';

// Import all images dynamically
const imageModules = import.meta.glob('../assets/gallery/image-*.jpg', { eager: true, query: '?url', import: 'default' });
const images = Object.entries(imageModules)
  .map(([, url], index) => ({
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

  // Scroll to top on mount
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo(0, 0);
  }, []);

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
        <div 
          className="container mx-auto px-4"
          style={{ padding: 'clamp(2rem, 3vw, 2.5rem) 1rem' }}
        >
          {/* Back Button and Title Row */}
          <div className="relative flex items-center justify-between mb-fluid-lg">
            {/* Back Button */}
            <button
              onClick={handleBackToHome}
              className="inline-flex items-center bg-white text-burgundy rounded-lg font-semibold border-2 border-burgundy hover:bg-burgundy hover:text-cream transition-all group"
              style={{
                gap: 'clamp(0.4rem, 0.8vw, 0.5rem)',
                padding: 'clamp(0.4rem, 1vw, 0.5rem) clamp(0.75rem, 1.5vw, 1rem)',
                fontSize: 'clamp(0.8rem, 1vw + 0.4rem, 0.95rem)',
              }}
            >
              <ArrowLeft 
                className="group-hover:-translate-x-1 transition-transform"
                style={{
                  width: 'clamp(0.9rem, 1.2vw, 1rem)',
                  height: 'clamp(0.9rem, 1.2vw, 1rem)',
                }}
              />
              Back to Home
            </button>

            {/* Title - Absolutely Centered */}
            <h1 
              className="font-bold text-burgundy absolute left-1/2 -translate-x-1/2"
              style={{ fontSize: 'clamp(2rem, 4vw + 1rem, 3rem)' }}
            >
              Project Gallery
            </h1>

            {/* Invisible Spacer (same width as button for balance) */}
            <div style={{ width: 'clamp(8rem, 10vw, 10rem)' }} />
          </div>

          {/* Subtitle Section */}
          <div className="text-center mb-fluid-2xl">
            <p 
              className="text-burgundy/80 max-w-2xl mx-auto"
              style={{ fontSize: 'clamp(1rem, 1.2vw + 0.6rem, 1.25rem)' }}
            >
              Explore our completed marine construction projects showcasing quality craftsmanship and attention to detail.
            </p>
          </div>

          {/* Image Grid */}
          <div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 desktop:grid-cols-4"
            style={{ gap: 'clamp(1rem, 2vw, 1.5rem)' }}
          >
            {images.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full object-cover"
                  style={{ height: 'clamp(12rem, 20vw, 16rem)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="fixed z-10 text-white hover:text-gold transition-colors"
              style={{
                top: 'clamp(0.75rem, 1.5vw, 1rem)',
                right: 'clamp(0.75rem, 1.5vw, 1rem)',
              }}
            >
              <X style={{ width: 'clamp(1.5rem, 3vw, 2rem)', height: 'clamp(1.5rem, 3vw, 2rem)' }} />
            </button>

            {/* Previous Button */}
            <button
              onClick={handlePrevImage}
              className="fixed left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all z-10"
              style={{ padding: 'clamp(0.5rem, 1vw, 0.75rem)' }}
              aria-label="Previous image"
            >
              <ChevronLeft style={{ width: 'clamp(1.5rem, 3vw, 2rem)', height: 'clamp(1.5rem, 3vw, 2rem)' }} />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNextImage}
              className="fixed right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all z-10"
              style={{ padding: 'clamp(0.5rem, 1vw, 0.75rem)' }}
              aria-label="Next image"
            >
              <ChevronRight style={{ width: 'clamp(1.5rem, 3vw, 2rem)', height: 'clamp(1.5rem, 3vw, 2rem)' }} />
            </button>

            {/* Image Counter */}
            <div 
              className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white rounded-full z-10"
              style={{ 
                padding: 'clamp(0.4rem, 1vw, 0.5rem) clamp(0.75rem, 1.5vw, 1rem)',
                fontSize: 'clamp(0.8rem, 1vw + 0.4rem, 0.95rem)'
              }}
            >
              {images.findIndex(img => img.id === selectedImage.id) + 1} / {images.length}
            </div>

            {/* Full Size Image Container */}
            <div 
              className="flex items-center justify-center"
              style={{ padding: 'clamp(1rem, 2vw, 2rem)' }}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="rounded-lg"
                style={{
                  maxWidth: '90vw',
                  maxHeight: '85vh',
                  width: 'auto',
                  height: 'auto',
                  objectFit: 'contain'
                }}
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
