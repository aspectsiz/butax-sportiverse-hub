import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useCart } from '@/store/useCart';
import { useToast } from '@/components/ui/use-toast';
import { mockProducts } from '@/data/products';
import Navbar from '@/components/Navbar';
import { ArrowLeftIcon, DumbbellIcon, SofaIcon, ShirtIcon } from 'lucide-react';

const categoryIcons = {
  'sports-equipment': <DumbbellIcon className="w-6 h-6" />,
  'urban-furniture': <SofaIcon className="w-6 h-6" />,
  'sportswear': <ShirtIcon className="w-6 h-6" />,
};

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const { toast } = useToast();

  const product = mockProducts.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
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
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product);
    toast({
      title: 'Added to cart',
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-8">
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
              <p className="text-3xl font-bold">${product.price.toFixed(2)}</p>
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
              {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetail;