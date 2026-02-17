#!/bin/bash
# Emergency rollback to previous git commit
# Usage: ./rollback.sh

set -e

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${YELLOW}⚠️  Emergency Rollback${NC}"
echo "=================================="

# Show last 5 commits
echo -e "\n${YELLOW}Recent commits:${NC}"
git log --oneline -5

# Get previous commit
CURRENT=$(git rev-parse HEAD)
PREVIOUS=$(git rev-parse HEAD~1)

echo -e "\n${YELLOW}Current commit:${NC} ${CURRENT:0:7}"
echo -e "${YELLOW}Previous commit:${NC} ${PREVIOUS:0:7}"

# Confirm
read -p "Rollback to previous commit? (y/N): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo -e "${RED}❌ Rollback cancelled${NC}"
    exit 1
fi

# Reset to previous commit
echo -e "\n${YELLOW}🔄 Rolling back...${NC}"
git reset --hard HEAD~1

echo -e "${GREEN}✅ Rolled back to ${PREVIOUS:0:7}${NC}"
echo -e "\n${YELLOW}Now deploy with:${NC}"
echo "./deploy.sh \"Rollback to working version\""
