/*
    Create class with:
        - Properties: title (string), author (string), pages (number).
        - A constructor to initialise these properties.
        - A method that returns a string like: 'Title: [title], Author: [author], Pages: [pages]'.
*/

class Book {
    title: string;
    author: string;
    pages: number;

    constructor(title: string, author: string, pages: number) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    getSummary(): string {
        return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`;
    }
}

const book = new Book('Hello World', 'Angelos Ioakeimidis', 100);
console.log(book.getSummary());