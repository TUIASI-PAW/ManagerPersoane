import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdaugarePersoaneComponent } from './adaugare-persoane.component';

describe('AdaugarePersoaneComponent', () => {
  let component: AdaugarePersoaneComponent;
  let fixture: ComponentFixture<AdaugarePersoaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdaugarePersoaneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdaugarePersoaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
