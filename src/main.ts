import * as fs from 'fs';
import Book from '@/book'
import Books from '@book';
let books: Book[] = Books.getBooks();
function printPretty(arr: Book[]) {
  console.log('---------');
  arr.forEach(book => {
    console.log('Title: ' + book.title);
    if (book.translatedTitle) {
      console.log('Translated Title: ' + book.translatedTitle);
    }
    if (book.language) {
      console.log('Language: ' + book.language);
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
  case 'dump':
    printPretty(Books.getSpecificBooks(process.argv[3]));
    break;
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
