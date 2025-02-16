import { useState } from 'react';
import { LeftArrowIcon } from '@/components/ui/LeftArrowIcon';
import { RightArrowIcon } from '@/components/ui/RightArrowIcon';
import { Button } from "@heroui/react";

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
    <div>
      <div className="relative">
        <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 sm:flex justify-between p-2 hidden">
          {/* sm:hidden ile mobil görünüsme gizlendi */}
          <Button
          radius="full"
            isIconOnly
            aria-label="Previous Image"
            color="primary"
            variant="faded"
            onClick={previousImage}
          >
            <LeftArrowIcon fill="currentColor" />
          </Button>
          <Button
          radius="full"
            isIconOnly
            aria-label="Next Image"
            color="primary"
            variant="faded"
            onClick={nextImage}
          >
            <RightArrowIcon fill="currentColor" />
          </Button>
        </div>
        <div className="sm:aspect-auto aspect-square overflow-hidden rounded-sm">
          <img
            src={images[currentImage]}
            alt={`${productName} - Image ${currentImage + 1}`}
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>

      <div className="relative">
        <div className="mt-4 ml-2 sm:ml-0 flex gap-4  justify-left sm:justify-center">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`relative flex-none rounded-sm ${
                currentImage === index ? 'ring ring-primary ring-offset-2' : ''
              }`}
            >
              <img
                src={image}
                alt={`${productName} thumbnail ${index + 1}`}
                className="sm:h-36 sm:w-20 h-16 w-16 rounded-2sm object-cover object-center"
                 // h-24 w-16 olarak değiştirildi
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};