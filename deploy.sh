#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Starting production deployment process for bborn.dev...${NC}"

# Check if Angular CLI is installed
if ! [ -x "$(command -v ng)" ]; then
  echo -e "${RED}Error: Angular CLI is not installed.${NC}" >&2
  echo -e "Please install it globally with: npm install -g @angular/cli"
  exit 1
fi

# Step 1: Install dependencies
echo -e "${YELLOW}Installing dependencies...${NC}"
npm ci || { echo -e "${RED}Failed to install dependencies${NC}"; exit 1; }
echo -e "${GREEN}Dependencies installed successfully.${NC}"

# Step 2: Run tests
echo -e "${YELLOW}Running tests...${NC}"
npm test -- --watch=false --browsers=ChromeHeadless || { 
  echo -e "${RED}Tests failed. Please fix the issues before deploying.${NC}"
  read -p "Continue anyway? (y/n) " -n 1 -r
  echo 
  if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    exit 1
  fi
}

# Step 3: Build for production
echo -e "${YELLOW}Building application for production...${NC}"
ng build --configuration production --aot --build-optimizer --optimization --output-hashing=all || { 
  echo -e "${RED}Build failed${NC}"
  exit 1
}
echo -e "${GREEN}Build completed successfully.${NC}"

# Step 4: Generate GZIP files for better performance
echo -e "${YELLOW}Generating compressed files...${NC}"
find dist/bborn-dev/browser -type f -regex ".*\.\(js\|css\|html\|svg\|txt\)" -exec gzip -9 -k {} \;
echo -e "${GREEN}Compression completed.${NC}"

# Step 5: Create a distribution package
echo -e "${YELLOW}Creating distribution package...${NC}"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
DEPLOY_NAME="bborn-dev-$TIMESTAMP.zip"
(cd dist && zip -r "../$DEPLOY_NAME" bborn-dev) || { 
  echo -e "${RED}Failed to create distribution package${NC}"
  exit 1
}
echo -e "${GREEN}Distribution package created: ${DEPLOY_NAME}${NC}"

# Completion message
echo -e "${GREEN}=====================================${NC}"
echo -e "${GREEN}Deployment package prepared successfully!${NC}"
echo -e "${GREEN}You can deploy the following files:${NC}"
echo -e "${YELLOW}1. Full build: ${NC}dist/bborn-dev/browser/"
echo -e "${YELLOW}2. Packaged version: ${NC}${DEPLOY_NAME}"
echo -e "${GREEN}=====================================${NC}"
echo -e "Remember to update your AI disclaimer before deploying." 