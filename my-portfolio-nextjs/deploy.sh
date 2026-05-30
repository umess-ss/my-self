#!/usr/bin/env bash
set -e

REPO="https://github.com/umess-ss/my-self.git"
USER_NAME="Umesh Rajbanshi"
USER_EMAIL="ums.rbc07@gmail.com"

echo "🔨 Building Next.js..."
npm run build

echo "🚀 Deploying to gh-pages branch..."
# Next.js static export creates 'out' folder
rm -rf out/.git
cd out
touch .nojekyll

git init -b gh-pages
git config user.name "$USER_NAME"
git config user.email "$USER_EMAIL"
git remote add origin "$REPO"
git add .
git commit -m "Deploy Next.js portfolio to GitHub Pages"
git push -f origin gh-pages

echo "✅ Deployed successfully!"
