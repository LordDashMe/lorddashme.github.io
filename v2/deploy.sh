# !/bin/sh

# For deprecated version, all build files should deploy 
# to that version folder root directory.
find $(pwd)/* ! \( \
  -type d -name 'build' -prune -o \
  -type d -name 'node_modules' -prune -o \
  -type d -name 'public' -prune -o \
  -type d -name 'src' -prune -o \
  -type f -name '.gitignore' -prune -o \
  -type f -name 'deploy.sh' -prune -o \
  -type f -name 'package-lock.json' -prune -o \
  -type f -name 'package.json' -prune -o \
  -type f -name 'README.md' -prune -o \
  -type f -name 'tsconfig.json' -prune \) -prune -exec rm -rf {} +

cp -R build/* .

cat <<EOF 

Custom deployment of react build folder
for github pages structure.

------------------
| Done deployed! |
------------------


EOF
