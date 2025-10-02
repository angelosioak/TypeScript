/*
    - any is useful if you don't know which types to expect. 

    - The following function selects a delivery address, either one that has been passed as a 
    parameter (of type string), or one from deliveryAddress string array.
*/
let deliveryAddresses = ["123 Main St", "456 Oak Ave"];

function selectDeliveryAddress(addressOrIndex: any) {
    if (typeof addressOrIndex === 'number') return deliveryAddresses[addressOrIndex]

    return addressOrIndex;
}


/*
    Type Narrowing
    =========================
    - Since JavaScript has numbers, we can do several runtime type checks to make sure that 
    a certian type is given. 
    
    - This has nothing to do with TypeScript, but does with JavaScript.
    - TypeScript, however, can make use of it. 
    - From this point on, TypeScript knows that addressOrIndex is of type number.
    - So from this point on, we can access all the features of number.
*/

// We can format the number to a fixed-point representation:
if (typeof addressOrIndex === 'number') {
    // OK, because addressOrIndex is a number
    console.log(addressOrIndex.toFixed(2));
}

// We can do all number operations on addressOrIndex:
if (typeof addressOrIndex === 'number') {
    // OK, because addressOrIndex is a number
    console.log(addressOrIndex * 2 + 3);
}



if (typeof addressOrIndex === 'number' && addressOrIndex < deliveryAddresses.length) {
    return deliveryAddresses[addressOrIndex]
}

/*
    - We can see a couple of TypeScipt concepts in these lines of code:
        1. Type guards: Type guards perform run-time checks on types, just like the typeof operator
                        makes sure we're dealing with a number at this point.
        
        2. Control flow analysis: Type guards are used to trigger control flow analysis in TypeScript.
                                  TypeScript can analyse the flow of your program to provide the right
                                  types of the next steps.
        
        3. Narrowing down: From the all-encompassing any type, we narrow down to the type number.
*/




/*
    - any in this position is very fragile.
    - We expect addressOrIndex to be either a string or number, but any allows us to pass 
    anything and return eveything, even if we explicitly type the return value:
*/

function selectDeliveryAddress2(addressOrIndex: any): string {
    if (typeof addressOrIndex === 'number' && addressOrIndex < deliveryAddresses[addressOrIndex]) {
        return deliveryAddresses[addressOrIndex]; 
    }
// Totally OK with any
    return addressOrIndex;
}

// Oh no! This is totally OK in TypeScript, but 
// myFavouriteAddress is now string, even though we just
// return true? This is going to blow up in runtime!
const myFavouriteAddress = selectDeliveryAddress(true);