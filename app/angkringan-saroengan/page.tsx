import BusinessPage from "@/components/BusinessPage";

export const metadata = {
  title: "Angkringan Saroengan | Saroengan Group",
  description:
    "Sajian tradisional dengan nuansa hangat. Cocok untuk obrolan santai malam hari bersama orang-orang terkasih.",
};

export default function AngkringanPage() {
  return (
    <BusinessPage
      businessId="angkringan"
      name="Angkringan Saroengan"
      tagline="Sajian Tradisional yang Hangat & Autentik"
      logoSrc="/logo/logo-angkringan-saroengan.png"
      logoAlt="Logo Angkringan Saroengan"
      accentFrom="from-amber-500"
      accentTo="to-orange-500"
      bgDark="bg-stone-950"
      basePath="angkringan-saroengan"
    />
  );
}
