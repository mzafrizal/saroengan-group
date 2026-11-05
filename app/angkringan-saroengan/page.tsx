"use client";

import { useState } from "react";
import BusinessPage from "@/components/BusinessPage";
import { ArrowRight, ChevronLeft, UtensilsCrossed, BookOpen, ExternalLink, MessageCircle } from "lucide-react";

function CateringModalContent() {
  const [slide, setSlide] = useState<0 | 1>(0);

  return (
    <div className="w-full">
      {slide === 0 ? (
        /* ── SLIDE 1: SYARAT CATERING ── */
        <div key="slide-syarat" className="space-y-3.5 animate-in fade-in-50 slide-in-from-left-4 duration-300">
          <p className="text-sm text-stone-300 leading-relaxed">
            Nikmati hidangan lezat dan higienis khas <span className="text-amber-500 font-medium">Angkringan Saroengan</span> untuk kebutuhan berbagai acaramu.
          </p>

          <div className="inline-block px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
            <p className="font-semibold text-amber-500 text-xs tracking-wide uppercase">Syarat Catering</p>
          </div>

          <div className="bg-stone-900/50 p-3.5 rounded-xl border border-stone-800/80 shadow-inner">
            <ul className="space-y-2.5 list-none">
              {[
                { title: "Free Ongkir Area Ngaliyan", desc: "Pengantaran gratis khusus area Ngaliyan & sekitarnya" },
                { title: "Minimal Order 20 Pack", desc: "Fleksibel untuk skala acara kecil hingga besar" },
                { title: "All Menu , Bisa Custom", desc: "Pilihan menu lezat yang dapat disesuaikan budget" },
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-2.5 text-stone-200 text-xs sm:text-sm">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex-shrink-0 shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
                  <div>
                    <span className="font-semibold text-white block">{item.title}</span>
                    <span className="text-stone-400 text-[11px] leading-tight block">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Chips jenis acara */}
          <div className="flex flex-wrap gap-1.5 justify-center py-0.5">
            {["Rapat Kantor", "Arisan", "Syukuran", "Gathering", "Acara Keluarga"].map((tag) => (
              <span key={tag} className="text-[10px] text-stone-400 bg-white/5 border border-white/5 px-2 py-0.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <div className="pt-2 border-t border-stone-800/50">
            <p className="text-stone-400 text-[11px] text-center italic">
              *Hubungi kami untuk penawaran khusus dan konsultasi menu acaramu.
            </p>
          </div>

          {/* Tombol Aksi Slide 1 */}
          <div className="space-y-2 pt-1">
            <button
              type="button"
              onClick={() => setSlide(1)}
              className="flex items-center justify-between w-full bg-stone-900 hover:bg-stone-800 border border-amber-500/30 hover:border-amber-500/60 text-amber-400 font-semibold text-xs sm:text-sm rounded-xl px-4 py-2.5 transition-all shadow-md group cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <UtensilsCrossed className="w-4 h-4 text-amber-400 group-hover:rotate-12 transition-transform" />
                <span>Lihat Menu Paket</span>
              </div>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-amber-400" />
            </button>

            <a
              href="https://wa.me/6285117715881?text=Halo%20Angkringan%20Saroengan,%20saya%20ingin%20informasi%20dan%20pemesanan%20Catering"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold text-xs sm:text-sm rounded-xl px-4 py-2.5 hover:opacity-90 transition-opacity shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>For More Information</span>
            </a>
          </div>
        </div>
      ) : (
        /* ── SLIDE 2: MENU PAKET & HARGA ── */
        <div key="slide-menu" className="space-y-3 animate-in fade-in-50 slide-in-from-right-4 duration-300">
          {/* Header Slide 2 */}
          <div className="flex items-center justify-between pb-0.5">
            <button
              type="button"
              onClick={() => setSlide(0)}
              className="flex items-center gap-1.5 text-xs text-stone-400 hover:text-amber-400 transition-colors group cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              <span>Syarat Catering</span>
            </button>
            <div className="inline-block px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20">
              <span className="text-[10px] font-semibold text-amber-500 uppercase tracking-wide">Menu Paket</span>
            </div>
          </div>

          {/* List Menu Paket */}
          <div className="space-y-2 max-h-[42vh] overflow-y-auto pr-1.5 custom-scrollbar">
            {/* Paket 1 */}
            <div className="bg-stone-900/60 p-2.5 rounded-xl border border-stone-800/80 hover:border-amber-500/30 transition-colors">
              <div className="flex items-center justify-between gap-1 mb-1">
                <h4 className="font-bold text-white text-xs sm:text-sm">Paket Hemat</h4>
                <span className="text-[11px] sm:text-xs font-bold text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20 whitespace-nowrap">
                  Rp 15.000 / pack
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-stone-300 leading-relaxed">
                Nasi Bakar / Nasi Kucing, Ayam Suwir Gurih / Orek Tempe, Sate Usus / Kulit, Sambal Bawang & Lalapan, Es Teh / Air Mineral.
              </p>
            </div>

            {/* Paket 2 */}
            <div className="bg-stone-900/60 p-2.5 rounded-xl border border-amber-500/30 bg-amber-500/[0.03]">
              <div className="flex items-center justify-between gap-1 mb-1">
                <div className="flex items-center gap-1.5">
                  <h4 className="font-bold text-white text-xs sm:text-sm">Paket Favorit</h4>
                  <span className="text-[9px] font-bold bg-amber-500 text-stone-950 px-1 py-0.2 rounded font-mono uppercase">Favorit</span>
                </div>
                <span className="text-[11px] sm:text-xs font-bold text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20 whitespace-nowrap">
                  Rp 20.000 / pack
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-stone-300 leading-relaxed">
                Nasi Bakar Spesial / Nasi Putih, Ayam Goreng Rempah / Bakar, Tempe Bacem / Tahu, Sate Telur Puyuh, Sambal Lalapan & Kerupuk, Es Teh.
              </p>
            </div>

            {/* Paket 3 */}
            <div className="bg-stone-900/60 p-2.5 rounded-xl border border-stone-800/80 hover:border-amber-500/30 transition-colors">
              <div className="flex items-center justify-between gap-1 mb-1">
                <h4 className="font-bold text-white text-xs sm:text-sm">Paket Komplit</h4>
                <span className="text-[11px] sm:text-xs font-bold text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20 whitespace-nowrap">
                  Rp 25.000 / pack
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-stone-300 leading-relaxed">
                Nasi Liwet Gurih / Bakar Komplit, Ayam Bakar / Kremes Paha/Dada, Bakwan Jagung / Mendoan, Sate Pilihan, Sambal Khas, Buah & Air Mineral.
              </p>
            </div>

            <div className="bg-stone-900/30 p-2 rounded-lg border border-stone-800/50 text-center">
              <p className="text-[10px] sm:text-[11px] text-stone-400 italic">
                *Semua menu paket dapat disesuaikan (custom) dengan budget dan selera acara Anda.
              </p>
            </div>
          </div>

          {/* Tombol Aksi Slide 2 */}
          <div className="space-y-2 pt-1 border-t border-stone-800/50">
            <a
              href="https://online.fliphtml5.com/fktif/Buku-Menu-Angsa-2026-Final/#google_vignette"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-stone-900 hover:bg-stone-800 border border-stone-700 hover:border-amber-500/50 text-stone-200 hover:text-amber-300 font-semibold text-xs sm:text-sm rounded-xl px-4 py-2.5 transition-all shadow-sm group"
            >
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span>Menu Lainnya</span>
              <ExternalLink className="w-3.5 h-3.5 text-stone-400 group-hover:text-amber-300 ml-auto" />
            </a>

            <a
              href="https://wa.me/6285117715881?text=Halo%20Angkringan%20Saroengan,%20saya%20ingin%20pesan%20paket%20Catering"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold text-xs sm:text-sm rounded-xl px-4 py-2.5 hover:opacity-90 transition-opacity shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Pesan Catering via WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default function AngkringanPage() {
  return (
    <BusinessPage
      businessId="angkringan"
      name="Angkringan Saroengan"
      tagline="Cafe & Resto yang memadukan nuansa klasik dan kekinian dengan view Citylight Kota Semarang. Cocok untuk semua kalangan, khususnya acara keluarga, event, WFC, dan wedding. Hangat & Autentik"
      logoSrc="/logo/logo-angkringan-saroengan.png"
      logoAlt="Logo Angkringan Saroengan"
      accentFrom="from-amber-500"
      accentTo="to-orange-500"
      bgDark="bg-stone-950"
      basePath="angkringan-saroengan"
      waNumber="6285117715881"
      centerLayout={true}
      navOverrides={{
        menu: "https://online.fliphtml5.com/fktif/Buku-Menu-Angsa-2026-Final/#google_vignette",
        reservasi: "https://wa.me/6285117715881",
      }}
      navHidden={["maps", "more"]}
      navModals={{
        partnership: {
          title: "Partnership Angkringan Saroengan",
          content: (
            <div className="space-y-4">
              <p className="text-sm text-stone-300 leading-relaxed">
                Kami terbuka untuk berbagai bentuk kerja sama dan kolaborasi bisnis bersama <span className="text-amber-500 font-medium">Angkringan Saroengan</span>.
              </p>

              <div className="bg-stone-900/50 p-4 rounded-xl border border-stone-800/80 shadow-inner">
                <ul className="space-y-3 list-none">
                  {["Kolaborasi event & komunitas", "Sponsorship & brand activation", "Reseller & distribusi produk", "Co-branding & promosi bersama", "Partner Kemitraan Bisnis"].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-stone-200">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex-shrink-0 shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 border-t border-stone-800/50">
                <p className="text-stone-400 text-xs text-center italic">Hubungi kami untuk mendiskusikan peluang kerja sama lebih lanjut.</p>
              </div>
            </div>
          ),
          waNumber: "6281542988343",
          waButtonLabel: "For More Information",
        },
        wedding: {
          title: "Wedding Package Angkringan Saroengan",
          content: (
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 mb-1">
                <p className="font-semibold text-amber-500 text-xs tracking-wide uppercase">Syarat & Ketentuan Reservasi</p>
              </div>

              <div className="bg-stone-900/50 p-4 rounded-xl border border-stone-800/80 shadow-inner">
                <ul className="space-y-3 list-none">
                  {[
                    "Reservasi Minimal 100 Pack",
                    "Makanan Dan Minuman Wajib dari ANGSA",
                    "Reservasi weding hanya dilakukan maksimal sampai pukul 15.00 WIB",
                    "Pemilik Hajat Wajib melakukan koordinasi/ Meeting bersama tim manajemen angsa jauh hari sebelum Weding",
                    "Wajib DP minimal 50% dari jumlah peserta",
                    "Harga bervariatif mulai tergantung jumlah peserta, konsep, serta menu yang diinginkan",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-stone-200">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex-shrink-0 shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 border-t border-stone-800/50">
                <p className="text-stone-400 text-xs text-center italic">*Syarat & ketentuan berlaku. Hubungi kami untuk penawaran spesial.</p>
              </div>
            </div>
          ),
          waNumber: "6281918427125",
          waButtonLabel: "For More Information",
        },
        catering: {
          title: "Layanan Catering Angkringan",
          content: <CateringModalContent />,
          hideDefaultButton: true,
        },
      }}
    />
  );
}
