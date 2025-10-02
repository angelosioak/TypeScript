"use strict";
/*
    - JSDoc works well with primitive types like number, string and boolean.
    - But we are able to define composite types like objects and arrays with JSDoc.
*/
Object.defineProperty(exports, "__esModule", { value: true });
/*
    - TypeScript doesn't throw errors when an object property that hasn't yet been defined shows
    up in our regular JavaScript code.
    - It could have been defined somewhere!

    - With JSDoc type annotation, we can declare which object properties we expect to exist.
    - This is to make sure that TypeScript knows what to expect.
    - Suddenly, the object has a defined type - a contract - and we make sure that we always refer
    to this contract.
*/
/*
* @typedef {Object} StorageItem
* @property {number} weight
*/
/*
* @typedef {Object} ShipStorage
* @property {number} max
* @property {StorageItem[]} items
*/
/*
* @type ShipStorage
*/
const storage = {
    max: undefined,
    items: []
};
function storageUsed() {
    for (let i = 0; i < storage.length(); i++) {
        currentStorage += storage.items[i].weigth;
    }
}
//# sourceMappingURL=CustomTypes.js.map