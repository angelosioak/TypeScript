// TypeScript classes can do a lot more, even modifying access to certain properties:
class Article {
    public title: string;
    private price: number;

    constructor(title: string, price: number) {
        this.title = title;
        this.price = price;
    }
}

const article = new Article('Smashing Book 6', 39);

// TypeScript's private is enforced only during compilation. In the compiled JavaScript, private
// properties are still accessible because JavaScript doesn't enforce this.

// JavaScript has its own private modifier using # (e.g., #price) which is a true private property
// enforced at runtime.

class Article {
    #price: number; // True JavaScript private field
    constructor(price: number) {
        this.#price = price;
    }
}

/*
    Syntactic Sugar:

    TypeScript offers shortcuts to reduce boilerplate code. You can declare and assign properties
    directly in the constructor using access modifiers:
*/
class Article {
    constructor(private price: number) {
        // Automatically creates and assigns this.price
    }
}