import CarCard from "./CarCard";

const autos = [
  { id: 1, marca: "Toyota", modelo: "Corolla", precio: 15000, imagen: "/auto1.jpg" },
  { id: 2, marca: "Honda", modelo: "Civic", precio: 18000, imagen: "/auto2.jpg" },
  { id: 3, marca: "Ford", modelo: "Mustang", precio: 35000, imagen: "/auto3.jpg" },
];

export default function CarList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {autos.map((auto) => (
        <CarCard
          key={auto.id}
          id={auto.id}
          marca={auto.marca}
          modelo={auto.modelo}
          precio={auto.precio}
          imagen={auto.imagen}
        />
      ))}
    </div>
  );
}