export class Rectangle {
    constructor(public width: number, public height: number) {}

    getArea(): number {
        return this.width * this.height;
    }
}
