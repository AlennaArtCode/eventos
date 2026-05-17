export default function Agencias() {
  return (
    <div className="flex-1 flex flex-col bg-slate-900 text-slate-100">
      <div className="max-w-5xl mx-auto py-24 px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Tu Aliado Estratégico en Producción
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Proveemos soluciones técnicas robustas para Planners y Agencias. Garantizamos cumplimiento estricto de cronogramas, equipos de alta gama y montajes precisos.
          </p>
        </div>

        <div className="bg-slate-800 p-10 rounded-xl shadow-xl border border-slate-700">
          <h2 className="text-2xl font-semibold mb-6 border-b border-slate-700 pb-4">
            Rider Técnico y Capacidades Operativas
          </h2>
          <ul className="space-y-5 text-slate-300 text-lg">
            <li className="flex items-center">
              <span className="text-blue-400 mr-4 text-xl">✔</span> 
              Sistemas de Audio Line Array y Monitoreo (Configuración escalable)
            </li>
            <li className="flex items-center">
              <span className="text-blue-400 mr-4 text-xl">✔</span> 
              Iluminación Robótica, Consolas DMX y Diseño Visual
            </li>
            <li className="flex items-center">
              <span className="text-blue-400 mr-4 text-xl">✔</span> 
              Estructuras Truss, Motores y Tarimas Certificadas
            </li>
            <li className="flex items-center">
              <span className="text-blue-400 mr-4 text-xl">✔</span> 
              Personal técnico y operadores de consola in-situ durante todo el evento
            </li>
          </ul>

          <div className="mt-12 text-center">
            <button className="px-10 py-4 bg-blue-600 text-white font-bold rounded hover:bg-blue-500 transition-colors duration-200">
              Agendar Reunión Comercial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
