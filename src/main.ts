import Book from './book';
import { loadSources } from './loadBooks';
import { addSource, removeSource, syncSources, loadConfig, resolveSourcePaths } from './sources';

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
function checkDuplicateInObject(propertyName: string, inputArray: Book[]) {
  const testObject: { [key: string]: Book } = {};
  const dupes: string[] = [];
  inputArray.forEach((item: any) => {
    const itemPropertyName = item[propertyName];
    if (itemPropertyName in testObject) {
      dupes.push(item.title);
    } else {
      testObject[itemPropertyName] = item;
    }
  });

  return dupes;
}
function shuffle<T>(a: T[]): T[] {
  const b = a.slice();
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [b[j], b[i]];
  }
  return b;
}

function parseFlag(args: string[], flag: string): string | undefined {
  const i = args.indexOf(flag);
  return i === -1 ? undefined : args[i + 1];
}

function runSourcesCommand(args: string[]) {
  switch (args[0]) {
    case 'add': {
      const source = addSource(args[1], parseFlag(args, '--name'));
      console.log(`Added source "${source.name}" (${source.type})`);
      break;
    }
    case 'remove':
      removeSource(args[1]);
      console.log(`Removed source "${args[1]}"`);
      break;
    case 'list':
      loadConfig().forEach(s => console.log(`${s.name}\t${s.type}\t${s.path ?? s.url}`));
      break;
    case 'sync':
      syncSources();
      break;
    default:
      console.log('Usage: sources <add|remove|list|sync>');
  }
}

function main() {
  const [, , command, ...rest] = process.argv;

  if (command === 'sources') {
    runSourcesCommand(rest);
    return;
  }

  const root = loadSources(resolveSourcePaths());
  const books = root.getBooks();

  switch (command) {
    case 'dump':
      printPretty(rest[0] ? root.getSpecificBooks(rest[0]) : books);
      break;
    case 'log':
      console.log(books.length);
      break;
    case 'random':
      printPretty(shuffle(books).slice(0, Number(rest[0])));
      break;
    case 'dupe':
      console.log(checkDuplicateInObject('title', books));
      break;
    default:
      console.log('Usage: book-keeper <dump [path]|log|random <n>|dupe|sources ...>');
      break;
  }
}

main();
