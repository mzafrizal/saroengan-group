"use client";

import { Utensils, HeartHandshake, Eye, Sparkles, Building, CheckCircle2 } from "lucide-react";

const whyPoints = [
  {
    icon: Utensils,
    number: "01",
    badge: "Komitmen Good Food",
    title: "Cita Rasa Lezat Berstandar Tinggi",
    desc: "Setiap unit usaha menghadirkan olahan cita rasa unggulan yang konsisten, mendorong pertumbuhan volume penjualan positif dan berkelanjutan.",
    gradient: "from-amber-500 to-orange-500",
    lightBg: "bg-amber-50",
    borderColor: "border-amber-200/70",
    textColor: "text-amber-600",
  },
  {
    icon: HeartHandshake,
    number: "02",
    badge: "Komitmen Good Service",
    title: "Pelayanan Hangat, Ramah & Profesional",
    desc: "Keramahan layanan tulus dari hati yang membangun kenyamanan dan loyalitas pelanggan setia di berbagai segmen pasar.",
    gradient: "from-rose-500 to-pink-500",
    lightBg: "bg-rose-50",
    borderColor: "border-rose-200/70",
    textColor: "text-rose-600",
  },
  {
    icon: Eye,
    number: "03",
    badge: "Suasana & Lokasi Memikat",
    title: "Konsep Pemandangan Citylight",
    desc: "Pemilihan lokasi istimewa dengan panorama gemerlap lampu malam Kota Semarang, menghadirkan pengalaman santap yang hangat dan memorable.",
    gradient: "from-blue-500 to-indigo-500",
    lightBg: "bg-blue-50",
    borderColor: "border-blue-200/70",
    textColor: "text-blue-600",
  },
  {
    icon: Sparkles,
    number: "04",
    badge: "Standar Operasional",
    title: "Fasilitas Lengkap, Bersih & Memadai",
    desc: "Area berkumpul nyaman, sarana ramah pengunjung, serta efisiensi operasional dapur dan servis yang memastikan momen selalu istimewa.",
    gradient: "from-emerald-500 to-teal-500",
    lightBg: "bg-emerald-50",
    borderColor: "border-emerald-200/70",
    textColor: "text-emerald-600",
  },
  {
    icon: Building,
    number: "05",
    badge: "Fondasi Teruji Sejak 2022",
    title: "Integritas & Manajemen Profesional",
    desc: "Berdiri sejak 16 Oktober 2022 di bawah kepemimpinan Ust. Ahmad Ainul Yaqin, S.Ag., terbukti solid bagi pelanggan maupun mitra bisnis.",
    gradient: "from-purple-500 to-violet-500",
    lightBg: "bg-purple-50",
    borderColor: "border-purple-200/70",
    textColor: "text-purple-600",
  },
  {
    icon: CheckCircle2,
    number: "06",
    badge: "Lebih dari Sekadar Tempat Makan",
    title: "Destinasi Gaya Hidup Kuliner",
    desc: "Ruang temu yang mengedepankan kualitas dan kenyamanan untuk momen keluarga, nongkrong, nugas, WFC, hingga event spesial.",
    gradient: "from-amber-600 to-stone-700",
    lightBg: "bg-stone-100",
    borderColor: "border-stone-300",
    textColor: "text-stone-700",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-stone-50 relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-amber-600 font-bold text-xs tracking-widest uppercase mb-3 px-3 py-1 bg-amber-100/70 rounded-full border border-amber-300/60">
            Why Saroengan Group?
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-stone-900 mb-4 tracking-tight">
            Kenapa Memilih{" "}
            <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 bg-clip-text text-transparent">
              Saroengan Group
            </span>
            ?
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-400 rounded-full mx-auto mb-6" />
          <p className="max-w-3xl mx-auto text-stone-600 text-base sm:text-lg leading-relaxed text-justify sm:text-center">
            Saroengan Group hadir bukan sekadar sebagai penyedia tempat makan, melainkan sebagai{" "}
            <strong className="text-stone-900">destinasi gaya hidup kuliner</strong> yang
            mengedepankan kualitas dan kenyamanan di setiap momennya. Mengusung komitmen{" "}
            <span className="text-amber-600 font-bold">&ldquo;Good Food &amp; Good Service&rdquo;</span>,
            kami memadukan keahlian mengolah cita rasa lezat dengan pelayanan hangat dan profesional.
          </p>
        </div>

        {/* Feature Cards Grid (3 columns on lg, 2 on sm) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyPoints.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative bg-white border border-stone-200/80 rounded-3xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-amber-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-2xl ${item.lightBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm`}
                    >
                      <Icon className={`w-6 h-6 ${item.textColor}`} />
                    </div>
                    <span className="text-2xl font-black text-stone-200 group-hover:text-amber-400 transition-colors">
                      {item.number}
                    </span>
                  </div>

                  <span className={`inline-block text-[11px] font-bold uppercase tracking-wider ${item.textColor} mb-2`}>
                    {item.badge}
                  </span>

                  <h3 className="text-lg font-bold text-stone-900 mb-2 leading-snug group-hover:text-amber-700 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-stone-500 text-sm leading-relaxed text-justify">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom accent glow bar */}
                <div
                  className={`mt-6 h-1 w-12 bg-gradient-to-r ${item.gradient} rounded-full group-hover:w-full transition-all duration-300`}
                />
              </div>
            );
          })}
        </div>

        {/* Highlight Quote Banner at Bottom of Section */}
        <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-stone-900 via-stone-950 to-stone-900 border border-stone-800 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-4">
            <span className="text-amber-400 text-xs font-bold tracking-widest uppercase">
              Komitmen Nilai &amp; Visi
            </span>
            <p className="text-base sm:text-lg lg:text-xl font-medium text-stone-200 leading-relaxed italic">
              &ldquo;Dipandu oleh nilai-nilai integritas serta manajemen yang profesional sejak berdiri pada 16 Oktober 2022, Saroengan Group terus membuktikan diri sebagai pilihan terbaik bagi pelanggan yang mencari pengalaman kuliner berkesan sekaligus mitra bisnis F&amp;B yang solid dan terpercaya.&rdquo;
            </p>
            <div className="flex items-center gap-2 text-stone-400 text-xs mt-2">
              <span className="w-8 h-px bg-amber-500/50" />
              <span>Saroengan Group Management</span>
              <span className="w-8 h-px bg-amber-500/50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
