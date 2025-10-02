// One main feature of classes is that they are extensible.
// You can take an existing class and extend it, overriding and adding features.


// This class always gives 20%, but only if the price is not higher than 40 EUR.

import type { Article } from './structuralTypingClasses'
import  { Discount } from './structuralTypingClasses'

class TwnetyPercentDiscount extends Discount {
    // No special constructor
    constructor() {
        // But we call the super constructor of Discount
        super(true, 0.2);
    }

    apply(article: Article) {
        if (article.price <= 40) {
            super.apply(article);
        }
    }
}

// In this special case, TwentyPercentDiscount is of the same shape as Discount.
// Which means that their type declaration is interchangeable:
let disco1: Discount = new TwnetyPercentDiscount() // OK!
let disco2: TwnetyPercentDiscount = new Discount(true, 0.3) // OK! Semantics changed!

// We can change the shape. Let's create a validation feature to TwentyPercentageDiscount:
class TwentyPercentageDiscount extends Discount {
    constructor() {
        super(true, 0.2)
    }

    apply(article: Article) {
        if (this.isValidForDiscount(article)) super.apply(article);
    }

    isValidForDiscount(article: Article) {
        return article.price <= 40;
    }
}