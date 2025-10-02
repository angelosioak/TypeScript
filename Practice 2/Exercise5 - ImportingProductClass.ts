/*
    - Create a TypeScript file product.ts with a class Product that has:
        - Properties: 
            - name
            - price
            - discount

    -A method getFinalPrice() that returns the price after applying the discount (if prodvided
    otherwise, return the original price).
    - Use type annotations for all properties and parameters.
    - Export the Product class. 
    - In a separate file store.ts, import the Product class, create two instances (one with a discount,
    one without).
    - Call getFinalPrice() on both.
*/

class Product {
    name: string;
    price: number;
    discount?: number;

    constructor(name: string, price: number, discount?: number) {
        this.name = name;
        this.price = price;
        this.discount = discount;
    }

    getFinalPrice(): number {
        const priceAfterDiscount = this.discount ? this.price * (1 - this.discount) : this.price;
        return priceAfterDiscount;
    }
}