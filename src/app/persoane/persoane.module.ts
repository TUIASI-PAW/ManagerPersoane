import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { GestionarePersoaneComponent } from './gestionare-persoane/gestionare-persoane.component';
import { PersoaneRoutingModule } from './persoane-routing.module';
import { AdaugarePersoaneComponent } from './adaugare-persoane/adaugare-persoane.component';
import { AutentificarePersoaneComponent } from './autentificare-persoane/autentificare-persoane.component';



@NgModule({
  declarations: [GestionarePersoaneComponent, AdaugarePersoaneComponent, AutentificarePersoaneComponent],
  imports: [
    CommonModule,
    PersoaneRoutingModule,
    ReactiveFormsModule, // pentru FormGroup...
  ]
})
export class PersoaneModule { }
