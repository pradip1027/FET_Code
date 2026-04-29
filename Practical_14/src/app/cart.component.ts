import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="cart-card">
      <h4>Shopping Cart</h4>
      
      <div *ngIf="(cartItems$ | async) as items">
        <p *ngIf="items.length === 0">Your cart is empty.</p>
        
        <ul class="list-group" *ngIf="items.length > 0">
          <li class="list-group-item" *ngFor="let item of items; let i = index">
            {{ i + 1 }}. {{ item }}
          </li>
        </ul>

        <button 
          *ngIf="items.length > 0" 
          class="btn-danger mt-3" 
          (click)="clearCart()"
        >
          Clear Cart
        </button>
      </div>
    </div>
  `,
  styles: [`
    .cart-card { border: 1px solid #d4edda; border-radius: 8px; padding: 15px; background: #d4edda; height: 100%; }
    .list-group { list-style-type: none; padding: 0; margin: 0; }
    .list-group-item { padding: 8px; border-bottom: 1px solid #c3e6cb; }
    .list-group-item:last-child { border-bottom: none; }
    .btn-danger { padding: 6px 12px; background-color: #dc3545; color: white; border: none; border-radius: 4px; cursor: pointer; }
    .btn-danger:hover { background-color: #c82333; }
    .mt-3 { margin-top: 15px; display: inline-block; }
  `]
})
export class CartComponent implements OnInit {
  cartItems$!: Observable<string[]>;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartItems$ = this.cartService.getCartItems();
  }

  clearCart() {
    this.cartService.clearCart();
  }
}
