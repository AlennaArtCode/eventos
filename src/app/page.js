import Link from "next/link";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-black text-white text-center px-4">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight max-w-4xl">
        Producción y Gestión de Eventos Extraordinarios
      </h1>
      <p className="text-xl text-gray-300 mb-10 max-w-2xl">
        Diseñamos, planificamos y ejecutamos celebraciones impecables. Especialistas en producción técnica de alto impacto y fiestas memorables.
      </p>
      <div className="flex flex-col sm:flex-row gap-6">
        <Link
          href="/bodas"
          className="px-8 py-4 bg-white text-black font-semibold rounded hover:bg-gray-200 transition-colors duration-200"
        >
          ¿Te casas? Diseña tu fiesta
        </Link>
        <Link
          href="/agencias"
          className="px-8 py-4 border border-white font-semibold rounded hover:bg-white hover:text-black transition-colors duration-200"
        >
          Agencias: Rider Técnico
        </Link>
      </div>
    </div>
  );
}
