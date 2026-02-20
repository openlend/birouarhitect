const fs = require('fs');
const path = require('path');

// Import data
const { companies, articles } = require('../src/data/companies.ts');

const baseUrl = 'https://birouarhitect.ro';

// Static pages
const staticPages = [
  { url: baseUrl, priority: '1.0', changefreq: 'daily' },
  { url: `${baseUrl}/directory`, priority: '0.9', changefreq: 'daily' },
  { url: `${baseUrl}/news`, priority: '0.8', changefreq: 'daily' },
  { url: `${baseUrl}/about`, priority: '0.7', changefreq: 'monthly' },
  { url: `${baseUrl}/contact`, priority: '0.7', changefreq: 'monthly' },
  { url: `${baseUrl}/submit`, priority: '0.6', changefreq: 'monthly' },
];

// Company pages
const companyPages = companies.map((company) => ({
  url: `${baseUrl}/company/${company.slug}`,
  priority: '0.8',
  changefreq: 'weekly',
}));

// Article pages
const articlePages = articles.map((article) => ({
  url: `${baseUrl}/article/${article.slug}`,
  priority: '0.8',
  changefreq: 'weekly',
}));

// Combine all pages
const allPages = [...staticPages, ...companyPages, ...articlePages];

// Generate XML
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

// Write to public/sitemap.xml
const publicDir = path.join(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap, 'utf8');
console.log('✅ sitemap.xml generated:', `${allPages.length} pages`);
