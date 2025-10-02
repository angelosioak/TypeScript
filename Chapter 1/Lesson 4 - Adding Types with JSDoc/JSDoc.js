"use strict";
/*
    - JSDoc is a way to annotate our code using comments.
    - We describe function signatures, object properties, and much more by using certain conventions:
*/
Object.defineProperty(exports, "__esModule", { value: true });
/*
* Adding two numbers. This annotation tells TypeScript
* which types to expect. Two parameters (params) of type number and return type of number
*
* @param {number} numberOne
* @param {number} numberTwo
* @returns {number}
*/
function addNumbers(numberOne, numberTwo) {
    return numberOne + numberTwo;
}
// TypeScript throws an error here, because the JSDoc comments expect two numbers:
// not a number and a string
addNumbers(3, '2');
// TypeScript throws an error here, because addNumbers returns a number, and toUpperCase() is not
// available in number
addNumbers(3, 2).toUpperCase();
//# sourceMappingURL=JSDoc.js.map