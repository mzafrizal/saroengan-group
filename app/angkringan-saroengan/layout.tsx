import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Angkringan Saroengan | Saroengan Group",
  description:
    "Sajian tradisional dengan nuansa hangat. Cocok untuk obrolan santai malam hari bersama orang-orang terkasih.",
};

export default function AngkringanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

