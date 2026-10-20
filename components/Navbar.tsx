"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Utensils, Coffee, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Beranda", href: "#home" },
  { name: "Tentang Kami", href: "#about" },
  { name: "Unit Bisnis", href: "#businesses" },
  { name: "Galeri", href: "#gallery" },
  { name: "Lokasi", href: "#location" },
];

const businessLinks = [
  { name: "Angkringan", href: "/angkringan-saroengan", icon: Utensils },
  { name: "Cafe", href: "/cafe-saroengan", icon: Coffee },
  { name: "Seblak", href: "/seblak-saroengan", icon: Flame },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${isScrolled ? "bg-stone-950/90 backdrop-blur-md border-b border-white/5 py-3 shadow-lg" : "bg-transparent py-5"}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2.5 z-50">
            <div className="w-9 h-9 bg-gradient-to-br from-amber-500 to-orange-600 text-white rounded-xl flex items-center justify-center font-black text-base shadow-md">S</div>
            <div className="hidden sm:block">
              <span className="text-white font-black text-base tracking-tight leading-none block">
                Saroengan <span className="text-amber-500">Group</span>
              </span>
              <span className="text-stone-500 text-[10px] leading-none">Satu Wadah, Beragam Rasa</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            <ul className="flex items-center gap-7">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm font-medium text-stone-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="w-px h-5 bg-white/10" />
            <Button asChild className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-semibold rounded-full px-5 shadow-lg shadow-amber-600/20 transition-all hover:-translate-y-0.5">
              <Link href="https://wa.me/6281918427125" target="_blank" rel="noopener noreferrer">
                Hubungi Kami
              </Link>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden text-white p-2 z-50" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 z-40 bg-stone-950 lg:hidden transition-transform duration-300 pointer-events-none flex flex-col pt-24 px-6 gap-6 ${isMobileMenuOpen ? "translate-y-0 pointer-events-auto" : "-translate-y-full"}`}>
        <ul className="flex flex-col gap-5 text-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className="text-2xl font-semibold text-stone-200 hover:text-amber-400 transition-colors block" onClick={() => setIsMobileMenuOpen(false)}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="w-full h-px bg-white/10 mx-auto max-w-xs" />

        {/* Business quick links */}
        <div className="flex justify-center gap-3">
          {businessLinks.map((biz) => {
            const Icon = biz.icon;
            return (
              <Link
                key={biz.name}
                href={biz.href}
                className="flex items-center gap-1.5 bg-white/5 border border-white/10 text-stone-300 text-sm px-4 py-2.5 rounded-full hover:bg-amber-500/10 hover:text-amber-300 hover:border-amber-500/30 transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Icon className="w-3.5 h-3.5" />
                {biz.name}
              </Link>
            );
          })}
        </div>

        <Button asChild size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-2xl w-full max-w-xs mx-auto py-6 text-lg" onClick={() => setIsMobileMenuOpen(false)}>
          <Link href="https://wa.me/6281918427125" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
            Hubungi via WhatsApp
          </Link>
        </Button>
      </div>
    </>
  );
}
