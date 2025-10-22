import Link from 'next/link';

export default function RecipeCard({ recipe }) {
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
