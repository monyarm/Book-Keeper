cd src
tsc main.ts
sed -i 's/\/..\/books\//\/books\//g' main.js
pkg main.js
mv main-linux books-linux
mv main-macos books-macos
mv main-win.exe books-win.exe
7z a build.zip books-linux books-macos books-win.exe ../books
