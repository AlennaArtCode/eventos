"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-bold tracking-widest text-amber-500">
              EVENTOS PREMIER
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-sm font-medium text-slate-200 hover:text-amber-500 transition-colors">
              Inicio
            </Link>
            <Link href="#servicios" className="text-sm font-medium text-slate-200 hover:text-amber-500 transition-colors">
              Servicios
            </Link>
            <Link href="#portafolio" className="text-sm font-medium text-slate-200 hover:text-amber-500 transition-colors">
              Portafolio
            </Link>
            <Link href="#contacto" className="text-sm font-medium text-slate-200 hover:text-amber-500 transition-colors">
              Contacto
            </Link>
            <button className="inline-flex items-center px-6 py-2.5 border border-transparent text-sm font-bold rounded-full shadow-sm text-black bg-amber-500 hover:bg-amber-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500">
              ¡CREAR MI MOMENTO!
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-amber-500 focus:outline-none"
            >
              <span className="sr-only">Abrir menú</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:text-amber-500 hover:bg-slate-900"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="#servicios"
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:text-amber-500 hover:bg-slate-900"
              onClick={() => setIsOpen(false)}
            >
              Servicios
            </Link>
            <Link
              href="#portafolio"
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:text-amber-500 hover:bg-slate-900"
              onClick={() => setIsOpen(false)}
            >
              Portafolio
            </Link>
            <Link
              href="#contacto"
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:text-amber-500 hover:bg-slate-900"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </Link>
            <div className="px-3 py-2">
              <button className="w-full inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-base font-bold rounded-full shadow-sm text-black bg-amber-500 hover:bg-amber-600 transition-colors">
                ¡CREAR MI MOMENTO!
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
