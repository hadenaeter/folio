import type { Metadata } from "next";
import "./globals.css";
import { Baskervville } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Topbar from "@/components/layout/Topbar";

const baskervville = Baskervville({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Haidar's Folio",
  description: "A folio showcasing my work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={baskervville.className}>
      <body>
        <Topbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
