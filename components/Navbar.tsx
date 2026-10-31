"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Utensils, Coffee, Flame } from "lucide-react";

const navLinks = [
  { name: "Beranda", href: "#home" },
  { name: "Tentang Kami", href: "#about" },
  { name: "Unit Bisnis", href: "#businesses" },
  { name: "Galeri", href: "#gallery" },
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

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? "bg-stone-950/95 backdrop-blur-md border-b border-white/5 py-3 shadow-lg"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#home"
            className="flex items-center gap-2.5 z-50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="w-9 h-9 bg-gradient-to-br from-amber-500 to-orange-600 text-white rounded-xl flex items-center justify-center font-black text-base shadow-md">
              S
            </div>
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
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-stone-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="lg:hidden text-white p-2.5 rounded-xl bg-white/5 hover:bg-white/10 active:scale-95 transition-all z-50 focus:outline-none focus:ring-2 focus:ring-amber-500/40"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label={isMobileMenuOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-amber-400" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-stone-950/98 backdrop-blur-xl lg:hidden flex flex-col justify-between pt-28 pb-10 px-6 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0 visible"
            : "opacity-0 pointer-events-none -translate-y-4 invisible"
        }`}
      >
        <div className="flex flex-col gap-8 my-auto">
          {/* Navigation Links */}
          <ul className="flex flex-col gap-5 text-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-2xl font-bold text-stone-200 hover:text-amber-400 active:text-amber-500 transition-colors block py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="w-24 h-px bg-amber-500/30 mx-auto" />

          {/* Business quick links */}
          <div className="flex flex-col items-center gap-3">
            <span className="text-xs uppercase tracking-wider text-stone-500 font-semibold">
              Unit Bisnis Kami
            </span>
            <div className="flex flex-wrap justify-center gap-2.5">
              {businessLinks.map((biz) => {
                const Icon = biz.icon;
                return (
                  <Link
                    key={biz.name}
                    href={biz.href}
                    className="flex items-center gap-2 bg-stone-900 border border-stone-800 text-stone-200 text-sm font-medium px-4 py-2.5 rounded-full hover:bg-amber-500/10 hover:text-amber-300 hover:border-amber-500/40 active:scale-95 transition-all shadow-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon className="w-4 h-4 text-amber-500" />
                    {biz.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer in mobile menu */}
        <div className="text-center text-xs text-stone-500 border-t border-white/5 pt-4">
          <p>Saroengan Group © {new Date().getFullYear()}</p>
          <p className="text-[11px] text-stone-600 mt-0.5">Satu Wadah, Beragam Rasa</p>
        </div>
      </div>
    </>
  );
}
