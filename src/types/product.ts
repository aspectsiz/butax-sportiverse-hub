export interface Product {
  price: any;
  id: string;
  name: string;
  description: string;
  category: string;
  imageUrl: string;
  stock: number;
  quoteOnly?: boolean;
  specifications?: {
    dimensions?: {
      length?: number;
      width?: number;
      height?: number;
    };
    totalWeight?: string; // Toplam ağırlık
    weightUnit?: string; // Ağırlık birimi (örneğin, "KG")
    material?: string;
    minUserHeight?: string;
    safetyArea?: string;
    installation?: string;
    standard?: string;
    origin?: string;
  };
  slug: string;
  rating: number;
  sales: string;
  isBestSeller: boolean;
  isAdvantageous: boolean;
  isLowPrice: boolean;
  isVerifiedSeller: boolean;
  isVideoAvailable: boolean;
  normalizedCategory: string;
  seoKeywords: string;
  metaDescription: string;
  campaign: string;
  ageRange: string;
  color1: string;
  color2: string;
  color3: string;
  color4: string;
  color5: string;
  cargodelivery: string;
  hedefbolge: string;
  length: string;
  width: string;
  height: string;
  equipmentWeight: string;
  userHeight: string;
  safetyArea: string;
  baseMounting: string;
  standard: string;
  countryOfManufacture: string;
  metalParts: string;
  tubeStrengths: string;
  coatingSolution: string;
  productCode: string; // Ürün kodu eklendi
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