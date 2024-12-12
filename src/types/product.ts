export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'sports-equipment' | 'urban-furniture' | 'sportswear';
  imageUrl: string;
  stock: number;
  quoteOnly?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CheckoutFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}