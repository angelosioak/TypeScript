/*
    Historically, classes and interfaces form a strong relationship, with interfaces describing
    the blueprint of a class:

    - Structural information that has to be implemented by the respective class.
    - This is where the implements keyword is introduced.
*/

import { Discount } from '../Lesson 13: Typing Classes/./structuralTypingClasses'

/*
    - A team working on different parts of the same online shop.
    - They write their own code but use the same data structures. And they prefer interfaces.

    - An Article type in our codebase becomes a shopItem inteface in their codebase.
*/

// Our Article type
type Article = {
    title: string,
    price: number,
    vat: number,
    stock?: number,
    description?: string
}

// Our friend's ShopItem
interface ShopItem {
    title: string;
    price: number;
    vat: number;
    stock?: number;
    description?: string;
}

// Both Article and ShopItem are compatible, because their shape - their structure - is the same:
const discount = new Discount(true, 0.2);
const shopItem: ShopItem = {
    title: 'Inclusive components',
    price: 30,
    vat: 0.2
}

// Discount.apply is typed to take 'Article'
// but also takes a 'ShopItem'
discount.apply(shopItem);

// If you use classes, both interfaces and types can be implemented:
// Implementing Interfaces
class DVD implements ShopItem {
    title: string;
    price: number;
    vat: number;

    constructor(title: string) {
        this.title = title;
        this.price = 9.99;
        this.vat = 0.2;
    }
}

// Implementing Types
class Book implements Article {
    title: string;
    price: number;
    vat: number;

    constructor(title: string) {
        this.title = title;
        this.price = 9.99;
        this.vat = 0.2;
    }
}

// With that, we make sure that the class we're creating adheres to the shape we want.
// If we miss any properties that are required, TypeScript alerts us:

// Nope, we missed the proeprty 'title'!
class Book implements Article {
    price: number;
    vat: number;

    constructor() {
        this.price = 39;
        this.vat = 0.2;
    }
}

// The shape of objects of types Book and DVD are the same as Article or ShopItem, so our Discount
// class works on the as well:
let book = new Book('Art Direction on the Web');
discount.apply(book);

let dvd = new DVD('Contagion');
discount.apply(dvd);