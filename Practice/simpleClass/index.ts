/*
    - Create a class with properties width and heigh (both numbers).
    - Add a method that returns the area (width * height).
    - A method that returns the perimeter (2 * (width + height)).
    - Ensure proper type annotations
*/

class Rectangle {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    getArea(): number {
        return this.width * this.height;
    }

    getPerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

const rect = new Rectangle(5, 3);

console.log(rect.getArea()); // 15
console.log(rect.getPerimeter()); // 16