import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsOfOrderComponent } from './items-of-order.component';

describe('ItemsOfOrderComponent', () => {
  let component: ItemsOfOrderComponent;
  let fixture: ComponentFixture<ItemsOfOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsOfOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsOfOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
