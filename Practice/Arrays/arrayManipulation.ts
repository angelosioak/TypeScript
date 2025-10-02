/*
    - Write a function that accepts an array of numbers and returns a new array containing only
    even numbers.
*/

function filterEvens(numbers: number[]): number[] {
    if (!Array.isArray(numbers)) return [];

    return numbers.filter(num => num % 2 === 0);
}

console.log(filterEvens([2, 2, 1, 2, 1, 6]));