/**
 * Q.5. What is access modifier in TS OOPs concept? 
 * Explain public, protected, and private access modifier using an appropriate program example.
 *
 * Access modifiers are keywords used to set the visibility and accessibility of class members 
 * (properties and methods).
 * 
 * 1. public (Default): Members are accessible from anywhere (inside the class, outside the class, and in subclasses).
 * 2. protected: Members are accessible only within the class and its subclasses (child classes). 
 *               They cannot be accessed from outside the class instances.
 * 3. private: Members are accessible ONLY within the class where they are defined. 
 *             They cannot be accessed by subclasses or from outside.
 */

class Person {
    public name: string;        // Accessible anywhere
    protected age: number;      // Accessible in Person and Employee (subclass)
    private ssn: string;        // Accessible ONLY inside Person class

    constructor(name: string, age: number, ssn: string) {
        this.name = name;
        this.age = age;
        this.ssn = ssn;
    }

    public displayPersonInfo(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}, SSN: ${this.ssn} (accessed inside class)`);
    }
}

class Employee extends Person {
    public employeeId: number;

    constructor(name: string, age: number, ssn: string, employeeId: number) {
        super(name, age, ssn);
        this.employeeId = employeeId;
    }

    public displayEmployeeInfo(): void {
        // Can access public property
        console.log(`Employee Name: ${this.name}`);
        
        // Can access protected property (because Employee extends Person)
        console.log(`Employee Age: ${this.age}`);
        
        // Cannot access private property 'ssn'
        // console.log(`Employee SSN: ${this.ssn}`); // Error: Property 'ssn' is private...
        
        console.log(`Employee ID: ${this.employeeId}`);
    }
}

const emp1 = new Employee("Alice", 28, "123-45-678", 1001);

console.log("--- Access Modifiers Example ---");
// Public property acts fine
console.log("Accessing Public outside class:", emp1.name);

// Accessing Protected outside class will throw an error
// console.log(emp1.age); // Error: Property 'age' is protected and only accessible within class 'Person' and its subclasses.

// Accessing Private outside class will throw an error
// console.log(emp1.ssn); // Error: Property 'ssn' is private and locally accessible.

console.log("\nCalling Subclass Method:");
emp1.displayEmployeeInfo();

console.log("\nCalling Superclass Method:");
emp1.displayPersonInfo(); // Method inside Person class can access its private 'ssn' property

export {};
