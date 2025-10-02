/*
    - Write a function that takes a person's:
        - name (string)
        - age (number)
        - isStudent (boolean)
    - Return a string in the format: "Name: [name", Age: [age], Student: [isStudent]."
*/

function describePerson(name: string, age: number, isStudent: boolean): string {
    return `Name: ${name}, Age: ${age}, Student: ${isStudent}`;
}

console.log(describePerson('angelos', 18, true));