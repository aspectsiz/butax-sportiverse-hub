import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductGrid from '@/components/shop/ProductGrid';
import ProductFilters from '@/components/shop/ProductFilters';
import { mockProducts } from '@/data/products';
import { seoData } from '@/data/seoData';
import { useSEO } from '@/hooks/useSEO';
import ProductListSchema from '@/components/shop/ProductListSchema';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link, useParams } from 'react-router-dom';

const CategoryPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  
  // Get the formatted category name for display
  const getCategoryDisplayName = (category: string) => {
    return category.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  // Filter products by category
  const categoryProducts = mockProducts.filter(
    product => product.category === category
  );

  // Filter products by search term
  const filteredProducts = categoryProducts.filter((product) => {
    return product.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  // Handle category change
  const handleCategoryChange = (newCategory: string) => {
    if (newCategory === 'all') {
      navigate('/shop');
    } else {
      navigate(`/shop/${newCategory}`);
    }
  };

  // Use SEO data for the category
  useSEO(seoData[category as keyof typeof seoData] || seoData.shop);

  return (



<div className="w-full">
      <div className="hero-pattern pt-20 lg:pt-24 lg:pb-8 pb-4 px-4 sm:px-6 lg:px-8 w-full text-primary-foreground">
        {/* Page Header */}
        <div className="max-w-7xl mx-auto text-center">
        <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link to="/" className="transition-colors text-muted-foreground hover:text-primary-foreground">Ana Sayfa</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <Link to="/shop" className="transition-colors text-muted-foreground hover:text-primary-foreground">Ürünlerimiz</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{getCategoryDisplayName(category || '')}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
          <h1 className="text-4xl text-left font-bold">{getCategoryDisplayName(category || '')}</h1>
          </div>
          </div>

      <main className="container mx-auto px-4 py-4">
      <ProductFilters
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        category={category || ''}
        onCategoryChange={handleCategoryChange}
      />

      <ProductGrid products={filteredProducts} />
      
      <ProductListSchema 
        products={filteredProducts}
        baseUrl={`https://yourwebsite.com/shop/${category}`}
      />
    </main>
    </div>
  );
};

export default CategoryPage;