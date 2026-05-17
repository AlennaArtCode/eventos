import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-xl font-semibold tracking-tight text-foreground">
              EVENTOS <span className="text-accent">PREMIER</span>
            </Link>
            <p className="mt-4 text-sm text-muted text-foreground/60">
              Producción y gestión de eventos extraordinarios que superan expectativas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Enlaces</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/bodas" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                  Bodas
                </Link>
              </li>
              <li>
                <Link href="/agencias" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                  Agencias B2B
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Contacto</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center text-sm text-foreground/60">
                <Phone className="h-4 w-4 mr-2 text-accent" />
                <span>+1 (234) 567-890</span>
              </li>
              <li className="flex items-center text-sm text-foreground/60">
                <Mail className="h-4 w-4 mr-2 text-accent" />
                <span>info@eventospremium.com</span>
              </li>
              <li className="flex items-center text-sm text-foreground/60">
                <MapPin className="h-4 w-4 mr-2 text-accent" />
                <span>Ciudad, País</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Síguenos</h3>
            <div className="mt-4 flex flex-col space-y-2">
              <a href="#" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                Instagram
              </a>
              <a href="#" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                Facebook
              </a>
              <a href="#" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-foreground/40">
            &copy; {new Date().getFullYear()} Eventos Premier. Todos los derechos reservados.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-xs text-foreground/40 hover:text-foreground">
              Privacidad
            </a>
            <a href="#" className="text-xs text-foreground/40 hover:text-foreground">
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
