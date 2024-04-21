import CookieConsentModal from "@/components/CookieConsentModal";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/Nav";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ToastProvider from "@/components/ToastProvider";
import { LoadingProvider } from "@/contexts/LoadingContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Morgana",
  description: "We are a software and consulting company dedicated to leveraging AI to create interactive solutions that add value for clients. Our mission is to empower clients with AI-driven insights and technology, enabling them to thrive in the digital age and create value for the future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark bg-black">
      <body className={inter.className}>
        <LoadingProvider>
          <ToastProvider>
            <FloatingNav />
            {children}
            <Footer />
            <CookieConsentModal />
          </ToastProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}
