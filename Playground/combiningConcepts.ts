interface Employee {
    getDetails(): string;
}

class Person {
    protected name: string;
    protected age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Manager extends Person implements Employee  {
    private department: string;

    constructor(name: string, age: number, department: string) {
        super(name, age);
        this.department = department;
    }

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}, Department: ${this.department}.`;
    }
}

const person = new Manager('Angelos', 18, 'IT');
console.log(person.getDetails());