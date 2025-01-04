import { Product } from '@/types/product';

interface ProductSchemaProps {
  product: Product;
  url: string;
}

const ProductSchema = ({ product, url }: ProductSchemaProps) => {
  const schema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": product.imageUrl,
    "url": url,
    "brand": {
      "@type": "Brand",
      "name": "BUTAX"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": product.price,
      "availability": product.stock > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default ProductSchema;