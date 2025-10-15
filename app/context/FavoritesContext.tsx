// app/context/FavoritesContext.tsx
"use client";

import { createContext, useState, useContext, useEffect, ReactNode } from 'react';

// Definisikan tipe untuk value context
interface FavoritesContextType {
    favoriteIds: number[];
    addToFavorites: (recipeId: number) => void;
    removeFromFavorites: (recipeId: number) => void;
    isFavorite: (recipeId: number) => boolean;
}

// Beri tipe pada createContext, bisa null saat awal
const FavoritesContext = createContext<FavoritesContextType | null>(null);

export function FavoritesProvider({ children }: { children: ReactNode }) {
    // Beri tipe pada useState secara eksplisit
    const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

    useEffect(() => {
        const storedFavorites = localStorage.getItem('favoriteRecipes');
        if (storedFavorites) {
            setFavoriteIds(JSON.parse(storedFavorites));
        }
    }, []);

    // Beri tipe pada parameter fungsi
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