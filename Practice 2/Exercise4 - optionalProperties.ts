/*
    - Create a TypeScript class called Book with the following:
        - title
        - author
        - publicationYear (optional)

    - A constructor that initialises title, author, and optionally publicationYear.
    - A method summary() that returns a string like: 'Title: [title], Author: [author], Year: [publication year or unknown]'.
    - Add type annotations for all properties and parameters.
    - Export Book class from a file named book.ts
*/


class Book {
    title: string;
    author: string;
    publicationYear?: number;

    constructor(title: string, author: string, publicationYear?: number) {
        this.title = title;
        this.author = author;
        this.publicationYear = publicationYear;
    }

    summary(): string {
        const year = this.publicationYear ? this.publicationYear.toString() : 'unknown';
        return `Title: ${this.title}, Author: ${this.author}, Year: ${year}`;
    }
}

