import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { DiscountPipe } from '../discount.pipe';
import { CounterService } from '../servics/counter.service';
import { ProductReqestService } from '../servics/product-reqest.service';
import { ProductInCartService } from '../servics/product-in-cart.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink, NgClass, NgFor, DiscountPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent implements OnInit {
  counter: number = 1;
  @Input() productItem: any;

  @Output() handleSendData = new EventEmitter<number>();

  constructor(
    private router: Router,
    private productRequestsService: ProductReqestService,
    private counterservice: CounterService,
    private productInCartService: ProductInCartService
  ) {}

  handleRedirect(id: number) {
    this.router.navigate(['/details', id]);
  }

  ngOnInit(): void {
    console.log(this.productItem);
  }
//function to add product to cart page
  addToCart() {
    this.productItem.inCart = true; // Mark as added to cart
    this.productItem.quantity = this.counter;
    this.productInCartService.addToCartPage(this.productItem);
    this.counterservice.addToCart(this.counter);
  }
}
