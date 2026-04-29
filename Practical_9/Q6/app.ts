/*
 * Q.6 Promises with then(), catch(), and finally() using Events, DOM objects, console, and document.
 */

document.addEventListener("DOMContentLoaded", () => {
    
    // --- Utility for Document Object Writing (Requirement b: Using Document Object) ---
    const appendToDocument = (text: string) => {
        // We write to a specific area to avoid destroying the DOM
        const area = document.getElementById("doc-object-area");
        if (area) {
            const p = document.createElement("p");
            p.style.color = "#03dac6";
            p.style.fontFamily = "monospace";
            p.style.marginTop = "1rem";
            p.innerText = `[Document Object Output]: ${text}`;
            area.appendChild(p);
        }
    };

    // --- A: Sum and Average of first 10 Natural Numbers ---
    const calculateSumAndAvg = (): Promise<{sum: number, avg: number}> => {
        return new Promise((resolve) => {
            console.log("Promise A Pending: Calculating Math limitlessly...");
            setTimeout(() => {
                let sum = 0;
                for (let i = 1; i <= 10; i++) sum += i;
                resolve({ sum, avg: sum / 10 });
            }, 1000);
        });
    };

    // Requirement d: Events & Event Handling Methods
    const btnMath = document.getElementById("btn-math") as HTMLButtonElement;
    btnMath.addEventListener("click", () => {
        const output = document.getElementById("output-math") as HTMLDivElement;
        output.innerText = "Calculating (Promise Pending)...";

        calculateSumAndAvg()
            .then(res => {
                const msg = `Sum: ${res.sum}, Average: ${res.avg}`;
                output.innerText = msg; // Requirement c: DOM Objects
                console.log(`Promise A Resolved -> ${msg}`); // Requirement a: Console
                appendToDocument(msg); // Requirement b: Document Object
            })
            .catch(err => output.innerText = "Error calculating.")
            .finally(() => console.log("Promise A execution FINALLY block passed.\n"));
    });


    // --- B: Salary Calculator ---
    const calculateSalary = (baseSalary: number): Promise<{gross: number, net: number}> => {
        return new Promise((resolve, reject) => {
            console.log("Promise B Pending: Analyzing Payroll limits...");
            setTimeout(() => {
                if (baseSalary <= 0 || isNaN(baseSalary)) {
                    reject("Invalid Salary Amount!");
                } else {
                    const hra = baseSalary * 0.20;
                    const da = baseSalary * 0.50;
                    const tax = baseSalary * 0.10;
                    const gross = baseSalary + hra + da;
                    const net = gross - tax;
                    resolve({ gross, net });
                }
            }, 1000);
        });
    };

    const btnSalary = document.getElementById("btn-salary") as HTMLButtonElement;
    btnSalary.addEventListener("click", () => {
        // Reading from DOM (Requirement c)
        const baseInput = (document.getElementById("base-salary") as HTMLInputElement).value;
        const output = document.getElementById("output-salary") as HTMLDivElement;
        
        output.innerText = "Calculating Salaries...";

        calculateSalary(parseFloat(baseInput))
            .then(res => {
                const msg = `Gross: ₹${res.gross.toFixed(2)} | Net: ₹${res.net.toFixed(2)}`;
                output.innerText = msg;
                console.log(`Promise B Resolved -> ${msg}`);
            })
            .catch(err => {
                output.innerText = err;
                console.error(`Promise B Rejected -> ${err}`);
            })
            .finally(() => console.log("Promise B execution FINALLY block passed.\n"));
    });


    // --- C: Book Info ---
    interface Book {
        id: string; title: string; author: string; publisher: string; price: number;
    }

    const processBook = (book: Book): Promise<string> => {
        return new Promise((resolve, reject) => {
            console.log("Promise C Pending: Processing Book Info limitlessly...");
            setTimeout(() => {
                if (!book.id || !book.title || isNaN(book.price)) {
                    reject("Missing or Invalid Book Data details!");
                } else {
                    resolve(`Processed: [${book.id}] '${book.title}' by ${book.author} (Published by ${book.publisher}) - ₹${book.price}`);
                }
            }, 1000);
        });
    };

    const btnBook = document.getElementById("btn-book") as HTMLButtonElement;
    btnBook.addEventListener("click", () => {
        const output = document.getElementById("output-book") as HTMLDivElement;

        // Reading DOM Textboxes (Requirement c)
        const book: Book = {
            id: (document.getElementById("book-id") as HTMLInputElement).value,
            title: (document.getElementById("book-name") as HTMLInputElement).value,
            author: (document.getElementById("book-author") as HTMLInputElement).value,
            publisher: (document.getElementById("book-publisher") as HTMLInputElement).value,
            price: parseFloat((document.getElementById("book-price") as HTMLInputElement).value)
        };

        output.innerText = "Processing Data...";

        processBook(book)
            .then(res => {
                output.innerText = res;
                console.log(`Promise C Resolved -> ${res}`);
                appendToDocument(res);
            })
            .catch(err => {
                output.innerText = `Error: ${err}`;
                console.error(`Promise C Rejected -> ${err}`);
            })
            .finally(() => console.log("Promise C FINALLY cleared UI loads."));
    });

});
