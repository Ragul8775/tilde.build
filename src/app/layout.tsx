import localFont from "next/font/local";
import "./globals.css";
import {
  Poppins,
  Inter,
  Cormorant_Garamond,
  Instrument_Serif,
  Inknut_Antiqua,
} from "next/font/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const satoshi = localFont({
  src: "./fonts/Satoshi-Regular.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const power = localFont({
  src: "./fonts/PowerGrotesk-Regular.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
});

const garet = localFont({
  src: "./fonts/Garet-Book.woff",
  variable: "--font-garet",
  weight: "100 900",
});

const instruement = Instrument_Serif({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-instrument",
  weight: ["400"],
});

const inknut = Inknut_Antiqua({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inknut",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Tilde - Crafting Digital Experiences",
  description:
    "Tilde is a cutting-edge software development studio specializing in Web2, Web3, App Development, Data Analytics, and UI/UX design. We deliver pixel-perfect, high-performance solutions tailored to elevate your business.",
  keywords: [
    "Tilde",
    "Software Development Studio",
    "Web Development",
    "Web3 Solutions",
    "App Development",
    "UI/UX Design",
    "Data Analytics",
    "Custom Software Solutions",
    "Innovative Technology",
    "Pixel-Perfect Design",
  ],
  openGraph: {
    title: "Tilde - Crafting Digital Experiences",
    description:
      "Elevate your business with Tilde, a software studio delivering state-of-the-art Web2, Web3, and app solutions.",
    url: "https://tilde.build",
    siteName: "Tilde",
    images: [
      {
        url: "https://tilde.build/meta/tildeCard.png",
        width: 1200,
        height: 630,
        alt: "Tilde - Crafting Digital Experiences",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@TildeStudio",
    creator: "@TildeStudio",
    title: "Tilde - Crafting Digital Experiences",
    description:
      "Pixel-perfect software solutions for Web2, Web3, apps, and data analytics.",
    images: ["https://tilde.build/tildeCard.png"],
  },
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${power.variable} ${power.className} ${inknut.variable} ${satoshi.variable} ${poppins.variable} ${inter.variable} ${cormorant.variable} ${garet.variable} ${instruement.variable} antialiased relative w-full h-full`}
      >
        {children}
      </body>
    </html>
  );
}
