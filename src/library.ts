import BookGroup from './bookgroup';
import books from '../books/';

export default class Library {
    children: BookGroup[];
    path = '/';
    public selected: boolean = true;

    static _library: Library;

    static computeLibrary(){
        this._library =  new Library(books);
    }

    selectChildren(select: boolean) {
        this.selected = select;
        this.children.forEach(x => {
            x.selectChildren(select);
        })
    }

    static selectChildren(select: boolean) {
        this._library.selected = select;
        this._library.children.forEach(x => {
            x.selectChildren(select);
        })
    }

  constructor(children: BookGroup[]) {
      this.children = children;
  }
}
