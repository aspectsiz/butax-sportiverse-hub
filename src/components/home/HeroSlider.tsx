
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface SlideData {
  id: number;
  title: string;
  title2: string;
  title3: string;
  description: string;
  imageUrl: string;
  buttonText: string;
  buttonLink: string;
}

const slideData: SlideData[] = [
  {
    id: 1,
    title: "AÇIK ALAN SPOR ALETLERİ",
    title2: "PARK SPOR DONATILARI",
    title3: "CALISTHENICS FITNESS SETLERI",
    description: "",
    imageUrl: "/assets/kasli-adam-dips-yapıyor.webp",
    buttonText: "DISCOVER",
    buttonLink: "/shop/leg-press",
  },
  {
    id: 2,
    title: "PİLATES ALETLERİ",
    title2: "",
    title3: "",
    description: "Evde veya stüdyoda pilates yaparken ihtiyaç duyacağınız tüm ekipmanlar BUTAX'ta!  Dayanıklı, güvenli ve ergonomik tasarımlı pilates aletlerimizle forma girin.",
    imageUrl: "/assets/zarif-kadin-pilates-yapiyor.webp",
    buttonText: "DISCOVER",
    buttonLink: "/shop/leg-press",
  },
  {
    id: 10,
    title: "BUTAX SPOR GİYİM",
    title2: "",
    title3: "",
    description: "Yüksek performanslı, rahat ve şık spor giyim koleksiyonumuzla antrenmanlarınıza renk katın.  Ter tutmayan kumaşlar ve ergonomik tasarımlarla konforu deneyimleyin.",
    imageUrl: "/assets/duygusal-sporcu-kadın-gücünü-gösteriyor.webp",
    buttonText: "SHOW MORE",
    buttonLink: "/shop/fp-130",
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

  return (
    <section className="relative h-[calc(100vh-10rem)] overflow-hidden bg-secondary">
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
          <div className="absolute md:left-20 left-0 inset-0">
            <div className="container mx-auto px-4 h-full flex flex-col justify-center">
              <h1 className="text-2xl text-left md:text-4xl font-bold text-white animate-fade-in break-words">
                {slide.title}<br/>
                {slide.title2}<br/>
                {slide.title3}
              </h1>
              <p className="text-md text-left md:text-xl text-white/90 mb-8 max-w-2xl animate-fade-in">
                {slide.description}
              </p>
              <div className='flex space-x-4'>
              <Link to={slide.buttonLink}>
                <Button
                  variant="default"
                  size="lg"
                  className="bg-zinc-700 text-white rounded-none "
                >
                  {slide.buttonText}
                </Button>
              </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <div className="absolute md:bottom-20 bottom-5 md:left-[100px] left-4 flex items-start space-x-4">
        {slideData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 transition-colors ${
              currentSlide === index ? 'bg-zinc-800' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Logo */}
      <div className="absolute bottom-14 right-8 bg-accent p-4 transform">
        
        <img
          src="/assets/butax-logo.webp"
          alt="Butax Logo"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="absolute inset-x-0 bottom-0 h-14 bg-black/60 transform">
      </div>
    </section>
  );
};
