import React from 'react';
const UtensilsIcon = () => (
    <span role="img" aria-label="utensils" className="text-6xl">🍳</span>
);

const TentangKami: React.FC = () => {

  return (
    <div className="flex items-center justify-center h-[calc(100vh-64px)] bg-white font-sans p-6">
      <div className="max-w-md text-center p-8">
        <UtensilsIcon /> 
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
          Tentang <span className="text-yellow-600">ResepKita</span>
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-4">
          ResepKita hadir sebagai sumber inspirasi memasak yang **sederhana** dan **terpercaya**. Kami percaya bahwa setiap hidangan lezat berawal dari resep yang mudah dipahami.
        </p>
        <p className="text-lg text-gray-500 mb-8">
          Misi kami adalah menghubungkan Anda dengan ribuan resep autentik Indonesia dan global. Mulai petualangan dapur Anda bersama kami!
        </p>
      </div>
    </div>
  );
};

export default function TentangKamiPage() {
  return (
    <TentangKami />
  );
}