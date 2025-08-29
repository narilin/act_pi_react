import Image from "next/image";
import Link from "next/link";

export default function CarCard({ id, marca, modelo, precio, imagenes }) {
  return (
    <div className="bg-white border rounded-xl p-4 shadow-md hover:shadow-lg transition">
      <div className="flex flex-col gap-2"> {/* Contenedor para las imágenes */}
        {imagenes.map((imagen, index) => (
          <Image 
            key={index}
            src={imagen} 
            alt={`${marca} ${modelo} - imagen ${index + 1}`} 
            width={300} 
            height={200} 
            className="rounded-lg object-cover" 
          />
        ))}
      </div>
      <h2 className="text-xl font-bold mt-2">{marca} {modelo}</h2>
      <p className="text-gray-700">Precio: ${precio}</p>
      <Link href={`/autos/${id}`} className="text-blue-500 hover:underline">
        Ver más
      </Link>
    </div>
  );
}

import CarCard from "./CarCard";

export default function HomePage() {
  const autos = [
    {
      id: 1,
      marca: "Ford",
      modelo: "Mustang",
      precio: 25000,
      imagenes: [
        "/Carro1.jpg", 
        "/Carro2.jpg", 
        "/Carro3.jpg"
      ],
    },
    // Puedes agregar más autos aquí
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      {autos.map((auto) => (
        <CarCard
          key={auto.id}
          id={auto.id}
          marca={auto.marca}
          modelo={auto.modelo}
          precio={auto.precio}
          imagenes={auto.imagenes} // Aquí se pasa el array de imágenes
        />
      ))}
    </div>
  );
}