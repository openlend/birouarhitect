# 🔄 Development Workflow

## Daily Development

### 1. Start Local Environment
```bash
# Docker (recommended - clean environment)
docker-compose up

# Native (if you prefer)
npm run dev
```

### 2. Make Changes
- Edit files in `src/`
- See live changes at http://localhost:3000
- Test on mobile (Chrome DevTools)

### 3. Test Build
```bash
# Make sure static export works
npm run build

# Check out/ folder for any issues
ls -lh out/
```

### 4. Deploy
```bash
./deploy.sh "Brief description of changes"
```

## Emergency Procedures

### Site Broken After Deploy
```bash
# Rollback to previous working version
./rollback.sh

# Deploy the old version
./deploy.sh "Rollback - reverted breaking changes"
```

### CSS Not Loading
```bash
# Check LiteSpeed cache
# Manual purge: cPanel → LiteSpeed Cache → Purge All

# Or re-deploy with cache bust
touch src/app/globals.css  # Force rebuild with new hash
./deploy.sh "Force CSS cache refresh"
```

### Build Fails
```bash
# Clean rebuild
rm -rf .next node_modules/.cache
npm run build
```

## Best Practices

### Before Every Deploy
1. ✅ Test locally (http://localhost:3000)
2. ✅ Check both desktop + mobile
3. ✅ Run build (`npm run build`)
4. ✅ Write descriptive commit message

### Commit Messages
- ❌ Bad: "update", "fix", "changes"
- ✅ Good: "Fixed navigation transparency on article pages"
- ✅ Good: "Added new company: Biro Arhitect Cluj"
- ✅ Good: "Optimized hero image - reduced 2.5MB → 800KB"

### File Size Limits
- Images: max 1MB per image (optimize with ImageMagick)
- Total deploy: aim for <5MB (faster uploads)

### When Stuck
1. Check `git log` - what changed recently?
2. Compare with last working commit: `git diff HEAD~1`
3. Test locally in Docker (isolates environment issues)
4. Ask for screenshot if issue only appears in browser

## Git Commands

### View History
```bash
git log --oneline -10        # Last 10 commits
git log --oneline --all      # All commits
```

### Compare Changes
```bash
git diff                      # Uncommitted changes
git diff HEAD~1               # Last commit vs current
git diff <commit1> <commit2>  # Between two commits
```

### Undo Changes
```bash
git reset --hard HEAD         # Discard all local changes
git reset --hard HEAD~1       # Go back 1 commit
./rollback.sh                 # Interactive rollback
```

## Docker Tips

### Container Management
```bash
docker-compose up -d          # Run in background
docker-compose down           # Stop container
docker-compose logs -f        # View live logs
docker-compose restart        # Restart after package.json change
```

### Fresh Start
```bash
docker-compose down -v        # Remove volumes
docker-compose up --build     # Rebuild image
```

## Troubleshooting

### Port 3000 Already in Use
```bash
# Find and kill process
lsof -ti:3000 | xargs kill -9

# Or use different port
PORT=3001 npm run dev
```

### Permission Errors
```bash
# Docker volume ownership
docker-compose exec birouarhitect-dev chown -R node:node /app
```

### Deploy Script Fails
```bash
# Check credentials
curl -u "birouarhitect:NU;3Z.')X4pGYry5w" \
  https://cpanel.birouarhitect.ro:2083/execute/Fileman/list_files?dir=/home/birouarhitect/public_html

# Manual upload if script broken
# 1. npm run build
# 2. tar -czf site.tar.gz -C out .
# 3. Upload via cPanel File Manager
# 4. Extract via cPanel Terminal: tar -xzf site.tar.gz
```

## Performance Checklist

Before deploy, verify:
- [ ] Images optimized (<1MB each)
- [ ] No console errors in browser
- [ ] Fast page load (<2s on 3G)
- [ ] Mobile responsive (test in DevTools)
- [ ] No broken links (click through major pages)

## Code Style

### Components
- Use TypeScript strict mode
- Props interfaces above component
- Descriptive names: `ArticlePageClient` not `APC`

### CSS
- TailwindCSS utilities preferred
- Custom CSS only when necessary
- Document magic numbers (e.g., `pt-24` for nav height)

### Data
- All content in `src/data/companies.ts`
- Keep articles and companies separate arrays
- Use kebab-case for slugs

---

**Remember:** Git is your safety net. Commit often, deploy confidently, rollback fearlessly.
