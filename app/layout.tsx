import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Hexa Creative | Transportasi & Wisata Terpercaya",
  description:
    "Solusi transportasi dan wisata terpercaya di Magelang dan Yogyakarta. Sewa mobil, motor, elf, antar jemput bandara, dan paket wisata eksklusif.",
  keywords: [
    "sewa mobil Magelang",
    "sewa mobil Yogyakarta",
    "wisata Borobudur",
    "antar jemput bandara YIA",
    "Hexa Creative Bersama",
    "sewa motor Magelang",
    "sewa elf Yogyakarta",
    "paket wisata Magelang",
  ],
  openGraph: {
    title: "Hexa Creative | Transportasi & Wisata Terpercaya",
    description: "Solusi transportasi dan wisata terpercaya di Magelang dan Yogyakarta. Sewa mobil, motor, elf, antar jemput bandara, dan paket wisata eksklusif.",
    url: "https://hexacreative.com",
    siteName: "Hexa Creative",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hexa Creative | Transportasi & Wisata Terpercaya",
    description: "Solusi transportasi dan wisata terpercaya di Magelang dan Yogyakarta. Sewa mobil, motor, elf, antar jemput bandara, dan paket wisata eksklusif.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${poppins.variable} font-[family-name:var(--font-poppins)] antialiased`}>
        {children}
      </body>
    </html>
  );
}
