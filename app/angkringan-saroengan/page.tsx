"use client";

import BusinessPage from "@/components/BusinessPage";

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
                  {["Kolaborasi event & komunitas", "Sponsorship & brand activation", "Reseller & distribusi produk", "Co-branding & promosi bersama"].map((item) => (
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
                    "Minimal tamu: 100 orang",
                    "DP 50% saat konfirmasi booking",
                    "Pelunasan maksimal H-7 sebelum acara",
                    "Tersedia paket dekorasi & hiburan",
                    "Menu catering dapat dikustomisasi",
                    "Gratis survei lokasi & konsultasi awal",
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
      }}
    />
  );
}
