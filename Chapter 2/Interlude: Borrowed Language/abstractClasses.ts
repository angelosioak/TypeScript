/*
    When interfaces describe the blueprint of implementations, and classes are implementations,
    abstract classes are something in-between. 

    They implement a lot but leave out important details to be filled out by real classes:
*/
import type { Article } from '../Lesson 14 - Interfaces/./declarationMerging'

abstract class Discount {
    // This needs to be implemented 
    abstract isValid(article: Article): boolean;

    // This is already implemented 
    apply(article: Article) {
        // Like before ...
    }
}

/*
    TypeScript reports errors when you forget to implement isValid, and you're not allowed to create
    an object with an abstract class. 

    But again, only in TypeScript.

    Abstract classes are emitted to JavaScript, but their semantics are similar to regular classes.

    Only now, they're missing entire implementation details. This can cause weird errors at runtime
    that can easily avoid.
 */