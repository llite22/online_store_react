import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CartStore {
  addedItems: Record<number, boolean>;
  toggleItem: (id: number) => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      addedItems: {},
      toggleItem: (id: number) => {
        set((state) => ({
          addedItems: {
            ...state.addedItems,
            [id]: !state.addedItems[id],
          },
        }));
      },
    }),
    { name: 'cart-storage' }
  )
);

