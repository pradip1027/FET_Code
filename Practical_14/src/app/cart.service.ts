import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // Use BehaviorSubject so that new subscribers get the current value immediately
  private cartItemsSubject = new BehaviorSubject<string[]>([]);
  
  // Expose as observable
  cartItems$ = this.cartItemsSubject.asObservable();

  constructor() { }

  addToCart(product: string) {
    const currentItems = this.cartItemsSubject.value;
    this.cartItemsSubject.next([...currentItems, product]);
  }

  getCartItems(): Observable<string[]> {
    return this.cartItems$;
  }

  clearCart() {
    this.cartItemsSubject.next([]);
  }
}
