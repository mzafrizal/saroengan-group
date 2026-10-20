"use client";

import { useState } from "react";
import { Sparkles, Sofa, Wallet, Clock } from "lucide-react";

const values = [
  {
    icon: Sparkles,
    title: "Bahan Berkualitas",
    description:
      "Selalu segar dan higienis setiap hari. Kami berkomitmen menyajikan bahan-bahan terbaik yang dipilih dengan cermat.",
    color: "text-amber-500",
    bg: "bg-amber-500",
    lightBg: "bg-amber-50",
    border: "border-amber-100",
    hoverBorder: "hover:border-amber-300",
  },
  {
    icon: Sofa,
    title: "Tempat Nyaman",
    description:
      "Suasana asik untuk nongkrong sendiri maupun bareng teman. Setiap sudut dirancang untuk memberi rasa nyaman.",
    color: "text-emerald-500",
    bg: "bg-emerald-500",
    lightBg: "bg-emerald-50",
    border: "border-emerald-100",
    hoverBorder: "hover:border-emerald-300",
  },
  {
    icon: Wallet,
    title: "Harga Bersahabat",
    description:
      "Rasa premium tanpa bikin kantong jebol. Nikmati kualitas terbaik dengan harga yang terjangkau untuk semua kalangan.",
    color: "text-violet-500",
    bg: "bg-violet-500",
    lightBg: "bg-violet-50",
    border: "border-violet-100",
    hoverBorder: "hover:border-violet-300",
  },
  {
    icon: Clock,
    title: "Selalu Siap Melayani",
    description:
      "Buka setiap hari dengan pelayanan ramah dan cepat. Kepuasan Anda adalah prioritas utama kami.",
    color: "text-rose-500",
    bg: "bg-rose-500",
    lightBg: "bg-rose-50",
    border: "border-rose-100",
    hoverBorder: "hover:border-rose-300",
  },
];

export default function Features() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="features" className="py-24 px-6 bg-stone-50 relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-amber-600 font-semibold text-sm tracking-widest uppercase mb-4">
            Kenapa Memilih Kami
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-stone-900 mb-4 tracking-tight">
            Nilai Yang Kami{" "}
            <span className="text-amber-600">Junjung</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-400 rounded-full mx-auto mb-6" />
          <p className="max-w-xl mx-auto text-stone-500 text-base leading-relaxed">
            Di Saroengan Group, setiap keputusan kami didasari oleh nilai-nilai yang kami
            pegang teguh untuk kepuasan pelanggan.
          </p>
        </div>

        {/* Value Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, idx) => {
            const Icon = val.icon;
            const isActive = active === idx;
            return (
              <div
                key={val.title}
                onMouseEnter={() => setActive(idx)}
                onMouseLeave={() => setActive(null)}
                className={`group relative bg-white border-2 rounded-3xl p-6 cursor-default transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${val.border} ${val.hoverBorder}`}
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl ${val.lightBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className={`w-7 h-7 ${val.color}`} />
                </div>

                {/* Number badge */}
                <div className={`absolute top-5 right-5 text-xs font-black ${val.color} opacity-30 group-hover:opacity-60 transition-opacity text-3xl leading-none`}>
                  0{idx + 1}
                </div>

                <h3 className="text-base font-bold text-stone-800 mb-3 group-hover:text-stone-900">
                  {val.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed">{val.description}</p>

                {/* Bottom accent line */}
                <div
                  className={`absolute bottom-0 left-6 right-6 h-0.5 ${val.bg} rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
