import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagmentModuleComponent } from './managment-module.component';

describe('ManagmentModuleComponent', () => {
  let component: ManagmentModuleComponent;
  let fixture: ComponentFixture<ManagmentModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagmentModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagmentModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
