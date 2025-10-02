import { Article } from './exportingAndImportingTypes'

const book: Article = {
    price: 29, 
    vat: 0.2, 
    title: 'Another book by Smashing Books'
};

/*
    - Like all annotations, this is erased when we compile.
    - The same import syntax is used to import other elements (objects, functions) from the:
        - exportingAndImportingTypes file.
    
    If we are only interested in types, we use a slight variation on the regular ECMAScript import:
        - a type import.
*/

import type { Article } from './exportingAndImportingTypes'

const book2: Article = {
    price: 29,
    vat: 0.2,
    title: 'Another book by Smashing Books'
}

/*
    - This is especially helpful when you deal with lots of imports from a particular file both:
        - types
        - other elements
    - and want to separate type information from the rest of the application
*/

