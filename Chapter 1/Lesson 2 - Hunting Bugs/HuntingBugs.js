"use strict";
/*
    Readonly Is Not Assignable

    - Property descriptors don't know of a property called readonly; it's called writable.
    - Instead of a readonly value of true, we need a writable value of false.
    - When we correct our mistake, TypeScript will also tell us that val does not exist - it's value.
    
    - This is also an example of a type check because there will be no more wrong spellings or mixed up terms.
*/
Object.defineProperty(exports, "__esModule", { value: true });
// The correct like looks like:
Object.defineProperty(Storage, 'max', { writable: false, value: 5000 });
/*
    Type Inference

    - TypeScript uses a concept called type inference.
    - The moment we assign a value to a variable, TypeScript tries infer the type from the assignment.
    - currentStorage = 0, for example, tells TypeScript that currentStorage is expected to be a number.
    - From that point on, we can only assign numbers or do number-based things (mathematical operations, for instance).

    - The moment we assign undefined, currentStorage can be anything until it gets a distinct type.
    - To solve our problem, we change 'undefined' to undefined:
*/
let currentStorage = undefined;
function storageUsed() {
    // Suddenly this evaluates to false with the first call
    if (currentStorage)
        return currentStorage;
    // From now on, currentStorage is a number
    currentStorage = 0;
    // and storageUsed() returns a number
    return currentStorage;
}
//# sourceMappingURL=HuntingBugs.js.map