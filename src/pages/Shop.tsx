import { useState } from 'react';
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
import { Link } from 'react-router-dom';

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState<string>('all');
  useSEO(seoData.shop);

  const filteredProducts = mockProducts.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      category === 'all' || product.category === category;
    return matchesSearch && matchesCategory;
  });

  const handleCategoryChange = (newCategory: string) => {
    if (newCategory !== 'all') {
      window.location.href = `/shop/${newCategory}`;
    } else {
      setCategory(newCategory);
    }
  };

  return (
    <div className="w-full">
      <div className="hero-pattern pt-20 lg:pt-24 lg:pb-8 pb-4 px-4 sm:px-6 lg:px-8 w-full text-primary-foreground">
        {/* Page Header */}
        <div className="max-w-7xl mx-auto text-center">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <Link
                  to="/"
                  className="transition-colors text-muted-foreground hover:text-primary-foreground"
                >
                  Ana Sayfa
                </Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Ürünlerimiz</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-4xl font-bold text-left uppercase">Ürünlerimiz</h1>
          </div>
          </div>

    <main className="container mx-auto px-4 py-4">
      <ProductFilters
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        category={category}
        onCategoryChange={handleCategoryChange}
      />

      <ProductGrid products={filteredProducts} />
      
      <ProductListSchema 
        products={filteredProducts}
        baseUrl="https://yourwebsite.com/shop"
      />
    </main>
    </div>
  );
};

export default Shop;