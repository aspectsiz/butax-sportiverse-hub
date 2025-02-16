//src/pages/Index.tsx

import { seoData } from '@/data/seoData';
import { useSEO } from '@/hooks/useSEO';
import { Link } from "react-router-dom";
import { blogPosts } from '@/data/blogData';
import FeaturesSection from '@/components/home/FeaturesSection';
import BlogSection from '@/components/blog/BlogSection'; 
import IsoSection from '@/components/home/isoSection'; 


const Index = () => {
  useSEO(seoData.home);

  // Get the latest 3 blog posts
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <>
      
      <FeaturesSection />
      <IsoSection />
      <BlogSection latestPosts={latestPosts} />

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
