# 🏗️ BirouArhitect.ro

Premium directory of architecture firms in Romania.

## Current Status
- **Live:** https://birouarhitect.ro
- **Tech Stack:** Next.js 16, TailwindCSS v4, TypeScript
- **Deployment:** Static export to cPanel (automated)
- **Version Control:** Git initialized (2026-02-17)

## Quick Start

### Local Development
```bash
# Option 1: Docker (recommended - isolated environment)
docker-compose up

# Option 2: Native Node.js
npm install
npm run dev
```

Visit http://localhost:3000

### Deployment
```bash
# Build, upload, extract, purge cache, commit - all automatic
./deploy.sh "Your commit message"

# Example
./deploy.sh "Fixed navigation transparency"
```

### Emergency Rollback
```bash
# Reset to previous commit
./rollback.sh

# Then deploy
./deploy.sh "Rollback to working version"
```

## Project Structure
```
birouarhitect/
├── src/
│   ├── app/              # Next.js 16 pages
│   │   ├── page.tsx      # Homepage
│   │   ├── directory/    # Company listing
│   │   ├── article/      # Article pages
│   │   ├── company/      # Company profiles
│   │   ├── about/        # About page
│   │   ├── contact/      # Contact form
│   │   ├── submit/       # Submit company
│   │   └── news/         # News page
│   ├── components/       # React components
│   │   ├── NavigationBar.tsx
│   │   ├── Hero.tsx
│   │   ├── CompanyCardPremium.tsx
│   │   ├── FooterMinimal.tsx
│   │   └── SectionTitle.tsx
│   ├── data/
│   │   └── companies.ts  # All content (companies + articles)
│   └── app/globals.css   # TailwindCSS styles
├── public/               # Static assets
│   └── images/articles/  # Article images (optimized)
├── out/                  # Build output (static HTML)
├── deploy.sh            # Automated deployment
├── rollback.sh          # Emergency rollback
└── docker-compose.yml   # Local dev environment
```

## Deploy Process (Automated)
1. ✅ `npm run build` - generates static site in `out/`
2. ✅ `tar -czf site-deploy-{timestamp}.tar.gz -C out .` - create archive
3. ✅ Upload to cPanel via API (Fileman/upload_files)
4. ✅ Extract with PHP script on server
5. ✅ Purge LiteSpeed cache
6. ✅ Git commit (if message provided)

**One command:** `./deploy.sh "message"`

## Known Issues (2026-02-17)
- ❌ Article pages: navigation bar transparency/layout issues
- ✅ Homepage: works perfectly
- Made 11+ manual deployments before automation
- User frustrated - needs working solution

## Version Control Strategy
- **Commit before every deploy** - enables instant rollback
- **Descriptive messages** - "Fixed X" not "update"
- **Small atomic changes** - easier to debug issues
- **Rollback script ready** - emergency recovery in 30 seconds

## Next Steps
- [ ] Debug CSS issues on article pages (need screenshot)
- [ ] Test Docker dev environment
- [ ] Consider migration to Vercel/Netlify if cPanel issues persist
- [ ] Cleanup old tar.gz archives

## cPanel Credentials
- **User:** `birouarhitect`
- **Pass:** `NU;3Z.')X4pGYry5w`
- **URL:** https://cpanel.birouarhitect.ro:2083
- **Webmail:** https://birouarhitect.ro:2096

## Email
- **Address:** contact@birouarhitect.ro
- **Quota:** 20MB
- **Use:** Customer inquiries, contact form

## Lessons Learned
1. **Git = mandatory** - would have saved 11 failed deployments
2. **Test locally first** - Docker prevents CSS surprises
3. **Automate everything** - human error in repetitive tasks
4. **Small changes** - easier to identify what broke
5. **Rollback plan** - always have escape route

---

**Created:** 2026-02-17  
**Last Deploy:** Check `git log`  
**Maintainer:** Radu Balas (radu@primulsite.ro)
