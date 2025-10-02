/*
    - Sometimes we have to work with data structures that are deeply nested.
    - Have tons of properties. 
    - Look at the object that defines a default order in our online shop:
*/

const defaultOrder = {
    articles: [ { price: 1200.50, vat: 0.2, title: 'Macbook Air Refurbished - 2013' },
                { price: 9, vat: 0, title: 'I feel smashing subscription' }
    ],
    customer: { 
        name: 'Fritz Furball', 
        address: { 
            city: 'Smashing Hill', 
            zip: '90210', 
            street: 'Whisker-ia Lane', 
            number: '1337'
        },
        dateOfBirth: new Date(2006, 9, 1)
    }
}

// This object is a bit complex! We could define the type in one sitting:
type Order = {
    articles: {
        price: number, 
        vat: number,
        title: number
    }[],
    customer: {
        name: string,
        address: {
            city: string,
            zip: string,
            street: string,
            number: string
        },
    dateOfBirth: Date
    }
}

// Or we could create lots of smaller types:
type ArticleStub = {
    price: number,
    vat: number,
    title: string
};

type Address = {
    city: string,
    zip: string,
    street: string,
    number: string
};

type Customer = {
    name: string,
    address: Address,
    dateOfBirth: Date
};

type Order2 = {
    articles: ArticleStub[],
    customer: Customer
};

/*
    - In either case, we end up either maintaining a lot of types or creating unwieldy types.
    - All we wanted was to get a quick type for a data structure in order to have better auto-completion
    and type safety in our methods.

    - With the typeof operator, we were able to do type checking during runtime.
*/

type Order3 = typeof defaultOrder;

// This gives a type we can use elsewhere in our code:
// Checks if all our orders have articles
function checkOrders(orders: Order3[]) {
    let valid = true;
    
    for (let order of orders) {
        valid = valid && order.articles.length > 0;
    }

    return valid;
}

// The moment you update your defaultOrder object, the type Order gets updated as well!