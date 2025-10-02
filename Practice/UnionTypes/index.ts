/*
    - Write a function that accepts an ID which can be either a string or a number.
    - Return a message like "ID is [id]" with the ID value.
    - Use union type to enforce this constraint.
*/

function showID(id: string | number): string {
    return `ID is ${id}`;
}

console.log(showID(123));