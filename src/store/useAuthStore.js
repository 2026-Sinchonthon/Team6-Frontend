import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getUserIdFromToken } from "../lib/jwt";

const useAuthStore = create(
  persist(
    (set) => ({
      accessToken: null,
      refreshToken: null,
      userId: null,
      isAuthenticated: false,

      setAuth: (accessToken, refreshToken) =>
        set((state) => ({
          accessToken,
          refreshToken: refreshToken ?? state.refreshToken,
          userId: getUserIdFromToken(accessToken),
          isAuthenticated: true,
        })),
      clearAuth: () => set({ accessToken: null, refreshToken: null, userId: null, isAuthenticated: false }),
    }),
    { name: "syntime-auth" },
  ),
);

export default useAuthStore;
