"use client";

import BusinessPage from "@/components/BusinessPage";
import { ShoppingBag } from "lucide-react";

export default function SeblakPage() {
  return (
    <BusinessPage
      businessId="seblak"
      name="Waroenk Seblak x Kedai Saroengan"
      tagline="Seblak bernuansa estetik yang berkolaborasi dengan Kedai Saroengan menghadirkan konsep baru dengan view citylight, menu bervariatif, tempat yang worth it dan buka 24 jam"
      logoSrc="/logo/logo-seblak-saroengan.png"
      logoAlt="Logo Waroenk Seblak x Kedai Saroengan"
      accentFrom="from-red-500"
      accentTo="to-rose-600"
      bgDark="bg-stone-950"
      basePath="seblak-saroengan"
      waNumber="62882007265442"
      centerLayout={true}
      navOverrides={{
        menu: "https://heyzine.com/flip-book/81138d2aef.html",
        reservasi: "https://wa.me/62882007265442",
        "order-online": "https://shopee.co.id/universal-link/nowfood/shop/21873188?deep_and_deferred=1&shareChannel=copy_link",
      }}
      navHidden={["wedding", "more", "catering"]}
      extraNavItems={[
        {
          key: "order-online",
          label: "Order Online",
          icon: ShoppingBag,
          description: "Pesan praktis lewat ShopeeFood",
        },
      ]}
      navModals={{
        partnership: {
          title: "Partnership Waroenk Seblak x Kedai Saroengan",
          content: (
            <div className="space-y-4">
              <p className="text-sm text-stone-300 leading-relaxed">
                Kami terbuka untuk berbagai bentuk kerja sama dan kolaborasi bisnis bersama <span className="text-rose-400 font-medium">Waroenk Seblak x Kedai Saroengan</span>.
              </p>

              <div className="bg-stone-900/50 p-4 rounded-xl border border-stone-800/80 shadow-inner">
                <ul className="space-y-3 list-none">
                  {["Kolaborasi event & komunitas", "Sponsorship & brand activation", "Reseller & distribusi produk", "Co-branding & promosi bersama", "Partner Kemitraan Bisnis"].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-stone-200">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-red-500 to-rose-600 flex-shrink-0 shadow-[0_0_8px_rgba(244,63,94,0.5)]" />
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
          waNumber: "62882007265442",
          waButtonLabel: "For more information",
        },
        maps: {
          title: "Lokasi & Ulasan Google Maps",
          content: (
            <div className="space-y-4">
              <p className="text-sm text-stone-300 leading-relaxed">
                Pernah menikmati pedas gurihnya <span className="text-rose-400 font-medium">Waroenk Seblak x Kedai Saroengan</span>? Bagikan pengalaman serumu dan bantu kami berkembang dengan memberikan ulasan serta rating bintang 5 di
                Google Maps!
              </p>

              <div className="bg-stone-900/50 p-4 rounded-xl border border-stone-800/80 shadow-inner text-center">
                <div className="flex justify-center gap-1.5 mb-2 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-stone-300 text-xs leading-snug">Setiap ulasan bintang 5 sangat berharga bagi peningkatan mutu dan pelayanan kami.</p>
              </div>

              <div className="pt-2 border-t border-stone-800/50">
                <p className="text-stone-400 text-xs text-center italic">Klik tombol di bawah untuk langsung membuka Google Maps.</p>
              </div>
            </div>
          ),
          buttonHref: "https://maps.app.goo.gl/FwtbBXorX1AJ581a6?g_st=ic",
          buttonLabel: "Buka Google Maps & Beri Ulasan",
        },
      }}
    />
  );
}
