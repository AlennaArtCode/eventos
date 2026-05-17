"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold tracking-widest bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              EVENTOS PREMIER
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-sm font-medium text-slate-200 hover:text-yellow-400 transition-colors">
              Inicio
            </Link>
            <Link href="#servicios" className="text-sm font-medium text-slate-200 hover:text-yellow-400 transition-colors">
              Servicios
            </Link>
            <Link href="#portafolio" className="text-sm font-medium text-slate-200 hover:text-yellow-400 transition-colors">
              Portafolio
            </Link>
            <Link href="#contacto" className="text-sm font-medium text-slate-200 hover:text-yellow-400 transition-colors">
              Contacto
            </Link>
            <button className="inline-flex items-center px-6 py-2.5 border border-transparent text-sm font-bold rounded-full shadow-[0_0_15px_rgba(234,179,8,0.3)] text-black bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
              ¡CREAR MI MOMENTO!
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-yellow-400 focus:outline-none"
            >
              <span className="sr-only">Abrir menú</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 border-b border-slate-800 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:text-yellow-400 hover:bg-white/5"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="#servicios"
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:text-yellow-400 hover:bg-white/5"
              onClick={() => setIsOpen(false)}
            >
              Servicios
            </Link>
            <Link
              href="#portafolio"
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:text-yellow-400 hover:bg-white/5"
              onClick={() => setIsOpen(false)}
            >
              Portafolio
            </Link>
            <Link
              href="#contacto"
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:text-yellow-400 hover:bg-white/5"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </Link>
            <div className="px-3 py-2">
              <button className="w-full inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-base font-bold rounded-full shadow-[0_0_15px_rgba(234,179,8,0.3)] text-black bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 transition-all">
                ¡CREAR MI MOMENTO!
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
