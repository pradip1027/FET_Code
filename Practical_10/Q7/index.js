"use strict";
/**
 * Q.7. What is constructor method in TS or JS? Explain with the help of program example.
 *
 * A `constructor` is a special method of a class that is automatically called
 * when an object (instance) of that class is created.
 *
 * Purposes of a constructor:
 * 1. To initialize the object's properties with default or passed values.
 * 2. To perform any setup steps required before the object is used.
 *
 * In TypeScript, a class can have only one constructor.
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    make;
    model;
    year;
    // This is the constructor method.
    // It takes parameters and assigns them to the class properties.
    constructor(make, model, year) {
        console.log(`Constructor called! Creating a new ${make} ${model}...`);
        this.make = make;
        this.model = model;
        this.year = year;
    }
    displayDetails() {
        console.log(`Car Details: ${this.year} ${this.make} ${this.model}`);
    }
}
console.log("--- Demonstrating Constructor ---");
// When 'new Car(...)' is called, the constructor executes immediately.
const myCar1 = new Car("Toyota", "Corolla", 2021);
const myCar2 = new Car("Honda", "Civic", 2023);
console.log("\nAccessing Methods:");
myCar1.displayDetails();
myCar2.displayDetails();
//# sourceMappingURL=index.js.map