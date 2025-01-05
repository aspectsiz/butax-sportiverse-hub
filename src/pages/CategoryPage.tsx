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
    <main className="container mx-auto px-4 pt-24 pb-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link to="/" className="transition-colors hover:text-foreground">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <Link to="/shop" className="transition-colors hover:text-foreground">Shop</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{getCategoryDisplayName(category || '')}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{getCategoryDisplayName(category || '')}</h1>
        <p className="text-muted-foreground">
          Browse our collection of {getCategoryDisplayName(category || '')}
        </p>
      </div>

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
  );
};

export default CategoryPage;