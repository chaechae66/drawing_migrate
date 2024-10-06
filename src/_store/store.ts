import { create } from "zustand";

interface Mode {
  isDark: boolean;
  setMode: () => void;
}

const useModeStore = create<Mode>((set) => ({
  isDark: true,
  setMode: () => {
    set((state) => ({ ...state, isDark: !state.isDark }));
  },
}));

export default useModeStore;
