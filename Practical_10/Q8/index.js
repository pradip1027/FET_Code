"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
class Product {
    pid;
    pname;
    qty;
    price;
    totalPrice;
    constructor(pid, pname, qty, price) {
        this.pid = pid;
        this.pname = pname;
        this.qty = qty;
        this.price = price;
        // Compute total price inside the constructor
        this.totalPrice = this.qty * this.price;
    }
    displayRecord() {
        console.log(`${this.pid}\t| ${this.pname.padEnd(15)}\t| ${this.qty}\t| $${this.price}\t| $${this.totalPrice}`);
    }
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const askQuestion = (query) => {
    return new Promise((resolve) => rl.question(query, resolve));
};
async function main() {
    const products = [];
    const NUM_RECORDS = 5;
    console.log(`\n--- Enter Details for ${NUM_RECORDS} Products ---`);
    try {
        for (let i = 1; i <= NUM_RECORDS; i++) {
            console.log(`\n> Product ${i}:`);
            const pidStr = await askQuestion("Product ID: ");
            const pname = await askQuestion("Product Name: ");
            const qtyStr = await askQuestion("Quantity: ");
            const priceStr = await askQuestion("Price: ");
            const product = new Product(parseInt(pidStr, 10), pname, parseInt(qtyStr, 10), parseFloat(priceStr));
            products.push(product);
        }
        console.log("\n\n======================================================================");
        console.log("                          All Product Records                           ");
        console.log("======================================================================");
        console.log("PID\t| Name           \t| Qty\t| Price \t| Total Price");
        console.log("----------------------------------------------------------------------");
        for (const prod of products) {
            prod.displayRecord();
        }
        console.log("======================================================================\n");
        // Search Product Logic
        console.log("--- Search Product ---");
        const searchQuery = await askQuestion("Enter Product ID or Name to search: ");
        const isNumericSearch = !isNaN(Number(searchQuery));
        const foundProducts = products.filter(p => {
            if (isNumericSearch) {
                return p.pid === parseInt(searchQuery, 10);
            }
            else {
                return p.pname.toLowerCase() === searchQuery.toLowerCase();
            }
        });
        if (foundProducts.length > 0) {
            console.log("\n✅ Product(s) Found:");
            console.log("PID\t| Name           \t| Qty\t| Price \t| Total Price");
            console.log("----------------------------------------------------------------------");
            foundProducts.forEach(fp => fp.displayRecord());
        }
        else {
            console.log("\n❌ No product found matching that ID or Name.");
        }
    }
    catch (err) {
        console.error("Error reading input:", err);
    }
    finally {
        rl.close();
    }
}
main();
//# sourceMappingURL=index.js.map