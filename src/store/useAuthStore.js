import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      accessToken: null,
      refreshToken: null,
      isAuthenticated: false,

      setAuth: (accessToken, refreshToken) =>
        set((state) => ({
          accessToken,
          refreshToken: refreshToken ?? state.refreshToken,
          isAuthenticated: true,
        })),
      clearAuth: () => set({ accessToken: null, refreshToken: null, isAuthenticated: false }),
    }),
    { name: "syntime-auth" },
  ),
);

export default useAuthStore;
