import Image from "next/image";
import Link from "next/link";

export default function CarCard({ id, marca, modelo, precio, imagen }) {
  return (
    <div className="border rounded-xl shadow-md p-4 bg-white">
      <Image src={imagen} alt={modelo} width={300} height={200} className="rounded-lg" />
      <h2 className="text-xl font-bold mt-2 text-black">{marca} {modelo}</h2>
      <p className="text-p-700 text-black">Precio: ${precio}</p>

      <Link
        href={`/autos/${id}`}
        className="inline-block mt-3 bg-blue-600 text-pink px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Ver más
      </Link>
    </div>
  );
}
