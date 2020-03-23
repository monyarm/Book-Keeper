cd standalone
tsc books.ts
sed -i 's/\/..\/books\//\/books\//g' books.js
pkg books.js
7z a build.zip books-linux books-macos books-win.exe ../books