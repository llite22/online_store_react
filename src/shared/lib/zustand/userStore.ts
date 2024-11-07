import { User } from '@/entities/User'
import { create } from 'zustand'


interface UserStore {
    user: User | null;
    setUser: (userData: User) => void;
    clearUser: () => void;
}


export const userStore = create<UserStore>((set) => ({
    user: null,
    setUser: (userData: User) => set({ user: userData }),
    clearUser: () => set({ user: null }),
}))

