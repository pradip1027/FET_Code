import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from './cart.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="product-list-card">
      <h4>Product List</h4>
      <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-center" *ngFor="let product of products">
          {{ product }}
          <button class="btn-sm btn-primary" (click)="addToCart(product)">Add to Cart</button>
        </li>
      </ul>
    </div>
  `,
  styles: [`
    .product-list-card { border: 1px solid #cce5ff; border-radius: 8px; padding: 15px; background: #e6f2ff; }
    .list-group { list-style-type: none; padding: 0; margin: 0; }
    .list-group-item { padding: 10px; border-bottom: 1px solid #b8daff; display: flex; justify-content: space-between; align-items: center; }
    .list-group-item:last-child { border-bottom: none; }
    .btn-sm { padding: 4px 8px; font-size: 12px; border-radius: 4px; cursor: pointer; border: none; }
    .btn-primary { background-color: #007bff; color: white; }
    .btn-primary:hover { background-color: #0056b3; }
  `]
})
export class ProductListComponent {
  products: string[] = ['Laptop', 'Smartphone', 'Headphones', 'Smartwatch', 'Tablet'];

  constructor(private cartService: CartService) {}

  addToCart(product: string) {
    this.cartService.addToCart(product);
  }
}
