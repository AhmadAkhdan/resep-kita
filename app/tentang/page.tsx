import React from 'react';

const UtensilsIcon = () => (
  <span
    role="img"
    aria-label="utensils"
    className="text-8xl block mb-6"
  >
    🍳
  </span>
);

export default function TentangKamiPage() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-yellow-50 py-20 px-6 flex flex-col items-center justify-center text-center">
      <UtensilsIcon />

      {/* Judul */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-6">
        Tentang <span className="text-yellow-600">ResepKita</span>
      </h1>

      {/* Paragraf utama */}
      <p className="text-xl text-gray-700 max-w-3xl leading-relaxed mb-4">
        ResepKita hadir sebagai sumber inspirasi memasak yang{" "}
        <strong>sederhana</strong> dan <strong>terpercaya</strong>. Kami percaya bahwa
        setiap hidangan lezat berawal dari resep yang mudah dipahami.
      </p>

      {/* Paragraf misi */}
      <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
        Misi kami adalah menghubungkan Anda dengan ribuan resep autentik Indonesia
        dan global. Mulai petualangan dapur Anda bersama kami!
      </p>
    </section>
  );
}
