"use client";

import { recipes } from '@/data/recipes';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation'; // <-- 1. Impor useRouter

export default function RecipeDetailPage() {
  const params = useParams();
  const router = useRouter(); // <-- 2. Inisialisasi router
  const slug = params.slug as string;
  const recipe = recipes.find((recipe) => recipe.slug === slug);

  if (!recipe) {
    return <div>Resep tidak ditemukan!</div>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* 3. Tambahkan tombol kembali di sini */}
      <button 
        onClick={() => router.back()}
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mb-5"
      >
        &larr; Kembali
      </button>

      <div className="mb-4">
        <h1 className="text-4xl font-extrabold">{recipe.title}</h1>
      </div>
      
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