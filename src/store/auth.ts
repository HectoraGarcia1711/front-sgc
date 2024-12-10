import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  token: string | null;
};

type Actions = {
  setToken: (token: string) => void;
  logout: () => void;
};

export const useAuthStore = create(
  persist<State & Actions>(
    (set) => ({
      token: null,
      setToken: (token: string) =>
        set(() => ({
          token,
        })),
      logout: () =>
        set(() => ({
          token: null,
        })),
    }),
    { name: "auth" }
  )
);
