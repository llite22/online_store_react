import { SneakerModel } from '@/entities/Sneaker/ui/model/types/sneaker';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CartStore {
  items: Record<number, boolean>;
  totalPrice: number;
  toggleItem: (product: SneakerModel) => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: {},
      totalPrice: 0,
      toggleItem: (product: SneakerModel) => {
        set((state) => ({
          items: {
            ...state.items,
            [product.id]: !state.items[product.id],
          },
          totalPrice: state.totalPrice + (state.items[product.id] ? -product.price : product.price),
        }));
      },
    }),
    { name: 'cart-storage' }
  )
);
