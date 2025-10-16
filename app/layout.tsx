import "./globals.css";
import Navbar from "./components/Navbar";
import { FavoritesProvider } from "./context/FavoritesContext";
import { ReactNode } from "react";

export const metadata = {
  title: "ResepKita",
  description: "Kumpulan resep masakan Indonesia",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <FavoritesProvider> {/* <-- Pastikan provider membungkus semuanya */}
          <Navbar />
          <main className="container mx-auto p-4">{children}</main>
        </FavoritesProvider>
      </body>
    </html>
  );
}