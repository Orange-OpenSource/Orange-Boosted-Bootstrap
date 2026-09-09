#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Default branch suffix
BRANCH_SUFFIX="release"

# Check if a custom version parameter was provided
if [ $# -eq 1 ]; then
  BRANCH_SUFFIX="$1"
fi

# Branch name to create
NEW_BRANCH="main-${BRANCH_SUFFIX}"

# Get the current docs version from config
DOCS_VERSION=$(node -p "require('js-yaml').load(require('fs').readFileSync('config.yml', 'utf8')).docs_version")

# Function to print colored messages
print_success() {
  echo -e "${GREEN}✓ $1${NC}"
}

print_error() {
  echo -e "${RED}✗ $1${NC}"
  exit 1
}

print_info() {
  echo -e "${BLUE}⚠ $1${NC}"
}

print_warning() {
  echo -e "${YELLOW}⚠ $1${NC}"
}

# Function to execute command with error handling
execute() {
  print_info "Running: $1"
  eval $1
  if [ $? -ne 0 ]; then
    print_error "Failed to execute: $1"
  else
    print_success "Successfully executed: $1"
  fi
}

# Main process
print_info "Starting documentation deployment process…"

# Step 1: Build documentation
print_info "Building documentation with npm run docs…"
npm run storybook-build
if [ $? -ne 0 ]; then
  print_error "Documentation build failed!"
fi
print_success "Documentation built successfully"

# Step 2: Switch to good branch
print_info "Checking out ouds-web-doc main branch…"
cd ../ouds-web-doc
git switch main
if [ $? -ne 0 ]; then
  print_error "Failed to checkout ouds-web-doc main branch. Make sure it exists."
fi
print_success "Switched to ouds-web-doc main branch"

git fetch -p
git reset --hard origin/main
if [ $? -ne 0 ]; then
  print_error "Failed to reset to origin/main. Check your git configuration."
fi
print_success "Reset to origin/main"

git pull origin main
if [ $? -ne 0 ]; then
  print_error "Failed to pull from origin/main. Check your network connection and git configuration."
fi
print_success "Pulled latest changes from origin/main"

# Step 3: Create a new branch for the update
print_info "Checking if branch ${NEW_BRANCH} exists and deleting it if it does…"
if git show-ref --verify --quiet refs/heads/${NEW_BRANCH}; then
  execute "git branch -D ${NEW_BRANCH}"
else
  print_info "Branch ${NEW_BRANCH} does not exist, proceeding with creation…"
fi
print_info "Creating new branch ${NEW_BRANCH}…"
execute "git checkout -b ${NEW_BRANCH}"

# Step 4: Remove Storybook directory
rm -rf storybook

# Step 5: Move all root-level files from Astro build
find ../Orange-Boosted-Bootstrap/_site -maxdepth 1 -type f -exec mv {} . \;

# Step 6: Move all top-level directories except 'docs' (which needs special handling)
find ../Orange-Boosted-Bootstrap/_site -maxdepth 1 -type d ! -name "_site" ! -name "docs" -exec sh -c 'dir=$(basename "$1"); rm -rf "$dir"; mv "$1" .' _ {} \;

# Step 7: Handle docs directory specially
if [ -d "../Orange-Boosted-Bootstrap/_site/docs" ]; then
  # Replace only the current version's docs
  if [ -d "docs/$DOCS_VERSION" ]; then
    rm -rf "docs/$DOCS_VERSION"
  fi
  mv "../Orange-Boosted-Bootstrap/_site/docs/$DOCS_VERSION" "docs/"

  # Handle docs root files
  find ../Orange-Boosted-Bootstrap/_site/docs -maxdepth 1 -type f -exec mv {} docs/ \;

  # Handle special docs directories (getting-started, versions)
  for special_dir in about components content customize examples extend forms getting-started helpers layout migration migration-from-boosted utilities versions; do
    if [ -d "../Orange-Boosted-Bootstrap/_site/docs/$special_dir" ]; then
      rm -rf "docs/$special_dir"
      mv "../Orange-Boosted-Bootstrap/_site/docs/$special_dir" "docs/"
    fi
  done
fi

# Clean up remaining files in ../Orange-Boosted-Bootstrap/_site if any
if [ -d "../Orange-Boosted-Bootstrap/_site" ]; then
  remaining_files=$(find ../Orange-Boosted-Bootstrap/_site -type f | wc -l)
  remaining_dirs=$(find ../Orange-Boosted-Bootstrap/_site -type d | wc -l)
  if [ $remaining_files -gt 0 ] || [ $remaining_dirs -gt 1 ]; then
    print_warning "There are still some files or directories in _site that weren't moved."
    print_warning "You may want to inspect _site to see if anything important was missed."
  else
    print_info "Cleaning up temporary directory…"
    rm -rf ../Orange-Boosted-Bootstrap/_site
    print_success "Temporary directory cleaned up"
  fi
fi

print_success "Docs prep complete!"
print_info "Review changes before committing and pushing."
print_info "Next steps:"
print_info "  1. Run a local server to review changes"
print_info "  2. Check browser and web inspector for any errors"
print_info "  3. git add ."
print_info "  4. git commit -m \"chore(release): vx.y.z :rocket:\""
print_info "  5. git push origin ${NEW_BRANCH}"
