/*
    - Composite Types can be virtually any combination of property names and other types both:
        - Primitive Types 
        - Additional composite types
    - This make the total space of possible types virtually endless.

    - Objects are composite types. 
*/

const book = {
    title: 'Form Design Patterns by Adam Silver',
    price: 32.77,
    vat: 0.19,
    stock: 1000,
    description: 'A practical book on accessibility and forms'
};

// To define a type for this object, we can use the type alias syntax:
type Article = {
    title: string,
    price: number,
    vat: number,
    stock: number,
    description: string
};

/*
    - We just described the shape of the book object we created earlier. 
    - The same principles regarding left-hand typing and right-hand typing apply, as with primitives:
*/
const movie: Article = {
    title: 'Helvetica',
    price: 6.66,
    vat: 0.19,
    stock: 1000,
    description: '90 minutes of gushing about Helvetica'
};

/*
    - We annotate the type of movie, which gets type checked when we assign a value.
    - Not having the correct properties, or missing properties altogether would cause it to break:
*/

// Property 'description' is missing
const movie2: Article = {
    title: 'Helvetica',
    price: 6.66,
    vat: 0.19,
    stock: 1000,
};



/*
    Structural Typing and Excess Property Checks
    ===================================================
    - If we assign a value with properties not in the specified type, TypeScript displays an error
    
    - However, this isn't the case when define the value elsewhere:
*/

// Property 'rating' is not allowed
const movBackup = {
    title: 'Helvetica',
    price: 6.66,
    vat: 0.19,
    stock: 1000,
    description: '90 minutes of gushing about Helvetica',
    rating: 5
};

/*
    - Why does this happen?
    - This means that as long as the defined properties of a type are available in an object,
    the structural contract is fulfilled.

    - When assigning movBackup to movie of type Article, all relevant properties match:
        - title
        - price
        - vat
        - stock
        - description

    - The extraneous - or excess - rating property is swept under the rug. 
    - If we look at the autocompletion features that VS Code gives us as soon as we assigned 
    movBackup to movie, we see that rating is not available anymore:
*/
movie.title

/*
    - We could get values from anywhere, and those values could change over time, but our contract
    still only cares about the right types of a certain set of properties.
    
    - This makes our application still valid and type-safe but allows us to be flexible in other parts
    of our app.
*/

// This is also true if we have two different types with a similar enough structure to fulfull the contract
type ShopItem = {
    title: string,
    price: number,
    vat: number,
    stock: number,
    description: string,
    rating: number
};

const shopitem = {
    title: 'Helvetica',
    price: 6.66,
    vat: 0.19,
    stock: 1000,
    description: '90 minutes of gushing about Helvetica',
    rating: 5
};

const movie: Article = shopitem; // Totally OK!



//But why does a direct value assignment after a type annotation cause an error?
const movie: Article = {
title: 'Helvetica',
price: 6.66,
vat: 0.19,
stock: 1000,
description: '90 minutes of gushing about Helvetica',
rating: 5
}

/*
    - This feature is called an excess property check. 
    - As structures could change across our application, it will point us to things that might be
    deliberate mistakes.

    - Assigning a value right after a type annotation that doesn't completely match is most likely
    an unintentional error.
*/

// Having too few properties in our value causes an error in any case:
const missingProperties = {
    title: 'Helvetica',
    price: 6.66
};

// Boom! This breaks
const anotherMovie: Article = missingProperties;