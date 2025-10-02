/*
    - TypeScript has a partner to any: unknown.
    - unknown is also compatible with every type in TypeScript, so it's also a top type.

    - But it's very inhibiting as well. 
    - Where we are allowed to do everything with any, we aren't allowed to do anything with 
    unknown.

    - unknown should make you cautius: we have to provide a proper control flow to ensure type safety.
    - Let's see what happens when we change any to unknown:
*/
let deliveryAddresses = ["123 Main St", "456 Oak Ave"];

function selectDeliveryAddress(addressOrIndex: unknown): string {
    if (typeof addressOrIndex === 'number' && addressOrIndex < deliveryAddresses.length) { 
        return deliveryAddresses[addressOrIndex];
    }

    return addressOrIndex;
}

/*
    - Boom! This is exactly what we want: "Type number is not assignable to type string."
    - We must do type checks and trigger control flow analysis; otherwise, TypeScript will throw 
    an error!
*/

function selectDeliveryAddress(addressOrIndex: unknown): string {
    if (typeof addressOrIndex === 'number' && addressOrIndex < deliveryAddresses.length) { 
        return deliveryAddresses[addressOrIndex];
    } else {
        if (typeof addressOrIndex === 'string') return addressOrIndex;
    }

    return '';
}

/*
    - The control flow is complete. 
    - If we get a value of one of the two possible types, number or string, we know what to do:
    - either return the entry from the list of delivery addresses, or return the delivery address
    we just entered. 
    
    - Should we pass anything else, we return an empty string!
*/