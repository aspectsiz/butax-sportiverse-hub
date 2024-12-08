import { create } from 'zustand';
import { CartItem, Product } from '@/types/product';

interface CartStore {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
}

export const useCart = create<CartStore>((set, get) => ({
  items: [],
  total: 0,
  addItem: (product: Product) => {
    set((state) => {
      const existingItem = state.items.find((item) => item.id === product.id);
      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          total: state.total + product.price,
        };
      }
      return {
        items: [...state.items, { ...product, quantity: 1 }],
        total: state.total + product.price,
      };
    });
  },
  removeItem: (productId: string) => {
    set((state) => {
      const item = state.items.find((i) => i.id === productId);
      return {
        items: state.items.filter((i) => i.id !== productId),
        total: state.total - (item ? item.price * item.quantity : 0),
      };
    });
  },
  updateQuantity: (productId: string, quantity: number) => {
    set((state) => {
      const item = state.items.find((i) => i.id === productId);
      if (!item) return state;
      
      const newTotal = state.total - (item.price * item.quantity) + (item.price * quantity);
      return {
        items: state.items.map((i) =>
          i.id === productId ? { ...i, quantity } : i
        ),
        total: newTotal,
      };
    });
  },
  clearCart: () => set({ items: [], total: 0 }),
}));