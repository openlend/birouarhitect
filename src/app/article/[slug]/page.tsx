import { articles } from "@/data/companies";
import { notFound } from "next/navigation";
import ArticlePageClient from "./ArticlePageClient";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  return {
    title: article ? `${article.title} | BirouArhitect.ro` : "Articol",
    description: article?.excerpt,
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  
  if (!article) return notFound();

  // Get related articles (latest articles, excluding current)
  const relatedArticles = articles
    .filter((a) => a.slug !== article.slug)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return <ArticlePageClient article={article} relatedArticles={relatedArticles} />;
}
