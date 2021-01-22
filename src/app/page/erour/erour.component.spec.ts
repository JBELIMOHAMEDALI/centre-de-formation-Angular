import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErourComponent } from './erour.component';

describe('ErourComponent', () => {
  let component: ErourComponent;
  let fixture: ComponentFixture<ErourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
