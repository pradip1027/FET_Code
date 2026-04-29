/*
 * Q.11. What is a module in TypeScript? Explain its purpose and implementation 
 * with the help of an appropriate program example.
 * 
 * Answer:
 * In TypeScript (similar to ES6 Javascript), a "module" is essentially a way to encapsulate 
 * and group related variables, functions, interfaces, or classes into an independent file. 
 * By default, files are treated as scripts with global scope. However, by using keywords like `export` and `import`, 
 * the definitions inside a file are bounded to the module scope and do not leak into the global scope.
 * 
 * Purpose:
 * 1. Maintainability: Breaking down complex code logic into smaller, self-contained files.
 * 2. Reusability: Using exported modules across multiple files.
 * 3. Namespace Management: Avoiding variable name collisions on global scopes.
 */

// Let's create `math.ts` which exports a module class computationally.

// This file is 'main.ts', but we will write the code linearly for explanation purposes.
// Usually, we create separate files. To simulate, here is what `math.ts` would hold:

/*
--- math.ts ---
export class MathHelper {
    public static calculateAreaOfCircle(radius: number): number {
        return Math.PI * radius * radius;
    }
}
*/

// --- main.ts (Assuming math.ts is next to it in folder structure) ---
// import { MathHelper } from './math';

// For execution in this single file demonstration, we simply define it inline as if it came from an import.
class SimulatedMathHelper {
    public static calculateAreaOfCircle(radius: number): number {
        return Math.PI * radius * radius;
    }
}

console.log("Calculating area of a circle using an imported module's class:");
const result = SimulatedMathHelper.calculateAreaOfCircle(10);
console.log(`Area of circle with radius 10 is: ${result.toFixed(2)}`);
