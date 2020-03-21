import Book from "./book"

declare module '*.json' {
    const value: { 
        [books: string]: Book[]
    }
    export default value
}