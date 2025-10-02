"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addVAT(price, vat) {
    return price * (1 + vat);
}
/*
    - TypeScript knows we are dealing with numbers (the multiplication operator and the numeral 1 suggest that).
*/
//  - vatPrice is of type 'number'
const vatPrice = addVAT(30, 0.2);
//  - However, we are still allowed to pass anything but numbers as function parameters:
const vatPriceWrong = addVAT('this is so', 'wrong');
/*
    - We want to make sure we don't get values we don't want to deal with.
    - One way is to add a default value for vat:
*/
function addVAT2(price, vat = 0.2) {
    return price * (1 + vat);
}
//  - Now TypeScript can infer again:
const vatPrice = addVAT2(30, 0.2); // OK!
const vatPriceWithDefault = addVAT2(30); // OK!
/*
    - Not OK.
    - We expect a number for vat because of the default value!
    - This piece causes errors
*/
const vatPriceErrors = addVAT2(30, 'a string');
// This, however, is not quite reasonable, but OK
const vatPriceAlsoWrong = addVAT2('hi', 'friends!');
/*
    - TypeScript sets any as the default type for any value or parameter that is not explicitly typed or can't be inferred.
    - One way is through JSDoc comments.
    - Now we can do that directly in our function head, where it happens:
*/
function addVAT3(price, vat = 0.2) {
    return price * (1 + vat);
}
// With that, TypeScript will add a red squiggly lines every time, we pass a parameter that doesn't work
const boom = addVAT3('this is not a number');
/*
    - Here we are even more explicity.
    - We declare the types of both parameters, and even a return type (the last number before the curly brackets).
*/
function addVAT4(price, vat = 0.2) {
    return price * (1 + vat);
}
//# sourceMappingURL=firstTypeAnnotations.js.map