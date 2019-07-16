import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToGetAllShopComponent } from './to-get-all-shop.component';

describe('ToGetAllShopComponent', () => {
  let component: ToGetAllShopComponent;
  let fixture: ComponentFixture<ToGetAllShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToGetAllShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToGetAllShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
