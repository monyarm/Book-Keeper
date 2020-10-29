import books from '../books/';
export default class Library {
    constructor(children) {
        this.path = '/';
        this.selected = true;
        this.children = children;
    }
    static computeLibrary() {
        this._library = new Library(books);
    }
    selectChildren(select) {
        this.selected = select;
        this.children.forEach(x => {
            x.selectChildren(select);
        });
    }
    static selectChildren(select) {
        this._library.selected = select;
        this._library.children.forEach(x => {
            x.selectChildren(select);
        });
    }
}
//# sourceMappingURL=library.js.map