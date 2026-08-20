import Book from './book';

export default function convert(input: any[]): Book[] {
    return input.map(
        (x) => new Book(x.title, x.category, x.translatedTitle, x.language, x.sources, x.description, x.author, x.selected)
    );
}
