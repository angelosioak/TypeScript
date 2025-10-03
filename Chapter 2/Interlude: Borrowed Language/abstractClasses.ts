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

