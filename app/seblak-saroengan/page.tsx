import BusinessPage from "@/components/BusinessPage";

export const metadata = {
  title: "Seblak Saroengan | Saroengan Group",
  description:
    "Sensasi pedas gurih yang bikin nagih. Tersedia beragam topping pilihan untuk memanjakan lidahmu.",
};

export default function SeblakPage() {
  return (
    <BusinessPage
      businessId="seblak"
      name="Seblak Saroengan"
      tagline="Pedas, Gurih & Bikin Nagih"
      logoSrc="/logo/logo-seblak-saroengan.png"
      logoAlt="Logo Seblak Saroengan"
      accentFrom="from-red-500"
      accentTo="to-rose-600"
      bgDark="bg-stone-950"
      basePath="seblak-saroengan"
    />
  );
}
