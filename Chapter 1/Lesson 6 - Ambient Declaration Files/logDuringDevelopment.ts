/*
    - We have a function called addItem that adds items to storage.
    - To help during development, we want to show (log) the current number of items in storage on the console.
    
    - To control this, we use a isDevelopment flag (a true/false switch).
    - If isDevelopment is true, we log the storage amount. 
    - If it's false, we don't.
*/

// In the development HTML file, we add:
const isDevelopment = true; // This turns on the logging

// In the production HTML file, we either leave out this line or set:
const isDevelopment = false; // This turns off the logging


/**
 * @param {StorageItem} item
 */

function add(item) {
    if (storage.max - item.weight >= storageUsed()) {
        storage.items.push(item);
        currentStorage += item.weight;
    }

    if (isDevelopment) {
        const itemCount = storage.items.length
        console.log(`${itemCount} items`)
        console.log(`${currentStorage} kg total`)
    }
}