"use client";

import { Star, MapPin, StarHalf } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Gandrung Pasulukan",
    date: "2 April 2026",
    text: "Kentangnya bagus2 dan memuaskan👍👍👍",
    rating: 5,
  },
  
];

export default function LocationAndReviews() {
  return (
    <section id="testimonials" className="py-24 bg-stone-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[80%] h-96 bg-amber-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Testimoni & <span className="text-amber-500">Lokasi</span>
          </h2>
          <p className="text-stone-400 max-w-2xl mx-auto">
            Kepercayaan pelanggan adalah prioritas kami. Lihat pengalaman mereka yang telah bermitra dengan UMKM Bima Wibisono Kentang.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Kolom Kiri: Google Maps Preview */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 text-white">
              <div className="bg-amber-600/20 p-3 rounded-xl border border-amber-500/20">
                <MapPin className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Lahan & Tempat Sortir</h3>
                <p className="text-stone-400 text-sm">Dusun Marongan, Sukomakmur, Magelang</p>
              </div>
            </div>

            <div className="w-full h-[400px] bg-stone-800/50 rounded-3xl overflow-hidden border border-white/10 relative shadow-2xl group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2352.440850271165!2d110.06695347777848!3d-7.430001184072706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a9b209ef1dbc1%3A0x9c6ce20d2e9dd826!2sBIMAWIBISONO%20KENTANG!5e0!3m2!1sid!2sid!4v1775200440278!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full grayscale-[20%] contrast-[1.1] opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              ></iframe>
            </div>
          </div>

          {/* Kolom Kanan: Testimoni */}
          <div className="flex flex-col gap-6">
             <div className="flex items-center gap-3 mb-2">
                <div className="flex bg-white/5 border border-white/10 rounded-full px-4 py-2 items-center gap-2">
                  <div className="flex">
                    <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                    <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                    <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                    <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                    <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                  </div>
                  <span className="text-white font-semibold ml-2">5.0</span>
                  <span className="text-stone-400 text-sm border-l border-white/20 pl-2 ml-1">Kepuasan Pelanggan</span>
                </div>
             </div>

            <div className="grid gap-4">
              {testimonials.map((review) => (
                <div 
                  key={review.id} 
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-400 flex items-center justify-center text-white font-bold text-lg shadow-inner uppercase">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-white font-medium capitalize">{review.name}</h4>
                        <p className="text-stone-400 text-xs">{review.date}</p>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-stone-300 text-sm leading-relaxed">
                    "{review.text}"
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
