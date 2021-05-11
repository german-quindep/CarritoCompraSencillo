import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCarritoComponent } from './list-carrito.component';

describe('ListCarritoComponent', () => {
  let component: ListCarritoComponent;
  let fixture: ComponentFixture<ListCarritoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCarritoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
