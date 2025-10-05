// Functions contribute to the value-creation space of TypeScript.

/*
    - We are going to create a search field for our website. 
    - The moment we enter a query, we call a back end that provides us with results in JSON.
    - We create a search function that takes query parameters, calls the back-end search API
    and returls the correct results.
*/

//REVIEW - Typing Function Heads

// We use the declare keyword to make the function available without implementing a function body
// at the moment.
type Result = {
    title: string,
    url: string,
    abstract: string
}

/**
 * The search function takes a query it sends 
 * to the back end, as well as a couple of tags
 * as a string array, to get filtered results
 */
declare function search(
    query: string,
    tags: string[]
): Result[]


/**
 * We explicitly types the parameters and returns values of the function head,
 * which is good practice as it lets you make sure you not only get the right
 * return values and process them futher, but you cna also validate your
 * implementation against the explicit types you expect.
 * 
 * The function head has some issues:
 *  1. Tag filters are required. You wouldn't be able to call the search function without any
 *      tags provided, even if it's just an empty array.
 * 
 *  2. The search function is implictly synchronous. We call search and expect an array of results
 *      in returns. Calling a back end usually involves an asynchronous operation.
 */



/**
 * Optional Parameters
 * 
 * Tags are nice to filter results based on preferences. 
 * Tags are optional, at least in our case. 
 * Our function doesn't know yet:
*/
search('Ember', ['JavaScript']); // Works
search('Ember'); // Errors! Tags are missing
search('Ember', []); // Naty workaround

/**
 * Passing empty values doesn't seem very JavaScript-like. 
 * Just like objects, functions can take optional parameters, marked with a question mark:
 */
declare function search(
    query: string,
    tags?: string[]
): Result[]

search('Ember'); // Yes!
search('Ember', ['JavaScript']); // Also yes!
search('Ember', ['JavaScript', 'CSS']) // Yes yes!

/**
 * Also, just like optional properties in objects, you hae to check 
 * if they're available once you write your body function.
 */