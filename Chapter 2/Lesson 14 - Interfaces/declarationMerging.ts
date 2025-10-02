/*
    - When we see advanced techniques with object types.
    - You can substitute interfaces for object types at any time.
    
    - What are the differences between them? Declaration Merging

    Declaration merging for interfaces means we can declare an interface at separate positions
    in the same file, with different properties, and TypeScript combines all declarations and
    merges them into one.
*/

// We can take our ShopItem declaration from earlier on, and extend them with an array of reviews
// at a totally different position:
interface ShopItem {
    reviews: {
        rating: number,
        content: string
    }[]
}

/*
    Adding this couple of lines will break all usage of ShopItem throughout our file, as the reviews
    property is not optional, and DVD and other elements will have to implement it.

    When writing JavaScript, we often get into situations where variables, functions, or classes
    from somewhere outside become available globally.

    Not only isDevelopment flag, but also maybe an analytics script that allows you to get statistics
    on your site's usage. Or the YouTube API that allows you to include and play different YouTube movies.

    All these things usually hang themselves into the global object. In browsers, that's the window object.
    The window object is very much defined through the Window interface.

    Wouldn't it be great if we could extend Window from anywhere in our code, making global flags,
    APIs, and functions available anywhere?
*/

declare global {
    interface Window {
        isDevelopment: boolean;
    }
}

/*
    First, we open the global namespace. Namespaces are a feature that came before the times of propert
    module encapsulation. 

    They are moslty used when we want to spread type declarations across files, like all declarations
    that are globally available (window, document, navigator, and so on).

    Namespace declarations can also be merged.

    Next, we open the Window interface. We don't overwrite the entire type; we attach a custom field to it:
    isDevelopment of type boolean. With that declaration, anywhere in our code, we can immediately
    check if we are in devleopment mode:
*/

class Discount {
    apply(article: Article) {
        // Here we check if we are in dev mode
        if (window.isDevelopment) {
            console.log('Another discount applied');
        }
    }
}