// We can also use our custom defined types as parameters in functions:

type Article = {
    title: string,
    price: number,
    vat: number,
    stock: number,
    description: string
};

function createArticleElement(article: Article): string {
    const title = article.title;
    const price = article.price;
    
    return `<h2>Buy ${title} for ${price}</h2>`;
}


/*
    - We can pass parameters with no explicit type annotation. 
    - Since the structural contract is fulfilled, TypeScript will be happy:
*/

const shopitem = {
    title: 'Helvetica',
    price: 6.66,
    vat: 0.19,
    stock: 1000,
    description: '90 minutes of gushing about Helvetica',
    rating: 5
};

createArticleElement(shopitem); // Totally OK!


/*
    - This also means we can be very intentional with the type we want for the createArticleElement function,
    and maybe do an inline object type with only the properties we expect:
*/

function createArticleElement2(article: { title: string, price: number, vat: number}): string {
    const title = article.title;
    const price = article.price;

    return `<h2>Buy ${title} for ${price}</2>`;
};


// Passing Elements of type Article still would work:
const movie: Article = {
    title: 'Helvetica',
    price: 6.66,
    vat: 0.19,
    stock: 1000,
    description: '90 minutes of gushing about Helvetica'
}

createArticleElement(movie)