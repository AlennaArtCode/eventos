import Link from "next/link";
import { Heart, Sliders, Phone, Mail, MapPin, Star, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col bg-slate-950 text-slate-200 font-sans">
      
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-4 bg-gradient-to-b from-slate-900 to-slate-950">
        {/* Background Image Overlay (Simulated with a rich gradient for contrast) */}
        <div className="absolute inset-0 bg-[url('https://picsum.photos/1920/1080?random=10')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-500 mb-4">
            Producción & Gestión de Alto Nivel
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 uppercase">
            Producción y Gestión de <br />
            <span className="text-amber-500">Eventos Extraordinarios</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mb-12 leading-relaxed">
            Diseñamos, planificamos y ejecutamos celebraciones impecables. Especialistas en producción técnica de alto impacto y fiestas memorables.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 w-full max-w-2xl justify-center">
            <Link
              href="#contacto"
              className="inline-flex items-center justify-center px-8 py-4 bg-amber-500 text-black font-bold rounded-full hover:bg-amber-600 transition-colors duration-300 shadow-lg shadow-amber-500/20"
            >
              <Heart className="mr-2 h-5 w-5" />
              DISEÑAR MI BODA MEMORABLE
            </Link>
            <Link
              href="#servicios"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-amber-500 text-white font-bold rounded-full hover:bg-amber-500/10 transition-colors duration-300"
            >
              <Sliders className="mr-2 h-5 w-5 text-amber-500" />
              SOLICITAR RIDER TÉCNICO B2B
            </Link>
          </div>
        </div>
      </section>

      {/* Sección Portafolio */}
      <section id="portafolio" className="py-24 px-4 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-500 mb-2 block">
            Portafolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-wide uppercase">
            NUESTROS MOMENTOS MÁS DESTACADOS
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Item 1 */}
          <div className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900 aspect-[4/3]">
            <img src="https://picsum.photos/400/300?random=1" alt="Boda" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70 group-hover:opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-lg font-bold text-white">La Boda de Carlos & Elena</h3>
              <p className="text-sm text-amber-500">Producción Completa</p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900 aspect-[4/3]">
            <img src="https://picsum.photos/400/300?random=2" alt="Gala" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70 group-hover:opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-lg font-bold text-white">Gala Benéfica Tech</h3>
              <p className="text-sm text-amber-500">Iluminación & Audio</p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900 aspect-[4/3]">
            <img src="https://picsum.photos/400/300?random=3" alt="Concierto" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70 group-hover:opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-lg font-bold text-white">Concierto en la Ciudad</h3>
              <p className="text-sm text-amber-500">Rider Técnico</p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900 aspect-[4/3]">
            <img src="https://picsum.photos/400/300?random=4" alt="Lanzamiento" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70 group-hover:opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-lg font-bold text-white">Lanzamiento de Marca</h3>
              <p className="text-sm text-amber-500">Logística & Montaje</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Servicios */}
      <section id="servicios" className="py-24 bg-slate-900/50 border-y border-slate-800 px-4">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-500 mb-2 block">
              Servicios
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-wide uppercase">
              QUÉ HACEMOS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Servicio 1 */}
            <div className="bg-slate-950 p-10 rounded-2xl border border-slate-800 hover:border-amber-500/30 transition-colors duration-300">
              <div className="h-14 w-14 bg-amber-500/10 rounded-full flex items-center justify-center text-amber-500 mb-6">
                <Heart className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">BODAS Y CELEBRACIONES</h3>
              <p className="text-slate-400 leading-relaxed">
                Creamos la atmósfera perfecta para el día más importante de tu vida. Nos encargamos del diseño técnico y logístico para que la pista de baile nunca se vacíe y todo fluya sin preocupaciones.
              </p>
              <Link href="#contacto" className="inline-flex items-center mt-6 text-sm font-bold text-amber-500 hover:text-amber-400">
                Saber más <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Servicio 2 */}
            <div className="bg-slate-950 p-10 rounded-2xl border border-slate-800 hover:border-amber-500/30 transition-colors duration-300">
              <div className="h-14 w-14 bg-amber-500/10 rounded-full flex items-center justify-center text-amber-500 mb-6">
                <Sliders className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">PRODUCCIÓN TÉCNICA Y LOGÍSTICA</h3>
              <p className="text-slate-400 leading-relaxed">
                Proveemos soluciones técnicas robustas para Planners y Agencias. Garantizamos cumplimiento estricto de cronogramas, equipos de alta gama (Audio, Iluminación, Estructuras) y montajes precisos.
              </p>
              <Link href="#contacto" className="inline-flex items-center mt-6 text-sm font-bold text-amber-500 hover:text-amber-400">
                Saber más <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Integrado */}
      <footer id="contacto" className="py-24 px-4 bg-slate-950">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            {/* Info */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white uppercase">Contacto</h2>
              <p className="text-slate-400 max-w-md">
                Estamos listos para hacer realidad tu próximo evento. Ponte en contacto con nosotros.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center text-slate-300">
                  <Phone className="h-5 w-5 mr-3 text-amber-500" />
                  <span>+1 (234) 567-890</span>
                </li>
                <li className="flex items-center text-slate-300">
                  <Mail className="h-5 w-5 mr-3 text-amber-500" />
                  <span>info@eventospremium.com</span>
                </li>
                <li className="flex items-center text-slate-300">
                  <MapPin className="h-5 w-5 mr-3 text-amber-500" />
                  <span>Ciudad, País</span>
                </li>
              </ul>
            </div>

            {/* Simulated Map */}
            <div className="relative bg-slate-900 rounded-2xl border border-slate-800 h-64 overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-[url('https://picsum.photos/600/400?random=5')] opacity-30 bg-cover bg-center"></div>
              <div className="relative z-10 flex flex-col items-center">
                <MapPin className="h-10 w-10 text-amber-500 mb-2" />
                <span className="text-white font-bold">Google Maps Placeholder</span>
                <span className="text-slate-400 text-sm">Ubicación de la oficina</span>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} Eventos Premier. Todos los derechos reservados.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacidad</a>
              <a href="#" className="hover:text-white transition-colors">Términos</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
