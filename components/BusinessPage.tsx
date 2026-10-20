import Link from "next/link";
import Image from "next/image";
import {
  User,
  UtensilsCrossed,
  CalendarCheck,
  Map,
  Handshake,
  Heart,
  ChefHat,
  MoreHorizontal,
  ChevronLeft,
  ArrowRight,
} from "lucide-react";

export interface BusinessPageProps {
  businessId: "angkringan" | "cafe" | "seblak";
  name: string;
  tagline: string;
  logoSrc: string;
  logoAlt: string;
  accentFrom: string;
  accentTo: string;
  bgDark: string;
  basePath: string;
}

const navItems = [
  {
    key: "profil",
    label: "Profil",
    icon: User,
    description: "Tentang kami & cerita brand",
  },
  {
    key: "menu",
    label: "Menu",
    icon: UtensilsCrossed,
    description: "Lihat semua pilihan sajian",
  },
  {
    key: "reservasi",
    label: "Reservasi",
    icon: CalendarCheck,
    description: "Pesan tempat duduk Anda",
  },
  {
    key: "maps",
    label: "Maps",
    icon: Map,
    description: "Temukan rute ke lokasi kami",
  },
  {
    key: "partnership",
    label: "Partnership",
    icon: Handshake,
    description: "Kerja sama & kolaborasi bisnis",
  },
  {
    key: "wedding",
    label: "Wedding",
    icon: Heart,
    description: "Paket spesial pernikahan",
  },
  {
    key: "catering",
    label: "Catering",
    icon: ChefHat,
    description: "Layanan catering untuk acaramu",
  },
  {
    key: "more",
    label: "More",
    icon: MoreHorizontal,
    description: "Informasi & layanan lainnya",
  },
];

export default function BusinessPage({
  name,
  tagline,
  logoSrc,
  logoAlt,
  accentFrom,
  accentTo,
  bgDark,
  basePath,
}: BusinessPageProps) {
  return (
    <main
      className={`min-h-screen ${bgDark} relative overflow-hidden`}
      style={{ fontFamily: "var(--font-poppins, sans-serif)" }}
    >
      {/* ── Background ambient glows ── */}
      <div
        className={`pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[120px] opacity-10 bg-gradient-to-br ${accentFrom} ${accentTo}`}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03)_0,transparent_70%)]" />

      {/* ── Back link ── */}
      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16 pt-6 sm:pt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-white/40 hover:text-white/80 text-sm transition-colors duration-200"
        >
          <ChevronLeft className="w-4 h-4" />
          Saroengan Group
        </Link>
      </div>

      {/* ══════════════════════════════════════════
          DESKTOP / TABLET: side-by-side layout
          MOBILE: stacked layout
      ══════════════════════════════════════════ */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-10 sm:py-12 lg:py-16">

        {/* ── lg+: flex row  |  below lg: flex column ── */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16 xl:gap-24">

          {/* ════════════ LEFT / TOP: Logo + Brand ════════════ */}
          <aside className="flex flex-col items-center lg:items-start lg:sticky lg:top-20 lg:min-w-[280px] xl:min-w-[320px] mb-10 lg:mb-0">
            {/* Logo */}
            <div className="relative flex items-center justify-center mb-6">
              {/* Glow ring */}
              <div
                className={`absolute inset-0 rounded-full blur-2xl opacity-25 bg-gradient-to-br ${accentFrom} ${accentTo} scale-110`}
              />
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 lg:w-52 lg:h-52 xl:w-60 xl:h-60 drop-shadow-2xl">
                <Image
                  src={logoSrc}
                  alt={logoAlt}
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>

            {/* Brand name */}
            <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-black text-center lg:text-left tracking-tight leading-tight mb-2">
              {name}
            </h1>
            <p className="text-white/40 text-sm sm:text-base text-center lg:text-left leading-snug max-w-xs">
              {tagline}
            </p>

            {/* Accent divider */}
            <div
              className={`mt-5 h-0.5 w-16 rounded-full bg-gradient-to-r ${accentFrom} ${accentTo} opacity-70 lg:self-start self-center`}
            />

            {/* Desktop: extra brand info */}
            <div className="hidden lg:flex flex-col gap-3 mt-8 w-full">
              <div className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4">
                <p className="text-white/30 text-xs uppercase tracking-widest mb-1">Unit dari</p>
                <p className="text-white font-semibold text-sm">Saroengan Group</p>
              </div>
              <Link
                href="https://wa.me/628174714181"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 bg-gradient-to-r ${accentFrom} ${accentTo} text-white font-semibold text-sm rounded-2xl px-5 py-3.5 hover:opacity-90 transition-opacity shadow-lg`}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Hubungi via WhatsApp
              </Link>
            </div>
          </aside>

          {/* ════════════ RIGHT / BOTTOM: Nav Grid ════════════ */}
          <div className="flex-1 min-w-0">
            {/* Section title (desktop only) */}
            <div className="hidden lg:flex items-center justify-between mb-8">
              <div>
                <h2 className="text-white text-xl font-bold">Layanan & Informasi</h2>
                <p className="text-white/30 text-sm mt-0.5">Pilih layanan yang Anda butuhkan</p>
              </div>
            </div>

            {/* Grid: 2 cols mobile → 3 cols tablet → 4 cols desktop */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.key}
                    href={`/${basePath}/${item.key}`}
                    className="group relative flex flex-col items-start gap-3 sm:gap-4 rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-6 border border-white/8 bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 active:scale-95"
                  >
                    {/* Arrow top-right */}
                    <ArrowRight className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 w-3 h-3 sm:w-3.5 sm:h-3.5 text-white/15 group-hover:text-white/50 group-hover:translate-x-0.5 -translate-x-0.5 transition-all duration-300" />

                    {/* Icon */}
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center bg-gradient-to-br ${accentFrom} ${accentTo} shadow-md group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                    </div>

                    {/* Text */}
                    <div className="min-w-0">
                      <p className="text-white font-bold text-sm sm:text-base leading-none mb-1 sm:mb-1.5">
                        {item.label}
                      </p>
                      <p className="text-white/35 text-[11px] sm:text-xs leading-snug group-hover:text-white/55 transition-colors line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Mobile: WhatsApp CTA */}
            <div className="lg:hidden mt-6">
              <Link
                href="https://wa.me/628174714181"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2.5 bg-gradient-to-r ${accentFrom} ${accentTo} text-white font-semibold text-sm rounded-2xl px-5 py-4 hover:opacity-90 transition-opacity shadow-lg w-full`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Hubungi via WhatsApp
              </Link>
            </div>

            {/* Footer note */}
            <p className="text-white/15 text-xs mt-8 text-center lg:text-left">
              &copy; {new Date().getFullYear()} Saroengan Group. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
