/*
    - To make type declarations to work, we have to put them into a TypeScript file.
    - TypeScript supports declaration files that end with .d.ts. 
    - Here, you can add all your custom types, but no extra code.

    - We take the ShipStorage and StorageItem types and put it into a types.d.ts file that's 
    somewhere next to your main JavaScript file.
*/

/**
 * @typedef { import('./types.d').ShipStorage} ShipStorage
 */

/**
 * @typedef { import('./types.d').StorageItem} StorageItem
 */


export type StorageItem = {
    weight: number
};

export type ShipStorage = {
    max: number
    items: StorageItem[]
};



/*

*/