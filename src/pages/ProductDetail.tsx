import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useCart } from '@/store/useCart';
import { useToast } from '@/components/ui/use-toast';
import { mockProducts } from '@/data/products';
import ProductSchema from '@/components/shop/ProductSchema';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, DumbbellIcon, SofaIcon, ShirtIcon } from 'lucide-react';

const categoryIcons = {
  'sports-equipment': <DumbbellIcon className="w-6 h-6" />,
  'urban-furniture': <SofaIcon className="w-6 h-6" />,
  'sportswear': <ShirtIcon className="w-6 h-6" />,
};

const ProductDetail = () => {
  const { category, slug } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const { toast } = useToast();

  const product = mockProducts.find(p => 
    p.category === category && 
    p.name.toLowerCase().replace(/\s+/g, '-') === slug
  );

  if (!product) {
    return (
      <main className="container mx-auto px-4 pt-24 pb-8">
        <Button
          variant="ghost"
          onClick={() => navigate('/shop')}
          className="mb-4"
        >
          <ArrowLeftIcon className="mr-2 h-4 w-4" /> Back to Shop
        </Button>
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">Product not found.</p>
        </div>
      </main>
    );
  }

  const handleAddToCart = () => {
    addItem(product);
    toast({
      title: product.quoteOnly ? 'Added to quote request' : 'Added to cart',
      description: `${product.name} has been added to your ${product.quoteOnly ? 'quote request' : 'cart'}.`,
    });
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
            <Link to="/shop" className="transition-colors hover:text-foreground">Shop</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <Link 
              to={`/shop/${category}`}
              className="transition-colors hover:text-foreground"
            >
              {category?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{product.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Button
        variant="ghost"
        onClick={() => navigate('/shop')}
        className="mb-8"
      >
        <ArrowLeftIcon className="mr-2 h-4 w-4" /> Back to Shop
      </Button>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-2">
            {categoryIcons[product.category]}
            <span className="text-sm text-muted-foreground capitalize">
              {product.category.split('-').join(' ')}
            </span>
          </div>

          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p className="text-lg text-muted-foreground">{product.description}</p>

          <div className="flex items-center justify-between">
            {!product.quoteOnly ? (
              <p className="text-3xl font-bold">${product.price.toFixed(2)}</p>
            ) : (
              <p className="text-2xl font-semibold text-accent">Request Quote</p>
            )}
            <p className="text-sm text-muted-foreground">
              {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
            </p>
          </div>

          <Button
            onClick={handleAddToCart}
            className="w-full"
            size="lg"
            disabled={product.stock === 0}
          >
            {product.quoteOnly ? 'Request Quote' : (product.stock > 0 ? 'Add to Cart' : 'Out of Stock')}
          </Button>
        </div>
      </div>

      <ProductSchema 
        product={product}
        url={`https://yourwebsite.com/shop/${category}/${slug}`}
      />
    </main>
  );
};

export default ProductDetail;