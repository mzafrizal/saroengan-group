"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const galleries = [
  // === Angkringan Saroengan ===
  {
    title: "Suasana Angkringan",
    description: "Nuansa hangat khas angkringan tradisional",
    image: "/assets/angkringan/DSC03037.jpg",
    tag: "Angkringan Saroengan",
    tagColor: "bg-amber-500",
  },
  {
    title: "Sajian Malam",
    description: "Gorengan dan nasi kucing siap disajikan",
    image: "/assets/angkringan/DSC03060-2.jpg",
    tag: "Angkringan Saroengan",
    tagColor: "bg-amber-500",
  },
  {
    title: "Momen Kebersamaan",
    description: "Tempat terbaik untuk kumpul malam bareng teman",
    image: "/assets/angkringan/DSC03076.jpg",
    tag: "Angkringan Saroengan",
    tagColor: "bg-amber-500",
  },
  {
    title: "Wedang Hangat",
    description: "Minuman tradisional yang menghangatkan malam",
    image: "/assets/angkringan/DSC03093.jpg",
    tag: "Angkringan Saroengan",
    tagColor: "bg-amber-500",
  },
  // === Cafe Saroengan ===
  {
    title: "Interior Cafe",
    description: "Estetik dan nyaman untuk bekerja maupun bersantai",
    image: "/assets/cafe/DSC01487.jpg",
    tag: "Cafe Saroengan",
    tagColor: "bg-stone-600",
  },
  {
    title: "Racikan Kopi",
    description: "Single origin pilihan dengan cita rasa premium",
    image: "/assets/cafe/DSC01488.jpg",
    tag: "Cafe Saroengan",
    tagColor: "bg-stone-600",
  },
  {
    title: "Spot Bersantai",
    description: "Sudut cafe yang cozy untuk me-time",
    image: "/assets/cafe/DSC01491.jpg",
    tag: "Cafe Saroengan",
    tagColor: "bg-stone-600",
  },
  {
    title: "Minuman Signature",
    description: "Menu andalan yang selalu dinantikan pelanggan setia",
    image: "/assets/cafe/DSC00961.jpg",
    tag: "Cafe Saroengan",
    tagColor: "bg-stone-600",
  },
  // === Seblak Saroengan ===
  {
    title: "Seblak Spesial",
    description: "Sensasi pedas gurih yang bikin nagih",
    image: "/assets/seblak/DSC04356.JPG",
    tag: "Seblak Saroengan",
    tagColor: "bg-red-500",
  },
  {
    title: "Topping Melimpah",
    description: "Beragam pilihan topping untuk pengalaman makan terbaik",
    image: "/assets/seblak/DSC04384.JPG",
    tag: "Seblak Saroengan",
    tagColor: "bg-red-500",
  },
  {
    title: "Kuah Segar",
    description: "Dibuat segar setiap hari dengan bumbu pilihan",
    image: "/assets/seblak/DSC04390.JPG",
    tag: "Seblak Saroengan",
    tagColor: "bg-red-500",
  },
  {
    title: "Sajian Seblak",
    description: "Tampilan menggugah selera dari tiap mangkuk seblak",
    image: "/assets/seblak/DSC04394.JPG",
    tag: "Seblak Saroengan",
    tagColor: "bg-red-500",
  },
];

const filterTabs = ["Semua", "Angkringan Saroengan", "Cafe Saroengan", "Seblak Saroengan"];

export default function Gallery() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [activeFilter, setActiveFilter] = useState("Semua");

  const filtered =
    activeFilter === "Semua"
      ? galleries
      : galleries.filter((g) => g.tag === activeFilter);

  useEffect(() => {
    if (!api) return;
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [api]);

  // Reset carousel when filter changes
  useEffect(() => {
    if (api) {
      api.scrollTo(0);
      setCurrent(0);
    }
  }, [api, activeFilter]);

  return (
    <section id="gallery" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="inline-block text-amber-600 font-semibold text-sm tracking-widest uppercase mb-4">
            Galeri Highlight
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 mb-4">
            Sekilas Pandang{" "}
            <span className="text-amber-600">Saroengan Group</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-stone-500 text-base leading-relaxed">
            Setiap sudut menyimpan cerita. Intip keseruan dan kehangatan yang menanti Anda di
            setiap unit bisnis kami.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === tab
                  ? "bg-amber-500 text-white shadow-md shadow-amber-200"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Carousel */}
        <div className="relative mx-auto max-w-5xl px-0 md:px-12">
          <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent>
              {filtered.map((item, idx) => (
                <CarouselItem key={`${item.image}-${idx}`} className="md:basis-1/2 lg:basis-1/3">
                  <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden group shadow-lg border border-stone-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      priority={idx === 0}
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {/* Label on hover */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <span className={`inline-block ${item.tagColor} text-white text-[11px] font-bold px-2.5 py-1 rounded-full mb-2`}>
                        {item.tag}
                      </span>
                      <h3 className="text-white font-bold text-base leading-tight">{item.title}</h3>
                      <p className="text-stone-300 text-xs mt-1">{item.description}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="hidden md:flex -left-0 w-12 h-12 bg-white border-stone-200 shadow-lg hover:bg-amber-50 hover:text-amber-600 hover:border-amber-200 transition-all z-10" />
            <CarouselNext className="hidden md:flex -right-0 w-12 h-12 bg-white border-stone-200 shadow-lg hover:bg-amber-50 hover:text-amber-600 hover:border-amber-200 transition-all z-10" />
          </Carousel>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {filtered.map((_, idx) => (
            <button
              key={idx}
              onClick={() => api?.scrollTo(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                current === idx ? "bg-amber-500 w-6" : "bg-stone-300 w-1.5"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
