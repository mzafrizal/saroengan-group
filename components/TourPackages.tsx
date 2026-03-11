import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const packages = [
  {
    title: "Paket Wisata Candi",
    description:
      "Kunjungi warisan dunia UNESCO seperti Candi Borobudur dan Prambanan. Nikmati keagungan arsitektur kuno yang memukau di tengah alam Jawa yang indah.",
    image:
      "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?w=800&q=80",
    location: "Magelang & Klaten",
    highlight: "UNESCO World Heritage",
    color: "from-amber-500 to-orange-500",
  },
  {
    title: "Adventure Merapi",
    description:
      "Jelajahi keindahan Gunung Merapi dengan jeep lava tour yang mendebarkan. Saksikan jejak letusan bersejarah dan panorama alam yang spektakuler.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    location: "Lereng Merapi",
    highlight: "Lava Tour Jeep",
    color: "from-red-500 to-rose-500",
  },
  {
    title: "City Tour Yogyakarta",
    description:
      "Tour keliling kota meliputi Keraton Yogyakarta, Taman Sari, dan Malioboro. Selami budaya Jawa yang kaya dan belanja oleh-oleh khas Jogja.",
    image:
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&q=80",
    location: "Kota Yogyakarta",
    highlight: "Keraton & Malioboro",
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Paket Custom",
    description:
      "Buat paket wisata sesuai keinginan Anda! Rancang itinerary impian bersama kami dan nikmati perjalanan yang benar-benar personal dan berkesan.",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
    location: "Magelang & Yogyakarta",
    highlight: "Fully Customizable",
    color: "from-violet-500 to-purple-500",
  },
];

export default function TourPackages() {
  return (
    <section id="packages" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-blue-600 font-semibold text-sm tracking-widest uppercase mb-3">
            Destinasi Pilihan
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Paket Wisata Eksklusif
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto mb-6" />
          <p className="max-w-4xl mx-auto text-slate-500 text-lg">
            Jelajahi keindahan Magelang dan Yogyakarta bersama kami. Setiap
            perjalanan dirancang untuk menciptakan kenangan indah.
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full"
        >
          <CarouselContent className="ml-2 mr-2 mb-2 mt-2">
            {packages.map((pkg) => (
              <CarouselItem
                key={pkg.title}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden group h-full">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
                    {/* Highlight badge */}
                    <div
                      className={`absolute top-3 left-3 bg-gradient-to-r ${pkg.color} text-white text-xs font-bold px-3 py-1 rounded-full shadow-md`}
                    >
                      {pkg.highlight}
                    </div>
                  </div>

                  <CardContent className="p-6 flex flex-col gap-4">
                    <h3 className="text-xl font-bold text-slate-800">
                      {pkg.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed flex-1">
                      {pkg.description}
                    </p>

                    {/* Details Row */}
                    <div className="flex flex-wrap gap-3 pt-2 border-t border-slate-100">
                      <span className="flex items-center gap-1.5 text-xs text-slate-500">
                        <MapPin className="w-3.5 h-3.5 text-blue-500" />
                        {pkg.location}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-8">
            <CarouselPrevious className="static translate-y-0 w-10 h-10 rounded-full border-2 border-blue-500 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors" />
            <CarouselNext className="static translate-y-0 w-10 h-10 rounded-full border-2 border-blue-500 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
