#!/usr/bin/env sh
# abort on errors
set -e
# build
npm run build
git init
git add dist
git commit -m 'deploy'
git push -f git@github.com:engArthurFranca/cryptogram-vue3.git main:gh-pages