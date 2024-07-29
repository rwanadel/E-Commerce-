import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDestailsComponent } from './product-destails.component';

describe('ProductDestailsComponent', () => {
  let component: ProductDestailsComponent;
  let fixture: ComponentFixture<ProductDestailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDestailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDestailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
