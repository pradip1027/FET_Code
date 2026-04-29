import { Component, signal } from '@angular/core';
import { CalculatorComponent } from '../../Q4/calculator';
import { ProductInfoComponent } from '../../Q5/product-info';
import { BiodataComponent } from '../../Q6/biodata';
import { StudentComponent } from '../../Q7/student';

@Component({
  selector: 'app-root',
  imports: [CalculatorComponent, ProductInfoComponent, BiodataComponent, StudentComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Practical_11');
}
