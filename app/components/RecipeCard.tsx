// app/components/RecipeCard.tsx
import Link from 'next/link';
import { Recipe } from '../types'; // <-- Impor tipe Recipe

export default function RecipeCard({ recipe }: { recipe: Recipe }) { // <-- Terapkan tipe di sini
    return (
        <Link href={`/resep/${recipe.slug}`}>
            <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">{recipe.title}</h3>
                    <p className="text-white-700 text-base">{recipe.description}</p>
                </div>
            </div>
        </Link>
    );
}