import { Product } from '@/types/product';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import { useCart } from '@/store/useCart';
import { DumbbellIcon, SofaIcon, ShirtIcon } from 'lucide-react';

const categoryIcons = {
  'sports-equipment': <DumbbellIcon className="w-5 h-5" />,
  'urban-furniture': <SofaIcon className="w-5 h-5" />,
  'sportswear': <ShirtIcon className="w-5 h-5" />,
};

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product);
    toast({
      title: product.quoteOnly ? 'Added to quote request' : 'Added to cart',
      description: `${product.name} has been added to your ${product.quoteOnly ? 'quote request' : 'cart'}.`,
    });
  };

  const getProductUrl = (product: Product) => {
    const slug = product.name.toLowerCase().replace(/\s+/g, '-');
    return `/shop/${product.category}/${slug}`;
  };

  return (
    <Card className="flex flex-col">
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          {categoryIcons[product.category]}
          <span className="text-sm text-muted-foreground capitalize">
            {product.category.split('-').join(' ')}
          </span>
        </div>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        {!product.quoteOnly ? (
          <p className="text-2xl font-bold">${product.price.toFixed(2)}</p>
        ) : (
          <p className="text-lg font-semibold text-accent">Request Quote</p>
        )}
        <p className="text-sm text-muted-foreground mt-2">
          {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
        </p>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button
          onClick={() => navigate(getProductUrl(product))}
          variant="outline"
          className="flex-1"
        >
          View Details
        </Button>
        <Button
          onClick={handleAddToCart}
          className="flex-1"
          disabled={product.stock === 0}
        >
          {product.quoteOnly ? 'Request Quote' : (product.stock > 0 ? 'Add to Cart' : 'Out of Stock')}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;