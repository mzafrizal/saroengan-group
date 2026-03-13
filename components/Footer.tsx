import {
  PhoneCall,
  Instagram,
  Mail,
  MapPin,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const contactItems = [
  {
    icon: PhoneCall,
    label: "WhatsApp",
    value: "0822-2135-4217",
    href: "https://wa.me/6282221354217",
    color: "bg-green-500/10 text-green-400 border-green-500/20",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "Hexa.creatiive",
    href: "https://instagram.com/Hexa.creatiive",
    color: "bg-pink-500/10 text-pink-400 border-pink-500/20",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hexacreatiive@gmail.com",
    href: "mailto:hexacreatiive@gmail.com",
    color: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  },
  {
    icon: MapPin,
    label: "Kantor",
    value:
      "RT.003/RW.002, Giyanti, Kec. Candimulyo, Kabupaten Magelang, Jawa Tengah 56191",
    href: "https://maps.google.com/?q=Giyanti+Candimulyo+Magelang",
    color: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-white">
      {/* Contact Section */}
      <div className="max-w-6xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-blue-400 font-semibold text-sm tracking-widest uppercase mb-3">
            Kontak Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Hubungi Kami Sekarang
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto mb-6" />
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Siap Memulai Perjalanan Anda?{" "}
            <span className="text-blue-400 font-medium">
              Tim kami siap melayani 24/7
            </span>{" "}
            untuk menjawab pertanyaan dan memesan layanan Anda.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-start gap-3 p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/50 hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`w-12 h-12 rounded-xl border flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">
                    {item.label}
                  </p>
                  <p className="text-white font-medium text-sm leading-relaxed">
                    {item.value}
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
              </Link>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 p-8 md:p-10 text-center shadow-2xl shadow-blue-500/20">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
              Mulai Perjalanan Impian Anda Bersama Kami!
            </h3>
            <p className="text-blue-100 mb-6 max-w-lg mx-auto">
              Dapatkan penawaran terbaik dan layanan premium. Hubungi via
              WhatsApp untuk respon lebih cepat.
            </p>
            <Link
              href="https://wa.me/6282221354217"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <PhoneCall className="w-5 h-5" />
              Chat via WhatsApp
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Name */}
          <div className="flex items-center gap-3">
            <Image
              src="/assets/logo-putih.png"
              alt="Hexa Logo"
              width={120}
              height={40}
              className="h-8 w-auto object-contain brightness-90"
            />
            <div>
              <p className="text-white font-bold text-sm leading-tight">
                PT. HEXA CREATIVE BERSAMA
              </p>
              <p className="text-slate-500 text-xs mt-0.5">
                Mitra Terpercaya untuk Setiap Perjalanan Anda
              </p>
              <p className="text-slate-500 text-[10px] mt-1 tracking-wider text-blue-400/80">
                MAGELANG &quot; YOGYAKARTA &quot; INDONESIA
              </p>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-slate-500 text-sm text-center">
            &copy; {new Date().getFullYear()} PT. HEXA CREATIVE BERSAMA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
