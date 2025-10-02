import { LibraryItem } from './Exercise8 - library-item';

export class Library {
    items: LibraryItem[] = [];

    addItem(item: LibraryItem): void {
        this.items.push(item);
    }
}