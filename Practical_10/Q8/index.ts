import * as readline from 'readline';

class Product {
    public totalPrice: number;

    constructor(
        public pid: number,
        public pname: string,
        public qty: number,
        public price: number
    ) {
        // Compute total price inside the constructor
        this.totalPrice = this.qty * this.price;
    }

    displayRecord(): void {
        console.log(`${this.pid}\t| ${this.pname.padEnd(15)}\t| ${this.qty}\t| $${this.price}\t| $${this.totalPrice}`);
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const askQuestion = (query: string): Promise<string> => {
    return new Promise((resolve) => rl.question(query, resolve));
};

async function main() {
    const products: Product[] = [];
    const NUM_RECORDS = 5;

    console.log(`\n--- Enter Details for ${NUM_RECORDS} Products ---`);

    try {
        for (let i = 1; i <= NUM_RECORDS; i++) {
            console.log(`\n> Product ${i}:`);
            const pidStr = await askQuestion("Product ID: ");
            const pname = await askQuestion("Product Name: ");
            const qtyStr = await askQuestion("Quantity: ");
            const priceStr = await askQuestion("Price: ");

            const product = new Product(
                parseInt(pidStr, 10),
                pname,
                parseInt(qtyStr, 10),
                parseFloat(priceStr)
            );
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
            } else {
                return p.pname.toLowerCase() === searchQuery.toLowerCase();
            }
        });

        if (foundProducts.length > 0) {
            console.log("\n✅ Product(s) Found:");
            console.log("PID\t| Name           \t| Qty\t| Price \t| Total Price");
            console.log("----------------------------------------------------------------------");
            foundProducts.forEach(fp => fp.displayRecord());
        } else {
            console.log("\n❌ No product found matching that ID or Name.");
        }

    } catch (err) {
        console.error("Error reading input:", err);
    } finally {
        rl.close();
    }
}

main();
