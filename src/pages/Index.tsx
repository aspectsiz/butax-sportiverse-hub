
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
              <h3 className="text-xl font-semibold mb-2 text-foreground">Spor Ekipmanları</h3>
              <p className="text-muted-foreground">Her türlü antrenman ihtiyacı için profesyonel fitness ekipmanları.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 mx-auto mb-4 bg-primary/5 rounded-full flex items-center justify-center">
                <Sofa className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Kent Mobilyaları</h3>
              <p className="text-muted-foreground">Kent alanları için modern ve işlevsel mobilya tasarımları.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 mx-auto mb-4 bg-primary/5 rounded-full flex items-center justify-center">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Bayilik Ağı</h3>
              <p className="text-muted-foreground">Başarılı fitness bayilik ağımıza katılın.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Fitness Yolculuğunuza Başlamaya Hazır mısınız?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Premium ekipman koleksiyonumuzu keşfedin veya bayilik fırsatları hakkında bilgi alın.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-100"
          >
            Hemen İletişime Geçin
          </Link>
        </div>
      </section>
    </>
  );
};

export default Index;
