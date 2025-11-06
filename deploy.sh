#!/usr/bin/env sh

# abort on errors
set -e

# build demo
npm run build:demo

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'Deploying demo'

git push -f git@github.com:febe95/vue-functional-calendar.git master:gh-pages

cd -
