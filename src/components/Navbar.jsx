"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-900 text-white border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-bold tracking-widest text-white">
              EVENTOS PREMIER
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">
              Inicio
            </Link>
            <Link href="/bodas" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">
              Bodas
            </Link>
            <Link href="/agencias" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">
              Agencias B2B
            </Link>
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-zinc-900 bg-white hover:bg-zinc-100 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
              Contactar
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-zinc-300 focus:outline-none"
            >
              <span className="sr-only">Abrir menú</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-900 border-b border-zinc-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-zinc-300 hover:text-white hover:bg-zinc-800"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="/bodas"
              className="block px-3 py-2 rounded-md text-base font-medium text-zinc-300 hover:text-white hover:bg-zinc-800"
              onClick={() => setIsOpen(false)}
            >
              Bodas
            </Link>
            <Link
              href="/agencias"
              className="block px-3 py-2 rounded-md text-base font-medium text-zinc-300 hover:text-white hover:bg-zinc-800"
              onClick={() => setIsOpen(false)}
            >
              Agencias B2B
            </Link>
            <div className="px-3 py-2">
              <button className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-zinc-900 bg-white hover:bg-zinc-100 transition-colors">
                Contactar
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
