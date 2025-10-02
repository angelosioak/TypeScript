/*
    - Create an interface with properties:
        - make (string)
        - model (string)
        - year (number)
    - Write a function that takes an object and returns a string describing the car.
    - Handing cases where year might be undefined.
*/

interface Car {
    make: string;
    model: string;
    year: number | undefined; // Allow undefined for year
}

function displayCarInfo(car: Car): string {
    if (car.year === undefined) return `The year of the car is not found`

    return `The car is a ${car.make} ${car.model} made in ${car.year}`;
}

const car: Car = {
    make: 'Mercedes',
    model: 'A250',
    year: 2019
};

console.log(displayCarInfo(car));