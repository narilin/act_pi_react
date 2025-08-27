import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">Tienda de Autos</h1>
        <ul className="flex gap-6">
          <li><Link href="/">Inicio</Link></li>
          <li><Link href="/">Catálogo</Link></li>
          <li><Link href="#">Contacto</Link></li>
        </ul>
      </div>
    </nav>
  );
}
 