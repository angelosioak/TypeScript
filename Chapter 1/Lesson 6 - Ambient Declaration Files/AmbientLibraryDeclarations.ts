/*
    - Ambient declarations are not only useful for global flags but also if you have functions
    and objects that you expect to exist.
    - One example would be jQuery.

    - Say we want to update the number of items on a web display every time we add a new item
    to our ship's storage. 
    - A little jQuery snippet in addItem would do the trick:
*/

/**
 * @param {storageItem} item
 */

function add(item) {
    if (Storage.max - item.weight >= storageUsed()) {
        storage.items.push(item);
        currentStorage += item.weight;
    }
    
    $(`#numberOfItems`).text(storage.items.length);
}

/*
    - We again get the same error: Typescript can't find $, the jQuery shortcut.
    - Adding jQuery is very common, so TypeScript already hints at installing jQuery's types.


*/

