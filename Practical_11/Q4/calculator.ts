import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css'
})
export class CalculatorComponent {
  num1 = signal<number>(0);
  num2 = signal<number>(0);
  result = signal<number | string>('');

  add() {
    this.result.set(this.num1() + this.num2());
  }

  subtract() {
    this.result.set(this.num1() - this.num2());
  }

  multiply() {
    this.result.set(this.num1() * this.num2());
  }

  divide() {
    if (this.num2() !== 0) {
      this.result.set(this.num1() / this.num2());
    } else {
      this.result.set('Cannot divide by zero');
    }
  }
}