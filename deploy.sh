#!/bin/bash
# Automated deployment script for BirouArhitect.ro
# Usage: ./deploy.sh [message]

set -e  # Exit on error

CPANEL_USER="birouarhitect"
CPANEL_PASS="NU;3Z.')X4pGYry5w"
CPANEL_URL="https://cpanel.birouarhitect.ro:2083"
SITE_URL="https://birouarhitect.ro"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}🚀 BirouArhitect.ro Deployment${NC}"
echo "=================================="

# 1. Build
echo -e "\n${YELLOW}📦 Building Next.js...${NC}"
npm run build
if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Build failed!${NC}"
    exit 1
fi

# 2. Create archive
TIMESTAMP=$(date +%s)
ARCHIVE="site-deploy-${TIMESTAMP}.tar.gz"
echo -e "\n${YELLOW}📦 Creating archive: ${ARCHIVE}${NC}"
tar -czf "$ARCHIVE" -C out .

# 3. Upload to cPanel
echo -e "\n${YELLOW}⬆️  Uploading to cPanel...${NC}"
curl -s -X POST \
  "${CPANEL_URL}/execute/Fileman/upload_files" \
  -u "${CPANEL_USER}:${CPANEL_PASS}" \
  -F "dir=/home/birouarhitect/public_html" \
  -F "file-1=@${ARCHIVE}" \
  -F "overwrite=1" > /tmp/upload-result.json

if grep -q '"status":1' /tmp/upload-result.json; then
    echo -e "${GREEN}✅ Upload successful${NC}"
else
    echo -e "${RED}❌ Upload failed!${NC}"
    cat /tmp/upload-result.json
    exit 1
fi

# 4. Extract on server
echo -e "\n${YELLOW}📂 Extracting on server...${NC}"
cat > /tmp/extract.php << 'EOF'
<?php
chdir('/home/birouarhitect/public_html');
$files = glob('site-deploy-*.tar.gz');
if (empty($files)) {
    die("ERROR: No archive found");
}
$archive = $files[0];
exec("tar -xzf $archive 2>&1", $output, $code);
if ($code !== 0) {
    die("ERROR: Extraction failed\n" . implode("\n", $output));
}
unlink($archive);
echo "SUCCESS: Extracted and cleaned up $archive";
?>
EOF

curl -s -F "file=@/tmp/extract.php" \
  -u "${CPANEL_USER}:${CPANEL_PASS}" \
  "${CPANEL_URL}/execute/Fileman/upload_files?dir=/home/birouarhitect/public_html" > /dev/null

sleep 2

EXTRACT_RESULT=$(curl -s "${SITE_URL}/extract.php")
curl -s -X POST "${CPANEL_URL}/execute/Fileman/delete_files" \
  -u "${CPANEL_USER}:${CPANEL_PASS}" \
  -d "path=/home/birouarhitect/public_html/extract.php" > /dev/null

if [[ "$EXTRACT_RESULT" == *"SUCCESS"* ]]; then
    echo -e "${GREEN}✅ Extraction successful${NC}"
else
    echo -e "${RED}❌ Extraction failed!${NC}"
    echo "$EXTRACT_RESULT"
    exit 1
fi

# 5. Purge cache
echo -e "\n${YELLOW}🧹 Purging LiteSpeed cache...${NC}"
cat > /tmp/purge.php << 'EOF'
<?php
header('X-LiteSpeed-Purge: *');
header('Content-Type: text/plain');
echo "Cache purged";
?>
EOF

curl -s -F "file=@/tmp/purge.php" \
  -u "${CPANEL_USER}:${CPANEL_PASS}" \
  "${CPANEL_URL}/execute/Fileman/upload_files?dir=/home/birouarhitect/public_html" > /dev/null

sleep 1
curl -s "${SITE_URL}/purge.php" > /dev/null
curl -s -X POST "${CPANEL_URL}/execute/Fileman/delete_files" \
  -u "${CPANEL_USER}:${CPANEL_PASS}" \
  -d "path=/home/birouarhitect/public_html/purge.php" > /dev/null

echo -e "${GREEN}✅ Cache purged${NC}"

# 6. Git commit (if message provided)
if [ -n "$1" ]; then
    echo -e "\n${YELLOW}📝 Committing changes...${NC}"
    git add -A
    git commit -m "$1 - deployed ${TIMESTAMP}"
    echo -e "${GREEN}✅ Committed: $1${NC}"
fi

# Cleanup
rm -f "$ARCHIVE" /tmp/extract.php /tmp/purge.php /tmp/upload-result.json

echo -e "\n${GREEN}✅ Deployment complete!${NC}"
echo -e "🌐 Site: ${SITE_URL}"
echo -e "📦 Archive: ${ARCHIVE}"
