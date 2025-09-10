import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screenpx-6 py-10">
        {/* Contenedor principal */}
        <div className="w-full max-w-6xl bg-pink-700 p-8 rounded-xl shadow-md text-white">
          {/* Título arriba */}
          <h1 className="text-3xl font-bold text-center mb-8">
            Concesionario Automundo
          </h1>

          {/* Contenido en 2 columnas */}
          <div className="grid grid-cols-2 gap-8 items-center">
            {/* Imagen a la izquierda */}
            <div className="flex justify-center">
              <Image
                src="/auto.jpg" // Asegúrate que la imagen esté en /public
                alt="Auto principal"
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* Texto a la derecha */}
            <div className="space-y-4 text-lg">
              <p>
                <strong>Dirección:</strong> Calle Falsa 123
              </p>
              <p>
                <strong>Teléfono:</strong> 333 333 3333
              </p>
              <p>
                <strong>Horario:</strong> Lunes a Viernes, 9am - 6pm
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
