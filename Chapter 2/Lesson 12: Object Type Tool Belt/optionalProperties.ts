/*
    - Going back to the previous example, we used a form that misses two properties we originally defined:
        - stock
        - description

    Should we create two types Article and ArticleStub?
        - Set dummy values for properties that are not necessary?
        - Set the properties deliberately to undefined?

    Any of these sound fishy and not very JavaScript like.
*/

// The best way would be to adapt the original Article type and set two optional properties:
type Article = {
    title: string,
    price: number,
    vat: number,
    stock?: number,
    description?: string
}

/*
    - A question mark after a property's name declares that property optional.
    - This means they can be available, but they could also be missing.
*/

// We have to check if they are available:
function isArticleInStock(article: Article) {
    // this check is necessary to make sure 
    // the optional property exists
    if (article.stock) return article.stock > 0;

    return false;
}

// Our type becomes much more flexible and can be used in many more scenarios.
