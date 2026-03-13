"use client";

import { useState } from "react";
import { KeyRound, Briefcase, Bike, Plus, Minus } from "lucide-react";
import Image from "next/image";

const services = [
  {
    icon: KeyRound,
    title: "Sewa Mobil Lepas Kunci",
    description: "Fleksibilitas penuh dan privasi maksimal. Kemudikan sendiri kendaraan pilihan Anda dan eksplorasi destinasi tanpa batas waktu. Semua unit dipastikan dalam kondisi prima dan terawat dengan jadwal servis rutin.",
    image: "/assets/layanan/1.png"
  },
  {
    icon: Briefcase,
    title: "Sewa Mobil dengan Driver",
    description: "Ideal untuk perjalanan bisnis atau wisata tanpa repot memikirkan navigasi. Driver profesional, ramah, paham rute wisata terbaik, dan berpengalaman kami siap mengantarkan Anda ke tujuan dengan aman dan nyaman.",
    image: "/assets/layanan/2.png"
  },
  {
    icon: Bike,
    title: "Sewa Motor Wisata",
    description: "Solusi gesit, praktis, dan hemat untuk menjelajahi sudut-sudut tersembunyi kota Magelang dan Yogyakarta. Sangat cocok untuk solo traveler atau pasangan yang ingin menghindari kemacetan.",
    image: "/assets/layanan/3.png"
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="services" className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center md:text-left mb-16 md:flex md:items-end md:justify-between">
          <div className="max-w-xl">
            <span className="inline-block text-blue-600 font-semibold text-sm tracking-widest uppercase mb-3">
              Apa yang Kami Tawarkan
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Layanan Eksklusif
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full md:mx-0 mx-auto" />
          </div>
          <p className="max-w-md mx-auto md:mx-0 text-slate-500 text-base leading-relaxed mt-6 md:mt-0 text-center md:text-right">
            Pilih transportasi yang dirancang khusus untuk memenuhi gaya perjalanan Anda dengan aman dan fleksibel.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          {/* Left: Accordion List */}
          <div className="flex flex-col gap-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isOpen = openIndex === index;

              return (
                <div 
                  key={service.title}
                  onClick={() => setOpenIndex(index)}
                  className={`relative overflow-hidden rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isOpen 
                      ? "border-blue-500 bg-white shadow-[0_8px_30px_rgb(59,130,246,0.12)] ring-1 ring-blue-500/20" 
                      : "border-slate-200 bg-white hover:bg-slate-50 hover:border-blue-200"
                  }`}
                >
                  {/* Accordion Header (Row 1: Icon + Title) */}
                  <div className="flex items-center justify-between p-6 sm:p-8">
                    <div className="flex items-center gap-4 sm:gap-5">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isOpen ? "bg-blue-600 text-white shadow-md shadow-blue-600/30 scale-105" : "bg-blue-50 text-blue-600"
                      }`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className={`text-lg sm:text-xl font-bold transition-colors ${
                        isOpen ? "text-blue-600" : "text-slate-800"
                      }`}>
                        {service.title}
                      </h3>
                    </div>
                    
                    <div className={`w-8 h-8 rounded-full flex flex-shrink-0 items-center justify-center border transition-colors ${
                      isOpen ? "border-blue-200 bg-blue-50 text-blue-600" : "border-slate-200 bg-transparent text-slate-400"
                    }`}>
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </div>

                  {/* Accordion Body (Row 2: Description layout) */}
                  <div 
                    className={`transition-all duration-500 ease-in-out px-6 sm:px-8 overflow-hidden ${
                      isOpen ? "max-h-48 opacity-100 pb-6 sm:pb-8" : "max-h-0 opacity-0 pb-0"
                    }`}
                  >
                    {/* No left padding so it fills the row */}
                    <div className="w-full">
                      <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right: Dynamic Image Display (Desktop Only) */}
          <div className="hidden lg:block relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group border border-slate-200/50">
            {services.map((service, index) => (
              <Image
                key={service.title}
                src={service.image}
                alt={service.title}
                fill
                sizes="50vw"
                className={`object-cover transition-all duration-700 ease-in-out ${
                  openIndex === index ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-105"
                }`}
              />
            ))}
            {/* Dark overlay for text legibility */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 z-20 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
            
            {/* Image overlay badge & title */}
            <div className="absolute bottom-8 left-8 right-8 z-30">
              <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full mb-3 inline-block shadow-md">
                Layanan Ekslusif
              </span>
              <p className="text-white font-semibold text-2xl drop-shadow-md">
                {services[openIndex].title}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}