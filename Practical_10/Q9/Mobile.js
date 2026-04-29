"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Mobile {
    brand;
    model;
    price;
    constructor(brand, model, price) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
    displayInfo() {
        console.log(`Mobile Info: ${this.brand} ${this.model} - $${this.price}`);
    }
}
exports.default = Mobile;
//# sourceMappingURL=Mobile.js.map