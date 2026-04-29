function calculateBill() {
    let units = parseFloat(document.billForm.units.value);
    let pricePerUnit = 0;

    // Determine unit price based on brackets
    if (units > 0 && units < 100) {
        pricePerUnit = 4;
    } else if (units >= 100 && units < 300) {
        pricePerUnit = 8;
    } else if (units >= 300) {
        pricePerUnit = 10;
    }

    let unitAmount = units * pricePerUnit;

    // Tax Calculations (as percentages of total consumed units based on prompt wording 
    // "tax of total consumed unit" usually implies the amount, but here we treat it as 
    // percentage of the base unit amount or unit count. Prompt says "fixed", 
    // so we calculate based on the base price 'unitAmount')
    let greenery = unitAmount * 0.05;
    let education = unitAmount * 0.02;
    let service = unitAmount * 0.01;
    let normalTax = unitAmount * 0.10;

    let total = unitAmount + greenery + education + service + normalTax;

    // Updating form fields using document.formName.componentName.value
    document.billForm.unitAmount.value = unitAmount.toFixed(2);
    document.billForm.greeneryTax.value = greenery.toFixed(2);
    document.billForm.eduTax.value = education.toFixed(2);
    document.billForm.servTax.value = service.toFixed(2);
    document.billForm.normTax.value = normalTax.toFixed(2);
    document.billForm.totalBill.value = total.toFixed(2);

    console.log("Electricity Bill for " + units + " units:", total.toFixed(2));
}
