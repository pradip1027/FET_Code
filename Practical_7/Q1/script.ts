function calculate(): void { 
    
    // Indirect Initialization 
    let num1: number; 
    let num2: number; 
    let choice: number; 
    let result: number = 0; 
    
    // Taking values from user 
    num1 = Number((document.getElementById("num1") as HTMLInputElement).value);
    num2 = Number((document.getElementById("num2") as HTMLInputElement).value);
    choice = Number((document.getElementById("choice") as HTMLSelectElement).value);
    
    // Switch Case 
    switch (choice) { 
        case 1: 
            result = num1 + num2; 
            break; 
        case 2:
            result = num1 - num2; 
            break; 
        case 3: 
            result = num1 * num2; 
            break; 
        case 4: 
            if (num2 != 0) { 
                result = num1 / num2; 
            } 
            else {
                alert("Cannot divide by zero");
                return;
            } 
            break; 
        default: 
            alert("Invalid Choice"); 
            return;
        } // Display result
    
(document.getElementById("result") as HTMLInputElement).value =result.toString(); }
