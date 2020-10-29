export default class Book {
    constructor($title, $category, $translatedTitle, $language, $sources, $description, $author, $selected) {
        this.selected = true;
        this.title = $title;
        if ($translatedTitle != undefined)
            this.translatedTitle = $translatedTitle;
        if ($language != undefined)
            this.language = $language;
        this.category = $category;
        if ($sources != undefined)
            this.sources = $sources;
        if ($description != undefined)
            this.description = $description;
        if ($author != undefined)
            this.author = $author;
        if ($selected != undefined)
            this.selected = $selected;
    }
    selectChildren(select) {
        this.selected = select;
    }
}
//# sourceMappingURL=book.js.map