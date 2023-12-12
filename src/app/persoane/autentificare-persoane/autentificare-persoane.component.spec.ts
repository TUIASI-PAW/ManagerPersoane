import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';

import { AutentificarePersoaneComponent } from './autentificare-persoane.component';

describe('AutentificarePersoaneComponent', () => {
  let component: AutentificarePersoaneComponent;
  let fixture: ComponentFixture<AutentificarePersoaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutentificarePersoaneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutentificarePersoaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render username in a span tag with id="usernameDisplay" ', () => {    
    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    const app = fixture.debugElement.componentInstance;
    app.persoanaAuthForm.value['username'] = "Ana";
    fixture.detectChanges();
    expect(compiled.querySelector('span').textContent).toContain('Ana');
  });


});
