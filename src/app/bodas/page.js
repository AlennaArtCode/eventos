export default function Bodas() {
  return (
    <div className="flex-1 flex flex-col bg-neutral-50 text-neutral-900">
      <div className="max-w-6xl mx-auto py-24 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900">
          La Fiesta de tus Sueños
        </h1>
        <p className="text-lg md:text-xl text-neutral-600 mb-16 max-w-3xl mx-auto">
          Creamos la atmósfera perfecta para el día más importante de tu vida. Nos encargamos del diseño técnico y logístico para que la pista de baile nunca se vacíe.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="p-8 bg-white shadow-sm border border-neutral-100 rounded-lg text-left">
            <h3 className="text-xl font-semibold mb-3">Iluminación Arquitectónica</h3>
            <p className="text-neutral-500">Transformamos el espacio de recepción con diseño de luces perimetrales y de acento.</p>
          </div>
          <div className="p-8 bg-white shadow-sm border border-neutral-100 rounded-lg text-left">
            <h3 className="text-xl font-semibold mb-3">Sonido Inmersivo</h3>
            <p className="text-neutral-500">Equipos de alta fidelidad calibrados específicamente para la acústica de tu locación.</p>
          </div>
          <div className="p-8 bg-white shadow-sm border border-neutral-100 rounded-lg text-left">
            <h3 className="text-xl font-semibold mb-3">Efectos Especiales</h3>
            <p className="text-neutral-500">Pólvora fría, humo bajo y pirotecnia controlada para los momentos cumbre.</p>
          </div>
        </div>

        {/* Formulario de Cotización (Requerido por el prompt original) */}
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-sm border border-neutral-100 text-left">
          <h2 className="text-2xl font-bold mb-6 text-center text-neutral-900">Solicitar Cotización</h2>
          <form className="space-y-4">
            <div>
              <label className="text-sm font-medium text-neutral-700">Nombre completo</label>
              <input type="text" className="mt-1 w-full p-3 bg-neutral-50 border border-neutral-200 rounded-md focus:outline-none focus:border-neutral-900" placeholder="Tu nombre" />
            </div>
            <div>
              <label className="text-sm font-medium text-neutral-700">Correo electrónico</label>
              <input type="email" className="mt-1 w-full p-3 bg-neutral-50 border border-neutral-200 rounded-md focus:outline-none focus:border-neutral-900" placeholder="tu@email.com" />
            </div>
            <div>
              <label className="text-sm font-medium text-neutral-700">Fecha del evento</label>
              <input type="date" className="mt-1 w-full p-3 bg-neutral-50 border border-neutral-200 rounded-md focus:outline-none focus:border-neutral-900" />
            </div>
            <div>
              <label className="text-sm font-medium text-neutral-700">Detalles del evento</label>
              <textarea className="mt-1 w-full p-3 bg-neutral-50 border border-neutral-200 rounded-md focus:outline-none focus:border-neutral-900" rows="4" placeholder="Cuéntanos más sobre lo que necesitas..."></textarea>
            </div>
            <button type="button" className="w-full px-10 py-4 bg-neutral-900 text-white font-bold rounded hover:bg-neutral-800 transition-colors duration-200">
              Cotizar Producción
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
