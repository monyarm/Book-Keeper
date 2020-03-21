import Book from './book';

export default class BookGroup {
    children: Book[] | BookGroup | BookGroup[];
    path: string; 
    public selected = true;

    constructor(path: string, children: Book[] | BookGroup | BookGroup[]) {
        this.path = path;
        this.children = children;
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