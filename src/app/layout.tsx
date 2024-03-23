import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";


const lato = Lato({
   subsets: ["latin"],
    weight: ['400', '700']
  });

export const metadata: Metadata = {
  title: "Banco Itaú | Feito com você",
  description: "Landing Page Banco do Itaú",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
       <Header />
        {children}
      </body>
    </html>
  );
}
