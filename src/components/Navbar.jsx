"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md sticky top-0 z-50">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-blue-400">AutoMundo</h1>

      {/* Menú */}
      <ul className="flex gap-6">
        <li>
          <Link href="/" className="hover:text-blue-400 transition">
            Inicio
          </Link>
        </li>
        <li>
          <Link href="/catalogo" className="hover:text-blue-400 transition">
            Catálogo
          </Link>
        </li>
        <li>
          <Link href="/contacto" className="hover:text-blue-400 transition">
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
}
