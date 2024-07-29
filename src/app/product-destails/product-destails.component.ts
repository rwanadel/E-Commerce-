import { Component, OnInit, Input } from '@angular/core';
import * as productData from '../../assets/products.json';
import { ActivatedRoute } from '@angular/router';
import { NgClass, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { DiscountPipe } from '../discount.pipe';
import { ProductReqestService } from '../servics/product-reqest.service';
import { CounterService } from '../servics/counter.service';
import { ProductInCartService } from '../servics/product-in-cart.service';

@Component({
  selector: 'app-product-destails',
  standalone: true,
  imports: [NgClass, NgFor, FormsModule, DiscountPipe],
  templateUrl: './product-destails.component.html',
  styleUrl: './product-destails.component.css',
})
export class ProductDestailsComponent implements OnInit {
  //products: any;
  counter: number = 1;
  productDetails: any;
  @Input() id: number = 0;
  @Input() product: any; //fetchfromservice
  //constructor(private activatedRoute: ActivatedRoute ) {}
  constructor(
    private productRequestsService: ProductReqestService,
    private counterservice: CounterService,
    private productInCartService: ProductInCartService
  ) {}

  ngOnInit() {
    //this.products = (productData as any).default;
    this.productRequestsService.getProductDetails(this.id).subscribe((res) => {
      console.log(res);
      this.productDetails = res;
      console.log(this.productDetails);
    //add new property (inCart) toobjecttohandlechoeseproduct
      if (!this.productDetails.hasOwnProperty('inCart')) {
        this.productDetails.inCart = false;
        console.log(this.productDetails);
      }
    });
  }
  decreaseQuantity() {
    if (this.counter > 0) {
      this.counter -= 1;
    }
  }

  increaseQuantity() {
    if (this.counter < this.productDetails.stock) {
      this.counter += 1;
    }
  }

  // addToCart() {
  //   this.counterservice.addToCart(this.counter);
  // }
  // addToCartPage() {
  //   this.productInCartService.addToCartPage(this.product);
  // console.log("hi")
  // }

//add product to cart page
  addToCart() {
    this.productDetails.inCart = true; // Mark as added to cart
    this.productDetails.quantity = this.counter;
    this.productInCartService.addToCartPage(this.productDetails);
    this.counterservice.addToCart(this.counter);
  }
}
//before i use api

// this.productDetails = this.products.find(
//   (product) => product.id == this.activatedRoute.snapshot.params['id']
// );
//   console.log(this.productDetails)

//before i use api

//   ngOnInit() {
//     console.log('Component initialized');
//     console.log('ID:', this.id);///

//     this.products = (productData as any).default;
//     console.log('Products:', this.products);
//     console.log(this.products[0].id)

//     // Convert this.id to a number

//       this.productDetails = this.products.find((product) =>{
// console.log(product.id)
// console.log(this.id)
// return product.id === this.id;

//       })

//       console.log('Product Details:', this.productDetails);

//   }
