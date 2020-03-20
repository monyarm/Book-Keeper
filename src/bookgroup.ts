import Book from './book';

export default class BookGroup {
    children: Book[] | BookGroup | BookGroup[];
    path: string; 

    constructor(path: string, children: Book[] | BookGroup | BookGroup[]) {
        this.path = path;
        this.children = children;
    }
}