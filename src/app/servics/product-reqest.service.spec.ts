import { TestBed } from '@angular/core/testing';

import { ProductReqestService } from './product-reqest.service';

describe('ProductReqestService', () => {
  let service: ProductReqestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductReqestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
