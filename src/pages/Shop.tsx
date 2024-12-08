import { useState } from 'react';
import { useCart } from '@/store/useCart';
import { Product } from '@/types/product';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import Navbar from '@/components/Navbar';
import { DumbbellIcon, SofaIcon, ShirtIcon } from 'lucide-react';

// Enhanced mock data with more products and proper categorization
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Professional Dumbbell Set',
    description: 'Adjustable weight set perfect for home workouts',
    price: 299.99,
    category: 'sports-equipment',
    imageUrl: '/placeholder.svg',
    stock: 10,
  },
  {
    id: '2',
    name: 'Urban Bench',
    description: 'Modern design bench for public spaces',
    price: 599.99,
    category: 'urban-furniture',
    imageUrl: '/placeholder.svg',
    stock: 5,
  },
  {
    id: '3',
    name: 'Performance T-Shirt',
    description: 'Moisture-wicking fabric for intense workouts',
    price: 29.99,
    category: 'sportswear',
    imageUrl: '/placeholder.svg',
    stock: 50,
  },
  {
    id: '4',
    name: 'Olympic Barbell',
    description: 'Competition-grade Olympic barbell',
    price: 249.99,
    category: 'sports-equipment',
    imageUrl: '/placeholder.svg',
    stock: 15,
  },
  {
    id: '5',
    name: 'Park Seating Set',
    description: 'Durable outdoor seating solution',
    price: 899.99,
    category: 'urban-furniture',
    imageUrl: '/placeholder.svg',
    stock: 3,
  },
  {
    id: '6',
    name: 'Training Shorts',
    description: 'Comfortable shorts for any workout',
    price: 34.99,
    category: 'sportswear',
    imageUrl: '/placeholder.svg',
    stock: 75,
  },
];

const categoryIcons = {
  'sports-equipment': <DumbbellIcon className="w-5 h-5" />,
  'urban-furniture': <SofaIcon className="w-5 h-5" />,
  'sportswear': <ShirtIcon className="w-5 h-5" />,
};

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState<string>('all');
  const { addItem } = useCart();
  const { toast } = useToast();

  const filteredProducts = mockProducts.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      category === 'all' || product.category === category;
    return matchesSearch && matchesCategory;
  });

  const handleAddToCart = (product: Product) => {
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
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Shop Our Products</h1>
          <p className="text-muted-foreground">
            Browse our collection of high-quality sports equipment, urban furniture, and sportswear.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <Input
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-sm"
          />
          <Select
            value={category}
            onValueChange={setCategory}
          >
            <SelectTrigger className="max-w-[200px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="sports-equipment">
                <div className="flex items-center gap-2">
                  {categoryIcons['sports-equipment']}
                  Sports Equipment
                </div>
              </SelectItem>
              <SelectItem value="urban-furniture">
                <div className="flex items-center gap-2">
                  {categoryIcons['urban-furniture']}
                  Urban Furniture
                </div>
              </SelectItem>
              <SelectItem value="sportswear">
                <div className="flex items-center gap-2">
                  {categoryIcons['sportswear']}
                  Sportswear
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="flex flex-col">
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
                <p className="text-2xl font-bold">${product.price.toFixed(2)}</p>
                <p className="text-sm text-muted-foreground mt-2">
                  {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={() => handleAddToCart(product)}
                  className="w-full"
                  disabled={product.stock === 0}
                >
                  {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              No products found. Try adjusting your search or category filter.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Shop;