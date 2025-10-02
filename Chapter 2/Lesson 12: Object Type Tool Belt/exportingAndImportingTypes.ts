/*
    - Now that our Article type is so flexible, we want to share it with other parts of our application.
    - When working with JSDoc comments, we imported types on occasion. 
*/

// We can do the same thing when writing pure TypeScript.
// First, we make the type available by exporting it:
export type Article = {
    title: string,
    price: number,
    vat: number,
    stock?: number,
    description?: string
}

// Then, we import Article using the same function we used before. 
// But this time, we import types via regular ECMAScript imports.
