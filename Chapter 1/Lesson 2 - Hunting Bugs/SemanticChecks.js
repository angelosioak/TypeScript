"use strict";
/*
    - We have a loop where we go through all our storage items and make a sum.
    - The current loop will crash:
        - The reason: we declared the initialisation variable i as a constant.
        - Constants can't be reassigned, that's why this code won't work.
*/
Object.defineProperty(exports, "__esModule", { value: true });
const storage = {
    max: undefined,
    items = []
};
for (let i = 0; i < storage.length(); i++) {
    // OK!
    currentStorage += storage.items[i].weigth;
}
//# sourceMappingURL=SemanticChecks.js.map