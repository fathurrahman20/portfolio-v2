import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Fathurrahman | Frontend Web Developer | Full Stack Developer Enthusiast",
  description:
    "Website pribadi Fathurrahman, seorang Frontend Web Developer lulusan SMK Plus Pagelaran, Frontend Web Developer lulusan Binar Academy, Frontend Web Developer lulusan Universitas Bina Sarana Informatika, FullStack Web Developer lulusan Bearmentor dan Wahidev. Temukan proyek, pengalaman, dan informasi kontak di sini.",
  keywords: [
    "Fathurrahman",
    "Fathurrahman SMK Plus Pagelaran",
    "Fathurrahman Universitas Bina Sarana Informatika",
    "Fathurrahman Bearmentor",
    "Fathurrahman Binar Academy",
    "Fathurrahman Wahidev Academy",
    "Fathurrahman Widya Robotics",
    "SMK Plus Pagelaran",
    "Fathurrahman Pondok Pesantren Pagelaran 3",
    "Pondok Pesantren Pagelaran 3",
    "Pesantren Pagelaran 3",
    "Ponpes Pagelaran 3",
    "Fathurrahman Frontend",
    "Frontend Developer Indonesia",
    "Frontend Developer Bekasi",
    "Frontend Developer Jakarta",
    "Web Developer Bekasi",
    "Portfolio Web Developer",
  ],
  authors: [{ name: "Fathurrahman" }],
  creator: "Fathurrahman",
  openGraph: {
    title: "Fathurrahman | Frontend Web Developer dari SMK Plus Pagelaran",
    description:
      "Kenali Fathurrahman, seorang Frontend Web Developer berbakat lulusan SMK Plus Pagelaran, Frontend Web Developer lulusan Binar Academy, Frontend Web Developer lulusan Universitas Bina Sarana Informatika, FullStack Web Developer lulusan Bearmentor dan Wahidev. Telusuri portofolio dan proyek-proyek menarik yang pernah dikerjakan.",
    url: "https://ffathur.my.id",
    siteName: "Fathurrahman | Frontend Developer",
    images: [
      {
        url: "https://ffathur.my.id/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fathurrahman Frontend Developer",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-white transition-colors dark:bg-gray-900 dark:text-white ${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen pt-24">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
