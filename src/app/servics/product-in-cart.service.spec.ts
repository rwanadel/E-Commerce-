import { TestBed } from '@angular/core/testing';

import { ProductInCartService } from './product-in-cart.service';

describe('ProductInCartService', () => {
  let service: ProductInCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductInCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
