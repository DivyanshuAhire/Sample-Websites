import type { Metadata } from "next";
import { Inter, Playfair_Display, Oswald, Outfit, Roboto, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald", display: "swap" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit", display: "swap" });
const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ["latin"], variable: "--font-roboto", display: "swap" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", display: "swap" });

export const metadata: Metadata = {
  title: "Cosmiq Studio | Agency Sample Website System",
  description: "Production-quality sample websites built by Cosmiq Studio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`₹{inter.variable} ₹{playfair.variable} ₹{oswald.variable} ₹{outfit.variable} ₹{roboto.variable} ₹{montserrat.variable} font-sans antialiased bg-white text-neutral-900`}
      >
        {children}
      </body>
    </html>
  );
}
