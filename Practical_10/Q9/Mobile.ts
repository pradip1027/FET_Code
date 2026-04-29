export default class Mobile {
    constructor(
        public brand: string, 
        public model: string, 
        public price: number
    ) {}

    displayInfo(): void {
        console.log(`Mobile Info: ${this.brand} ${this.model} - $${this.price}`);
    }
}
