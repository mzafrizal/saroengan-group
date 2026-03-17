import { ArrowRight, Tag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

const cars = [
  {
    name: "New Brio AT/MT",
    price: "Rp 350.000",
    duration: "24 Jam",
    image: "/assets/armada/new-brio.png",
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
    name: "Sigra,Calya AT/MT",
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
    name: "New Avanza/Xenia ",
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
    duration: "Day",
    image: "/assets/armada/10-innova-reborn.png",
  },
  {
    name: "Innova Zenix AT",
    price: "Rp 750.000",
    duration: "Day",
    image: "/assets/armada/11-innova-zenix.png",
  },
  {
    name: "Pajero Sport / Fortuner",
    price: "Rp 1.100.000",
    duration: "Day",
    image: "/assets/armada/12-pajero.png",
  },
];

const motorbikes = [
  { 
    name: "Beat Deluxe / Street", 
    price: "Rp 100.000", 
    duration: "24 Jam", 
    image: "/assets/armada-motor/beat.png" 
  },
  { 
    name: "Fazzio", 
    price: "Rp 120.000", 
    duration: "24 Jam", 
    image: "/assets/armada-motor/fazzio.png" 
  },
  { 
    name: "Genio", 
    price: "Rp 120.000", 
    duration: "24 Jam", 
    image: "/assets/armada-motor/genio.png" 
  },
  { 
    name: "Scoopy", 
    price: "Rp 120.000", 
    duration: "24 Jam", 
    image: "/assets/armada-motor/scoopy.png" 
  },
  { 
    name: "NMAX", 
    price: "Rp 150.000", 
    duration: "24 Jam", 
    image: "/assets/armada-motor/nmax.png" 
  },
  { 
    name: "PCX", 
    price: "Rp 150.000", 
    duration: "24 Jam", 
    image: "/assets/armada-motor/pcx.png" 
  },
  { 
    name: "Aerox", 
    price: "Rp 150.000", 
    duration: "24 Jam", 
    image: "/assets/armada-motor/aerox.png" 
  },
  { 
    name: "Vario 160", 
    price: "Rp 150.000", 
    duration: "24 Jam", 
    image: "/assets/armada-motor/vario160.png" 
  },
  { 
    name: "CRF", 
    price: "Rp 155.000", 
    duration: "24 Jam", 
    image: "/assets/armada-motor/crf.png" 
  },
];

export default function PrivateVehicles() {
  return (
    <section id="private-vehicles" className="py-24 px-6 bg-white shrink-0">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-blue-600 font-semibold text-sm tracking-widest uppercase mb-3">
            Armada Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Layanan Kendaraan & Transportasi
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto mb-6" />
          <p className="max-w-4xl mx-auto text-slate-500 text-lg">
            Pilih jenis kendaraan yang sesuai dengan kebutuhan perjalanan Anda. Seluruh unit terawat dan siap jalan dengan performa optimal.
          </p>
        </div>

        {/* Tabs implementation */}
        <Tabs defaultValue="cars" className="w-full flex flex-col items-center">
          <TabsList className="mb-8 grid w-full max-w-sm grid-cols-2 bg-slate-100/80 p-1.5 rounded-2xl">
            <TabsTrigger
              value="cars"
              className="rounded-xl data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm py-2.5 font-bold transition-all cursor-pointer"
            >
              Mobil Pribadi
            </TabsTrigger>
            <TabsTrigger
              value="motorbikes"
              className="rounded-xl data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm py-2.5 font-bold transition-all cursor-pointer"
            >
              Motor & Scooter
            </TabsTrigger>
          </TabsList>

          {/* Cars Tab */}
          <TabsContent value="cars" className="w-full focus-visible:outline-none mt-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {cars.map((vehicle) => (
                <VehicleCard key={vehicle.name} vehicle={vehicle} type="mobil" />
              ))}
            </div>
          </TabsContent>

          {/* Motorbikes Tab */}
          <TabsContent value="motorbikes" className="w-full focus-visible:outline-none mt-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {motorbikes.map((bike) => (
                <VehicleCard key={bike.name} vehicle={bike} type="motor" />
              ))}
            </div>
          </TabsContent>
        </Tabs>

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

// Reusable card component to avoid duplication
function VehicleCard({ vehicle, type }: { vehicle: any; type: string }) {
  return (
    <Card className="group border border-slate-100 shadow-md hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden bg-white hover:-translate-y-1 flex flex-col h-full">
      {/* Image area */}
      <div className="relative h-44 overflow-hidden bg-slate-100">
        <Image
          src={vehicle.image}
          alt={vehicle.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
        
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
          href={`https://wa.me/6282221354217?text=Halo%20Admin,%20saya%20ingin%20bertanya%20mengenai%20sewa%20${type}%20${encodeURIComponent(vehicle.name)}`}
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
  );
}
