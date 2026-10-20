"use client";

import Link from "next/link";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const locations = [
  {
    name: "Angkringan Saroengan",
    address: "Jl. Saroengan No. 1, Kota Anda",
    hours: "17.00 – 01.00 WIB",
    phone: "628174714181",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2352.440850271165!2d110.06695347777848!3d-7.430001184072706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a9b209ef1dbc1%3A0x9c6ce20d2e9dd826!2sBIMAWIBISONO%20KENTANG!5e0!3m2!1sid!2sid!4v1775200440278!5m2!1sid!2sid",
    color: "from-amber-500 to-orange-500",
  },
];

export default function LocationAndReviews() {
  return (
    <section id="location" className="py-24 bg-stone-950 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[60%] h-80 bg-amber-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[50%] h-60 bg-orange-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-amber-500 font-semibold text-sm tracking-widest uppercase mb-4">
            Lokasi & Kontak
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Temukan Kami{" "}
            <span className="text-amber-500">di Sini</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-400 rounded-full mx-auto mb-6" />
          <p className="text-stone-400 max-w-xl mx-auto">
            Kunjungi langsung dan rasakan kehangatan Saroengan Group. Kami selalu menanti
            kehadiran Anda.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Map */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3 text-white">
              <div className="bg-amber-600/20 p-3 rounded-xl border border-amber-500/20">
                <MapPin className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Lokasi Kami</h3>
                <p className="text-stone-400 text-sm">Mudah dijangkau, siap menyambutmu</p>
              </div>
            </div>

            <div className="w-full h-[400px] bg-stone-800/50 rounded-3xl overflow-hidden border border-white/10 relative shadow-2xl group">
              <iframe
                src={locations[0].mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full grayscale-[30%] contrast-[1.05] opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              />
            </div>
          </div>

          {/* Right: Info Cards */}
          <div className="flex flex-col gap-5">
            {/* Address */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition-colors backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="bg-amber-500/15 border border-amber-500/20 p-3 rounded-xl flex-shrink-0">
                  <MapPin className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Alamat</h4>
                  <p className="text-stone-400 text-sm leading-relaxed">
                    Jl. Saroengan No. 1, Kota Anda<br />
                    (Update alamat lengkap di sini)
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition-colors backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="bg-emerald-500/15 border border-emerald-500/20 p-3 rounded-xl flex-shrink-0">
                  <Clock className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Jam Operasional</h4>
                  <div className="flex flex-col gap-1.5">
                    {[
                      { label: "Angkringan Saroengan", time: "17.00 – 01.00 WIB" },
                      { label: "Cafe Saroengan", time: "09.00 – 22.00 WIB" },
                      { label: "Seblak Saroengan", time: "10.00 – 21.00 WIB" },
                    ].map((item) => (
                      <div key={item.label} className="flex justify-between items-center">
                        <span className="text-stone-400 text-xs">{item.label}</span>
                        <span className="text-emerald-400 text-xs font-medium">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition-colors backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500/15 border border-blue-500/20 p-3 rounded-xl flex-shrink-0">
                  <Phone className="w-5 h-5 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-semibold mb-1">Kontak</h4>
                  <p className="text-stone-400 text-sm mb-4">+62 817-4714-181</p>
                  <Button
                    asChild
                    className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold rounded-xl w-full py-3 h-auto transition-all duration-300 hover:shadow-lg hover:shadow-green-600/20"
                  >
                    <Link
                      href="https://wa.me/628174714181"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Chat via WhatsApp
                      <ExternalLink className="w-4 h-4 opacity-70" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
