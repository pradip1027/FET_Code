"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
const Mobile_1 = __importDefault(require("./Mobile")); // Default export
console.log("--- Q.9 Module and Class Exports ---");
// a. Area of circle
const circle = new Circle_1.Circle(5);
console.log(`Area of Circle (radius ${circle.radius}): ${circle.getArea().toFixed(2)}`);
// b. Area of rectangle
const rectangle = new Rectangle_1.Rectangle(10, 20);
console.log(`Area of Rectangle (width ${rectangle.width}, height ${rectangle.height}): ${rectangle.getArea()}`);
// c. Mobile Product Information
console.log("");
const myMobile = new Mobile_1.default("Apple", "iPhone 15 Pro", 1199);
myMobile.displayInfo();
//# sourceMappingURL=index.js.map