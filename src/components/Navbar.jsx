"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black transition-all duration-300">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold tracking-widest bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] bg-clip-text text-transparent">
              EVENTOS PREMIER
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-sm font-medium text-slate-300 hover:text-[#D4AF37] transition-colors duration-300">
              Inicio
            </Link>
            <Link href="#servicios" className="text-sm font-medium text-slate-300 hover:text-[#D4AF37] transition-colors duration-300">
              Servicios
            </Link>
            <Link href="/bodas" className="text-sm font-medium text-slate-300 hover:text-[#D4AF37] transition-colors duration-300">
              Bodas
            </Link>
            <Link href="#contacto" className="text-sm font-medium text-slate-300 hover:text-[#D4AF37] transition-colors duration-300">
              Contacto
            </Link>
            <button className="inline-flex items-center px-7 py-2.5 text-sm font-bold rounded-full text-slate-950 bg-gradient-to-r from-[#D4AF37] to-[#AA771C] hover:opacity-90 transform hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-[#D4AF37]">
              ¡CREAR MI MOMENTO!
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-300 hover:text-white focus:outline-none transition-colors"
            >
              <span className="sr-only">Abrir menú</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-white/5">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-[#D4AF37] hover:bg-white/5 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="#servicios"
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-[#D4AF37] hover:bg-white/5 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Servicios
            </Link>
            <Link
              href="/bodas"
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-[#D4AF37] hover:bg-white/5 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Bodas
            </Link>
            <Link
              href="#contacto"
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-[#D4AF37] hover:bg-white/5 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </Link>
            <div className="pt-4">
              <button className="w-full inline-flex items-center justify-center px-6 py-3 text-base font-bold rounded-full text-slate-950 bg-gradient-to-r from-[#D4AF37] to-[#AA771C] hover:opacity-90 transition-opacity">
                ¡CREAR MI MOMENTO!
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
