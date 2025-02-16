import { Badge } from "@/components/ui/badge";
import { Product } from "@/types/product";
import {Divider} from "@heroui/divider";

interface ProductSpecsProps {
  product: Product;
}

export const ProductSpecs = ({ product }: ProductSpecsProps) => {
  return (
    <div className="space-y-2">
      {/* Flex container eklendi */}
      <div className="flex items-center gap-2">
        <h2 className="text-md font-medium text-muted-foreground whitespace-nowrap">Öne Çıkan Özellikler</h2>
        <div className="w-full max-w-full">
          <Divider className="" /> {/* Divider'a sınıf eklenmedi */}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-lg bg-muted p-3">
          <p className="text-sm text-muted-foreground">Ürün Kodu</p>
          <p className="font-medium text-auth-foreground">{product.productCode}</p>
        </div>
        <div className="rounded-lg bg-muted p-3">
          <p className="text-sm text-muted-foreground">Hedef Kas Gruplari</p>
          <p className="font-medium capitalize text-auth-foreground">{product.hedefbolge}</p>
        </div>
        <div className="rounded-lg bg-muted p-3">
          <p className="text-sm text-muted-foreground">Ürün Kategorisi</p>
          <p className="font-medium capitalize text-auth-foreground">
            {product.category.replace(/-/g, ' ')}
          </p>
        </div>
        <div className="rounded-lg bg-muted p-3">
          <p className="text-sm text-muted-foreground">Alternatif Ürün İsmi</p>
          <p className="font-medium text-auth-foreground">{product.normalizedCategory} {product.name}</p>
        </div>
        <div className="rounded-lg bg-muted p-3">
          <p className="text-sm text-muted-foreground">Stok Adeti</p>
          <p className="font-medium text-auth-foreground">{product.stock} adet</p>
        </div>
        <div className="rounded-lg bg-muted p-3">
          <p className="text-sm text-muted-foreground">Stok Durumu</p>
          <Badge variant={product.stock > 0 ? "default" : "destructive"}>
            {product.stock > 0 ? "Sokta Var" : "Stok Yok"}
          </Badge>
        </div>
      </div>
    </div>
  );
};