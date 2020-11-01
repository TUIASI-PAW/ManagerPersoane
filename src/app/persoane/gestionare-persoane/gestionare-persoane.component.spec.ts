import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarePersoaneComponent } from './gestionare-persoane.component';

describe('GestionarePersoaneComponent', () => {
  let component: GestionarePersoaneComponent;
  let fixture: ComponentFixture<GestionarePersoaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionarePersoaneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarePersoaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
