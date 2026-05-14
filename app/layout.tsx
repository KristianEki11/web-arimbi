import type { Metadata } from "next";
import { Playfair_Display, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsappButton from "@/components/layout/WhatsappButton";

// === FONTS ===
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

// === METADATA SEO ===
export const metadata: Metadata = {
  title: {
    default: "Arimbi Resort — Private Villa di Yogyakarta",
    template: "%s | Arimbi Resort",
  },
  description:
    "Nikmati ketenangan alam dan keanggunan Jawa di Arimbi Resort. Private villa dengan pemandangan alam di Sleman, Yogyakarta. Booking langsung untuk harga terbaik.",
  keywords: [
    "villa yogyakarta",
    "private villa sleman",
    "arimbi resort",
    "penginapan jogja",
    "villa murah yogyakarta",
    "resort alam jogja",
    "villa keluarga yogyakarta",
  ],
  openGraph: {
    title: "Arimbi Resort — Private Villa di Yogyakarta",
    description:
      "Private villa dengan keindahan alam dan sentuhan tradisional Jawa di Sleman, Yogyakarta.",
    locale: "id_ID",
    type: "website",
    // TODO: Ganti dengan URL production
    // url: "https://arimbiresort.com",
    // images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

// === ROOT LAYOUT ===
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${playfair.variable} ${sourceSerif.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <Footer />

        {/* Floating WhatsApp Button */}
        <WhatsappButton />
      </body>
    </html>
  );
}
