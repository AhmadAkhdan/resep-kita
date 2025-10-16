// app/components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-white text-2xl font-bold">ResepKita</Link>
                <div className="space-x-4">
                    <Link href="/" className="text-gray-300 hover:text-white">Beranda</Link>
                    <Link href="/produk" className="text-gray-300 hover:text-white">Produk</Link>
                    <Link href="/kontak" className="text-gray-300 hover:text-white">Kontak kami</Link>
                    <Link href="/tentang" className="text-gray-300 hover:text-white">Tentang kami</Link>
                </div>
            </div>
        </nav>
    );
}
