// app/favorit/page.tsx
"use client"; // Halaman ini client-side karena datanya dari context/localStorage

import { useFavorites } from "../context/FavoritesContext";
import { recipes } from "@/data/recipes";
import RecipeCard from "../components/RecipeCard";

export default function FavoritesPage() {
    const { favoriteIds } = useFavorites();

    // Filter resep lengkap berdasarkan ID yang ada di state favorit
    const favoriteRecipes = recipes.filter(recipe => favoriteIds.includes(recipe.id));

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Resep Favorit Saya</h1>
            {favoriteRecipes.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {favoriteRecipes.map((recipe) => (
                        <RecipeCard key={recipe.id} recipe={recipe} />
                    ))}
                </div>
            ) : (
                <p>Anda belum memiliki resep favorit.</p>
            )}
        </div>
    );
}