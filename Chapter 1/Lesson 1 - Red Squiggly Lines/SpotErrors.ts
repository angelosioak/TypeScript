// Code With Errors

const storage = {
    max: undefined,
    items: []
}

Object.defineProperty(storage, 'max', { readonly: true, val: 5000});

let currentStorage = 'undefined';

function storageUsed() {
    if (currentStorage) return currentStorage;

    currentStorage = 0;

    for (const i = 0; i < storage.length(); i++) {
        currentStorage += storage.items[i].weigth;
    }

    return currentStorage;
}

function add(item) {
    if (storage.max - item.weight >= storageUsed) {
        storage.items.add(item);
        currentStorage += iten.weight;
    }
}

/*
    Incorrect Object.defineProperty Syntax:
    - The Object.defineProperty call uses readonly: true and val: 5000, which are incorrect.
    - The correct properties are writable: false (to make it read-only) and value: 5000 (to set the value).
    Fix: Object.defineProperty(storage, 'max', { writable: false, value: 5000 })

    Undefined currentStorage String:
    - currentStorage is initialised as the string 'undefined', which is likely a mistake. 
    - It should be the value undefined or a number (e.g., 0) since it's used for calculations.

    Incorrect storage.length() Method:
    - storage.length() is not a valid method.
    - The items array inside storage has a length property, not a method.

    Typo in weigth:
    - In the storageUsed function, storage.items[i].weigth has a typo.
    - It should be weigth

    Incoreect Loop Syntax:
    - The for loop syntax for(const i = 0; i < storage.items.length; i++) is correct, but
    - const i means i cannot be incremented (since const variables cannot be reassigned. Use let instead)

    Incorrect storage.items.add Method:
    - In the add function, storage.items.add(item) is incorrect because arrays use push to add elements, not add.

    Typo in iten.weigth:
    - In the add function, iten.weight is a typo.
    - It should be item.weigth

    Logic Error in storageUsed Comparison:
    - The if (currentStorage) check in storageUsed may not work as intended if currentStorage is 0 (since 0 is falsy).
    - This could cause the function to reset currentStorage unnecessarily.

    Potential Issue with storageUsed Call in add:
    - In the add function, storageUsed is called without parantheses (storageUsed instad of storageUsed()).
    - This references the function itself, not its return value.
*/



// Corrected Code

const storage = {
    max: undefined,
    items: []
};

Object.defineProperty(storage, 'max', { writable: false, value: 5000});

let currentStorage = undefined;

function storageUsed() {
    if (currentStorage !== undefined) return currentStorage;

    currentStorage = 0;

    for (let i = 0; i < storage.items.length; i++) {
        currentStorage += storage.items[i].weight;
    }

    return currentStorage;
}

function add(item) {
    if (storage.max - item.weight >= storageUsed()) {
        storage.items.push(item);
        currentStorage += item.weigth;
    }
}