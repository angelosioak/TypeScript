// JavaScript features classes an an alternate syntatic form for the constructor function
// and prototype pattern.

type Article = {
    title: string,
    price: number,
    vat: number,
    stock?: number,
    description?: string
}

class Discount {
    isPercentage
    amount

    constructor(isPercentage, amount) {
        this.isPercentage = isPercentage;
        this.amount = amount
    }

    apply(article) {
        if (this.isPercentage) {
            article.price = article.price - (article.price * this.amount)
        } else {
            article.price = article.price - this.amount;
        }
    }
}

// A discount that shaves off 10 EUR
const discount = new Discount(false, 10)
discount.apply({
    price: 19,
    vat: 0.2,
    title: 'Form Design Patters'
})

// With a few a little extra type annotations, we can have proper tooling.
// We can also make sure that we construct correct objects:
class Discount2 {
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

// The moment we create a class, it's available in the type space as well:
let discount2: Discount = new Discount(true, 0.2);