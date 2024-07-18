import { create } from "zustand";
import { persist } from "zustand/middleware";

type TokenState = {
  token: string | null;
};

type TokenAction = {
  setToken: (token: TokenState["token"]) => void;
};

export const useToken = create(
  persist<TokenState & TokenAction>(
    (set) => ({
      token: null,
      setToken: (token) => set(() => ({ token })),
    }),
    {
      name: "@kebronrents/token",
    }
  )
);
