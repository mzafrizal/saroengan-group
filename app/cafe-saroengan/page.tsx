"use client";

import BusinessPage from "@/components/BusinessPage";

export default function CafePage() {
  return (
    <BusinessPage
      businessId="cafe"
      name="Cafe Saroengan"
      tagline="Cafe dengan nuansa islami dan klasik yang dipadukan dengan view Citylight Kota Semarang. Cocok di setiap momen kebersamaan, nongkrong, nugas, WFC, acara keluarga, dan menjadi titik kumpul wong tulus"
      logoSrc="/logo/logo-cafe-saroengan.png"
      logoAlt="Logo Cafe Saroengan"
      accentFrom="from-stone-500"
      accentTo="to-stone-700"
      bgDark="bg-stone-950"
      basePath="cafe-saroengan"
      waNumber="6285117508581"
      centerLayout={true}
      navOverrides={{
        menu: "https://opaper.app/saroengan_cafe",
        reservasi: "https://wa.me/6285117508581",
      }}
      navHidden={["wedding", "more", "catering"]}
      navModals={{
        partnership: {
          title: "Partnership Cafe Saroengan",
          content: (
            <div className="space-y-4">
              <p className="text-sm text-stone-300 leading-relaxed">
                Kami terbuka untuk berbagai bentuk kerja sama dan kolaborasi bisnis bersama <span className="text-stone-300 font-medium">Cafe Saroengan</span>.
              </p>

              <div className="bg-stone-900/50 p-4 rounded-xl border border-stone-800/80 shadow-inner">
                <ul className="space-y-3 list-none">
                  {["Kolaborasi event & komunitas", "Sponsorship & brand activation", "Reseller & distribusi produk", "Co-branding & promosi bersama", "Partner Kemitraan Bisnis"].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-stone-200">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-stone-400 to-stone-600 flex-shrink-0 shadow-[0_0_8px_rgba(168,162,158,0.5)]" />
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
          waNumber: "6285117508581",
          waButtonLabel: "For more information",
        },
        maps: {
          title: "Lokasi & Ulasan Google Maps",
          content: (
            <div className="space-y-4">
              <p className="text-sm text-stone-300 leading-relaxed">
                Pernah berkunjung ke <span className="text-white font-medium">Cafe Saroengan</span>? Ceritakan pengalaman hangatmu dan bantu kami berkembang dengan memberikan ulasan serta rating bintang 5 di Google Maps!
              </p>

              <div className="bg-stone-900/50 p-4 rounded-xl border border-stone-800/80 shadow-inner text-center">
                <div className="flex justify-center gap-1.5 mb-2 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-stone-300 text-xs leading-snug">Setiap ulasan bintang 5 dari Anda sangat berharga untuk pelayanan kami yang lebih baik.</p>
              </div>

              <div className="pt-2 border-t border-stone-800/50">
                <p className="text-stone-400 text-xs text-center italic">Klik tombol di bawah untuk langsung membuka Google Maps.</p>
              </div>
            </div>
          ),
          buttonHref: "https://maps.app.goo.gl/QZ3bB8bi9xggiYDy9?g_st=ic",
          buttonLabel: "Buka Google Maps & Beri Ulasan",
        },
      }}
    />
  );
}
