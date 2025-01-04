import { Badge } from "@/components/ui/badge";
import { Product } from "@/types/product";

interface ProductSpecsProps {
  product: Product;
}

export const ProductSpecs = ({ product }: ProductSpecsProps) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <h2 className="text-sm font-medium">Product Specifications:</h2>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-lg bg-muted p-3">
          <p className="text-sm text-muted-foreground">Product Code</p>
          <p className="font-medium">{product.id}</p>
        </div>
        <div className="rounded-lg bg-muted p-3">
          <p className="text-sm text-muted-foreground">Category</p>
          <p className="font-medium capitalize">{product.category.replace('-', ' ')}</p>
        </div>
        <div className="rounded-lg bg-muted p-3">
          <p className="text-sm text-muted-foreground">Stock</p>
          <p className="font-medium">{product.stock} units</p>
        </div>
        <div className="rounded-lg bg-muted p-3">
          <p className="text-sm text-muted-foreground">Status</p>
          <Badge variant={product.stock > 0 ? "default" : "destructive"}>
            {product.stock > 0 ? "In Stock" : "Out of Stock"}
          </Badge>
        </div>
      </div>
    </div>
  );
};