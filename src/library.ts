import BookGroup from './bookgroup';
import books from '../books/';

export default class Library {
    children: BookGroup[];

  static getLibrary(): Library {
      return new Library(books);
  }

  constructor(children: BookGroup[]) {
      this.children = children;
  }
}
