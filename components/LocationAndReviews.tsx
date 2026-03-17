"use client";

import { Star, MapPin, StarHalf } from "lucide-react";

// Data testimoni asli dari Google Maps Hexa Creative
const testimonials = [
  {
    id: 1,
    name: "zella",
    date: "4 bulan lalu",
    text: "Pelayanan mantab adminnya asik dan baik mobilnya juga bersih dan nyaman",
    rating: 5,
  },
  {
    id: 2,
    name: "Aulia Rahmah",
    date: "3 bulan lalu",
    text: "Sewa mobil di magelang trusted, mas nya sangat informatif dan membantu. ratenya murah, bisa diantar jemput kemana saja di daerah magelang, unitnya sangat bersih dan bagus mulus.",
    rating: 5,
  },
  {
    id: 3,
    name: "luzzy",
    date: "6 bulan lalu",
    text: "Thank you for your service during the 2 days in Jogja, we went around the sights with you, the service was satisfactory, once again, thank you for everything.",
    rating: 5,
  },
];

export default function LocationAndReviews() {
  return (
    <section id="contact" className="py-24 bg-[#0a1120] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[80%] h-96 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Lokasi & <span className="text-[#38bdf8]">Testimoni</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Kunjungi garasi kami atau lihat pengalaman pelanggan yang sudah menggunakan layanan transportasi dan wisata Hexa Creative.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Kolom Kiri: Google Maps Preview */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 text-white">
              <div className="bg-blue-600/20 p-3 rounded-xl border border-blue-500/20">
                <MapPin className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Kantor & Garasi Kami</h3>
                <p className="text-slate-400 text-sm">Magelang, Jawa Tengah, Indonesia</p>
              </div>
            </div>

            <div className="w-full h-[400px] bg-slate-800/50 rounded-3xl overflow-hidden border border-white/10 relative shadow-2xl group">
              {/* Menggunakan format embed agar tidak perlu login */}
              <iframe
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d988.9419038828565!2d110.29043506954905!3d-7.490890999532564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a894be02eb873%3A0x877ca728269415c7!2sHexa%20Creative%20%26%20Sewa%20Mobil!5e0!3m2!1sid!2sid!4v1773727189956!5m2!1sid!2sid"
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

          {/* Kolom Kanan: Testimoni Google Maps */}
          <div className="flex flex-col gap-6">
             <div className="flex items-center gap-3 mb-2">
                <div className="flex bg-white/5 border border-white/10 rounded-full px-4 py-2 items-center gap-2">
                  <div className="flex">
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    <StarHalf className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  </div>
                  <span className="text-white font-semibold ml-2">4.4 / 5.0</span>
                  <span className="text-slate-400 text-sm border-l border-white/20 pl-2 ml-1">Berdasarkan Google Reviews</span>
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
                      {/* Avatar Inisial */}
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold text-lg shadow-inner uppercase">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-white font-medium capitalize">{review.name}</h4>
                        <p className="text-slate-400 text-xs">{review.date}</p>
                      </div>
                    </div>
                    {/* Bintang */}
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">
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


