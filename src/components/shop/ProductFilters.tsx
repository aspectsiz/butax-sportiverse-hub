import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { DumbbellIcon, SofaIcon, ShirtIcon } from 'lucide-react';

interface ProductFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  category: string;
  onCategoryChange: (value: string) => void;
}

const ProductFilters = ({
  searchTerm,
  onSearchChange,
  category,
  onCategoryChange,
}: ProductFiltersProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">
      <Input
        placeholder="Aranacak ürün(ler)..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="max-w-sm"
      />
      <Select
        value={category}
        onValueChange={onCategoryChange}
      >
        <SelectTrigger className="max-w-[250px]">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Tüm Kategoriler</SelectItem>
          <SelectItem value="acik-alan-spor-aleti">
            <div className="flex items-center gap-2">
              <DumbbellIcon className="w-5 h-5" />
              Açık Alan Spor Aletleri
            </div>
          </SelectItem>
          <SelectItem value="kent-mobilyalari">
            <div className="flex items-center gap-2">
              <SofaIcon className="w-5 h-5" />
              Kent Mobilyaları
            </div>
          </SelectItem>
          <SelectItem value="spor-giyim">
            <div className="flex items-center gap-2">
              <ShirtIcon className="w-5 h-5" />
              Spor Giyim
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default ProductFilters;