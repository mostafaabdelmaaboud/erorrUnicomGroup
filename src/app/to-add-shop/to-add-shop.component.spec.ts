import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToAddShopComponent } from './to-add-shop.component';

describe('ToAddShopComponent', () => {
  let component: ToAddShopComponent;
  let fixture: ComponentFixture<ToAddShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToAddShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToAddShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
