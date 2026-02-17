import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/NavigationBar";
import FooterMinimal from "@/components/FooterMinimal";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "BirouArhitect.ro - Găsește Arhitectul Perfect Pentru Proiectul Tău",
  description: "Cel mai mare director premium de birouri de arhitectură din România. Conectăm clienții cu arhitecți profesioniști verificați pentru proiecte rezidențiale, comerciale și industriale.",
  keywords: "birouri arhitectura, arhitect romania, firme arhitectura, proiecte arhitectura, director arhitecti, arhitect bucuresti, arhitect cluj, proiectare case",
  authors: [{ name: "BirouArhitect.ro" }],
  openGraph: {
    title: "BirouArhitect.ro - Director Premium de Arhitecți",
    description: "Găsește cei mai buni arhitecți pentru proiectul tău",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <style dangerouslySetInnerHTML={{
          __html: `
            /* CRITICAL: Force visibility BEFORE JS loads (Framer Motion fix) */
            [style*="opacity: 0"],
            [style*="opacity:0"] {
              opacity: 1 !important;
            }
            [style*="transform"] {
              transform: none !important;
            }
          `
        }} />
      </head>
      <body className="antialiased bg-white text-slate-900">
        <NavigationBar />
        <main className="min-h-screen pt-20">{children}</main>
        <FooterMinimal />
      </body>
    </html>
  );
}
