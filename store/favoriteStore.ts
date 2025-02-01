"use client";
import { create } from "zustand";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

interface FavoriteStore {
  favorites: Product[];
  addToFavorites: (product: Product) => void;
  removeFromFavorites: (id: number) => void;
}

export const useFavoriteStore = create<FavoriteStore>((set) => {
  // ✅ Load from localStorage when the store initializes
  const storedFavorites =
    typeof window !== "undefined"
      ? localStorage.getItem("favorites")
      : null;
  const initialFavorites: Product[] = storedFavorites ? JSON.parse(storedFavorites) : [];

  return {
    favorites: initialFavorites,

    addToFavorites: (product) =>
      set((state) => {
        const updatedFavorites = [...state.favorites, product];
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites)); // ✅ Persist
        return { favorites: updatedFavorites };
      }),

    removeFromFavorites: (id) =>
      set((state) => {
        const updatedFavorites = state.favorites.filter((item) => item.id !== id);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites)); // ✅ Persist
        return { favorites: updatedFavorites };
      }),
  };
});
