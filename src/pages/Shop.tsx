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

// Temporary mock data - replace with actual API call later
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
];

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
              <SelectItem value="sports-equipment">Sports Equipment</SelectItem>
              <SelectItem value="urban-furniture">Urban Furniture</SelectItem>
              <SelectItem value="sportswear">Sportswear</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id}>
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-md"
                />
                <p className="mt-4 text-2xl font-bold">${product.price}</p>
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
      </main>
    </div>
  );
};

export default Shop;