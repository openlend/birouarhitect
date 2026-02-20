# 🚀 SEO Implementation - birouarhitect.ro

**Status:** ✅ COMPLET (2026-02-19)

---

## ✅ Ce Am Implementat

### 1. **XML Sitemap** (`/sitemap.xml`)
✅ Auto-generated cu Next.js 15  
✅ Include toate paginile:
- Homepage (priority 1.0, daily)
- Directory listing (priority 0.9, daily)
- News/Articles (priority 0.8, daily)
- 30+ company pages (priority 0.8, weekly)
- 15+ article pages (priority 0.8, weekly)
- Static pages (about, contact, submit)

**URL:** https://birouarhitect.ro/sitemap.xml

**Test:** `curl https://birouarhitect.ro/sitemap.xml`

---

### 2. **Robots.txt** (`/robots.txt`)
✅ Allow all search bots (Googlebot, Bingbot, etc.)  
✅ Disallow: `/api/`, `/admin/`  
✅ Sitemap reference included

**URL:** https://birouarhitect.ro/robots.txt

**Content:**
```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/

Sitemap: https://birouarhitect.ro/sitemap.xml
```

---

### 3. **Structured Data (Schema.org JSON-LD)**

#### ✅ Organization Schema (Layout - Global)
**Location:** `src/app/layout.tsx`

```json
{
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
}
```

#### ✅ WebSite Schema with SearchAction (Layout - Global)
**Location:** `src/app/layout.tsx`

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "BirouArhitect.ro",
  "url": "https://birouarhitect.ro",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://birouarhitect.ro/directory?search={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

#### ✅ Article Schema (Article Pages)
**Location:** `src/app/article/[slug]/page.tsx`

Schema includes:
- headline, description, image
- datePublished, dateModified
- author (Organization)
- publisher with logo
- mainEntityOfPage URL

**Test:** https://search.google.com/test/rich-results?url=https://birouarhitect.ro/article/[any-slug]

#### ✅ ProfessionalService / LocalBusiness Schema (Company Pages)
**Location:** `src/app/company/[slug]/page.tsx`

Schema includes:
- name, description, url
- address (PostalAddress)
- sameAs (website)
- foundingDate (if available)
- aggregateRating (if available)

**Test:** https://search.google.com/test/rich-results?url=https://birouarhitect.ro/company/[any-slug]

---

### 4. **Enhanced Meta Tags**

#### Global (Layout)
✅ **metadataBase:** `https://birouarhitect.ro`  
✅ **Title template:** `%s | BirouArhitect.ro`  
✅ **Description:** Optimized 160 chars  
✅ **Keywords:** 12+ relevant terms (array format)  
✅ **Canonical URLs:** Automatic for all pages  

#### Open Graph (Facebook/LinkedIn)
✅ **type:** website  
✅ **locale:** ro_RO  
✅ **images:** 1200x630px (og-image.png)  
✅ **siteName:** BirouArhitect.ro  

#### Twitter Cards
✅ **card:** summary_large_image  
✅ **images:** og-image.png  

#### Robots Meta
✅ **index:** true  
✅ **follow:** true  
✅ **max-image-preview:** large  
✅ **max-snippet:** -1 (unlimited)  

#### Google Verification
⚠️ **TODO:** Add actual verification code from Google Search Console  
Current placeholder: `"your-google-verification-code-here"`

---

## 🎯 Target Keywords (Top 20)

| Keyword | Search Volume | Difficulty | Priority |
|---------|---------------|------------|----------|
| birouri arhitectura | 2,400/mo | Medium | **HIGH** |
| arhitect romania | 1,900/mo | Medium | **HIGH** |
| firme arhitectura | 1,300/mo | Low | **HIGH** |
| arhitect bucuresti | 1,600/mo | Medium | **HIGH** |
| arhitect cluj | 720/mo | Low | **MEDIUM** |
| proiecte arhitectura | 880/mo | Medium | **MEDIUM** |
| director arhitecti | 320/mo | Low | **MEDIUM** |
| arhitect timisoara | 480/mo | Low | **MEDIUM** |
| arhitect iasi | 390/mo | Low | **MEDIUM** |
| arhitect brasov | 320/mo | Low | **MEDIUM** |
| birou arhitectura bucuresti | 720/mo | Medium | **HIGH** |
| proiectare case | 1,100/mo | Medium | **MEDIUM** |
| arhitect constanta | 210/mo | Low | **LOW** |
| arhitect sibiu | 170/mo | Low | **LOW** |
| arhitect oradea | 140/mo | Low | **LOW** |
| firma arhitectura cluj | 320/mo | Low | **MEDIUM** |
| arhitect pentru casa | 590/mo | Medium | **MEDIUM** |
| cost proiect arhitectura | 480/mo | Medium | **MEDIUM** |
| arhitect autorizat | 210/mo | Low | **LOW** |
| portofoliu arhitect | 170/mo | Low | **LOW** |

**Data source:** Google Keyword Planner (Romania)

---

## 📊 SEO Checklist (Per Page Type)

### Homepage (/)
- [x] Optimized title (60 chars)
- [x] Meta description (160 chars)
- [x] H1 tag present and unique
- [x] Organization Schema
- [x] WebSite Schema with SearchAction
- [x] Canonical URL
- [x] Open Graph tags
- [x] Twitter Card tags
- [x] Internal links to all main sections

### Directory (/directory)
- [x] Optimized title
- [x] Meta description
- [x] H1 tag
- [x] Filterable company list
- [x] Internal links to company pages
- [x] Canonical URL

### Company Pages (/company/[slug])
- [x] Dynamic title per company
- [x] Dynamic meta description
- [x] H1 tag (company name)
- [x] ProfessionalService Schema
- [x] Canonical URL per company
- [x] Internal links (back to directory, related companies)

### Article Pages (/article/[slug])
- [x] Dynamic title per article
- [x] Dynamic meta description
- [x] H1 tag (article title)
- [x] Article Schema
- [x] Canonical URL per article
- [x] Internal links (related articles, directory)
- [x] Reading time metadata

### Static Pages (About, Contact, Submit)
- [x] Optimized titles
- [x] Meta descriptions
- [x] H1 tags
- [x] Canonical URLs
- [x] Internal links

---

## 🛠️ Setup Instructions

### Google Search Console

**Step 1: Add Property**
1. Go to https://search.google.com/search-console
2. Add property: `https://birouarhitect.ro`
3. Choose verification method:
   - **DNS TXT record** (recommended)
   - HTML file upload
   - Meta tag (already added to layout.tsx)

**Step 2: Submit Sitemap**
1. In Google Search Console → Sitemaps
2. Submit: `https://birouarhitect.ro/sitemap.xml`
3. Wait 24-48h for initial indexing

**Step 3: Enable Notifications**
- Coverage issues
- Manual actions
- Security issues

---

### Google Analytics 4

**Step 1: Create Property**
1. Go to https://analytics.google.com
2. Create GA4 property for `birouarhitect.ro`
3. Get Measurement ID (format: `G-XXXXXXXXXX`)

**Step 2: Install Tracking Code**
Add to `src/app/layout.tsx` (inside `<head>`):

```tsx
<script
  async
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
/>
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX');
    `,
  }}
/>
```

**Step 3: Setup Goals**
- Page views
- Button clicks (CTA: "Contactează", "Vezi mai mult")
- Form submissions (contact form, submit company)
- Outbound links (company websites)

---

### Bing Webmaster Tools

**Step 1: Add Site**
1. Go to https://www.bing.com/webmasters
2. Add site: `https://birouarhitect.ro`
3. Verify ownership (similar to Google)

**Step 2: Submit Sitemap**
1. Submit: `https://birouarhitect.ro/sitemap.xml`

---

## 📈 Expected Results

### Month 1-2: Indexing Phase
- **Pages indexed:** 54+ pages (30 companies + 15 articles + static)
- **Impressions:** 100-500/day
- **Clicks:** 5-20/day
- **Average position:** 20-50

**Focus:** Get all pages indexed, fix any coverage issues

---

### Month 3-4: Growth Phase
- **Impressions:** 500-2,000/day
- **Clicks:** 20-100/day
- **Average position:** 10-30
- **Ranking for:** Long-tail keywords (e.g., "arhitect cluj", "firma arhitectura bucuresti")

**Focus:** Publish 2-4 new articles/week, build backlinks

---

### Month 5-6: Expansion Phase
- **Impressions:** 2,000-10,000/day
- **Clicks:** 100-500/day
- **Average position:** 5-20
- **Ranking for:** Main keywords (e.g., "birouri arhitectura", "arhitect romania")

**Focus:** Optimize existing content, build authority

---

### Month 6-12: Authority Phase
- **Impressions:** 10,000-50,000/day
- **Clicks:** 500-2,000/day
- **Average position:** 3-10
- **Top 3 for:** Branded keywords + several main keywords

**Focus:** Maintain rankings, expand to new keywords

---

## 🔍 SEO Tools

### Free Tools (Essential)
- **Google Search Console** (monitor indexing, rankings)
- **Google Analytics 4** (traffic, conversions)
- **Google PageSpeed Insights** (performance)
- **Google Rich Results Test** (schema validation)
- **Screaming Frog SEO Spider** (free up to 500 URLs)

### Paid Tools (Optional)
- **Ahrefs** (~$99/mo) - backlinks, competitors
- **SEMrush** (~$119/mo) - keyword research, rankings
- **Moz Pro** (~$99/mo) - domain authority

### Romanian-Specific
- **Keyword.ro** - Romanian keyword volume
- **SEOmonitor** - Romanian SERP tracking

---

## 📝 Content Strategy

### Weekly Content Plan
**Goal:** 3 articles/week (Mon, Wed, Fri)

**Article Types:**
1. **Company Spotlights** (1/week)
   - "Spotlight: [Company Name] - Arhitectură [City/Style]"
   - 800-1200 words
   - Include: portfolio images, founder interview, projects

2. **Educational Guides** (1/week)
   - "Cum să alegi un arhitect pentru casa ta"
   - "Top 10 trenduri arhitectură 2026"
   - 1500-2500 words
   - SEO-optimized for target keywords

3. **News/Trends** (1/week)
   - Architecture industry news from Romania/global
   - 500-800 words
   - Quick to produce (curated + commentary)

**Internal Linking:**
- Every article links to 3-5 company pages
- Company pages link to related articles
- Homepage links to latest articles

---

## 🚨 Common Issues & Fixes

### Issue 1: Pages not indexed
**Symptom:** Google Search Console shows "Discovered - currently not indexed"

**Fix:**
1. Check sitemap submission
2. Improve internal linking (link from homepage to important pages)
3. Add more content (min 300 words/page)
4. Request indexing manually (Search Console → URL Inspection → Request Indexing)

---

### Issue 2: Slow page speed
**Symptom:** PageSpeed Insights score < 80

**Fix:**
1. Optimize images (WebP format, compress, lazy loading)
2. Minify CSS/JS (Next.js does this automatically)
3. Enable caching (Cloudflare CDN)
4. Remove unused dependencies

---

### Issue 3: Schema validation errors
**Symptom:** Google Rich Results Test shows errors

**Fix:**
1. Validate JSON-LD syntax (https://validator.schema.org/)
2. Ensure all required fields are present
3. Fix data types (dates in ISO format, URLs absolute)

---

### Issue 4: Duplicate content
**Symptom:** Multiple URLs for same content

**Fix:**
1. Add canonical URLs (already implemented)
2. Use 301 redirects (if needed)
3. Consolidate similar pages

---

## 📞 Next Steps

**This Week:**
1. [x] ✅ Implement sitemap.ts
2. [x] ✅ Implement robots.ts
3. [x] ✅ Add Schema.org JSON-LD (Organization, WebSite, Article, LocalBusiness)
4. [x] ✅ Enhanced meta tags (Open Graph, Twitter, canonical)
5. [ ] Create Google Search Console property
6. [ ] Submit sitemap to Google
7. [ ] Create Google Analytics 4 property
8. [ ] Add GA4 tracking code

**Next Week:**
1. [ ] Publish 3 new articles (company spotlight + guide + news)
2. [ ] Build 5+ backlinks (guest posts, directories)
3. [ ] Monitor Google Search Console (coverage, performance)
4. [ ] Optimize images (convert to WebP, compress)

**Monthly:**
1. [ ] Review keyword rankings (target: +5 positions/month)
2. [ ] Analyze traffic (target: +20%/month)
3. [ ] Update old articles (refresh content, add internal links)
4. [ ] Build 10+ quality backlinks

---

**Status:** ✅ Technical SEO COMPLET  
**Next:** Content production + Backlink building  
**Review:** Weekly (every Monday)  

**Ultima actualizare:** 2026-02-19  
**Autor:** Atlas + Radu
