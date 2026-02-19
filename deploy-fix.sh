#!/bin/bash
set -e

CPANEL_USER="birouarhitect"
CPANEL_PASS="NU;3Z.')X4pGYry5w"
CPANEL_URL="https://cpanel.birouarhitect.ro:2083"
SITE_URL="https://birouarhitect.ro"

echo "🚀 Quick Deploy Fix"

# Use the existing archive
ARCHIVE=$(ls -t site-deploy-*.tar.gz 2>/dev/null | head -1)
if [ -z "$ARCHIVE" ]; then
    echo "❌ No archive found!"
    exit 1
fi

echo "📦 Using archive: $ARCHIVE"

# Extract using cPanel API directly
echo "📂 Extracting via cPanel API..."
RESULT=$(curl -s -X POST \
  "${CPANEL_URL}/execute/Fileman/extract_files" \
  -u "${CPANEL_USER}:${CPANEL_PASS}" \
  -d "dir=/home/birouarhitect/public_html" \
  -d "file=/home/birouarhitect/public_html/${ARCHIVE}" \
  -d "overwrite=1")

if echo "$RESULT" | grep -q '"status":1'; then
    echo "✅ Extraction successful"
    
    # Delete archive
    curl -s -X POST "${CPANEL_URL}/execute/Fileman/delete_files" \
      -u "${CPANEL_USER}:${CPANEL_PASS}" \
      -d "path=/home/birouarhitect/public_html/${ARCHIVE}" > /dev/null
    echo "✅ Cleaned up archive"
else
    echo "❌ Extraction failed"
    echo "$RESULT"
    exit 1
fi

# Purge cache
echo "🧹 Purging cache..."
cat > /tmp/purge-now.php << 'EOF'
<?php header('X-LiteSpeed-Purge: *'); echo "OK"; ?>
EOF

curl -s -F "file=@/tmp/purge-now.php" \
  -u "${CPANEL_USER}:${CPANEL_PASS}" \
  "${CPANEL_URL}/execute/Fileman/upload_files?dir=/home/birouarhitect/public_html" > /dev/null

sleep 1
curl -s "${SITE_URL}/purge-now.php" > /dev/null

curl -s -X POST "${CPANEL_URL}/execute/Fileman/delete_files" \
  -u "${CPANEL_USER}:${CPANEL_PASS}" \
  -d "path=/home/birouarhitect/public_html/purge-now.php" > /dev/null

echo "✅ Deploy complete!"
