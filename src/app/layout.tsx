import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Topbar from "@/components/layout/Topbar";

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
    <html lang="en">
      <body>
        <Topbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
