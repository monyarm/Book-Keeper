import * as fs from 'fs';
import * as path from 'path';
import Book from './book';
import BookGroup from './bookgroup';
import convert from './convert';

export function scanFolder(rootDir: string): BookGroup {
    const name = path.basename(rootDir);
    const children: (BookGroup | Book)[] = [];

    for (const entry of fs.readdirSync(rootDir, { withFileTypes: true })) {
        const entryPath = path.join(rootDir, entry.name);
        if (entry.isDirectory()) {
            if (entry.name.startsWith('.')) continue;
            children.push(scanFolder(entryPath));
        } else if (entry.isFile() && entry.name.endsWith('.json')) {
            const data = JSON.parse(fs.readFileSync(entryPath, 'utf-8'));
            if (Array.isArray(data.books)) {
                data.books.forEach((b: any, i: number) => {
                    if (typeof b.title !== 'string' || !Array.isArray(b.category)) {
                        throw new Error(`Invalid book at ${entryPath}[${i}]: requires string "title" and array "category"`);
                    }
                });
                children.push(...convert(data.books));
            }
        }
    }

    return new BookGroup(name, children);
}

export function loadSources(sourcePaths: string[]): BookGroup {
    const allChildren = sourcePaths.flatMap(p => scanFolder(p).children);
    const groups = allChildren.filter((c): c is BookGroup => c instanceof BookGroup);
    const books = allChildren.filter((c): c is Book => c instanceof Book);
    return new BookGroup('root', [...BookGroup.merge(groups), ...books]);
}
