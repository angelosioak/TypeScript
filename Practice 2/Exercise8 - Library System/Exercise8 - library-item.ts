/*
    Create two TypeScript classes in separate files:
        - In library-item.ts:
            - Create a LibrarySystem class with properties:
                - id (number)
                - title (string)
                - isAvailable (boolean, optional, defaults to true)
            - Add a method toggleAvailability() that flips the isAvailable value.
            - Use type annotations and export the class.


        - In library.ts:
            - Create a Library class with a property items (array of LibraryItem).
            - A method addItem(item: LibraryItem) to add items to the array.
            - Use type annotations and export the class.
        
        - In a file app.ts:
            - Import both classes.
            - Create a library
            - Add two LibraryItem instances (oen with isAvailable set, one without)
            - Call toggleAvailability() on one item.
*/

export class LibraryItem {
    id: number;
    title: string;
    isAvailable?: boolean = true;

    constructor(id: number, title: string, isAvailable: boolean = true) {
        this.id = id;
        this.title = title;
        this.isAvailable = isAvailable; 
    }

    toggleAvailability(): void {
        this.isAvailable = !this.isAvailable;
    }
}