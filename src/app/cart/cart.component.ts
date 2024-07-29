import { Component, OnInit } from '@angular/core';
import { ProductInCartService } from '../servics/product-in-cart.service';
import { NgFor, NgIf } from '@angular/common';
import { DiscountPipe } from '../discount.pipe';
import { CounterService } from '../servics/counter.service';
import { TotalPricePipe } from '../total-price.pipe';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgFor, DiscountPipe, NgIf, TotalPricePipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  counter: number = 1;
  cartProducts: any[] = [];
  productCount: number = 0;

  constructor(
    private productInCartService: ProductInCartService,
    private counterService: CounterService
  ) {}

  ngOnInit() {
    this.productInCartService.getCartProducts().subscribe((products) => {
      console.log('Products received in cart component:', products);
      this.cartProducts = products;
      this.updateProductCount();

      console.log(products);
    });
    this.counterService.cartQuantity$.subscribe((quantity) => {
      this.productCount = quantity; // Update counter display
    });
  }

  deleteProduct(id: number) {
    this.productInCartService.removeFromCart(id);
    this.updateProductCount();
  }

  decreaseQuantity(product: any) {
    if (product.quantity > 1) {
      product.quantity -= 1;
      this.productInCartService.updateCart([...this.cartProducts]);
      this.updateProductCount();
    }
    product.errorMessage = '';
  }

  increaseQuantity(product: any) {
    if (product.quantity < product.stock) {
      product.quantity += 1;
      product.errorMessage = ''; // Clear the error message if stock allows more
    } else {
      product.errorMessage = 'Cannot add more items, stock limit reached.';
    }
    this.productInCartService.updateCart(this.cartProducts);
    this.updateProductCount();
  }
  updateProductCount() {
    const totalCount = this.cartProducts.reduce(
      (count, product) => count + product.quantity,
      0
    );
    this.counterService.updateCartQuantity(totalCount);
  }
}
