function findHighest(): void { 
    let num1: number; 
    let num2: number; 
    let num3: number; 
    
    num1 = Number((document.getElementById("num1") as HTMLInputElement).value); 
    num2 = Number((document.getElementById("num2") as HTMLInputElement).value); 
    num3 = Number((document.getElementById("num3") as HTMLInputElement).value); 
    
    let highest: number; 
    
    if (num1 > num2 && num1 > num3) { 
        highest = num1; 
        (document.getElementById("highest") as HTMLElement).innerHTML = "Highest number is: " + highest; 
    } 
    else if (num2 > num1 && num2 > num3) { 
        highest = num2; (document.getElementById("highest") as HTMLElement).innerHTML = "Highest number is: " + highest; 
    } 
    else if (num3 > num1 && num3 > num2) { highest = num3; 
        (document.getElementById("highest") as HTMLElement).innerHTML = "Highest number is: " + highest; 
    } 
    else { 
        (document.getElementById("highest") as HTMLElement).innerHTML = "All numbers are equal"; 
    } 
}