import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErroNotFoundComponent } from './erro-not-found.component';

describe('ErroNotFoundComponent', () => {
  let component: ErroNotFoundComponent;
  let fixture: ComponentFixture<ErroNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErroNotFoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErroNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
