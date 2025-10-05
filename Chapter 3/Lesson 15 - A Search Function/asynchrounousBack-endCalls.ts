/** 
 * One of the most popular promise-based tasks is fetch,
 * a handy way to call a back end and receive data.
 * 
 * Let's use fetch to implement our search function.
 * Remove the declare keyword from the function head.
 * We are not declaring a function anymore, we're implementing it.
*/
type Result = {
    title: string,
    url: string,
    abstract: string
};

declare function search(
    query: string,
    tags?: string[]
): Result[]

function search(query: string, tags?: string[]) {
    // Based on our input parameters, we build a query
    // string
    let queryString = `?query=${query}`;

    // tags can be undefined as it's optional
    // let's check if they exist
    if (tags && tags.length) {
        // and add all tags in that array to the
        // query string
        queryString += `& tags=${tags.join()}`;
    }

    // Ready? Fetch from our search API
    return fetch(`/search${queryString}`)
        // When we a response, we call the
        // .jsoin method to get the actual results
        .then(response => response.json());
}

/**
 * When hovering over the fetch, we can see that the fetch function
 * returns a Promise<Response>, and the response param inside the 
 * callback is of type Response. If you ever see a type with < and > signs,
 * remember the name generic. If we want to specify the type of the return value,
 * we use a generic to set it to; for example Response.
 */

/**
 * One nice thing about TypeScript is that you don't need to know all APIs by heart.
 * Once you call fetch, your editor gives you hints on what you can pass as arguments. 
 * When you are in the then callback, you don't have to know that response has .json() function.
 * You can browse through a list of suggestion from your editor and select the one you think
 * is most appropriate.
 */

/**
 * fetch has a return value of type Promise<Response>.
 * However, the type of response.json's return value is Promise<any>, which is correct.
 * How should TypeScript know what you get once you call your back end?
 * What we want is actually what we get: a promise of results. Or, in types: Promise<Result[]>
 */
function search(query: string, tags?: string[]) {
    //...
    return fetch(`/search${queryString}`)
        .then(response => 
            response.json() as Promise<Result[]>)
}

/**
 * This is OK, as we are more explicit about the type at the position where we get any. 
 * Or the other possibility is the function head:
 */
function search(
    query: string,
    tags?: string[]): Promise<Result[]> {
        return fetch(`/searc${queryString}`)
            .then(response => response.json());
    }

/**
 * Both versions work the same: any is compatible with any other type. 
 * It's the wildcard, the happy-go-lucky type where anything can happen. 
 * We say explicitly that we expect a Result array instead of any. 
 * Any TypeScript accepts that!
 */