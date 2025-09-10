import Image from "next/image";
import Link from "next/link";

const autos = [
  { id: 1, marca: "Toyota", modelo: "Corolla", precio: 15000, descripcion: "Un sedán confiable y económico.", imagen: "/Carro1.jpg" },
  { id: 2, marca: "Honda", modelo: "Civic", precio: 18000, descripcion: "Compacto, moderno y eficiente.", imagen: "/Carro2.jpg" },
  { id: 3, marca: "Ford", modelo: "Mustang", precio: 35000, descripcion: "Un deportivo clásico con mucha potencia.", imagen: "/Carro3.jpg" },
];

export default function AutoPage({ params }) {
  const auto = autos.find((a) => a.id.toString() === params.id);

  if (!auto) return <p>Auto no encontrado</p>;

  return (
    <div className="max-w-3xl mx-auto bg-white   shadow-md rounded-xl p-6">
      <Image src={auto.imagen} alt={auto.modelo} width={750} height={400} className="rounded-lg " />
      <h1 className="text-2xl font-bold mt-4 text-black">{auto.marca} {auto.modelo}</h1>
      <p className="text-green-700 text-lg mt-2 font-bold">Precio: ${auto.precio}</p>
      <p className="mt-4 text-black font-bold ">{auto.descripcion}</p>

      {/* Botón para volver */}
      <Link href="/" className="inline-block mt-6 bg-blue-600 text-white-700 px-4 py-2 rounded-lg hover:bg-blue-700">
        ← Volver al catálogo
      </Link>
    </div>
  );
}
