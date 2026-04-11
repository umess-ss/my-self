#!/usr/bin/env bash
set -e

REPO="https://github.com/umess-ss/my-self.git"
USER_NAME="Umesh Rajbanshi"
USER_EMAIL="ums.rbc07@gmail.com"

echo "🔨 Building..."
npm run build

echo "🚀 Deploying to gh-pages branch..."
rm -rf dist/.git
cd dist

git init -b gh-pages
git config user.name "$USER_NAME"
git config user.email "$USER_EMAIL"
git remote add origin "$REPO"
git add .
git commit -m "Deploy to GitHub Pages"
git push -f origin gh-pages

echo "✅ Deployed successfully!"
