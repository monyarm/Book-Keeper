import Book from './book';

export default class BookGroup {
    children: Array<Book | BookGroup>;
    path: string;
    public selected = true;

    constructor(path: string, children: Array<Book | BookGroup>) {
        this.path = path;
        this.children = children;
    }


    getBooks(): Array<Book> {
      var books: Array<Book> = [];
      this.children.forEach((x) => {
          if (x instanceof BookGroup) {
            books = books.concat(x.getBooks());
          }
          else if (x instanceof Book) {
            books.push(x);
          }
      });
      return books;

    }


    getSpecificBooks(path: string): Array<Book> {
      const [p, ...rest] = path.split("/");
      const remainder = rest.join("/");

      const descend = (match: BookGroup) =>
          rest.length === 0 ? match.getBooks() : match.getSpecificBooks(remainder);

      for (const x of this.children) {
          if (x instanceof BookGroup && x.path == p) return descend(x);
      }
      return [];

    }

    static merge(groups: BookGroup[]): BookGroup[] {
      const byName = new Map<string, BookGroup[]>();
      for (const group of groups) {
          const bucket = byName.get(group.path) ?? [];
          bucket.push(group);
          byName.set(group.path, bucket);
      }

      const merged: BookGroup[] = [];
      for (const [name, bucket] of byName) {
          if (bucket.length === 1) {
              merged.push(bucket[0]);
              continue;
          }
          const childGroups: BookGroup[] = [];
          const leafBooks: Book[] = [];
          for (const group of bucket) {
              for (const child of group.children) {
                  if (child instanceof BookGroup) childGroups.push(child);
                  else leafBooks.push(child);
              }
          }
          merged.push(new BookGroup(name, [...BookGroup.merge(childGroups), ...leafBooks]));
      }
      return merged;
    }

    selectChildren(select: boolean) {
        this.selected = select;
        this.children.forEach((x: Book | BookGroup) => {
            if (x instanceof BookGroup) {
                x.selectChildren(select);
            }
            else if(x instanceof Book){
                x.selected = select;
            }
        });
    }
}
