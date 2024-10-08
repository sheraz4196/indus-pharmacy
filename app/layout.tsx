import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/gernal/header/header";
import { Toaster } from "@/components/ui/sonner";
import Searchbar from "@/components/gernal/header/searchbar";
import DownBar from "@/components/gernal/header/downbar";
import Footer from "@/components/gernal/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Male Sort",
  description: "Confidential healthcare products for men and women",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="text-black">
      <body className={inter.className}>
        <>
          <Header />
          {children}
          <Footer />
          <DownBar />
        </>
        <Toaster richColors />
      </body>
    </html>
  );
}
