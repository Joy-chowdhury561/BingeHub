import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./provider.jsx";
import Navbar from "@/components/navbar";
import MobileNav from "@/components/mobileNav";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BingeHub - Watch Free Movies and TV shows",
  description:
    "Watch Movies, TV shows and Anime's online for free. Explore a wide collection of movies, trending TV shows, Anime, and more—all in one easy-to-use streaming platform.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        <Navbar/>
        <Providers>{children}</Providers>
        <MobileNav/>
      </body>
    </html>
  );
}
