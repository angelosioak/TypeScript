/*
    Create a base class Vehicle with:
        - A property speed (number).
        - A method that logs "Vehicle is moving at [speed] km/h".
    
    Create a derived class Car that:
        - Extends the base class
        - Adds a property brand (string).
        - Has a method that logs "[brand] is honking!".
    
    Instantiate a Car and call both move and honk
*/

class Vehicle {
    speed: number;

    constructor(speed: number) {
        this.speed = speed;
    }

    move(): void {
        console.log(`Vehicle is moving at ${this.speed} km/h`);
    }
}

class Car extends Vehicle {
    brand: string;

    constructor(brand: string, speed: number) {
        super(speed);
        this.brand = brand;
    }

    honk(): void {
        console.log(`${this.brand} is honking!`)
    }
}

const vehicle = new Vehicle(95);
const car = new Car('Mercedes', 100);

vehicle.move();
car.move();
car.honk();