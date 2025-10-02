/*
    - When using the isDevelopment constant, TypeScript can't figure out what to expect.
    - Is it a Boolean, a string, a composite object, function, or only undefined?
    - At the moment that it's Boolean.

    - To make global known and defined, we can use ambient type declarations.
    - These types are encompassing, existing and present on all sides.
    - We need another .d.ts file to put somewhere near our types, where we can define the function
    heads, global objects, and variables that we need throughout our program.
*/

declare const isDevelopment: boolean;