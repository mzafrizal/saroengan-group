import Image from "next/image";
import {
  Bus,
  PlaneLanding,
  Users,
  Briefcase,
  Heart,
  PartyPopper,
  Luggage,
  Clock,
  MapPin,
  CheckCircle2,
} from "lucide-react";

const elfHiaceFeatures = [
  {
    icon: Users,
    text: "Wisata keluarga besar dengan kapasitas hingga 15–16 orang",
  },
  {
    icon: Briefcase,
    text: "Perjalanan perusahaan seperti outing, gathering, atau kunjungan bisnis",
  },
  {
    icon: Heart,
    text: "Rombongan ziarah atau kegiatan komunitas",
  },
  {
    icon: PartyPopper,
    text: "Acara spesial seperti pernikahan atau reuni",
  },
];

const transferPoints = [
  {
    icon: PlaneLanding,
    name: "Bandara International Yogyakarta",
    note: "efisien dan tepat waktu",
  },
  {
    icon: PlaneLanding,
    name: "Bandara Adi Sutjipto Yogyakarta",
    note: "transfer cepat dan efisien",
  },
  {
    icon: MapPin,
    name: "Stasiun Tugu & Lempuyangan",
    note: "penjemputan tepat waktu",
  },
  {
    icon: MapPin,
    name: "Magelang",
    note: "layanan door-to-door",
  },
  {
    icon: MapPin,
    name: "Yogyakarta",
    note: "layanan door-to-door",
  },
];

const transferExtras = [
  "Tersedia 24 jam untuk menyesuaikan dengan jadwal Anda",
];

export default function GroupVehicles() {
  return (
    <section id="group-vehicles" className="py-24 px-6 bg-gradient-to-br from-slate-50 to-blue-50/40">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-blue-600 font-semibold text-sm tracking-widest uppercase mb-3">
            Untuk Rombongan
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Layanan Kendaraan Grup
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto mb-6" />
          <p className="max-w-4xl mx-auto text-slate-500 text-lg">
            Solusi lengkap untuk perjalanan rombongan — dari sewa kendaraan
            kapasitas besar hingga transfer bandara dan stasiun.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* === Card 1: Sewa Elf & Hiace === */}
          <div className="relative rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col">
            {/* Top banner image */}
            <div className="relative h-52 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80"
                alt="Sewa Elf dan Hiace"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />
              <div className="absolute bottom-4 left-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg">
                  <Bus className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-bold text-lg leading-tight">Sewa Elf & Hiace</p>
                  <p className="text-blue-300 text-xs">Kapasitas 15–16 orang</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-7 flex flex-col gap-5 flex-1">
              <p className="text-slate-600 text-sm leading-relaxed">
                Untuk perjalanan rombongan atau grup besar, kami menyediakan
                kendaraan Elf dan Hiace yang nyaman dan lapang. Sempurna untuk:
              </p>

              {/* Feature list */}
              <ul className="flex flex-col gap-3">
                {elfHiaceFeatures.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <li key={feature.text} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-slate-600 text-sm leading-relaxed">
                        {feature.text}
                      </span>
                    </li>
                  );
                })}
              </ul>

              {/* Bottom badge */}
              <div className="mt-auto pt-4 border-t border-slate-100">
                <div className="flex flex-wrap gap-2">
                  {["AC", "Sound System", "Bagasi Luas", "Jarak Jauh"].map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      <CheckCircle2 className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* === Card 2: Antar Jemput Bandara & Stasiun === */}
          <div className="relative rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col">
            {/* Top banner image */}
            <div className="relative h-52 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80"
                alt="Layanan Antar Jemput Bandara"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />
              <div className="absolute bottom-4 left-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-600 flex items-center justify-center shadow-lg">
                  <PlaneLanding className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-bold text-lg leading-tight">Antar Jemput Bandara & Stasiun</p>
                  <p className="text-cyan-300 text-xs">Tersedia 24 jam</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-7 flex flex-col gap-5 flex-1">
              <p className="text-slate-600 text-sm leading-relaxed">
                Mulai perjalanan Anda dengan lancar atau akhiri dengan nyaman
                bersama layanan transfer kami:
              </p>

              {/* Transfer points */}
              <ul className="flex flex-col gap-2.5">
                {transferPoints.map((point) => {
                  const Icon = point.icon;
                  return (
                    <li key={point.name} className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-cyan-50 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-cyan-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-slate-800 text-sm font-semibold">
                          {point.name}
                        </span>
                        <span className="text-slate-400 text-sm">
                          {" "}— {point.note}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>

              {/* Extra services */}
              <div className="mt-auto pt-4 border-t border-slate-100 flex flex-col gap-2">
                {transferExtras.map((extra) => (
                  <div key={extra} className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-500 text-xs leading-relaxed">
                      {extra}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom highlight strip */}
        <div className="mt-10 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl shadow-blue-500/20">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
              <Luggage className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-white font-bold text-lg">Butuh Kendaraan untuk Rombongan?</p>
              <p className="text-blue-100 text-sm">
                Hubungi kami sekarang untuk mendapatkan penawaran terbaik.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/6282221354217"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 bg-white text-blue-600 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-md text-sm whitespace-nowrap"
          >
            Pesan Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}
