import Link from "next/link";
import { companies } from "@/data/companies";
import { notFound } from "next/navigation";
import CompanyPageClient from "./CompanyPageClient";

export function generateStaticParams() {
  return companies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const company = companies.find((c) => c.slug === slug);
  return {
    title: company ? `${company.name} | BirouArhitect.ro` : "Companie",
    description: company?.shortDesc,
  };
}

export default async function CompanyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const company = companies.find((c) => c.slug === slug);
  
  if (!company) return notFound();

  // Schema.org JSON-LD for LocalBusiness / ProfessionalService
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": company.name,
    "description": company.shortDesc,
    "url": `https://birouarhitect.ro/company/${company.slug}`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": company.city,
      "addressCountry": "RO"
    },
    ...(company.website && { "sameAs": company.website }),
    ...(company.foundedYear && { "foundingDate": company.foundedYear.toString() }),
    "aggregateRating": company.rating ? {
      "@type": "AggregateRating",
      "ratingValue": company.rating,
      "bestRating": "5",
      "worstRating": "1"
    } : undefined
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <CompanyPageClient company={company} />
    </>
  );
}
