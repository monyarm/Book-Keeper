/* import * as fs from "fs";
class Book {
  title: string;
  translated_title?: string;
  category: string[];
  sources?: string[];
  description?: string;
  author?: string;
}
var books: Array<Book> = [];
var dir = __dirname + "/books";
bookReader(dir);
function bookReader(dir) {
  dir = dir + "/";
  fs.readdirSync(dir).forEach(function(file) {
    if (fs.lstatSync(dir + file).isDirectory()) {
      bookReader(dir + file);
    } else {
      books = books.concat(require(dir + file).books);
    }
  });
}
function printPretty(arr: Book[]) {
  console.log("---------");
  arr.forEach(book => {
    console.log("Title: " + book.title);
    if (book.translated_title) {
      console.log("Translated Title: " + book.translated_title);
    }
    if (book.author) {
      console.log("Author: " + book.author);
    }
    if (book.category) {
      book.category.forEach(cat => {
        console.log("Category: " + cat);
      });
    }
    if (book.description) {
      console.log("Description: " + book.description);
    }
    console.log("---------");
  });
}
function checkDuplicateInObject(propertyName, inputArray) {
  var seenDuplicate = false,
    testObject = {};
  var dupes: Book[] = [];
  inputArray.map(function(item) {
    var itemPropertyName = item[propertyName];
    if (itemPropertyName in testObject) {
      testObject[itemPropertyName].duplicate = true;
      item.duplicate = true;
      seenDuplicate = true;
      dupes.push(item.title);
    } else {
      testObject[itemPropertyName] = item;
      delete item.duplicate;
    }
  });

  return dupes;
}
function shuffle(a) {
  var b = a;
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [a[j], a[i]];
  }
  return b;
}

switch (process.argv[2]) {
  case "log":
    console.log(books.length);
    break;
  case "random":
    printPretty(shuffle(books).slice(0, process.argv[3]));
    break;
  case "dupe":
    console.log(checkDuplicateInObject("title", books));
    break;
  default:
    break;
}
 */
