# !/bin/sh

# For deprecated version, all build files should deploy 
# to that version folder root directory.
# That's why we add a clean up script here.
find $(pwd)/* ! \( \
  -type d -name 'build' -prune -o \
  -type d -name 'node_modules' -prune -o \
  -type d -name 'public' -prune -o \
  -type d -name 'src' -prune -o \
  -type f -name '.gitignore' -prune -o \
  -type f -name 'deploy.sh' -prune -o \
  -type f -name 'package-lock.json' -prune -o \
  -type f -name 'package.json' -prune -o \
  -type f -name 'README_ORIGINAL.md' -prune -o \
  -type f -name 'README.md' -prune -o \
  -type f -name 'tsconfig.json' -prune \) -prune -exec rm -rf {} +

# The command is deprecated because this version is no longer the current production released.
# This build can only be deploy to its version root directory.
# cp -R build/* ../
cp -R build/* .

cat <<EOF 

Custom deployment of react build folder
for github pages structure.

Note: This version is now deprecated and no longer deploy to the root directory.

------------------
| Done deployed! |
------------------

EOF
