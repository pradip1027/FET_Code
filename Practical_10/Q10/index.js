"use strict";
/**
 * Q.10. What is interface? Explain with the help of program example.
 *
 * An interface in TypeScript is a way to define a contract on a function
 * with respect to the arguments and their types, or a contract for an object
 * describing the properties, methods, and their types.
 *
 * It contains only the structure (declaration of the methods and fields), but not the implementation.
 * Classes or objects that "implement" the interface must have those exact fields and methods.
 */
Object.defineProperty(exports, "__esModule", { value: true });
console.log("--- Demonstrating Interfaces ---");
// 1. Using Interface to type-check an Object literal
const myDog = {
    name: "Buddy",
    makeSound: () => {
        console.log("Woof! Woof!");
    }
};
console.log(`\n1. Object using Interface -> Name: ${myDog.name}`);
myDog.makeSound();
// 2. Using Interface to enforce structure on a Class
class Cat {
    name;
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log("Meow! Meow!");
    }
}
const myCat = new Cat("Whiskers");
console.log(`\n2. Class implementing Interface -> Name: ${myCat.name}`);
myCat.makeSound();
//# sourceMappingURL=index.js.map