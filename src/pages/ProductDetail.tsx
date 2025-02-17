
import { useParams, Link } from 'react-router-dom';
import { mockProducts } from '@/data/products';
import { ProductImageCarousel } from '@/components/shop/ProductImageCarousel';
import { ProductSpecs } from '@/components/shop/ProductSpecs';
import { ProductReviews } from '@/components/shop/ProductReviews';
import ProductSchema from '@/components/shop/ProductSchema';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const ProductDetail = () => {
  const { category, slug } = useParams();
  const product = mockProducts.find(p => p.slug === slug);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1>Product not found</h1>
        <Link to="/market" className="text-primary hover:underline">
          Return to Market
        </Link>
      </div>
    );
  }

  const currentUrl = window.location.href;

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
            <Link 
              to={`/market/${category}`}
              className="text-muted-foreground hover:text-foreground"
            >
              {category}
            </Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{product.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <ProductImageCarousel images={[product.imageUrl]} productName={product.name} />
        <ProductSpecs product={product} />
      </div>

      <ProductReviews productId={product.id} />
      <ProductSchema product={product} url={currentUrl} />
    </div>
  );
};

export default ProductDetail;
