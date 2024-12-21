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


    getSpecificBooks(path: String): Array<Book> {
      var pArray: Array<String> = path.split("/");
      var p: String = pArray.shift();
      if (pArray.length === 1) return this.getBooks();
      var remainder: String = pArray.join("/");
      console.log(path);
      console.log(p);
      console.log(pArray);
      console.log(pArray.length);
      console.log(remainder);
      console.log("---");


      if (this.children instanceof BookGroup) {
        if (this.children.path == p){
          return this.children.getSpecificBooks(remainder);
        }
      }
      else if (this.children instanceof Array) {
          this.children.forEach((x: Book | BookGroup) => {
              if (x instanceof BookGroup) {

                if (x.path == p){

                  return x.getSpecificBooks(remainder);
                }
              }
              else if(x instanceof Book){
              }
          });
      }
      return [];

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
