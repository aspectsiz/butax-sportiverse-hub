import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, Product } from '@/types/product';

interface CartStore {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
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
              total: state.total + (product.price || 0),
            };
          }
          return {
            items: [...state.items, { ...product, quantity: 1 }],
            total: state.total + (product.price || 0),
          };
        });
      },
      removeItem: (productId: string) => {
        set((state) => {
          const item = state.items.find((i) => i.id === productId);
          return {
            items: state.items.filter((i) => i.id !== productId),
            total: state.total - ((item?.price || 0) * (item?.quantity || 0)),
          };
        });
      },
      updateQuantity: (productId: string, quantity: number) => {
        set((state) => {
          const item = state.items.find((i) => i.id === productId);
          if (!item) return state;
          
          const newTotal = state.total - ((item.price || 0) * item.quantity) + ((item.price || 0) * quantity);
          return {
            items: state.items.map((i) =>
              i.id === productId ? { ...i, quantity } : i
            ),
            total: newTotal,
          };
        });
      },
      clearCart: () => set({ items: [], total: 0 }),
    }),
    {
      name: 'cart-storage',
    }
  )
);