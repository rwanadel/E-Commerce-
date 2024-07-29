import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CounterService } from '../servics/counter.service';

@Injectable({
  providedIn: 'root',
})
export class ProductInCartService {
  constructor(private counterService: CounterService) {}

  private cartProductsSource = new BehaviorSubject<any[]>([]);

  cartProducts$ = this.cartProductsSource.asObservable();

  addToCartPage(product: any) {
    const currentProducts = this.cartProductsSource.value;
    const productIndex = currentProducts.findIndex((p) => p.id === product.id);

    if (productIndex !== -1) {
      // Product is already in the cart, so increase the quantity
      currentProducts[productIndex].quantity += product.quantity;
    } else {
      currentProducts.push({ ...product, quantity: product.quantity });
      // Product is not in the cart, add it with the specified quantity
    }
    //currentProducts.push(product);
    console.log('Current Products after adding:', currentProducts);
    this.cartProductsSource.next(currentProducts); // Spread to ensure new reference
  }

  removeFromCart(id: number) {
    const currentProducts = this.cartProductsSource.value;
    const productToRemove = currentProducts.find(
      (product) => product.id === id
    );

    if (productToRemove) {
      const updatedProducts = currentProducts.filter(
        (product) => product.id !== id
      );
      this.cartProductsSource.next(updatedProducts);
      this.counterService.removeFromCart(productToRemove.quantity); // Update the counter
    }
  }

  getCartProducts(): Observable<any[]> {
    console.log('Getting cart products:', this.cartProductsSource.value);
    return this.cartProducts$;
  }

  updateCart(products: any[]) {
    // this.cartProductsSource.next(products);
    this.cartProductsSource.next([...products]);
  }

  clearCart() {
    this.cartProductsSource.next([]);
  }
}
