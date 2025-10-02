/*
    - Create a function that takes parameters:
        - name (string)
        - age (number)
    - Returns a greeting message as a string.
    - Ensure proper type annotations for parameters and return type.
*/
function greetUser(name, age) {
    return "Hello ".concat(name, ", you are ").concat(age, " years old");
}
console.log(greetUser('Angelos', 18));

