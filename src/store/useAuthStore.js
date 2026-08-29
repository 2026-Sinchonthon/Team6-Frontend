import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      accessToken: null,
      isAuthenticated: false,

      setAuth: (accessToken) => set({ accessToken, isAuthenticated: true }),
      clearAuth: () => set({ accessToken: null, isAuthenticated: false }),
    }),
    { name: "syntime-auth" },
  ),
);

export default useAuthStore;
