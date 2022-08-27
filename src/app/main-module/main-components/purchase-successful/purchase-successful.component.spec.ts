import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseSuccessfulComponent } from './purchase-successful.component';

describe('PurchaseSuccessfulComponent', () => {
  let component: PurchaseSuccessfulComponent;
  let fixture: ComponentFixture<PurchaseSuccessfulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseSuccessfulComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
