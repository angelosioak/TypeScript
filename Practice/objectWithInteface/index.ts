/*
    - Define an interface with properties:
        - firstName (string)
        - lastName (string)
        - birthYear (number)
    - Create a function that takes an object and returns the full name as a string.
*/

interface Person {
    firstName: string;
    lastName: string;
    birthYear: number;
};

function getFullName(person: Person): string {
    return `${person.firstName} ${person.lastName}`
}

const person: Person = {
    firstName: 'Angelos',
    lastName: 'Ioakeimidis',
    birthYear: 2006
};

console.log(getFullName(person));