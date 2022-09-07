# !/bin/sh

# For deprecated version, all build files should deploy 
# to that version folder root directory.
# That's why we add a clean up script here.
find $(pwd)/* ! \( \
  -type d -name '.cache' -prune -o \
  -type d -name 'node_modules' -prune -o \
  -type d -name 'public' -prune -o \
  -type d -name 'src' -prune -o \
  -type d -name 'static' -prune -o \
  -type f -name '.babelrc' -prune -o \
  -type f -name '.gitignore' -prune -o \
  -type f -name '.prettierignore' -prune -o \
  -type f -name '.prettierrc' -prune -o \
  -type f -name 'deploy.sh' -prune -o \
  -type f -name 'docker-compose.yml' -prune -o \
  -type f -name 'gatsby-browser.js' -prune -o \
  -type f -name 'gatsby-config.js' -prune -o \
  -type f -name 'gatsby-node.js' -prune -o \
  -type f -name 'gatsby-ssr.js' -prune -o \
  -type f -name 'LICENSE' -prune -o \
  -type f -name 'package-lock.json' -prune -o \
  -type f -name 'package.json' -prune -o \
  -type f -name 'README_ORIGINAL.md' -prune -o \
  -type f -name 'README.md' -prune \) -prune -exec rm -rf {} +

# The command is deprecated because this version is no longer the current production released.
# This build can only be deploy to its version root directory.
cp -R public/* .

cat <<EOF 

Custom deployment of gatsby public folder
for github pages structure.

------------------
| Done deployed! |
------------------

EOF
