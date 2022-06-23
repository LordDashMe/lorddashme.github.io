# !/bin/sh

find $(pwd)/* ! \( \
  -type d -name '.vscode' -prune -o \
  -type d -name 'archives' -prune -o \
  -type d -name 'v1' -prune -o \
  -type d -name 'v2' -prune -o \
  -type d -name 'v3' -prune -o \
  -type d -name 'v4' -prune -o \
  -type f -name '.gitignore' -prune -o \
  -type f -name 'ads.txt' -prune -o \
  -type f -name 'google764e0d137ba9e2a9.html' -prune -o \
  -type f -name 'LICENSE' -prune -o \
  -type f -name 'pre-deployment.sh' -prune -o \
  -type f -name 'README.md' -prune -o \
  -type f -name 'robots.txt' -prune -o \
  -type f -name 'sitemap.xml' -prune \) -prune -exec rm -rf {} +

cat <<EOF 

Restoring to common files original list.

------------------
| Clean-up Done! |
------------------

EOF
