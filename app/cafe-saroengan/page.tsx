import BusinessPage from "@/components/BusinessPage";

export const metadata = {
  title: "Cafe Saroengan | Saroengan Group",
  description:
    "Cafe dengan nuansa islami dan klasik yang dipadukan dengan view Citylight Kota Semarang. Cocok di setiap momen kebersamaan, nongkrong, nugas, WFC, acara keluarga, dan menjadi titik kumpul wong tulus.",
};

export default function CafePage() {
  return (
    <BusinessPage
      businessId="cafe"
      name="Cafe Saroengan"
      tagline="Cafe dengan nuansa islami dan klasik yang dipadukan dengan view Citylight Kota Semarang. Cocok di setiap momen kebersamaan, nongkrong, nugas, WFC, acara keluarga, dan menjadi titik kumpul wong tulus"
      logoSrc="/logo/logo-cafe-saroengan.png"
      logoAlt="Logo Cafe Saroengan"
      accentFrom="from-stone-500"
      accentTo="to-stone-700"
      bgDark="bg-stone-950"
      basePath="cafe-saroengan"
      waNumber="6285117508581"
      centerLayout={true}
    />
  );
}
