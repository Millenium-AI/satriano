// src/pages/Gallery.tsx
import { useState } from 'react';
import { X } from 'lucide-react';
import image1 from '../assets/gallery/image-1.jpg';
import image2 from '../assets/gallery/image-2.jpg';
import image3 from '../assets/gallery/image-3.jpg';
import image4 from '../assets/gallery/image-4.jpg';
import image5 from '../assets/gallery/image-5.jpg';
import image6 from '../assets/gallery/image-6.jpg';
import image7 from '../assets/gallery/image-7.jpg';
import image8 from '../assets/gallery/image-8.jpg';
import image9 from '../assets/gallery/image-9.jpg';
import image10 from '../assets/gallery/image-10.jpg';
import image11 from '../assets/gallery/image-11.jpg';
import image12 from '../assets/gallery/image-12.jpg';
import image13 from '../assets/gallery/image-13.jpg';
import image14 from '../assets/gallery/image-14.jpg';
import image15 from '../assets/gallery/image-15.jpg';
import image16 from '../assets/gallery/image-16.jpg';
import image17 from '../assets/gallery/image-17.jpg';
import image18 from '../assets/gallery/image-18.jpg';
import image19 from '../assets/gallery/image-19.jpg';
import image20 from '../assets/gallery/image-20.jpg';
import image21 from '../assets/gallery/image-21.jpg';
import image22 from '../assets/gallery/image-22.jpg';
import image23 from '../assets/gallery/image-23.jpg';
import image24 from '../assets/gallery/image-24.jpg';
import image25 from '../assets/gallery/image-25.jpg';
import image26 from '../assets/gallery/image-26.jpg';
import image27 from '../assets/gallery/image-27.jpg';
import image28 from '../assets/gallery/image-28.jpg';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  title?: string;
}

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const images: GalleryImage[] = [
    {
      id: 1,
      src: image1,
      alt: 'Marine construction project 1',
      title: 'Project 1'
    },
    {
      id: 2,
      src: image2,
      alt: 'Marine construction project 2',
      title: 'Project 2'
    },
    {
      id: 3,
      src: image3,
      alt: 'Marine construction project 3',
      title: 'Project 3'
    },
    {
      id: 4,
      src: image4,
      alt: 'Marine construction project 4',
      title: 'Project 4'
    },
    {
      id: 5,
      src: image5,
      alt: 'Marine construction project 5',
      title: 'Project 5'
    },
    {
      id: 6,
      src: image6,
      alt: 'Marine construction project 6',
      title: 'Project 6'
    },
    {
      id: 7,
      src: image7,
      alt: 'Marine construction project 7',
      title: 'Project 7'
    },
    {
      id: 8,
      src: image8,
      alt: 'Marine construction project 8',
      title: 'Project 8'
    },
    {
      id: 9,
      src: image9,
      alt: 'Marine construction project 9',
      title: 'Project 9'
    },
    {
      id: 10,
      src: image10,
      alt: 'Marine construction project 10',
      title: 'Project 10'
    },
    {
      id: 11,
      src: image11,
      alt: 'Marine construction project 11',
      title: 'Project 11'
    },
    {
      id: 12,
      src: image12,
      alt: 'Marine construction project 12',
      title: 'Project 12'
    },
    {
      id: 13,
      src: image13,
      alt: 'Marine construction project 13',
      title: 'Project 13'
    },
    {
      id: 14,
      src: image14,
      alt: 'Marine construction project 14',
      title: 'Project 14'
    },
    {
      id: 15,
      src: image15,
      alt: 'Marine construction project 15',
      title: 'Project 15'
    },
    {
      id: 16,
      src: image16,
      alt: 'Marine construction project 16',
      title: 'Project 16'
    },
    {
      id: 17,
      src: image17,
      alt: 'Marine construction project 17',
      title: 'Project 17'
    },
    {
      id: 18,
      src: image18,
      alt: 'Marine construction project 18',
      title: 'Project 18'
    },
    {
      id: 19,
      src: image19,
      alt: 'Marine construction project 19',
      title: 'Project 19'
    },
    {
      id: 20,
      src: image20,
      alt: 'Marine construction project 20',
      title: 'Project 20'
    },
    {
      id: 21,
      src: image21,
      alt: 'Marine construction project 21',
      title: 'Project 21'
    },
    {
      id: 22,
      src: image22,
      alt: 'Marine construction project 22',
      title: 'Project 22'
    },
    {
      id: 23,
      src: image23,
      alt: 'Marine construction project 23',
      title: 'Project 23'
    },
    {
      id: 24,
      src: image24,
      alt: 'Marine construction project 24',
      title: 'Project 24'
    },
    {
      id: 25,
      src: image25,
      alt: 'Marine construction project 25',
      title: 'Project 25'
    },
    {
      id: 26,
      src: image26,
      alt: 'Marine construction project 26',
      title: 'Project 26'
    },
    {
      id: 27,
      src: image27,
      alt: 'Marine construction project 27',
      title: 'Project 27'
    },
    {
      id: 28,
      src: image28,
      alt: 'Marine construction project 28',
      title: 'Project 28'
    },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FEF7EB' }}>
      {/* Header Section */}
      <div className="container mx-auto px-4 py-16">
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
              <div className="absolute inset-0 bg-burgundy/0 group-hover:bg-burgundy/70 transition-all duration-300 flex items-end p-4">
                <p className="text-cream font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gold transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-5xl max-h-[90vh] relative">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            {selectedImage.title && (
              <p className="text-white text-center mt-4 text-xl font-semibold">
                {selectedImage.title}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
