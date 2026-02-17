# 🏗️ BirouArhitect.ro

Premium directory of architecture firms in Romania.

## Current Status
- **Live:** https://birouarhitect.ro
- **Tech Stack:** Next.js 16, TailwindCSS v4, TypeScript
- **Deployment:** Static export to cPanel
- **Active Issues:** Layout problems on article pages (navigation transparency)

## Project Structure
```
birouarhitect-next/
├── src/
│   ├── app/              # Next.js pages
│   ├── components/       # React components  
│   ├── data/            # companies.ts - all content
│   └── app/globals.css  # Styles
├── public/              # Static assets
└── out/                 # Build output
```

## Deploy Process
1. `npm run build` - generates static site in `out/`
2. `tar -czf site.tar.gz -C out .` - create archive
3. Upload to cPanel via API
4. Extract with PHP script
5. Purge LiteSpeed cache

## Known Issues (2026-02-17)
- Article pages: broken layout, navigation transparent/stuck
- Homepage: works fine
- Made 10+ deployments - issue persists
- User frustrated - needs working solution

## Next Steps
- Debug CSS application on article pages
- Consider reset to working version
- Or hire external Next.js developer
