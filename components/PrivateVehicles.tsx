import { ArrowRight, Tag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const vehicles = [
  {
    name: "New Brio AT/MT",
    price: "Rp 350.000",
    duration: "24 Jam",
    image: "/assets/armada/1-new-brio.png",
  },
  {
    name: "New Agya/Ayla AT/MT",

    price: "Rp 350.000",
    duration: "24 Jam",
    image: "/assets/armada/2-new-agya.png",
  },
  {
    name: "Jazz AT/MT",

    price: "Rp 350.000",
    duration: "24 Jam",
    image: "/assets/armada/3-jazz.png",
  },
  {
    name: "New Yaris AT",

    price: "Rp 350.000",
    duration: "24 Jam",
    image: "/assets/armada/4-new-yaris.png",
  },
  {
    name: "Avanza/Xenia FC AT/MT",
    price: "Rp 300.000",
    duration: "24 Jam",
    image: "/assets/armada/5-avanza-fc.png",
  },
  {
    name: "Sigra/Calya AT/MT",

    price: "Rp 350.000",
    duration: "24 Jam",
    image: "/assets/armada/6-sigra.png",
  },
  {
    name: "Mobilio AT/MT",

    price: "Rp 350.000",
    duration: "24 Jam",
    image: "/assets/armada/7-mobilio.png",
  },
  {
    name: "New Avanza/Xenia AT/MT",

    price: "Rp 400.000",
    duration: "24 Jam",
    image: "/assets/armada/8-new-avanza.png",
  },
  {
    name: "New Veloz AT/MT",

    price: "Rp 400.000",
    duration: "24 Jam",
    image: "/assets/armada/9-new-veloz.png",
  },
  {
    name: "Innova Reborn AT/MT",

    price: "Rp 600.000",
    duration: "One Day",
    image: "/assets/armada/10-innova-reborn.png",
  },
  {
    name: "Innova Zenix AT",

    price: "Rp 750.000",
    duration: "One Day",
    image: "/assets/armada/11-innova-zenix.png",
  },
  {
    name: "Pajero Sport / Fortuner",

    price: "Rp 1.100.000",
    duration: "One Day",
    image: "/assets/armada/12-pajero.png",
  },
];

export default function PrivateVehicles() {
  return (
    <section id="private-vehicles" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-blue-600 font-semibold text-sm tracking-widest uppercase mb-3">
            Armada Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Layanan Kendaraan Pribadi
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto mb-6" />
          <p className="max-w-4xl mx-auto text-slate-500 text-lg">
            Pilih kendaraan yang sesuai dengan kebutuhan dan kenyamanan Anda.
            Semua unit terawat dan siap jalan.
          </p>
        </div>

        {/* Vehicle Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {vehicles.map((vehicle) => (
            <Card
              key={vehicle.name}
              className="group border border-slate-100 shadow-md hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden bg-white hover:-translate-y-1 flex flex-col"
            >
              {/* Image area */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Gradient overlay to make text readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
                
                {/* Top badges */}
                <div className="absolute top-3 left-3 right-3 flex items-start justify-between">
                 
                </div>

                {/* Bottom: name on image */}
                <div className="absolute bottom-3 left-4 right-4">
                  <p className="text-white font-bold text-lg leading-tight drop-shadow-md">
                    {vehicle.name}
                  </p>
                </div>
              </div>

              <CardContent className="p-5 flex flex-col flex-1 gap-4">
                
                {/* Pricing Area */}
                <div className="flex-1 flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider block mb-1">
                      Mulai Dari
                    </span>
                    <div className="text-blue-600 font-extrabold text-xl tracking-tight">
                      {vehicle.price}
                    </div>
                  </div>
                  <div className="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1.5 rounded-lg border border-blue-100 shadow-inner">
                    / {vehicle.duration}
                  </div>
                </div>

                {/* CTA */}
                <a
                  href={`https://wa.me/6282221354217?text=Halo%20Admin,%20saya%20ingin%20bertanya%20mengenai%20sewa%20mobil%20${encodeURIComponent(vehicle.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex items-center justify-center gap-2 bg-slate-50 hover:bg-blue-600 text-slate-700 hover:text-white text-sm font-semibold py-3 rounded-xl border border-slate-200 hover:border-blue-600 transition-all duration-300 group/btn"
                >
                  <Tag className="w-4 h-4 text-emerald-500 group-hover/btn:text-white transition-colors" />
                  Booking Sekarang
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-slate-400 text-sm mt-12 bg-slate-50 p-4 rounded-xl border border-slate-100 mx-auto max-w-2xl">
          *Harga di atas dapat berubah saat *High Season*.{" "}
          <a
            href="https://wa.me/6282221354217"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-bold hover:underline"
          >
            Hubungi kami
          </a>{" "}
          untuk harga pasti dan penawaran terbaik!
        </p>
      </div>
    </section>
  );
}
