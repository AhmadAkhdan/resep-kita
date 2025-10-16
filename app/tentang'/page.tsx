import React from 'react';

const UtensilsIcon = () => (
    <span role="img" aria-label="utensils" className="text-7xl block mb-4">🍳</span>
);

export default function TentangKamiPage() {
    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-64px)] bg-white p-6">
            <div className="max-w-md text-center p-8 bg-white rounded-xl shadow-2xl transition duration-500 ease-in-out transform hover:scale-[1.02]">
                
                <UtensilsIcon />

                {/* Main Title */}
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
                    Tentang <span className="text-yellow-600">ResepKita</span>
                </h1>
                
                {/* Core Paragraph 1 */}
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                    ResepKita hadir sebagai sumber inspirasi memasak yang **sederhana** dan **terpercaya**. Kami percaya bahwa setiap hidangan lezat berawal dari resep yang mudah dipahami.
                </p>
                
                {/* Core Paragraph 2 (Mission) */}
                <p className="text-lg text-gray-500 mb-8">
                    Misi kami adalah menghubungkan Anda dengan ribuan resep autentik Indonesia dan global. Mulai petualangan dapur Anda bersama kami!
                </p>
            </div>
        </div>
    );
}
