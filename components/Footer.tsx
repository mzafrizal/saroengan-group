import Link from "next/link";
import { Instagram, Music2, Utensils, Coffee, Flame } from "lucide-react";

const businessLinks = [
  { name: "Angkringan Saroengan", href: "/angkringan-saroengan", icon: Utensils },
  { name: "Cafe Saroengan", href: "/cafe-saroengan", icon: Coffee },
  { name: "Seblak Saroengan", href: "/seblak-saroengan", icon: Flame },
];

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/saroengan.group",
    icon: Instagram,
    color: "hover:text-pink-400",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@saroengan.group",
    icon: Music2,
    color: "hover:text-white",
  },
];

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-white border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Column 1: Brand */}
          <div className="flex flex-col gap-4">
            {/* Logo mark */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white font-black text-lg shadow-lg">
                S
              </div>
              <div>
                <p className="text-white font-black text-base leading-tight tracking-tight">
                  Saroengan Group
                </p>
                <p className="text-stone-500 text-xs mt-0.5">Satu Wadah, Beragam Rasa</p>
              </div>
            </div>

            <p className="text-stone-500 text-sm leading-relaxed max-w-xs">
              Menghadirkan ruang berkumpul yang nyaman dengan sajian berkualitas. Cita rasa lokal,
              pelayanan terbaik.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={`w-9 h-9 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-stone-400 ${social.color} hover:border-white/20 hover:bg-white/10 transition-all duration-200`}
                  >
                    <Icon className="w-4 h-4" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Column 2: Unit Bisnis */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 tracking-widest uppercase">
              Unit Bisnis
            </h4>
            <ul className="flex flex-col gap-3">
              {businessLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2.5 text-stone-400 hover:text-amber-400 transition-colors duration-200"
                    >
                      <Icon className="w-4 h-4 text-stone-600 group-hover:text-amber-500 transition-colors" />
                      <span className="text-sm">{link.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 3: Tautan Cepat */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 tracking-widest uppercase">
              Navigasi
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { name: "Beranda", href: "#home" },
                { name: "Tentang Kami", href: "#about" },
                { name: "Unit Bisnis", href: "#businesses" },
                { name: "Galeri", href: "#gallery" },
                { name: "Lokasi", href: "#location" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone-400 hover:text-amber-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-stone-600 text-xs text-center sm:text-left">
            &copy; {new Date().getFullYear()} Saroengan Group. All rights reserved.
          </p>
          <p className="text-stone-700 text-xs">
            Made with ❤️ for great food experiences
          </p>
        </div>
      </div>
    </footer>
  );
}
