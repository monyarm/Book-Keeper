import fs from 'fs';
class Book {
  public title: string;
  // tslint:disable-next-line: variable-name
  public translated_title?: string;
  public category: string[];
  public sources?: string[];
  public description?: string;
  public author?: string;
}
let books: Book[] = [];
const directory = __dirname + '/books';
bookReader(directory);
function bookReader(dir = '') {
  dir = dir + '/';
  fs.readdirSync(dir).forEach(file => {
    if (fs.lstatSync(dir + file).isDirectory()) {
      bookReader(dir + file);
    } else {
      if (file.endsWith('.json')) {
        books = books.concat(require(dir + file).books);
      }
    }
  });
}
function printPretty(arr: Book[]) {
  console.log('---------');
  arr.forEach(book => {
    console.log('Title: ' + book.title);
    if (book.translated_title) {
      console.log('Translated Title: ' + book.translated_title);
    }
    if (book.author) {
      console.log('Author: ' + book.author);
    }
    if (book.category) {
      book.category.forEach(cat => {
        console.log('Category: ' + cat);
      });
    }
    if (book.description) {
      console.log('Description: ' + book.description);
    }
    console.log('---------');
  });
}
function checkDuplicateInObject(propertyName: string, inputArray: any) {
  const testObject: any = {};
  const dupes: Book[] = [];
  inputArray.map((item: { [x: string]: any; duplicate: boolean; title: Book; }) => {
    const itemPropertyName = item[propertyName];
    if (itemPropertyName in testObject) {
      testObject[itemPropertyName].duplicate = true;
      item.duplicate = true;
      dupes.push(item.title);
    } else {
      testObject[itemPropertyName] = item;
      delete item.duplicate;
    }
  });

  return dupes;
}
function shuffle(a: any[] | Book[]) {
  const b = a;
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [a[j], a[i]];
  }
  return b;
}

switch (process.argv[2]) {
  case 'log':
    console.log(books.length);
    break;
  case 'random':
    printPretty(shuffle(books).slice(0, Number(process.argv[3])));
    break;
  case 'dupe':
    console.log(checkDuplicateInObject('title', books));
    break;
  default:
    break;
}
