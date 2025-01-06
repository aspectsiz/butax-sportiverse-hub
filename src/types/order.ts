export interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
  quoteOnly: boolean;
  imageUrl: string;
}

export interface Order {
  id: string;
  created_at: string;
  total: number;
  status: "pending" | "completed" | "quote_requested";
  items: OrderItem[];
}

export type ReviewedItems = Set<string>;