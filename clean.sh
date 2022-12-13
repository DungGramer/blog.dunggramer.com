# Delete all folder with parameters
function del() {
  find . -name $1 -type d -exec rm -rf {} \;
}

del "build"
del "dist"
del "node_modules"
del "package-lock.json"
del "yarn.lock"
del "pnpm-lock.yaml"
del "coverage"
