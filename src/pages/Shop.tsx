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
    <main className="container mx-auto px-4 pt-24 pb-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link to="/" className="transition-colors hover:text-foreground">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Shop</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Shop Our Products</h1>
        <p className="text-muted-foreground">
          Browse our collection of high-quality sports equipment, urban furniture, and sportswear.
        </p>
      </div>

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
  );
};

export default Shop;