"use strict";
exports.__esModule = true;
var Book = /** @class */ (function () {
    function Book($title, $category, $translatedTitle, $language, $sources, $description, $author, $selected) {
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
    Book.prototype.selectChildren = function (select) {
        this.selected = select;
    };
    return Book;
}());
exports["default"] = Book;
