import { Circle } from './Circle';
import { Rectangle } from './Rectangle';
import Mobile from './Mobile'; // Default export

console.log("--- Q.9 Module and Class Exports ---");

// a. Area of circle
const circle = new Circle(5);
console.log(`Area of Circle (radius ${circle.radius}): ${circle.getArea().toFixed(2)}`);

// b. Area of rectangle
const rectangle = new Rectangle(10, 20);
console.log(`Area of Rectangle (width ${rectangle.width}, height ${rectangle.height}): ${rectangle.getArea()}`);

// c. Mobile Product Information
console.log("");
const myMobile = new Mobile("Apple", "iPhone 15 Pro", 1199);
myMobile.displayInfo();
