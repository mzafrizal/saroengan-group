"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Users,
  Heart,
  Star,
  UtensilsCrossed,
  Sparkles,
  CalendarCheck,
} from "lucide-react";

const galleryImages = [
  { src: "/assets/angkringan/DSC03037.jpg",    alt: "Suasana Angkringan Saroengan" },
  { src: "/assets/angkringan/DSC03060-2.jpg",  alt: "Area Angkringan Saroengan" },
  { src: "/assets/angkringan/DSC03076.jpg",    alt: "Meja & Dekorasi" },
  { src: "/assets/angkringan/DSC03093.jpg",    alt: "Sudut Foto Angkringan" },
  { src: "/assets/angkringan/DSC03107.jpg",    alt: "Interior Angkringan" },
  { src: "/assets/angkringan/DSC03111.jpg",    alt: "Angkringan Malam" },
  { src: "/assets/angkringan/DSC03119.jpg",    alt: "View Angkringan" },
  { src: "/assets/angkringan/DSC03137.jpg",    alt: "Detail Tempat" },
  { src: "/assets/angkringan/DSC03149.jpg",    alt: "Outdoor Area" },
  { src: "/assets/angkringan/DSC03183.jpg",    alt: "Nuansa Malam" },
  { src: "/assets/angkringan/DSC03189.jpg",    alt: "Panorama Angkringan" },
];

const highlights = [
  { icon: MapPin,          label: "Lokasi Strategis", desc: "View Citylight Kota Semarang yang memukau" },
  { icon: UtensilsCrossed, label: "Sajian Otentik",   desc: "Menu tradisional dipadukan cita rasa kekinian" },
  { icon: Users,           label: "Semua Kalangan",   desc: "Cocok untuk keluarga, komunitas, hingga pasangan" },
  { icon: Heart,           label: "Hangat & Nyaman",  desc: "Suasana yang akrab dan bersahabat" },
  { icon: CalendarCheck,   label: "Event Ready",      desc: "Tersedia paket wedding, gathering & WFC" },
  { icon: Star,            label: "Pengalaman Unik",  desc: "Nuansa klasik bertemu estetika modern" },
];

const fasilitas = [
  "Area indoor & outdoor",
  "View citylight Semarang",
  "Free Wi-Fi",
  "Parkir luas",
  "Live music (tertentu)",
  "Private area tersedia",
  "Ramah keluarga",
  "Event & wedding package",
];

const reviews = [
  { name: "Reyhan A.", rating: 5, text: "Tempatnya cozy banget, view malamnya keren! Makanannya enak dan harga terjangkau." },
  { name: "Siti N.",   rating: 5, text: "Cocok buat nongkrong keluarga. Suasananya hangat dan pelayanannya ramah." },
  { name: "Dimas P.",  rating: 5, text: "Angkringan yang beda dari biasanya, instagramable banget tempatnya!" },
];

/* ── Gallery Carousel ── */
function GalleryCarousel() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i - 1 + galleryImages.length) % galleryImages.length);
  const next = () => setActive((i) => (i + 1) % galleryImages.length);

  return (
    <div className="relative w-full select-none">
      {/* Main image */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[16/8] rounded-2xl overflow-hidden shadow-2xl">
        <Image
          key={active}
          src={galleryImages[active].src}
          alt={galleryImages[active].alt}
          fill
          className="object-cover transition-opacity duration-500"
          priority={active === 0}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Counter */}
        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full">
          {active + 1} / {galleryImages.length}
        </div>

        {/* Prev / Next buttons */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 bg-black/50 backdrop-blur-sm hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
          aria-label="Sebelumnya"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 bg-black/50 backdrop-blur-sm hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
          aria-label="Berikutnya"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-1.5 mt-4">
        {galleryImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`rounded-full transition-all duration-300 ${
              i === active
                ? "w-6 h-2 bg-amber-400"
                : "w-2 h-2 bg-white/25 hover:bg-white/50"
            }`}
            aria-label={`Foto ${i + 1}`}
          />
        ))}
      </div>

      {/* Thumbnail strip */}
      <div className="flex gap-2 mt-3 overflow-x-auto pb-1 scrollbar-hide">
        {galleryImages.map((img, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`relative flex-shrink-0 w-16 h-12 sm:w-20 sm:h-14 rounded-xl overflow-hidden transition-all duration-200 ${
              i === active
                ? "ring-2 ring-amber-400 opacity-100"
                : "opacity-40 hover:opacity-70"
            }`}
          >
            <Image src={img.src} alt={img.alt} fill className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function AngkringanProfilPage() {
  return (
    <main
      className="min-h-screen bg-stone-950 text-white overflow-x-hidden"
      style={{ fontFamily: "var(--font-poppins, sans-serif)" }}
    >
      {/* ── Ambient background ── */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full blur-[140px] opacity-10 bg-gradient-to-br from-amber-500 to-orange-500" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-[120px] opacity-5 bg-amber-400" />
      </div>

      {/* ── Navbar / Back ── */}
      <nav className="relative z-10 w-full px-6 sm:px-10 lg:px-16 pt-6 sm:pt-8 pb-4">
        <Link
          href="/angkringan-saroengan"
          className="inline-flex items-center gap-1.5 text-white/40 hover:text-white/80 text-sm transition-colors duration-200"
        >
          <ChevronLeft className="w-4 h-4" />
          Angkringan Saroengan
        </Link>
      </nav>

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pt-4 pb-16 sm:pb-20">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16 gap-10">
          {/* Left: Text */}
          <div className="flex-1">
            <span className="inline-flex items-center gap-1.5 bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
              <Sparkles className="w-3 h-3" />
              Unit Bisnis Saroengan Group
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-5">
              Angkringan{" "}
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                Saroengan
              </span>
            </h1>

            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 text-justify max-w-xl">
              Cafe &amp; Resto yang memadukan nuansa klasik dan kekinian dengan
              view Citylight Kota Semarang. Cocok untuk semua kalangan,
              khususnya acara keluarga, event, WFC, dan wedding.{" "}
              <span className="text-amber-400 font-semibold">
                Hangat &amp; Autentik.
              </span>
            </p>

            {/* CTA — hanya Hubungi Kami */}
            <Link
              href="https://wa.me/6285117715881"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold text-sm rounded-xl px-6 py-3 hover:opacity-90 transition-opacity shadow-lg shadow-amber-500/20"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Hubungi Kami
            </Link>
          </div>

          {/* Right: Hero image (tanpa badge rating) */}
          <div className="flex-shrink-0 lg:w-[420px] xl:w-[480px]">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/angkringan/DSC03119.jpg"
                alt="Suasana Angkringan Saroengan"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/50 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          HIGHLIGHT CARDS
      ══════════════════════════════════════ */}
      <section className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pb-16 sm:pb-20">
        <div className="mb-10 text-center">
          <span className="text-amber-500 font-semibold text-xs tracking-widest uppercase">
            Kenapa Angkringan Saroengan?
          </span>
          <h2 className="text-2xl sm:text-3xl font-black mt-2">
            Lebih dari Sekadar{" "}
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Tempat Makan
            </span>
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
          {highlights.map((h) => {
            const Icon = h.icon;
            return (
              <div
                key={h.label}
                className="group rounded-2xl bg-white/[0.04] border border-white/8 p-5 hover:bg-white/[0.07] hover:border-amber-500/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mb-3 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-white font-bold text-sm mb-1">{h.label}</p>
                <p className="text-white/45 text-xs leading-snug">{h.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ══════════════════════════════════════
          GALLERY CAROUSEL
      ══════════════════════════════════════ */}
      <section className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pb-16 sm:pb-20">
        <div className="mb-8">
          <span className="text-amber-500 font-semibold text-xs tracking-widest uppercase">
            Galeri
          </span>
          <h2 className="text-2xl sm:text-3xl font-black mt-1">
            Suasana &amp; Tempat
          </h2>
        </div>
        <GalleryCarousel />
      </section>

      {/* ══════════════════════════════════════
          FASILITAS
      ══════════════════════════════════════ */}
      <section className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pb-16 sm:pb-20">
        <div className="rounded-3xl bg-gradient-to-br from-amber-500/10 to-orange-500/5 border border-amber-500/20 p-8 sm:p-10">
          <div className="mb-8">
            <span className="text-amber-500 font-semibold text-xs tracking-widest uppercase">
              Fasilitas
            </span>
            <h2 className="text-2xl sm:text-3xl font-black mt-2">
              Apa yang Kami Sediakan
            </h2>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {fasilitas.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-gradient-to-br from-amber-400 to-orange-400 flex-shrink-0" />
                <span className="text-white/80 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ══════════════════════════════════════
          REVIEWS
      ══════════════════════════════════════ */}
      <section className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pb-16 sm:pb-20">
        <div className="mb-8">
          <span className="text-amber-500 font-semibold text-xs tracking-widest uppercase">
            Ulasan
          </span>
          <h2 className="text-2xl sm:text-3xl font-black mt-1">Kata Mereka</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="rounded-2xl bg-white/[0.04] border border-white/8 p-5 flex flex-col gap-3"
            >
              <div className="flex gap-0.5">
                {[...Array(r.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-white/70 text-sm leading-relaxed flex-1">
                &ldquo;{r.text}&rdquo;
              </p>
              <p className="text-white font-semibold text-xs">{r.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA BOTTOM
      ══════════════════════════════════════ */}
      <section className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pb-16 sm:pb-24">
        <div className="rounded-3xl bg-gradient-to-r from-amber-500 to-orange-500 p-8 sm:p-12 text-center shadow-2xl shadow-amber-500/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.15)_0,transparent_60%)] pointer-events-none" />
          <h2 className="text-2xl sm:text-3xl font-black mb-3 relative z-10">Siap Berkunjung?</h2>
          <p className="text-white/80 text-sm sm:text-base mb-6 relative z-10">
            Hubungi kami untuk reservasi dan informasi lebih lanjut.
          </p>
          <div className="flex flex-wrap justify-center gap-3 relative z-10">
            <Link
              href="https://wa.me/6285117715881"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-amber-600 font-bold text-sm rounded-xl px-6 py-3 hover:bg-white/90 transition-colors shadow-lg"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Sekarang
            </Link>
            <Link
              href="/angkringan-saroengan"
              className="inline-flex items-center gap-2 bg-white/20 text-white font-semibold text-sm rounded-xl px-6 py-3 hover:bg-white/30 transition-colors"
            >
              Kembali ke Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 text-center pb-8 text-white/15 text-xs">
        &copy; {new Date().getFullYear()} Saroengan Group. All rights reserved.
      </footer>
    </main>
  );
}
