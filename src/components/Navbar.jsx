"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-semibold tracking-tight text-foreground">
              EVENTOS <span className="text-accent">PREMIUM</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Inicio
            </Link>
            <Link href="/bodas" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Bodas
            </Link>
            <Link href="/agencias" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Agencias
            </Link>
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-accent-foreground bg-accent hover:bg-accent/90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent">
              Contactar
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-accent focus:outline-none"
            >
              <span className="sr-only">Abrir menú</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:text-foreground hover:bg-muted/10"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="/bodas"
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:text-foreground hover:bg-muted/10"
              onClick={() => setIsOpen(false)}
            >
              Bodas
            </Link>
            <Link
              href="/agencias"
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:text-foreground hover:bg-muted/10"
              onClick={() => setIsOpen(false)}
            >
              Agencias
            </Link>
            <div className="px-3 py-2">
              <button className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-accent-foreground bg-accent hover:bg-accent/90 transition-colors">
                Contactar
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
