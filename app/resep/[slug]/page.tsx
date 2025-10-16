// app/resep/[slug]/page.tsx

"use client";

import { recipes } from '@/data/recipes';
import { useParams } from 'next/navigation';
import { Recipe } from '@/app/types';

// Fungsi untuk menemukan data resep berdasarkan slug dari URL
function getRecipe(slug: string): Recipe | undefined {
    return recipes.find((recipe) => recipe.slug === slug);
}

export default function RecipeDetailPage() {
    const params = useParams() as { slug?: string };
    const slug = params.slug ?? '';
    const recipe = getRecipe(slug);

    if (!recipe) {
        return <div>Resep tidak ditemukan!</div>;
    }

    return (
        <main className="max-w-4xl mx-auto">
            <header>
                <h1 className="text-4xl font-extrabold mb-4">{recipe.title}</h1>
            </header>
            <img
                src={recipe.image || '/placeholder.jpg'}
                alt={recipe.title}
                className="w-full h-96 object-cover rounded-lg mb-6"
            />

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-2">Bahan-bahan:</h2>
                <ul className="list-disc list-inside">
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-2">Langkah-langkah:</h2>
                <ol className="list-decimal list-inside space-y-2">
                    {recipe.steps.map((step, index) => (
                        <li key={index}>{step}</li>
                    ))}
                </ol>
            </section>
        </main>
    );
}