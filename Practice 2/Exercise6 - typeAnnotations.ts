/*
    Create a TypeScript class Cart:
        - Properties:
            - items (an array of objects with name(string) and price (number)) and couponCode (string, optional)
        - A method getTotal() that calculates the total price of all items in the cart.
        - If a couponCode is provided, apply a 10% discount.
        - Use type annotations for all properties, parameters, and the items array.
        - Export the Cart class. In a separate file main.ts, import the Cart class.
        - Create a cart with some items and test getTotal() with and without a coupon code.
*/

class Cart {
    items: { name: string, price: number}[];
    couponCode?: string;

    constructor(items: { name: string, price: number }[], couponCode?: string) {
        this.items = items;
        this.couponCode = couponCode;
    }

    getTotal(): number {
        let total = this.items.reduce((sum, item) => sum + item.price, 0);
        if (this.couponCode) {
            total = total * 0.9; // Apply 10% discount
        }
        return total;
    }
}