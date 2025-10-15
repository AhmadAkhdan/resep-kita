// app/page.tsx

import { recipes } from "@/data/recipes";
import RecipeCard from "./components/RecipeCard";

export default function HomePage() {

    // TAMBAHKAN BARIS INI UNTUK DEBUG
    console.log("Isi variabel recipes:", recipes);

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Semua Resep</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recipes.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </div>
    );
}