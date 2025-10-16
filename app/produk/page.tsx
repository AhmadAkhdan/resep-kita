// app/produk/page.tsx

import Link from "next/link";
import Image from "next/image";
import { categories } from "@/data/categories.js";

export default function ProdukPage() {
  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-black-800">
        Kategori Produk
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="group rounded-lg overflow-hidden shadow-lg relative hover:scale-[1.02] transition-transform duration-200"
          >
            <Image
              src={category.image}
              alt={`Gambar untuk kategori ${category.name}`}
              width={400}
              height={300}
              className="w-full h-48 object-cover block"
              priority
              style={{ objectFit: "cover", display: "block" }}
            />

    
            <div className="absolute inset-0 bg-black/30 z-10 group-hover:bg-black/40 transition-colors duration-200"></div>

    
            <h2 className="absolute bottom-4 left-4 text-2xl font-bold text-white z-20">
              {category.name}
            </h2>

            <Link
              href={`/produk/${category.name.toLowerCase()}`}
              className="absolute inset-0 z-30"
            >
              <span className="sr-only">
                Lihat kategori {category.name}
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
