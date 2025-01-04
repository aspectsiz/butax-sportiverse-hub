import { Product } from '@/types/product';

interface ProductListSchemaProps {
  products: Product[];
  baseUrl: string;
}

const ProductListSchema = ({ products, baseUrl }: ProductListSchemaProps) => {
  const schema = {
    "@context": "https://schema.org/",
    "@type": "ItemList",
    "itemListElement": products.map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": product.name,
        "description": product.description,
        "image": product.imageUrl,
        "url": `${baseUrl}/${product.category}/${product.name.toLowerCase().replace(/\s+/g, '-')}`,
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
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default ProductListSchema;