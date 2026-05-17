import Link from "next/link";
import { Heart, Sliders, Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col bg-[#020617] text-slate-200 font-sans overflow-x-hidden selection:bg-[#D4AF37]/30">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero_bg.png')" }}
        ></div>
        
        {/* Dark Overlays for text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/80 to-transparent"></div>

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 flex flex-col items-center pt-24 pb-10">
          <span className="text-sm font-medium uppercase tracking-[0.3em] text-[#D4AF37] mb-6">
            Excelencia en cada detalle
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8 leading-tight drop-shadow-md">
            Producción y Gestión de <br className="hidden md:block" />
            Eventos Extraordinarios
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mb-14 font-light leading-relaxed">
            Diseñamos, planificamos y ejecutamos celebraciones impecables. Especialistas en producción técnica de alto impacto y fiestas verdaderamente memorables.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 w-full justify-center items-center">
            {/* Button 1 */}
            <Link
              href="/bodas"
              className="group inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-[#D4AF37] to-[#AA771C] text-slate-950 font-bold rounded-full hover:opacity-90 transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-[#D4AF37]/10 min-w-[320px]"
            >
              <Heart className="mr-3 h-5 w-5 text-slate-950" />
              DISEÑAR MI EVENTO MEMORABLE
            </Link>
            
            {/* Button 2 */}
            <Link
              href="/agencias"
              className="group inline-flex items-center justify-center px-10 py-4 border border-white/20 bg-white/5 backdrop-blur-sm text-white font-bold rounded-full hover:bg-white/10 hover:border-[#D4AF37]/50 transform hover:-translate-y-0.5 transition-all duration-300 min-w-[320px]"
            >
              <Sliders className="mr-3 h-5 w-5 text-[#D4AF37] group-hover:text-[#F3E5AB] transition-colors" />
              SOLICITAR PRODUCCIÓN TÉCNICA
            </Link>
          </div>
        </div>
      </section>

      {/* Sección Servicios (Rediseñada para Lujo B2B/B2C) */}
      <section id="servicios" className="py-32 px-4 bg-[#020617] relative">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="text-center mb-24">
            <h2 className="text-sm font-semibold text-[#D4AF37] tracking-[0.3em] uppercase mb-4">
              Nuestra Especialidad
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              QUÉ HACEMOS
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Bodas */}
            <div className="relative p-12 md:p-14 rounded-[2rem] bg-gradient-to-b from-[#0b1120] to-[#020617] border border-white/5 overflow-hidden group hover:border-[#D4AF37]/30 transition-all duration-500">
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 bg-[#D4AF37]/10 rounded-full blur-3xl group-hover:bg-[#D4AF37]/20 transition-all duration-500"></div>
              
              <div className="relative z-10 flex flex-col items-start text-left h-full">
                <div className="mb-10 inline-flex">
                  <Heart className="h-10 w-10 text-[#D4AF37]" strokeWidth={1.5} />
                </div>
                
                <h4 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-wide group-hover:text-[#D4AF37] transition-colors">
                  Bodas y Celebraciones
                </h4>
                
                <p className="text-slate-400 text-lg leading-relaxed font-light mb-12 flex-grow">
                  Diseñamos la atmósfera perfecta para tu día más importante. Nos encargamos de la iluminación arquitectónica, el sonido inmersivo y cada detalle técnico para que tu fiesta sea legendaria.
                </p>
                
                <Link href="/bodas" className="mt-auto inline-flex items-center text-sm font-bold text-white hover:text-[#D4AF37] tracking-widest uppercase transition-colors">
                  Ver más detalles <ArrowRight className="ml-3 h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Producción Técnica */}
            <div className="relative p-12 md:p-14 rounded-[2rem] bg-gradient-to-b from-[#0b1120] to-[#020617] border border-white/5 overflow-hidden group hover:border-[#D4AF37]/30 transition-all duration-500">
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 bg-[#D4AF37]/10 rounded-full blur-3xl group-hover:bg-[#D4AF37]/20 transition-all duration-500"></div>
              
              <div className="relative z-10 flex flex-col items-start text-left h-full">
                <div className="mb-10 inline-flex">
                  <Sliders className="h-10 w-10 text-[#D4AF37]" strokeWidth={1.5} />
                </div>
                
                <h4 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-wide group-hover:text-[#D4AF37] transition-colors">
                  Producción B2B
                </h4>
                
                <p className="text-slate-400 text-lg leading-relaxed font-light mb-12 flex-grow">
                  El aliado estratégico que tu agencia necesita. Equipamiento de última generación, estructuras certificadas y un equipo humano dedicado a garantizar la excelencia operativa de tu evento.
                </p>
                
                <Link href="/agencias" className="mt-auto inline-flex items-center text-sm font-bold text-white hover:text-[#D4AF37] tracking-widest uppercase transition-colors">
                  Ver más detalles <ArrowRight className="ml-3 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Integrado */}
      <footer id="contacto" className="bg-[#020617] border-t border-white/5 pt-20 pb-10 px-4 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent"></div>
        
        <div className="max-w-[1200px] mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
            
            {/* Contacto Izquierda */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white tracking-wide mb-2">Contacto</h2>
                <p className="text-slate-400 font-light">Estamos listos para hacer realidad tu visión.</p>
              </div>
              <ul className="space-y-6">
                <li className="flex items-center text-slate-300 group cursor-pointer">
                  <div className="bg-white/5 p-4 rounded-full mr-5 border border-white/10 group-hover:bg-[#D4AF37]/10 transition-colors">
                    <Phone className="h-5 w-5 text-[#D4AF37]" />
                  </div>
                  <span className="text-lg font-light group-hover:text-white transition-colors">+1 (234) 567-890</span>
                </li>
                <li className="flex items-center text-slate-300 group cursor-pointer">
                  <div className="bg-white/5 p-4 rounded-full mr-5 border border-white/10 group-hover:bg-[#D4AF37]/10 transition-colors">
                    <Mail className="h-5 w-5 text-[#D4AF37]" />
                  </div>
                  <span className="text-lg font-light group-hover:text-white transition-colors">info@eventospremier.com</span>
                </li>
                <li className="flex items-center text-slate-300 group cursor-pointer">
                  <div className="bg-white/5 p-4 rounded-full mr-5 border border-white/10 group-hover:bg-[#D4AF37]/10 transition-colors">
                    <MapPin className="h-5 w-5 text-[#D4AF37]" />
                  </div>
                  <span className="text-lg font-light group-hover:text-white transition-colors">Centro de Convenciones, Metrópolis</span>
                </li>
              </ul>
            </div>

            {/* Diseño Decorativo / Mapa Limpio */}
            <div className="relative w-full h-full min-h-[300px] rounded-2xl overflow-hidden border border-white/5 bg-white/[0.02] flex items-center justify-center p-8 text-center backdrop-blur-sm">
               <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/5 to-transparent"></div>
               <div className="relative z-10">
                 <div className="inline-flex p-4 rounded-full bg-white/5 border border-white/10 mb-4">
                   <MapPin className="h-8 w-8 text-[#D4AF37]" />
                 </div>
                 <h4 className="text-white font-bold tracking-widest text-lg">OFICINA CENTRAL</h4>
                 <p className="text-slate-400 font-light mt-2 max-w-xs mx-auto">Visítanos para planificar tu próximo gran evento con nuestro equipo de expertos.</p>
               </div>
            </div>

          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 font-light">
            <p className="tracking-wide">
              &copy; {new Date().getFullYear()} EVENTOS PREMIER. Su visión, nuestra ejecución.
            </p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <a href="#" className="hover:text-[#D4AF37] transition-colors">Privacidad</a>
              <a href="#" className="hover:text-[#D4AF37] transition-colors">Términos</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
