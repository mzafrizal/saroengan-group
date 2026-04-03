import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "UMKM Bima Wibisono | Grosir Kentang Segar Sukomakmur",
  description:
    "Pusat grosir kentang segar terbaik berkualitas, langsung dari petani lereng Gunung Sumbing, Dusun Marongan, Sukomakmur, Magelang.",
  keywords: [
    "grosir kentang",
    "kentang sukomakmur",
    "agen kentang",
    "kentang dieng",
    "kentang sumbing",
    "Bima Wibisono",
    "petani kentang",
    "jual kentang magelang",
  ],
  openGraph: {
    title: "UMKM Bima Wibisono | Grosir Kentang Segar Sukomakmur",
    description: "Pusat grosir kentang segar terbaik berkualitas, langsung dari petani lereng Gunung Sumbing, Magelang.",
    url: "https://bimawibisonokentang.vercel.app",
    siteName: "UMKM Bima Wibisono",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UMKM Bima Wibisono | Grosir Kentang",
    description: "Pusat grosir kentang segar terbaik berkualitas, langsung dari petani lereng Gunung Sumbing.",
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
