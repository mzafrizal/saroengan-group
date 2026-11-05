import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Waroenk Seblak x Kedai Saroengan | Saroengan Group",
  description: "Sensasi pedas gurih yang bikin nagih. Tersedia beragam topping pilihan untuk memanjakan lidahmu.",
};

export default function SeblakLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
