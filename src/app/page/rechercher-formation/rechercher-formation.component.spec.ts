import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercherFormationComponent } from './rechercher-formation.component';

describe('RechercherFormationComponent', () => {
  let component: RechercherFormationComponent;
  let fixture: ComponentFixture<RechercherFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercherFormationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercherFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
