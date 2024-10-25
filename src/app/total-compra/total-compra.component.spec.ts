import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalCompraComponent } from './total-compra.component';

describe('TotalCompraComponent', () => {
  let component: TotalCompraComponent;
  let fixture: ComponentFixture<TotalCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalCompraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
