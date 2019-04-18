export default class Book {
    public title!: string;
    public translatedTitle?: string;
    public language?: string;
    public category!: string[];
    public sources?: string[];
    public description?: string;
    public author?: string;
}
