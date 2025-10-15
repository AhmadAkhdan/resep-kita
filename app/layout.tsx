// app/layout.tsx (versi update)
import "./globals.css";
import Navbar from "./components/Navbar";
import { FavoritesProvider } from "./context/FavoritesContext"; // <-- Impor Provider
import { ReactNode } from "react";
export default function RootLayout({ children }: { children: ReactNode }) { // <-- Perbaiki di sini
    return (
        <html lang="en">
            <body>
                <FavoritesProvider>
                    <Navbar />
                    <main className="container mx-auto p-4">{children}</main>
                </FavoritesProvider>
            </body>
        </html>
    );
}