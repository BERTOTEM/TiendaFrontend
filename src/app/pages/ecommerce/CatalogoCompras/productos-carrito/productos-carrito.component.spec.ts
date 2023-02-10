import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosCarritoComponent } from './productos-carrito.component';

describe('ProductosCarritoComponent', () => {
  let component: ProductosCarritoComponent;
  let fixture: ComponentFixture<ProductosCarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosCarritoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductosCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
