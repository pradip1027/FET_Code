import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Product {
  name: string;
  price: number;
  description: string;
}

@Component({
  selector: 'app-product-info',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './product-info.html',
  styleUrl: './product-info.css'
})
export class ProductInfoComponent {
  products = signal<Product[]>([
    { name: '', price: 0, description: '' },
    { name: '', price: 0, description: '' },
    { name: '', price: 0, description: '' },
    { name: '', price: 0, description: '' },
    { name: '', price: 0, description: '' }
  ]);

  displayedProducts = signal<Product[]>([]);

  displayProducts() {
    this.displayedProducts.set([...this.products()]);
    console.log('Product Information:', this.products());
  }
}