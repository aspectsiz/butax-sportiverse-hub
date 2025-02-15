import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useCart } from '@/store/useCart';
import { useToast } from '@/hooks/use-toast';
import { mockProducts } from '@/data/products';
import ProductSchema from '@/components/shop/ProductSchema';
import { ProductImageCarousel } from '@/components/shop/ProductImageCarousel';
import { ProductSpecs } from '@/components/shop/ProductSpecs';
import { ProductReviews } from '@/components/shop/ProductReviews';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Link } from 'react-router-dom';
import { Star, ArrowLeft } from 'lucide-react'; // ArrowLeft eklendi
import { Alert } from "@heroui/react"; // Alert componenti import edildi
import { useState } from 'react'; // useState import edildi
import ProductTechnicalData from '@/components/shop//ProductTechnicalData';


const ProductDetail = () => {
  const { category, slug } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const { toast } = useToast();
  const [showAlert, setShowAlert] = useState(false); // Alert görünürlüğünü kontrol etmek için state

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
          className="text-lg mb-4 flex items-center" // flex eklendi
        >
           <ArrowLeft className="mr-2 h-4 w-4" /> {/* Simgesi eklendi */}
          Mağazaya Geri Dön
        </Button>
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">Ürün bulunamadı.</p>
        </div>
      </main>
    );
  }

  const handleAddToCart = () => {
    addItem(product);
    if (product.quoteOnly) {
      setShowAlert(true); // Teklif talebine eklendiyse alert'i göster
      setTimeout(() => setShowAlert(false), 3000); // 3 saniye sonra alert'i otomatik olarak kapat
    } else {
        toast({
        title: 'Sepete eklendi',
        description: `${product.name}, sepetinize eklendi.`,
        });
    }
  };

  // Mock multiple images for the carousel
  const productImages = [
    product.imageUrl,
    product.imageUrl,
    product.imageUrl,
  ];

  return (
    <main className="container mx-auto px-4 pt-24 pb-8">
      <div className="mb-2 sm:mb-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link to="/" className="transition-colors text-muted-foreground hover:text-foreground">
                Anasayfa
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <Link to="/shop" className="transition-colors text-muted-foreground hover:text-foreground">
                Ürünlerimiz
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <Link 
                to={`/shop/${category}`}
                className="transition-colors text-muted-foreground hover:text-foreground"
              >
                {category?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className='text-foreground'>{product.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="grid md:grid-cols-2 gap-2 lg:gap-8">
        <div>
          <ProductImageCarousel 
            images={productImages}
            productName={product.name}
          />
        </div>

        <div className="space-y-8 relative"> {/*relative pozisyon */}
          <div>
            <h1 className="text-left text-3xl font-bold mb-1 sm:mb-4">{product.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-5 h-5 fill-primary text-primary"
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">(4.8/5)</span>
            </div>
            <p className="text-left text-lg text-muted-foreground">{product.description}</p>
          </div>

          {!product.quoteOnly && (
            <div className="text-left text-3xl font-bold">
              ${product.price.toFixed(2)}
            </div>
          )}

          <ProductSpecs product={product} />

          <Button
            onClick={handleAddToCart}
            className="w-full"
            size="lg"
            disabled={product.stock === 0}
          >
            {product.quoteOnly ? 'Teklif İste' : (product.stock > 0 ? 'Sepete Ekle' : 'Stokta Yok')}
          </Button>


        </div>
      </div>

      <ProductTechnicalData product={product} />

      <div className="mt-16">
        <ProductReviews productId={product.id} />
      </div>

      <ProductSchema 
        product={product}
        url={`${window.location.origin}/shop/${category}/${slug}`}
      />

       {showAlert && (
        <div className="fixed bottom-4 right-4 z-50">
           <Alert color="success" title={`${product.name} teklif talebine eklendi`} variant='solid'/>
        </div>
      )}
    </main>
  );
};

export default ProductDetail;