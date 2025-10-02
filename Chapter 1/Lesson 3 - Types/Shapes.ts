/*
    - Shapes tells us more about structural features of a type: 
    - types and names of properties of an object, types and names of parameters of a function, 
    types and indexes of elements in an array.
*/

const person = {
    firstname: 'Angelos',
    lastname: 'Ioakeimidis',
    age: 38
};

/*
    person is of type object, but follows the shape:
        - firstname is a string
        - lastname is a string
        - age is a number

    - We can define this shape as a custom type:
*/

type Person = {
    firstname: string,
    lastname: string,
    age: number
};

