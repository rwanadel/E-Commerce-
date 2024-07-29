import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
  standalone: true,
})
export class DiscountPipe implements PipeTransform {
  transform(price: number, discountPercentage?: number): string {
    if (!price) return '';
    let discountedPrice = price;
    if (discountPercentage && discountPercentage > 0) {
      discountedPrice = price - (price * discountPercentage) / 100;
    }

    return discountPercentage && discountPercentage > 0
      ? `<span class=" text-decoration-line-through fs-5" >$${price.toFixed(
          2
        )}</span>  <span class="fs-4 ms-1">$${discountedPrice.toFixed(
          2
        )}</span>`
      : `$${price.toFixed(2)}`;
  }

  static getDiscountedPrice(
    price: number,
    discountPercentage?: number
  ): number {
    if (!price) return 0;
    if (discountPercentage && discountPercentage > 0) {
      return price - (price * discountPercentage) / 100;
    }
    return price;
  }
}
