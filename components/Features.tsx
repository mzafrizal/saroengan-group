"use client";

import { useState } from "react";
import { Mountain, Handshake, ShieldCheck, Plus, Minus } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Mountain,
    title: "Ditanam di Dataran Tinggi",
    description: "Kualitas kentang jauh lebih padat dan tahan lama karena ditanam di ketinggian 1.475 MDPL Dusun Marongan. Suhu pegunungan yang ideal memastikan hasil panen selalu optimal sepanjang tahun.",
    image: "/assets/why/Ditanam%20di%20Dataran%20Tinggi.jpg"
  },
  {
    icon: Handshake,
    title: "Tanpa Perantara",
    description: "Nikmati harga yang lebih jujur dan kompetitif. Karena Anda membeli langsung dari kelompok tani UMKM Bima Wibisono, tidak ada biaya tambahan dari jalur distribusi yang panjang.",
    image: "/assets/why/Tanpa%20Perantara.jpeg"
  },
  {
    icon: ShieldCheck,
    title: "Kualitas Terjamin",
    description: "Setiap butir kentang disortir secara teliti setelah masa panen. Hanya kentang segar, mulus, dan berkualitas super yang akan kami packing untuk dikirim ke tangan pembeli.",
    image: "/assets/why/Kualitas%20Terjamin.jpeg"
  },
];

export default function Features() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="features" className="py-24 px-6 bg-stone-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center md:text-left mb-16 md:flex md:items-end md:justify-between">
          <div className="max-w-xl">
            <span className="inline-block text-amber-600 font-semibold text-sm tracking-widest uppercase mb-3">
              Keunggulan Produk Kami
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-stone-900 mb-4 tracking-tight">
              Mengapa Memilih Kentang Kami?
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full md:mx-0 mx-auto" />
          </div>
          <p className="max-w-md mx-auto md:mx-0 text-stone-600 text-base leading-relaxed mt-6 md:mt-0 text-center md:text-right">
            Dari bibit unggul hingga sampai ke dapur Anda, kami memberikan jaminan kualitas terbaik langsung dari petani.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          {/* Left: Accordion List */}
          <div className="flex flex-col gap-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isOpen = openIndex === index;

              return (
                <div 
                  key={feature.title}
                  onClick={() => setOpenIndex(index)}
                  className={`relative overflow-hidden rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isOpen 
                      ? "border-amber-500 bg-white shadow-[0_8px_30px_rgba(245,158,11,0.12)] ring-1 ring-amber-500/20" 
                      : "border-stone-200 bg-white hover:bg-stone-50 hover:border-amber-200"
                  }`}
                >
                  <div className="flex items-center justify-between p-6 sm:p-8">
                    <div className="flex items-center gap-4 sm:gap-5">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isOpen ? "bg-amber-600 text-white shadow-md shadow-amber-600/30 scale-105" : "bg-amber-50 text-amber-600"
                      }`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className={`text-lg sm:text-xl font-bold transition-colors ${
                        isOpen ? "text-amber-600" : "text-stone-800"
                      }`}>
                        {feature.title}
                      </h3>
                    </div>
                    
                    <div className={`w-8 h-8 rounded-full flex flex-shrink-0 items-center justify-center border transition-colors ${
                      isOpen ? "border-amber-200 bg-amber-50 text-amber-600" : "border-stone-200 bg-transparent text-stone-400"
                    }`}>
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </div>

                  <div 
                    className={`transition-all duration-500 ease-in-out px-6 sm:px-8 overflow-hidden ${
                      isOpen ? "max-h-48 opacity-100 pb-6 sm:pb-8" : "max-h-0 opacity-0 pb-0"
                    }`}
                  >
                    <div className="w-full">
                      <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right: Dynamic Image Display (Desktop Only) */}
          <div className="hidden lg:block relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group border border-stone-200/50">
            {features.map((feature, index) => (
              <Image
                key={feature.title}
                src={feature.image}
                alt={feature.title}
                fill
                sizes="50vw"
                className={`object-cover transition-all duration-700 ease-in-out ${
                  openIndex === index ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-105"
                }`}
              />
            ))}
            {/* Dark overlay for text legibility */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 z-20 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent" />
            
            {/* Image overlay badge & title */}
            <div className="absolute bottom-8 left-8 right-8 z-30">
              <span className="bg-amber-600 text-white text-xs font-bold px-3 py-1.5 rounded-full mb-3 inline-block shadow-md">
                Keunggulan
              </span>
              <p className="text-white font-semibold text-2xl drop-shadow-md">
                {features[openIndex].title}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
