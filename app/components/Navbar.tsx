// app/components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-white text-2xl font-bold">ResepKita</Link>
                <div className="space-x-4">
                    <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
                    <Link href="/favorit" className="text-gray-300 hover:text-white">Favorit</Link>
                </div>
            </div>
        </nav>
    );
}