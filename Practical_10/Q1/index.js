"use strict";
/**
 * Q.1. What is scoping and module concept in TypeScript? Explain var, let, const variable scope
 * using an appropriate program example.
 *
 * Scoping: Scoping determines the visibility and accessibility of variables in your code.
 * TypeScript (and JavaScript) has several types of scopes: Global, Module, Function, and Block scope.
 *
 * Module concept: In TypeScript, any file containing a top-level `import` or `export` is considered a module.
 * Variables declared in a module are scoped to that module and are not visible globally unless explicitly exported.
 */
Object.defineProperty(exports, "__esModule", { value: true });
function scopeExample() {
    console.log("--- Demonstrating Variable Scopes ---");
    // 1. 'var' is function-scoped. It ignores block scopes (like if statements or loops).
    var x = 10;
    if (true) {
        var x = 20; // This modifies the same 'x' because var is function-scoped
        console.log("Inside block, var x =", x); // 20
    }
    console.log("Outside block, var x =", x); // 20
    // 2. 'let' is block-scoped. It is limited to the block {} it is defined in.
    let y = 10;
    if (true) {
        let y = 20; // This is a new 'y' scoped only to this block
        console.log("Inside block, let y =", y); // 20
    }
    console.log("Outside block, let y =", y); // 10
    // 3. 'const' is also block-scoped like 'let', but its value cannot be reassigned after initialization.
    const z = 30;
    // z = 40; // This would cause a compiler Error: Assignment to constant variable.
    console.log("Inside function, const z =", z); // 30
}
scopeExample();
//# sourceMappingURL=index.js.map