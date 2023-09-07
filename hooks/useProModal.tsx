import { create } from "zustand";

interface UseProState {
  isOpen: boolean;
  toggleState: () => void;
}
export const useProModal = create<UseProState>((set) => ({
  isOpen: false,
  toggleState: () => set((state) => ({ isOpen: !state.isOpen })),
}));
