export default class Book {
    public title!: string;
    public translatedTitle?: string;
    public language: string;
    public category!: string[];
    public sources?: string[];
    public description?: string;
    public author?: string;
    public selected: boolean = true;

	constructor($title: string, $category: string[], $translatedTitle?: string, $language?: string, $sources?: string[], $description?: string, $author?: string, $selected?: boolean ) {
		this.title = $title;
		if ($translatedTitle != undefined) this.translatedTitle = $translatedTitle;
		if ($language != undefined) this.language = $language;
		this.category = $category;
		if ($sources != undefined)this.sources = $sources;
		if ($description != undefined)this.description = $description;
		if ($author != undefined)this.author = $author;
		if ($selected != undefined)this.selected = $selected;
	}
    

    selectChildren?(select: boolean) {
        this.selected = select;
    }
}
