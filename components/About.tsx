import { ShieldCheck, Sparkles, TrendingUp, Building2, UserCheck } from "lucide-react";

const companyValues = [
  {
    icon: ShieldCheck,
    badge: "Nilai Manajerial",
    title: "Fondasi Kuat & Islami",
    desc: "Menjunjung tinggi integritas, kejujuran, dan etika kerja profesional dalam tata kelola bisnis.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-200/60",
    hoverBorder: "group-hover:border-emerald-400",
  },
  {
    icon: Sparkles,
    badge: "Inovasi F&B",
    title: "Ragam Konsep Kuliner",
    desc: "Berkomitmen menghadirkan ragam inovasi kuliner, dari kafe estetik hingga jajanan populer.",
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-200/60",
    hoverBorder: "group-hover:border-amber-400",
  },
  {
    icon: TrendingUp,
    badge: "Pertumbuhan",
    title: "Performa & Efisiensi",
    desc: "Dirancang dengan segmentasi pasar yang jelas dan efisiensi operasional yang teruji.",
    color: "text-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-200/60",
    hoverBorder: "group-hover:border-orange-400",
  },
  {
    icon: Building2,
    badge: "Empat Unit Usaha",
    title: "Solusi Kuliner Terpadu",
    desc: "Saroengan Cafe, Waroeng Waroenk Seblak x Kedai Saroengan, Kedai Saroengan, dan Angsa Cafe & Resto.",
    color: "text-stone-600",
    bg: "bg-stone-100",
    border: "border-stone-200",
    hoverBorder: "group-hover:border-stone-400",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white relative overflow-hidden font-sans">
      {/* ── Background Decorative Blobs (Soft Ambient) ── */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-50/60 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-50/40 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* ═════════ KIRI: Teks & Cerita Utama ═════════ */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Heading Section */}
            <div className="mb-8">
              <span className="inline-flex items-center gap-1.5 text-amber-700 font-bold text-xs tracking-widest uppercase mb-4 px-4 py-1.5 bg-amber-50 rounded-full border border-amber-200/60 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                Profil Saroengan Group
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 leading-[1.15] text-balance">
                Menghadirkan Ragam Inovasi <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">Kuliner &amp; Gaya Hidup</span>
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-amber-500 to-orange-400 rounded-full mt-6" />
            </div>

            {/* Main Story Content */}
            <div className="space-y-6 text-stone-600 text-base sm:text-[17px] leading-relaxed text-justify sm:text-left mb-10">
              <p>
                <strong className="text-stone-900 font-bold">Saroengan Group</strong> merupakan bisnis yang bergerak dalam dunia <em>Food &amp; Beverage</em> (F&amp;B) mulai dari cafe, resto dan kuliner. Saroengan Group hadir sebagai pelaku
                industri F&amp;B yang berkomitmen menghadirkan inovasi ragam konsep kuliner—mulai dari kafe, restoran, hingga jajanan populer.
              </p>

              <p>
                Didirikan pada tanggal <strong className="text-stone-900">16 Oktober 2022</strong> oleh <strong className="text-stone-900">Ust. Ahmad Ainul Yaqin, S.Ag.</strong> bersama jajaran tim profesional, Saroengan Group dibangun di
                atas fondasi nilai manajerial yang kuat, bernuansa islami dengan menjunjung tinggi integritas, serta pemahaman mendalam terhadap tren.
              </p>

              <p>
                Selama empat tahun bertransformasi dan melayani pelanggan, Saroengan Group berhasil membuktikan konsistensi serta performa bisnis yang solid. Keberhasilan ini terwujud melalui pengembangan empat unit usaha bernilai tambah
                tinggi, yaitu <span className="font-semibold text-amber-700">Saroengan Cafe, Waroeng Waroenk Seblak x Kedai Saroengan, Kedai Saroengan,</span> dan <span className="font-semibold text-amber-700">Angsa Cafe &amp; Resto</span>.
                Setiap unit usaha dirancang dengan segmentasi pasar yang jelas, efisiensi operasional yang teruji, serta basis konsumen setia yang terus berkembang.
              </p>
            </div>

            {/* Founder Highlight Card (Lebih clean dan menyatu) */}
            <div className="p-5 sm:p-6 rounded-3xl bg-stone-50 border border-stone-200/70 flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-white border border-amber-200 flex items-center justify-center flex-shrink-0 text-amber-500 shadow-sm">
                <UserCheck className="w-7 h-7" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-bold text-stone-400 tracking-widest uppercase mb-1">Pendiri &amp; Pimpinan</p>
                <h4 className="text-lg font-bold text-stone-900 mb-1">Ust. Ahmad Ainul Yaqin, S.Ag.</h4>
                <p className="text-stone-500 text-sm leading-relaxed">Membangun fondasi manajerial yang berintegritas dan bernuansa islami.</p>
              </div>
            </div>
          </div>

          {/* ═════════ KANAN: Visual / Values Grid ═════════ */}
          <div className="lg:col-span-5 grid gap-4 sm:gap-5">
            {companyValues.map((p, index) => {
              const Icon = p.icon;
              return (
                <div
                  key={index}
                  className={`group relative flex items-start gap-4 sm:gap-5 bg-white border ${p.border} ${p.hoverBorder} rounded-3xl p-5 sm:p-6 hover:shadow-[0_12px_40px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-400 ease-out overflow-hidden z-10`}
                >
                  {/* Subtle Background Glow on Hover */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 ${p.bg}`} />

                  {/* Icon Box */}
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${p.bg} ${p.border} border flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                    <Icon className={`w-6 h-6 sm:w-7 sm:h-7 ${p.color}`} />
                  </div>

                  {/* Text Content */}
                  <div className="min-w-0 pt-0.5">
                    <span className="inline-block text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-stone-400 mb-1.5">{p.badge}</span>
                    <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-1.5 group-hover:text-amber-700 transition-colors">{p.title}</h3>
                    <p className="text-stone-500 text-xs sm:text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
