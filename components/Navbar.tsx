"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Beranda", href: "#home" },
  { name: "Keunggulan", href: "#features" },
  { name: "Katalog", href: "#gallery" },
  { name: "Cerita Petani", href: "#about" },
  { name: "Testimoni", href: "#testimonials" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll detection for sticky navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-stone-950/90 backdrop-blur-md border-b border-white/5 py-3 shadow-lg"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2 z-50">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-amber-600 text-white rounded-full flex items-center justify-center">
              <Leaf className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <span className="text-white font-bold text-lg md:text-xl tracking-tight hidden sm:block">
              Bima Wibisono <span className="text-amber-500">Kentang</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-stone-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="w-px h-5 bg-white/10" />
            <Button
              asChild
              className="bg-green-600 hover:bg-green-500 text-white font-semibold rounded-full px-5 shadow-lg shadow-green-600/20 transition-all hover:-translate-y-0.5"
            >
              <Link href="#contact" className="flex items-center gap-2">
                Pesan Sekarang
              </Link>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white p-2 z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-stone-950 lg:hidden transition-transform duration-300 pointer-events-none flex flex-col pt-24 px-6 gap-8 ${
          isMobileMenuOpen
            ? "translate-y-0 pointer-events-auto"
            : "-translate-y-full"
        }`}
      >
        <ul className="flex flex-col gap-6 text-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-2xl font-semibold text-stone-200 hover:text-white block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="w-full h-px bg-white/10 mx-auto max-w-xs" />

        <Button
          asChild
          size="lg"
          className="bg-green-600 hover:bg-green-500 text-white font-semibold rounded-2xl w-full max-w-xs mx-auto py-6 text-lg"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <Link href="#contact" className="flex items-center justify-center gap-2">
            Pesan Sekarang via WhatsApp
          </Link>
        </Button>
      </div>
    </>
  );
}
