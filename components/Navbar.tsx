"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const navLinks = [
  { name: "Beranda", href: "#home" },
  { name: "Tentang Kami", href: "#about" },
  { name: "Layanan", href: "#services" },
  { name: "Armada", href: "#private-vehicles" },
  { name: "Paket Wisata", href: "#packages" },
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
            ? "bg-[#0a1120]/90 backdrop-blur-md border-b border-white/5 py-3 shadow-lg"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2 z-50">
            <Image
              src="/assets/logo-putih.png"
              alt="Hexa Logo"
              width={120}
              height={40}
              className="h-8 md:h-10 w-auto object-contain"
            />
            <span className="text-white font-bold text-lg md:text-xl tracking-tight hidden sm:block">
              Hexa <span className="text-[#38bdf8]">Creative</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="w-px h-5 bg-white/10" />
            <Button
              asChild
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full px-5 shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-0.5"
            >
              <Link href="#contact" className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4" />
                Hubungi Kami
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
        className={`fixed inset-0 z-40 bg-[#0d152a] lg:hidden transition-transform duration-300 pointer-events-none flex flex-col pt-24 px-6 gap-8 ${
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
                className="text-2xl font-semibold text-slate-200 hover:text-white block"
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
          className="bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-2xl w-full max-w-xs mx-auto py-6 text-lg"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <Link href="#contact" className="flex items-center justify-center gap-2">
            <PhoneCall className="w-5 h-5" />
            Hubungi Sekarang
          </Link>
        </Button>
      </div>
    </>
  );
}
