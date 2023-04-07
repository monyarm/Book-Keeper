import Book from './book';

export default class BookGroup {
    children: Book[] | BookGroup | BookGroup[];
    path: string;
    public selected = true;

    constructor(path: string, children: Book[] | BookGroup | BookGroup[]) {
        this.path = path;
        this.children = children;
    }

    getBooks(): Array<Book> {
      var books: Array<Book> = [];
      if (this.children instanceof BookGroup) {
          books = books.concat(this.children.getBooks());
      }
      else if (this.children instanceof Array) {
          this.children.forEach((x) => {
              if (x instanceof BookGroup) {
                books = books.concat(x.getBooks());
              }
              else if (x instanceof Book) {
                books.push(x);
              }
          });
      }
      return books;

    }
    selectChildren(select: boolean) {
        this.selected = select;
        if (this.children instanceof BookGroup) {
            this.children.selectChildren(select);
        }
        else if (this.children instanceof Array) {
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
}
