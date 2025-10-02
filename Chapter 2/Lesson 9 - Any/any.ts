/*
    - any is the default type if we neither specify a type nor let TypeScript infer one.
*/

let deliveryAddress // deliveryAddress is any

// The moment we assign a value, the type gets more specific:
let deliveryAddress2 = '421 Smashing Hill, 90210';

// Unless we explicitly specify the type through an anootation:
let deliveryAddress3: any = '421 Smashing Hill, 90210';

// If we assign an incompatible value to a variable of a certian type, TypeScript will throw 
// squiggly lines at us:
let deliveryAddress4: string = 2;



/*
    Left-Hand Typing vs Right-Hand Typing
    ==========================================
    - Left-hand typing is when we use annotations using the colon syntax.
    - All values have to follow and have to be compatible.

    - Right-hand typing is leaving out the type annotations and working with first with type
    inference which happens to the right of the equals sign, be it through a value assignment.
*/

// Type of deliverAddresses is string[]
let deliveryAddresses = [
    '421 Smashing Hill, 90210',
    '221b Paw-ker Street',
    '4347 Whiskers-is Lane',
]

// It's an array of strings, so the type is string[].
let deliveryAddresses2: string[] = [];
// OK
deliveryAddresses2.push('421 Smashing Hill, 90210');
// Not OK! 2 is not a string
deliveryAddresses.push(2000);




/*
    The Problem with any
    ===================================
    - You will rarely need to declare something as any. 
    - You usually want to have more information about your types rather than less.
*/

const myName: any = 'Fritz the Cat';
myName.firstLetter.makeCapitals();

/*
    - properties like firstLetter and functions like makeCapitals don't exist in regular JavaScriot types.
    - But any doesn't know that, and doesn't care. 
*/


/*
    - Be certain that you want to use any explicitly as a type annotation. 
    - And if you want to enter through the backdoor to JavaScript flexibility.
    - Be very intentional through a type cast:
*/

// theObject is an object we don't have a type for,
// but we know exactly what
// we are doing!
(theObject as any).firstLetter.toUppercase();


/*
    - deliveryAddress is of type any, because we
    - didn't annotate a specific type. Implicit anys are
    - hard to track down later on, that's why it's good
    - to have TypeScript scream at us
*/
function printAddress(deliveryAddress) {
    console.log(deliveryAddress);
}