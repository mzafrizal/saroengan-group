import {
  Sprout,
  Sun,
  Droplets,
  HeartHandshake,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";

const steps = [
  {
    icon: Sprout,
    title: "Pemilihan Bibit",
    description:
      "Bibit kentang unggul yang disiapkan dari hasil panen terbaik, ditanam dengan penuh kehati-hatian.",
    color: "from-amber-500 to-amber-600",
    bg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    icon: Sun,
    title: "Sinar Matahari & Suhu Ideal",
    description:
      "Ketinggian 1.475 MDPL memberikan suhu dingin berkabut yang menjadi habitat paling sempurna untuk kentang.",
    color: "from-orange-500 to-orange-600",
    bg: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    icon: Droplets,
    title: "Perawatan Alami",
    description:
      "Pengairan dari mata air pegunungan dan perawatan rutin oleh para petani lokal yang sangat berpengalaman.",
    color: "from-stone-500 to-stone-600",
    bg: "bg-stone-50",
    iconColor: "text-stone-600",
  },
  {
    icon: HeartHandshake,
    title: "Panen Penuh Cinta",
    description:
      "Hasil panen yang dipetik dengan tangan penuh ketekunan, membawa berkah alam Sumbing langsung ke meja Anda.",
    color: "from-green-500 to-green-600",
    bg: "bg-green-50",
    iconColor: "text-green-600",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-stone-100">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-amber-600 font-semibold text-sm tracking-widest uppercase mb-3">
            Tentang Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 mb-4">
            Cerita Petani Marongan
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full mx-auto mb-6" />
          <p className="max-w-4xl mx-auto text-stone-600 text-lg leading-relaxed">
            Dedikasi tanpa batas dari para petani Desa Sukomakmur dalam merawat komoditas kentang. Dari proses pembibitan hingga panen, semua diolah oleh tangan-tangan ahli yang mewarisi kearifan lokal sejak turun-temurun.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="group border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-2xl overflow-hidden bg-white"
              >
                <CardHeader className="pb-0 pt-8 px-6">
                  <div
                    className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className={`w-7 h-7 ${feature.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-bold text-stone-800">
                    {feature.title}
                  </h3>
                </CardHeader>
                <CardContent className="px-6 pb-8 pt-3">
                  <p className="text-stone-500 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
