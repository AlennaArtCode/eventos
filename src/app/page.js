import Link from "next/link";
import { Heart, Sliders, Phone, Mail, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col bg-[#020617] text-slate-200 font-sans overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center pt-20">
        {/* Background Image (Split screen style generated image) */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero_bg.png')" }}
        ></div>
        
        {/* Dark Overlays for text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent"></div>

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 flex flex-col items-center mt-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6">
            Producción y Gestión de <br className="hidden md:block" />
            Eventos Extraordinarios
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-4xl mb-12 font-medium">
            Diseñamos, planificamos y ejecutamos celebraciones impecables. <br className="hidden md:block" />
            Especialistas en producción técnica de alto impacto y fiestas memorables.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 w-full justify-center items-center">
            {/* Button 1 */}
            <Link
              href="/bodas"
              className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 text-black font-bold rounded-md hover:from-yellow-500 hover:to-yellow-300 transition-all duration-300 shadow-[0_0_20px_rgba(234,179,8,0.25)] min-w-[320px]"
            >
              <Heart className="mr-3 h-5 w-5 text-black" />
              DISEÑAR MI BODA MEMORABLE
            </Link>
            
            {/* Button 2 */}
            <Link
              href="/agencias"
              className="group inline-flex items-center justify-center px-8 py-4 border border-yellow-500 text-white font-bold rounded-md hover:bg-yellow-500/10 transition-all duration-300 backdrop-blur-sm min-w-[320px]"
            >
              <Sliders className="mr-3 h-5 w-5 text-yellow-500 group-hover:text-yellow-400 transition-colors" />
              SOLICITAR RIDER TÉCNICO B2B
            </Link>
          </div>
        </div>
      </section>

      {/* Sección Servicios */}
      <section id="servicios" className="py-20 px-4 bg-[#020617] relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
        
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-widest uppercase">
              QUÉ HACEMOS
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Bodas */}
            <div className="bg-[#0b1120] p-10 rounded-xl border border-slate-800 shadow-2xl flex flex-col items-center text-center group hover:border-yellow-500/30 transition-colors duration-500 relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Heart className="h-12 w-12 text-yellow-500 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4 tracking-wider">BODAS Y CELEBRACIONES</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                Diseñamos la atmósfera perfecta para tu día más importante. Nos encargamos de la iluminación arquitectónica, el sonido inmersivo y cada detalle técnico para que tu fiesta sea legendaria.
              </p>
              <Link href="/bodas" className="mt-6 text-sm font-bold text-yellow-500 hover:text-yellow-400 flex items-center">
                Ver más detalles <Sliders className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Producción Técnica */}
            <div className="bg-[#0b1120] p-10 rounded-xl border border-slate-800 shadow-2xl flex flex-col items-center text-center group hover:border-yellow-500/30 transition-colors duration-500 relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Sliders className="h-12 w-12 text-yellow-500 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4 tracking-wider">PRODUCCIÓN TÉCNICA Y LOGÍSTICA</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                El aliado estratégico que tu agencia necesita. Rider técnico de última generación, estructuras certificadas y un equipo humano dedicado a garantizar el éxito de tu evento B2B.
              </p>
              <Link href="/agencias" className="mt-6 text-sm font-bold text-yellow-500 hover:text-yellow-400 flex items-center">
                Ver más detalles <Sliders className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Integrado */}
      <footer id="contacto" className="bg-[#0b1120] border-t border-slate-800 pt-16 pb-8 px-4">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            
            {/* Contacto Izquierda */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white tracking-widest uppercase mb-8">Contacto</h2>
              <ul className="space-y-6">
                <li className="flex items-center text-slate-300 hover:text-white transition-colors">
                  <div className="bg-slate-900 p-3 rounded-full mr-4 border border-slate-800">
                    <Phone className="h-5 w-5 text-yellow-500" />
                  </div>
                  <span className="text-lg">+1 (234) 567-890</span>
                </li>
                <li className="flex items-center text-slate-300 hover:text-white transition-colors">
                  <div className="bg-slate-900 p-3 rounded-full mr-4 border border-slate-800">
                    <Mail className="h-5 w-5 text-yellow-500" />
                  </div>
                  <span className="text-lg">info@eventospremier.com</span>
                </li>
                <li className="flex items-center text-slate-300 hover:text-white transition-colors">
                  <div className="bg-slate-900 p-3 rounded-full mr-4 border border-slate-800">
                    <MapPin className="h-5 w-5 text-yellow-500" />
                  </div>
                  <span className="text-lg">Centro de Convenciones, Ciudad</span>
                </li>
              </ul>
            </div>

            {/* Mapa Derecha */}
            <div className="relative w-full h-80 rounded-xl overflow-hidden border border-slate-800 group bg-slate-900 flex items-center justify-center">
              <div 
                className="absolute inset-0 opacity-20 bg-cover bg-center grayscale"
                style={{ backgroundImage: "url('/hero_bg.png')" }}
              ></div>
              <div className="relative z-10 flex flex-col items-center p-6 bg-[#020617]/80 backdrop-blur-sm rounded-lg border border-slate-800">
                <MapPin className="h-8 w-8 text-yellow-500 mb-2" />
                <span className="text-white font-bold tracking-widest">MAPA DE GOOGLE</span>
                <span className="text-slate-400 text-sm mt-1">Ubicación de la Oficina</span>
              </div>
            </div>

          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
            <p className="tracking-wide">
              &copy; {new Date().getFullYear()} EVENTOS PREMIER. Su visión, nuestra ejecución.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-yellow-500 transition-colors">Política de Privacidad</a>
              <a href="#" className="hover:text-yellow-500 transition-colors">Términos de Servicio</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
