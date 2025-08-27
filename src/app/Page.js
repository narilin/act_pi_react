import CarList from "../components/CarList";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8">Catálogo de Autos</h1>
      <CarList />
    </div>
  );
}