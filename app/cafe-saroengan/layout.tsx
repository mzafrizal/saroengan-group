import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cafe Saroengan | Saroengan Group",
  description:
    "Cafe dengan nuansa islami dan klasik yang dipadukan dengan view Citylight Kota Semarang. Cocok di setiap momen kebersamaan, nongkrong, nugas, WFC, acara keluarga, dan menjadi titik kumpul wong tulus.",
};

export default function CafeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

