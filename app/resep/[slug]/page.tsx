// app/resep/[slug]/page.tsx
import { recipes } from '@/data/recipes';
import FavoriteButton from '@/app/components/FavoriteButton';
import { useParams } from 'next/navigation';
import { Recipe } from '@/app/types';

// Fungsi untuk menemukan data resep berdasarkan slug dari URL
function getRecipe(slug: string) {
    return recipes.find((recipe) => recipe.slug === slug);
}

export default function RecipeDetailPage() {
    const params = useParams();
    const slug = params.slug as string; // Pastikan slug adalah string
    const recipe = recipes.find((recipe) => recipe.slug === slug);

    if (!recipe) {
        return <div>Resep tidak ditemukan!</div>;
    }

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-extrabold mb-4">{recipe.title}</h1>
            <img src={recipe.image} alt={recipe.title} className="w-full h-96 object-cover rounded-lg mb-6" />

            <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">Bahan-bahan:</h2>
                <ul className="list-disc list-inside">
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
            </div>

            <div>
                <h2 className="text-2xl font-bold mb-2">Langkah-langkah:</h2>
                <ol className="list-decimal list-inside space-y-2">
                    {recipe.steps.map((step, index) => (
                        <li key={index}>{step}</li>
                    ))}
                </ol>
            </div>
        </div>
    );
}