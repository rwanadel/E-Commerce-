import { Component, OnInit } from '@angular/core';
import * as productData from '../../assets/products.json';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductReqestService } from '../servics/product-reqest.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products: any;
  constructor(private productRequestsService: ProductReqestService) {}
  ngOnInit() {
    //this.products = (productData as any).default;        //before i use api

//fetch data from service
    this.productRequestsService.getProductList().subscribe((res) => {
      this.handledata(res);
    });
  }
  handledata(data: any) {
    console.log(data.products);
    this.products = data.products;
  }

  handleReceiveData(id: number) {
    console.log(this.products);
    console.log('FROM PARENT', id);
    //this.products = this.products.filter((product:any) => product.id !== id);
  }
}
