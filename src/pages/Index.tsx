import { seoData } from '@/data/seoData';
import { useSEO } from '@/hooks/useSEO';
import { DumbbellIcon, Sofa, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { HeroSlider } from '@/components/home/HeroSlider';

const Index = () => {
  useSEO(seoData.home);

  return (
    <>
      <HeroSlider />

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background w-full">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-12 h-12 mx-auto mb-4 bg-primary/5 rounded-full flex items-center justify-center">
                <DumbbellIcon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Sports Equipment</h3>
              <p className="text-muted-foreground">Professional-grade fitness equipment for every workout need.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 mx-auto mb-4 bg-primary/5 rounded-full flex items-center justify-center">
                <Sofa className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Urban Furniture</h3>
              <p className="text-muted-foreground">Modern, functional furniture designed for urban spaces.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 mx-auto mb-4 bg-primary/5 rounded-full flex items-center justify-center">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Franchise Network</h3>
              <p className="text-muted-foreground">Join our growing network of successful fitness franchises.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Ready to Start Your Fitness Journey?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Explore our collection of premium equipment or learn about franchise opportunities.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-100"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  );
};

export default Index;
