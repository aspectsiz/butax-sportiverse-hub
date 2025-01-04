export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  stock: number;
  quoteOnly?: boolean;
  specifications?: {
    dimensions?: {
      length: number;
      width: number;
      height: number;
    };
    weight?: number;
    material?: string;
    minUserHeight?: number;
    safetyArea?: number;
    installation?: string;
    standard?: string;
    origin?: string;
  };
}

export interface CheckoutFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}