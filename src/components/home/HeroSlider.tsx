
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SlideData {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string;
  buttonLink: string;
}

const slideData: SlideData[] = [
  {
    id: 1,
    title: "FOREMAN FP-130 SQUATS",
    description: "The machine allows to perform squats with less load on the lumbar spine",
    imageUrl: "/public/lovable-uploads/6a304770-7a4f-429b-b92b-71f924068de3.png",
    buttonText: "SHOW MORE",
    buttonLink: "/shop/fp-130",
  },
  {
    id: 2,
    title: "PREMIUM LEG PRESS",
    description: "Professional grade leg press for maximum muscle engagement",
    imageUrl: "/equipment/leg-press.jpg",
    buttonText: "DISCOVER",
    buttonLink: "/shop/leg-press",
  },
  // ... Add 10 more slides with similar structure
];

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideData.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideData.length) % slideData.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideData.length);
  };

  return (
    <section className="relative h-[calc(100vh-4rem)] overflow-hidden bg-secondary">
      {slideData.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.imageUrl}
            alt={slide.title}
            loading={index === 0 ? "eager" : "lazy"}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40">
            <div className="container mx-auto px-4 h-full flex flex-col justify-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl animate-fade-in">
                {slide.description}
              </p>
              <Link to={slide.buttonLink}>
                <Button
                  variant="default"
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-white"
                >
                  {slide.buttonText}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center space-x-4">
        {slideData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === index ? 'bg-accent' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Arrow Navigation */}
      <button
        onClick={handlePrevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
        aria-label="Previous slide"
      >
        <ArrowLeft className="w-6 h-6" />
      </button>
      <button
        onClick={handleNextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
        aria-label="Next slide"
      >
        <ArrowRight className="w-6 h-6" />
      </button>

      {/* Logo */}
      <div className="absolute bottom-8 right-8 w-32 h-32 bg-accent p-4 transform transition-transform hover:scale-105">
        <img
          src="/public/lovable-uploads/butax-logo.png"
          alt="Butax Logo"
          className="w-full h-full object-contain"
        />
      </div>
    </section>
  );
};
