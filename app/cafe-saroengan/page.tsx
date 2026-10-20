import BusinessPage from "@/components/BusinessPage";

export const metadata = {
  title: "Cafe Saroengan | Saroengan Group",
  description:
    "Tempat estetik dengan racikan kopi pilihan. Pas banget untuk nugas, meeting, atau sekadar bersantai.",
};

export default function CafePage() {
  return (
    <BusinessPage
      businessId="cafe"
      name="Cafe Saroengan"
      tagline="Kopi Pilihan, Suasana Estetik & Kekinian"
      logoSrc="/logo/logo-cafe-saroengan.png"
      logoAlt="Logo Cafe Saroengan"
      accentFrom="from-stone-500"
      accentTo="to-stone-700"
      bgDark="bg-stone-950"
      basePath="cafe-saroengan"
    />
  );
}
