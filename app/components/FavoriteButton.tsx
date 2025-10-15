"use client";

import { useFavorites } from '../context/FavoritesContext';

export default function FavoriteButton({ recipeId }: { recipeId: number }) {
    const { isFavorite, addToFavorites, removeFromFavorites } = useFavorites();

    const isRecipeFavorite = isFavorite(recipeId);

    const handleToggleFavorite = () => {
        if (isRecipeFavorite) {
            removeFromFavorites(recipeId);
        } else {
            addToFavorites(recipeId);
        }
    };

    return (
        <button
            onClick={handleToggleFavorite}
            className={`px-4 py-2 rounded-lg font-semibold text-white transition-colors duration-300 ${isRecipeFavorite ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'
                }`}
        >
            {isRecipeFavorite ? 'Hapus dari Favorit' : 'Tambah ke Favorit'}
        </button>
    );
}