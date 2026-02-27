import { newArticles as articles } from "@/data/new-articles";
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

  // Schema.org JSON-LD for Article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.excerpt,
    "image": article.imageUrl,
    "datePublished": article.date,
    "dateModified": article.date,
    "author": {
      "@type": "Organization",
      "name": "BirouArhitect.ro"
    },
    "publisher": {
      "@type": "Organization",
      "name": "BirouArhitect.ro",
      "logo": {
        "@type": "ImageObject",
        "url": "https://birouarhitect.ro/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://birouarhitect.ro/article/${article.slug}`
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <ArticlePageClient article={article} relatedArticles={relatedArticles} />
    </>
  );
}
