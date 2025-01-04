import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProductImageCarouselProps {
  images: string[];
  productName: string;
}

export const ProductImageCarousel = ({ images, productName }: ProductImageCarouselProps) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative">
      <div className="aspect-square overflow-hidden rounded-lg">
        <img
          src={images[currentImage]}
          alt={`${productName} - Image ${currentImage + 1}`}
          className="h-full w-full object-cover object-center"
        />
      </div>
      
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full bg-white/70"
          onClick={previousImage}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full bg-white/70"
          onClick={nextImage}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="mt-4 flex gap-4 overflow-auto">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`relative flex-none ${
              currentImage === index ? 'ring-2 ring-black dark:ring-white' : ''
            }`}
          >
            <img
              src={image}
              alt={`${productName} thumbnail ${index + 1}`}
              className="h-20 w-20 rounded-lg object-cover object-center"
            />
          </button>
        ))}
      </div>
    </div>
  );
};