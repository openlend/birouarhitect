#!/bin/bash
# Deploy mission-control.html to birouarchitect.ro
set -e

CPANEL_USER="birouarhitect"
CPANEL_PASS="NU;3Z.')X4pGYry5w"
CPANEL_URL="https://cpanel.birouarhitect.ro:2083"
SITE_URL="https://birouarhitect.ro"

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${GREEN}🚀 Deploying Mission Control Dashboard${NC}"
echo "======================================="

# Verify file exists
if [ ! -f "mission-control.html" ]; then
    echo -e "${RED}❌ mission-control.html not found!${NC}"
    exit 1
fi

# Upload to cPanel
echo -e "\n${YELLOW}⬆️  Uploading mission-control.html...${NC}"
curl -s -X POST \
  "${CPANEL_URL}/execute/Fileman/upload_files" \
  -u "${CPANEL_USER}:${CPANEL_PASS}" \
  -F "dir=/home/birouarhitect/public_html/mission-control" \
  -F "file-1=@mission-control.html" \
  -F "overwrite=1" > /tmp/upload-mc-result.json

if grep -q '"status":1' /tmp/upload-mc-result.json; then
    echo -e "${GREEN}✅ Upload successful${NC}"
else
    echo -e "${RED}❌ Upload failed!${NC}"
    cat /tmp/upload-mc-result.json
    exit 1
fi

# Rename to index.html on server
echo -e "\n${YELLOW}📝 Renaming to index.html...${NC}"
cat > /tmp/rename-mc.php << 'EOF'
<?php
$result = rename(
    '/home/birouarhitect/public_html/mission-control/mission-control.html',
    '/home/birouarhitect/public_html/mission-control/index.html'
);
echo $result ? "SUCCESS: Renamed" : "ERROR: Rename failed";
?>
EOF

curl -s -F "file=@/tmp/rename-mc.php" \
  -u "${CPANEL_USER}:${CPANEL_PASS}" \
  "${CPANEL_URL}/execute/Fileman/upload_files?dir=/home/birouarhitect/public_html/mission-control" > /dev/null

sleep 1

RENAME_RESULT=$(curl -s "${SITE_URL}/mission-control/rename-mc.php")
curl -s -X POST "${CPANEL_URL}/execute/Fileman/delete_files" \
  -u "${CPANEL_USER}:${CPANEL_PASS}" \
  -d "path=/home/birouarhitect/public_html/mission-control/rename-mc.php" > /dev/null

if [[ "$RENAME_RESULT" == *"SUCCESS"* ]]; then
    echo -e "${GREEN}✅ Renamed to index.html${NC}"
else
    echo -e "${YELLOW}⚠️  Rename result: ${RENAME_RESULT}${NC}"
fi

# Purge cache
echo -e "\n${YELLOW}🧹 Purging cache...${NC}"
cat > /tmp/purge-mc.php << 'EOF'
<?php
header('X-LiteSpeed-Purge: *');
echo "Cache purged";
?>
EOF

curl -s -F "file=@/tmp/purge-mc.php" \
  -u "${CPANEL_USER}:${CPANEL_PASS}" \
  "${CPANEL_URL}/execute/Fileman/upload_files?dir=/home/birouarhitect/public_html/mission-control" > /dev/null

sleep 1
curl -s "${SITE_URL}/mission-control/purge-mc.php" > /dev/null
curl -s -X POST "${CPANEL_URL}/execute/Fileman/delete_files" \
  -u "${CPANEL_USER}:${CPANEL_PASS}" \
  -d "path=/home/birouarhitect/public_html/mission-control/purge-mc.php" > /dev/null

echo -e "${GREEN}✅ Cache purged${NC}"

# Cleanup
rm -f /tmp/upload-mc-result.json /tmp/rename-mc.php /tmp/purge-mc.php

echo -e "\n${GREEN}✅ Mission Control deployed!${NC}"
echo -e "🌐 URL: ${SITE_URL}/mission-control/"
echo -e "📄 Updated: $(date)"
