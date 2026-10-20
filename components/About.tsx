import { Heart, Coffee, Users } from "lucide-react";

const pillars = [
  {
    icon: Heart,
    title: "Lahir dari Komitmen",
    desc: "Kami hadir dari tekad untuk menjadi ruang berkumpul yang hangat bagi siapa saja.",
    color: "text-rose-500",
    bg: "bg-rose-50",
  },
  {
    icon: Coffee,
    title: "Cita Rasa Lokal",
    desc: "Memadukan kekayaan kuliner lokal dengan standar pelayanan yang prima dan modern.",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    icon: Users,
    title: "Untuk Semua Momen",
    desc: "Dari nongkrong santai hingga perayaan spesial, kami selalu siap menjadi tempatnya.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-amber-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text */}
          <div>
            <span className="inline-block text-amber-600 font-semibold text-sm tracking-widest uppercase mb-4">
              Tentang Kami
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-stone-900 mb-6 leading-tight">
              Kenapa{" "}
              <span className="text-amber-600">Saroengan</span>?
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-400 rounded-full mb-8" />

            <div className="flex flex-col gap-5">
              <p className="text-stone-600 text-lg leading-relaxed">
                <span className="font-bold text-stone-800">Saroengan Group</span> hadir dari
                komitmen kami untuk menghadirkan ruang berkumpul yang nyaman dengan sajian
                berkualitas. Dari secangkir kopi hingga hidangan khas, kami memadukan cita rasa
                lokal dengan pelayanan terbaik.
              </p>
              <p className="text-stone-500 text-base leading-relaxed">
                Nama &ldquo;Saroengan&rdquo; terinspirasi dari semangat kebersamaan — sebuah tempat
                di mana setiap orang bisa menemukan rasa nyaman, kenangan indah, dan sajian
                autentik yang selalu menggugah selera.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-10 pt-10 border-t border-stone-100">
              {[
                { value: "3+", label: "Unit Bisnis" },
                { value: "100%", label: "Bahan Segar" },
                { value: "⭐ 5.0", label: "Rating Pelanggan" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-black text-amber-600 mb-1">{stat.value}</div>
                  <div className="text-xs text-stone-500 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Pillars */}
          <div className="flex flex-col gap-5">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="group flex items-start gap-5 bg-stone-50 border border-stone-100 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl ${p.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${p.color}`} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-stone-800 mb-1">{p.title}</h3>
                    <p className="text-stone-500 text-sm leading-relaxed">{p.desc}</p>
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
