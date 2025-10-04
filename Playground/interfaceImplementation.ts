interface Drawable {
    draw(): string;
}

class Rectangle implements Drawable {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    draw(): string {
        return `Drawing rectangle with width ${this.width} and height ${this.height}.`;
    }
}

const rectangle = new Rectangle(50, 50);
console.log(rectangle.draw());