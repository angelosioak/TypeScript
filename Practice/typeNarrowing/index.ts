/*
    - Write a function that accepts a parameter that can be a string, number, or boolean.
    - Baased on the type, return:
        - For a string: its length
        - For a number: its square
        - For a boolean: the opposite value (e.g., true becomes false)
*/

function processInput(input: string | number | boolean): number | boolean {
    if (typeof input === "string") return input.length;
    else if (typeof input === "number") return input * input;
    else return !input;
}

