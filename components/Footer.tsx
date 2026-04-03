import {
  PhoneCall,
  ExternalLink,
  Leaf,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="bg-stone-900 text-white">
      {/* Contact Section */}
      <div className="max-w-6xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-amber-500 font-semibold text-sm tracking-widest uppercase mb-3">
            Kontak & Pemesanan
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Pesan Kentang Grosir Anda Hari Ini
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-400 rounded-full mx-auto mb-6" />
          <p className="text-stone-400 text-lg max-w-xl mx-auto">
            Butuh kentang segar dalam jumlah besar?{" "}
            <span className="text-amber-400 font-medium">
              Hubungi petani kami langsung
            </span>{" "}
            untuk mendapatkan penawaran spesial.
          </p>
        </div>

        
    

        {/* CTA Banner */}
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-green-700 via-green-600 to-emerald-600 p-8 md:p-10 text-center shadow-2xl shadow-green-600/20 mt-12">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
              Kemitraan Langsung dari Lereng Sumbing!
            </h3>
            <p className="text-green-100 mb-6 max-w-lg mx-auto">
              Dapatkan kentang segar kualitas terbaik dengan harga petani. Chat sekarang untuk informasi stok dan ketersediaan.
            </p>
            <Link
              href="https://wa.me/628174714181"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-green-700 font-bold px-8 py-3 rounded-xl hover:bg-stone-50 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <PhoneCall className="w-5 h-5" />
              Tanya Harga via WhatsApp
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-800">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Name */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center">
              <Leaf className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white font-bold text-sm leading-tight">
                UMKM BIMA WIBISONO
              </p>
              <p className="text-stone-500 text-xs mt-0.5">
                Penyedia Kentang Segar Sukomakmur
              </p>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-stone-500 text-sm text-center">
            &copy; {new Date().getFullYear()} UMKM Bima Wibisono. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
