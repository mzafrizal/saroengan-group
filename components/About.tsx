import {
  ShieldCheck,
  Car,
  UserCheck,
  CircleDollarSign,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";

const features = [
  {
    icon: ShieldCheck,
    title: "Legalitas Resmi",
    description:
      "Perusahaan dengan NIB terdaftar, beroperasi secara legal dan terpercaya sejak 2024.",
    color: "from-blue-500 to-blue-600",
    bg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Car,
    title: "Armada Prima",
    description:
      "Armada terawat, modern, dan selalu dalam kondisi prima untuk kenyamanan perjalanan Anda.",
    color: "from-indigo-500 to-indigo-600",
    bg: "bg-indigo-50",
    iconColor: "text-indigo-600",
  },
  {
    icon: UserCheck,
    title: "Driver Profesional",
    description:
      "Pengemudi berpengalaman, ramah, dan terlatih untuk memberikan pelayanan terbaik.",
    color: "from-cyan-500 to-cyan-600",
    bg: "bg-cyan-50",
    iconColor: "text-cyan-600",
  },
  {
    icon: CircleDollarSign,
    title: "Harga Kompetitif",
    description:
      "Harga transparan tanpa biaya tersembunyi. Layanan 24/7 siap membantu kapan pun Anda butuhkan.",
    color: "from-sky-500 to-sky-600",
    bg: "bg-sky-50",
    iconColor: "text-sky-600",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-blue-600 font-semibold text-sm tracking-widest uppercase mb-3">
            Keunggulan Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Mengapa Memilih Kami?
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto mb-6" />
          <p className="max-w-4xl mx-auto text-slate-500 text-lg">
            Kami hadir dengan komitmen penuh untuk memberikan pengalaman
            perjalanan yang tak terlupakan.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="group border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-2xl overflow-hidden"
              >
                <CardHeader className="pb-0 pt-8 px-6">
                  <div
                    className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className={`w-7 h-7 ${feature.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800">
                    {feature.title}
                  </h3>
                </CardHeader>
                <CardContent className="px-6 pb-8 pt-3">
                  <p className="text-slate-500 text-sm leading-relaxed">
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
