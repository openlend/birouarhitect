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

  return <CompanyPageClient company={company} />;
}
