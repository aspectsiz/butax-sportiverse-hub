import { Product } from '@/types/product';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/store/useCart';
import { DumbbellIcon, SofaIcon, ShirtIcon } from 'lucide-react';
import { Alert } from "@heroui/react";
import { useState } from 'react'; // useState import edildi

const categoryIcons = {
  'acik-alan-spor-aleti': <DumbbellIcon className="w-5 h-5" />,
  'kent-mobilyalari': <SofaIcon className="w-5 h-5" />,
  'spor-giyim': <ShirtIcon className="w-5 h-5" />,
};

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [showAlert, setShowAlert] = useState(false); // Alert görünürlüğünü kontrol etmek için state

  const handleAddToCart = () => {
    addItem(product);
    if (product.quoteOnly) {
      setShowAlert(true); // Teklif talebine eklendiyse alert'i göster
      setTimeout(() => setShowAlert(false), 3000); // 3 saniye sonra alert'i otomatik olarak kapat
    }
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
          <p className="text-lg font-semibold text-accent"></p>
        )}
        <p className="text-sm text-muted-foreground mt-2">
          {product.stock > 0 ? `${product.stock} adet stokta bulunmaktadır.` : 'Stokta Yok'}
        </p>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button
          onClick={() => navigate(getProductUrl(product))}
          variant="outline"
          className="flex-1"
        >
          İncele
        </Button>
        <Button
          onClick={handleAddToCart}
          className="flex-1"
          disabled={product.stock === 0}
        >
          {product.quoteOnly ? 'Teklif İsteyin' : (product.stock > 0 ? 'Sepete Ekle' : 'Stokta Yok')}
        </Button>
      </CardFooter>
        {showAlert && (
          <div className="fixed bottom-4 right-4 z-50"> {/* Sabit pozisyon ve sağ alta yerleştirme */}
            <Alert color="success" title={`${product.name} teklif talebine eklendi`} variant='solid'/>
          </div>
        )}
    </Card>
  );
};

export default ProductCard;