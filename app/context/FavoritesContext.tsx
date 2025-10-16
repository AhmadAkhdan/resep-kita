"use client"; // <-- WAJIB ADA DI BARIS PALING ATAS

import { createContext, useState, useContext, useEffect, ReactNode } from 'react';

interface FavoritesContextType {
  favoriteIds: number[];
  addToFavorites: (recipeId: number) => void;
  removeFromFavorites: (recipeId: number) => void;
  isFavorite: (recipeId: number) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | null>(null);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

  // Efek ini akan memuat data dari localStorage saat komponen pertama kali dirender
  useEffect(() => {
    const storedFavorites = localStorage.getItem('favoriteRecipes');
    if (storedFavorites) {
      setFavoriteIds(JSON.parse(storedFavorites));
    }
  }, []); // <-- Kurung siku kosong berarti efek ini hanya berjalan sekali

  const addToFavorites = (recipeId: number) => {
    const newFavorites = [...favoriteIds, recipeId];
    setFavoriteIds(newFavorites);
    localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorites));
  };

  const removeFromFavorites = (recipeId: number) => {
    const newFavorites = favoriteIds.filter(id => id !== recipeId);
    setFavoriteIds(newFavorites);
    localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorites));
  };

  const isFavorite = (recipeId: number) => {
    return favoriteIds.includes(recipeId);
  };
  
  return (
    <FavoritesContext.Provider value={{ favoriteIds, addToFavorites, removeFromFavorites, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
      throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
}