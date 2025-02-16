
import { Link } from 'react-router-dom';
import { Product } from '@/types/product';
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/react";
import { Button } from "@/components/ui/button";
import { useCart } from '@/store/useCart';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();

  return (
    <Card className="w-full">
      <CardHeader className="p-0">
        <Link to={`/market/${product.category}/${product.slug}`}>
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
        </Link>
      </CardHeader>
      <CardBody className="p-4">
        <Link 
          to={`/market/${product.category}/${product.slug}`}
          className="text-lg font-semibold hover:text-primary"
        >
          {product.name}
        </Link>
        <p className="text-sm text-muted-foreground mt-2">{product.description}</p>
        <p className="text-lg font-bold mt-2">${product.price}</p>
      </CardBody>
      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={() => addItem(product)} 
          className="w-full"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
