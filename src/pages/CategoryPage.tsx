
import { useParams, Link } from 'react-router-dom';
import { mockProducts } from '@/data/products';
import ProductGrid from '@/components/shop/ProductGrid';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const CategoryPage = () => {
  const { category } = useParams();
  const products = mockProducts.filter(p => p.category === category);

  if (products.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1>Category not found</h1>
        <Link to="/market" className="text-primary hover:underline">
          Return to Market
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link to="/" className="text-muted-foreground hover:text-foreground">
              Ana Sayfa
            </Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <Link to="/market" className="text-muted-foreground hover:text-foreground">
              Market
            </Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{category}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className="text-3xl font-bold mt-8 mb-6">
        {category}
      </h1>

      <ProductGrid products={products} />
    </div>
  );
};

export default CategoryPage;
