/*
    - Create a function that takes an array of ages (numbers).
    - Return a new array containing only ages 18 or older.
*/

function filterAdults(numbers: number[]): number[] {
    return numbers.filter(num => (num >= 18));
}

console.log(filterAdults([12, 12, 15, 18, 19]));