import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  constructor() {}

  private cartQuantitySource = new BehaviorSubject(0);
  cartQuantity$ = this.cartQuantitySource.asObservable();

  addToCart(quantity: number) {
    let currentQuantity = this.cartQuantitySource.value;
    this.cartQuantitySource.next(currentQuantity + quantity);
  }
  removeFromCart(quantity: number): void {
    let currentQuantity = this.cartQuantitySource.value;
    this.cartQuantitySource.next(Math.max(currentQuantity - quantity, 0));
  }

  updateCartQuantity(quantity: number) {
    this.cartQuantitySource.next(quantity);
  }
}
