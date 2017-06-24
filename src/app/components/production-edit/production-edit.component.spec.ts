import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionEditComponent } from './production-edit.component';

describe('ProductionEditComponent', () => {
  let component: ProductionEditComponent;
  let fixture: ComponentFixture<ProductionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
