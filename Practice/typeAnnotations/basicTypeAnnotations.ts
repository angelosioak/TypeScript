/*
    - Create a function that takes parameters:
        - name (string)
        - age (number)
    - Returns a greeting message as a string.
    - Ensure proper type annotations for parameters and return type.
*/

function greetUser(name: string, age: number) {
    return `Hello ${name}, you are ${age} years old`;
}
    

console.log(greetUser('Angelos', 18));