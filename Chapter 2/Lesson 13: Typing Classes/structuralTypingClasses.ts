/*
    Classes have two parts:
        1. The constructor function: We defined our constructor function to take a boolean isPercentage,
        and a number for the amount we want to shave off. The moment we call new Discount(true, 0.2), 
        we invoke the constructor function.

        2. The second part is a prototype. This is everything around the constructor function: 
        two fields (isPercentage, amount) and a function to apply the discount to an article.

    The prototype defines the shape of the object that is returned by invoking the constructor.
*/
export type Article = {
    title: string,
    price: number,
    vat: number,
    stock?: number,
    description?: string
}

export class Discount {
    isPercentage: boolean
    amount: number

    constructor(isPercentage: boolean, amount: number) {
            this.isPercentage = isPercentage;
            this.amount = amount
        }

    apply(article: Article) {
        if (this.isPercentage) {
            article.price = article.price - (article.price * this.amount)
        } else {
            article.price = article.price - this.amount;
        }
    }
}

let allProductsTwentyBucks: Discount = {
    isPercentage: false,
    amount: 20,
    apply(article) {
        article.price = 20
    }
}

// This is a valid Discount, as the shape is intact. 
// But it changes the semantics of the Discount class tremendously.

// This is also works vice versa. 
// We can define an object type, and create a new Discount object via a constructor:
type DiscountType = {
    isPercentage: boolean,
    amount: number,
    apply(article: Article): void 
}

let disco: DiscountType = new Discount(true, 0.2);