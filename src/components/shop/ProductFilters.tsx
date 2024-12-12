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
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="max-w-sm"
      />
      <Select
        value={category}
        onValueChange={onCategoryChange}
      >
        <SelectTrigger className="max-w-[200px]">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Categories</SelectItem>
          <SelectItem value="sports-equipment">
            <div className="flex items-center gap-2">
              <DumbbellIcon className="w-5 h-5" />
              Sports Equipment
            </div>
          </SelectItem>
          <SelectItem value="urban-furniture">
            <div className="flex items-center gap-2">
              <SofaIcon className="w-5 h-5" />
              Urban Furniture
            </div>
          </SelectItem>
          <SelectItem value="sportswear">
            <div className="flex items-center gap-2">
              <ShirtIcon className="w-5 h-5" />
              Sportswear
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default ProductFilters;