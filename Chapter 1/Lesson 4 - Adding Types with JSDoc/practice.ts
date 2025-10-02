/*
    - Write a function that takes an array of numbers and returns their sum.
    - If the array is undefined or empty, return 0.
    - Add JSDoc to describe the function, its parameter, and return value.
*/

/**  Calculates the sum of an array
 * @param {number[]} array - Array of numbers to sum
 * @returns {number} Sum of the array, or 0 if array is undefined or empty
 * @example
 * sumArray([]) // returns 0
 * sumArray([2, 3, 2, 1, 2]) // returns 10
*/

function sumArray(array) {
    if (!array || array.length === 0) return 0;

    let sum = 0;

    for (const i of array) {
        sum += i;
    }

    return sum;
}




/*
    - Create a function that accepts an array of strings and returns the longest string.
    - If the array is empty or undefined, return an empty string.
*/

/**
 * Find the longest string in the array.
 * @param {string[]} array - Array of strings to search
 * @returns {string} - Longest string in the array or empty string if array is empty or undefined 
 * @example
 * findLongest([]) // returns ''
 * findLongest(['hello', 'world', 'dog', 'elephant']) // returns 'elephant'
 */

function findLongest(array) {
    if (!array || array.length === 0) return '';

    let longest = array[0];

    for (let str of array) {
        if (str.length > longest.length) longest = str;
    }

    return longest;
}



/*
    - Write a function that takes an array of product objects (each with):
        - name (string)
        - price (number)
        - minimum price (number)
    - It returns an array of products with prices greater than or equal to the minimum price.
    - If the array is empty, or undefined, return an empty array.
*/

/**  
 * @param {{ name: string, price: number}[]} products - Array of product objects
 * @param {number} minPrice - Minimum price threshold
 * @returns {{ name: string, price: number}[]} - Array of products meeting the price threshold, or empty array if products is empty or undefined
 * @example
 * filterExpensive([], 10) // returns []
 * filterExpensive([{ name: "Apple", price: 5}, { name: "Banana", price: 15}], 10) // returns [{ name: "Banana", price: 15}]
 */

function filterExpensive(products, minPrice) {
    if (!products || products.length === 0) return [];

    return products.filter(product => product.price >= minPrice);
}