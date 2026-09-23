import { useState, useEffect, useCallback, useMemo } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import LazyImage from '../components/LazyImage';

// Full-size images (used in the lightbox)
const imageModules = import.meta.glob('../assets/gallery/image*.jpg', { eager: true, query: '?url', import: 'default' });
// Auto-generated WebP thumbnails (used in the grid) — see vite-plugin-gallery-thumbs.ts.
// A brand-new photo won't have a thumbnail until the next dev/build run, so we
// fall back to the full-size image for it in the meantime.
const thumbModules = import.meta.glob('../assets/gallery/thumbs/image*.webp', { eager: true, query: '?url', import: 'default' });

interface GalleryImage {
  id: number;
  src: string;
  thumbSrc: string;
  alt: string;
  num: number;
}

const images: GalleryImage[] = Object.entries(imageModules)
  .map(([path, url], index) => {
    const match = path.match(/image(\d+)\.jpg/);
    const num = match ? parseInt(match[1], 10) : index;
    const thumbPath = `../assets/gallery/thumbs/image${num}.webp`;
    return {
      id: index + 1,
      src: url as string,
      thumbSrc: (thumbModules[thumbPath] as string) || (url as string),
      alt: `Marine construction project ${index + 1}`,
      num,
    };
  })
  .sort((a, b) => a.num - b.num);

export default function Gallery() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedIndex = useMemo(
    () => (selectedId === null ? -1 : images.findIndex((img) => img.id === selectedId)),
    [selectedId]
  );
  const selectedImage = selectedIndex >= 0 ? images[selectedIndex] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePrevImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedId((current) => {
      if (current === null) return current;
      const idx = images.findIndex((img) => img.id === current);
      const prevIdx = idx === 0 ? images.length - 1 : idx - 1;
      return images[prevIdx].id;
    });
  }, []);

  const handleNextImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedId((current) => {
      if (current === null) return current;
      const idx = images.findIndex((img) => img.id === current);
      const nextIdx = idx === images.length - 1 ? 0 : idx + 1;
      return images[nextIdx].id;
    });
  }, []);

  useEffect(() => {
    if (selectedId === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrevImage();
      else if (e.key === 'ArrowRight') handleNextImage();
      else if (e.key === 'Escape') setSelectedId(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedId, handlePrevImage, handleNextImage]);

  // Preload only the NEXT image at high priority; the prev image at low priority,
  // and stagger it slightly so it doesn't compete with the current full-res load.
  useEffect(() => {
    if (selectedIndex < 0) return;

    const nextIdx = selectedIndex === images.length - 1 ? 0 : selectedIndex + 1;
    const prevIdx = selectedIndex === 0 ? images.length - 1 : selectedIndex - 1;

    const nextImg = new Image();
    nextImg.src = images[nextIdx].src;
    // fetchPriority is supported in Chrome/Edge/Safari 17.2+; harmless no-op elsewhere
    (nextImg as any).fetchPriority = 'high';

    const timer = window.setTimeout(() => {
      const prevImg = new Image();
      prevImg.src = images[prevIdx].src;
      (prevImg as any).fetchPriority = 'low';
    }, 150);

    return () => window.clearTimeout(timer);
  }, [selectedIndex]);

  return (
    <>
      <Header />
      <div className="min-h-screen" style={{ backgroundColor: '#FEF7EB' }}>
        <div
          className="container mx-auto px-4"
          style={{ padding: 'clamp(2rem, 3vw, 2.5rem) 1rem' }}
        >
          <div className="text-center mb-fluid-lg">
            <h1
              className="font-bold text-burgundy"
              style={{ fontSize: 'clamp(2rem, 4vw + 1rem, 3rem)' }}
            >
              Project Gallery
            </h1>
          </div>

          <div className="text-center mb-fluid-2xl">
            <p
              className="text-burgundy/80 max-w-2xl mx-auto"
              style={{ fontSize: 'clamp(1rem, 1.2vw + 0.6rem, 1.25rem)' }}
            >
              Explore our completed marine construction projects showcasing quality craftsmanship and attention to detail.
            </p>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 desktop:grid-cols-4"
            style={{ gap: 'clamp(1rem, 2vw, 1.5rem)' }}
          >
            {images.map((image, idx) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                onClick={() => setSelectedId(image.id)}
              >
                <LazyImage
                  src={image.thumbSrc}
                  alt={image.alt}
                  className="w-full object-cover"
                  style={{ height: 'clamp(12rem, 20vw, 16rem)' }}
                  // First few tiles are almost certainly above the fold — load eagerly,
                  // let everything else stay lazy (native lazy-loading, all modern browsers).
                  loading={idx < 4 ? 'eager' : 'lazy'}
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
            onClick={() => setSelectedId(null)}
          >
            <button
              onClick={() => setSelectedId(null)}
              className="fixed z-10 text-white hover:text-gold transition-colors"
              style={{
                top: 'clamp(0.75rem, 1.5vw, 1rem)',
                right: 'clamp(0.75rem, 1.5vw, 1rem)',
              }}
            >
              <X style={{ width: 'clamp(1.5rem, 3vw, 2rem)', height: 'clamp(1.5rem, 3vw, 2rem)' }} />
            </button>

            <button
              onClick={handlePrevImage}
              className="fixed left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all z-10"
              style={{ padding: 'clamp(0.5rem, 1vw, 0.75rem)' }}
              aria-label="Previous image"
            >
              <ChevronLeft style={{ width: 'clamp(1.5rem, 3vw, 2rem)', height: 'clamp(1.5rem, 3vw, 2rem)' }} />
            </button>

            <button
              onClick={handleNextImage}
              className="fixed right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all z-10"
              style={{ padding: 'clamp(0.5rem, 1vw, 0.75rem)' }}
              aria-label="Next image"
            >
              <ChevronRight style={{ width: 'clamp(1.5rem, 3vw, 2rem)', height: 'clamp(1.5rem, 3vw, 2rem)' }} />
            </button>

            <div
              className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white rounded-full z-10"
              style={{
                padding: 'clamp(0.4rem, 1vw, 0.5rem) clamp(0.75rem, 1.5vw, 1rem)',
                fontSize: 'clamp(0.8rem, 1vw + 0.4rem, 0.95rem)'
              }}
            >
              {selectedIndex + 1} / {images.length}
            </div>

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
                decoding="async"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
