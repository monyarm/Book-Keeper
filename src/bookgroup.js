import Book from './book';
export default class BookGroup {
    constructor(path, children) {
        this.selected = true;
        this.path = path;
        this.children = children;
    }
    selectChildren(select) {
        this.selected = select;
        if (this.children instanceof BookGroup) {
            this.children.selectChildren(select);
        }
        else if (this.children instanceof Array) {
            this.children.forEach((x) => {
                if (x instanceof BookGroup) {
                    x.selectChildren(select);
                }
                else if (x instanceof Book) {
                    x.selected = select;
                }
            });
        }
    }
}
//# sourceMappingURL=bookgroup.js.map