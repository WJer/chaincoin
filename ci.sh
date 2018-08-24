#!/usr/bin/sh
npm run build
git add .
git commit -m "bugfix"
git push origin develop
