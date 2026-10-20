import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Saroengan Group | Kuliner & Tempat Nongkrong Terbaik",
  description:
    "Saroengan Group — satu wadah, beragam rasa. Temukan pengalaman kuliner dan tempat nongkrong terbaik: Angkringan Saroengan, Cafe Saroengan, dan Seblak Saroengan.",
  keywords: [
    "saroengan group",
    "angkringan saroengan",
    "cafe saroengan",
    "seblak saroengan",
    "kuliner saroengan",
    "tempat nongkrong",
    "angkringan enak",
    "cafe aesthetic",
    "seblak pedas",
  ],
  openGraph: {
    title: "Saroengan Group | Kuliner & Tempat Nongkrong Terbaik",
    description: "Satu wadah, beragam rasa. Temukan Angkringan, Cafe, dan Seblak terbaik di Saroengan Group.",
    url: "https://saroengan.vercel.app",
    siteName: "Saroengan Group",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saroengan Group | Kuliner & Tempat Nongkrong Terbaik",
    description: "Satu wadah, beragam rasa. Angkringan, Cafe, dan Seblak — semua ada di Saroengan Group.",
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
