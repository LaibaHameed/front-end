import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseFailedComponent } from './purchase-failed.component';

describe('PurchaseFailedComponent', () => {
  let component: PurchaseFailedComponent;
  let fixture: ComponentFixture<PurchaseFailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseFailedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseFailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
