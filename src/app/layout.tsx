import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FloatingNav } from "@/components/Nava";
import Footer from "@/components/Footer";
import  CookieConsentModal  from "@/components/CookieConsentModal";
import CalendarModal from "@/components/Calender";
import Link from "next/link";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Morgana",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark bg-black">
    <body className={inter.className}>
      <div>
        <FloatingNav/>
        {children}
      </div>
      <Footer/>
      <CookieConsentModal/>
    </body>
  </html>
  );
}
