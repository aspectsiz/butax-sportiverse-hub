export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'sports-equipment' | 'urban-furniture' | 'sportswear';
  imageUrl: string;
  stock: number;
}

export interface CartItem extends Product {
  quantity: number;
}