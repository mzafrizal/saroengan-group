import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const businesses = [
  {
    id: "angkringan",
    logo: "/logo/logo-angkringan-saroengan.png",
    logoAlt: "Logo Angkringan Saroengan",
    name: "Angkringan Saroengan",
    tagline: "Tradisional & Hangat",
    description:
      "Sajian tradisional dengan nuansa hangat. Cocok untuk obrolan santai malam hari bersama orang-orang terkasih.",
    buttonText: "Lihat Menu Angkringan",
    href: "/angkringan-saroengan",
    gradient: "from-amber-500 to-orange-500",
    bgGlow: "bg-amber-500/10",
    borderAccent: "border-amber-500/30",
    badgeColor: "bg-amber-100 text-amber-700",
    items: ["Nasi Kucing", "Gorengan", "Wedang Ronde", "Sate-satean"],
  },
  {
    id: "cafe",
    logo: "/logo/logo-cafe-saroengan.png",
    logoAlt: "Logo Cafe Saroengan",
    name: "Cafe Saroengan",
    tagline: "Estetik & Kekinian",
    description:
      "Tempat estetik dengan racikan kopi pilihan. Pas banget untuk nugas, meeting, atau sekadar bersantai.",
    buttonText: "Kunjungi Cafe",
    href: "/cafe-saroengan",
    gradient: "from-stone-600 to-stone-800",
    bgGlow: "bg-stone-500/10",
    borderAccent: "border-stone-400/30",
    badgeColor: "bg-stone-100 text-stone-700",
    items: ["Single Origin Coffee", "Matcha Series", "Dessert Box", "Pasta"],
  },
  {
    id: "seblak",
    logo: "/logo/logo-seblak-saroengan.png",
    logoAlt: "Logo Seblak Saroengan",
    name: "Seblak Saroengan",
    tagline: "Pedas & Bikin Nagih",
    description:
      "Sensasi pedas gurih yang bikin nagih. Tersedia beragam topping pilihan untuk memanjakan lidahmu.",
    buttonText: "Cek Varian Seblak",
    href: "/seblak-saroengan",
    gradient: "from-red-500 to-rose-600",
    bgGlow: "bg-red-500/10",
    borderAccent: "border-red-400/30",
    badgeColor: "bg-red-100 text-red-700",
    items: ["Seblak Original", "Seblak Seafood", "Seblak Ceker", "Seblak Mie"],
  },
];

export default function Businesses() {
  return (
    <section id="businesses" className="py-24 px-6 bg-stone-950 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(180,83,9,0.08)_0,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.025]" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='23' cy='23' r='1'/%3E%3C/g%3E%3C/svg%3E\")",
      }} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-amber-500 font-semibold text-sm tracking-widest uppercase mb-4">
            Unit Bisnis Kami
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Tiga Pilihan,{" "}
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Satu Semangat
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-400 rounded-full mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-stone-400 text-lg">
            Setiap bisnis kami dirancang untuk memberikan pengalaman unik — pilih sesuai
            suasana hatimu hari ini.
          </p>
        </div>

        {/* Business Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {businesses.map((biz) => {
            return (
              <Card
                key={biz.id}
                className="group relative bg-stone-900/60 border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 backdrop-blur-sm flex flex-col"
              >
                {/* Top gradient accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${biz.gradient} opacity-80 group-hover:opacity-100 transition-opacity`} />

                {/* Glow effect */}
                <div className={`absolute top-0 left-0 right-0 h-32 ${biz.bgGlow} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <CardHeader className="pt-8 px-6 pb-4 relative z-10">
                  {/* Logo */}
                  <div className="w-20 h-20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                    <Image
                      src={biz.logo}
                      alt={biz.logoAlt}
                      width={80}
                      height={80}
                      className="object-contain w-full h-full"
                    />
                  </div>

                  {/* Badge */}
                  <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 ${biz.badgeColor} w-fit`}>
                    {biz.tagline}
                  </span>

                  <CardTitle className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    {biz.name}
                  </CardTitle>
                  <CardDescription className="text-stone-400 text-sm leading-relaxed mt-2">
                    {biz.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="px-6 pb-4 relative z-10 flex-1">
                  {/* Menu items preview */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {biz.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs bg-white/5 border border-white/10 text-stone-400 px-2.5 py-1 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="px-6 pb-8 relative z-10">
                  <Button
                    asChild
                    className={`w-full bg-gradient-to-r ${biz.gradient} hover:opacity-90 text-white font-semibold rounded-xl py-3 h-auto transition-all duration-300 group-hover:shadow-lg`}
                  >
                    <Link href={biz.href} className="flex items-center justify-center gap-2">
                      {biz.buttonText}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
