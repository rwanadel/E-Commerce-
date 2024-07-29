import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'totalPrice',
  standalone: true,
})
export class TotalPricePipe implements PipeTransform {
  transform(cartItems: any[]): number {
    console.log('Calculating total price for items:', cartItems);
    if (!cartItems) {
      return 0;
    }
    return cartItems.reduce((total, product) => {
      const discountPercentage = product.discountPercentage || 0;
      const discountedPrice = (
        product.price *
        (1 - discountPercentage / 100)
      ).toFixed(2);

      return total + parseFloat(discountedPrice) * product.quantity;
    }, 0);
  }
}
