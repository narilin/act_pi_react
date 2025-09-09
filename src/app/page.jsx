import Link from "next/link";
import CardList from "@/components/CardList";

export default function CatalogoPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Catálogo de Autos</h1>
      
      {/* Lista de autos */}
      <CardList />

      {/* Botón para volver */}
      <div className="mt-8 text-center">
        <Link href="/">
          <button className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-800">
            ← Volver al Inicio
          </button>
        </Link>
      </div>
    </div>
  );
}
