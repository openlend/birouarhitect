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
  metadataBase: new URL('https://birouarhitect.ro'),
  title: {
    default: "BirouArhitect.ro - Găsește Arhitectul Perfect Pentru Proiectul Tău",
    template: "%s | BirouArhitect.ro"
  },
  description: "Cel mai mare director premium de birouri de arhitectură din România. Conectăm clienții cu arhitecți profesioniști verificați pentru proiecte rezidențiale, comerciale și industriale.",
  keywords: ["birouri arhitectura", "arhitect romania", "firme arhitectura", "proiecte arhitectura", "director arhitecti", "arhitect bucuresti", "arhitect cluj", "proiectare case", "arhitect timisoara", "arhitect iasi", "arhitect brasov", "birou arhitectura bucuresti"],
  authors: [{ name: "BirouArhitect.ro", url: "https://birouarhitect.ro" }],
  creator: "BirouArhitect.ro",
  publisher: "BirouArhitect.ro",
  alternates: {
    canonical: "https://birouarhitect.ro",
  },
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: "https://birouarhitect.ro",
    siteName: "BirouArhitect.ro",
    title: "BirouArhitect.ro - Director Premium de Arhitecți",
    description: "Găsește cei mai buni arhitecți pentru proiectul tău. 30+ birouri verificate în România.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BirouArhitect.ro - Director Arhitecți România"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BirouArhitect.ro - Găsește Arhitectul Perfect",
    description: "Director premium de birouri de arhitectură din România",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code-here", // TODO: Replace with actual code from Google Search Console
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Schema.org JSON-LD for Organization + WebSite
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BirouArhitect.ro",
    "url": "https://birouarhitect.ro",
    "logo": "https://birouarhitect.ro/logo.png",
    "description": "Director premium de birouri de arhitectură din România",
    "sameAs": [
      "https://www.facebook.com/birouarhitect",
      "https://www.instagram.com/birouarhitect",
      "https://www.linkedin.com/company/birouarhitect"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "BirouArhitect.ro",
    "url": "https://birouarhitect.ro",
    "description": "Cel mai mare director premium de birouri de arhitectură din România",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://birouarhitect.ro/directory?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="antialiased bg-white text-slate-900">
        <NavigationBar />
        <main className="min-h-screen pt-20">{children}</main>
        <FooterMinimal />
      </body>
    </html>
  );
}
