import { LibraryItem } from './Exercise8 - library-item';
import { Library } from './library';

const library = new Library();

const item1 = new LibraryItem(1, 'Book 1', false);
const item2 = new LibraryItem(2, 'Book 2');

library.addItem(item1);
library.addItem(item2);

item1.toggleAvailability();