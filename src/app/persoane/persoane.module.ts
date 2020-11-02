import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { GestionarePersoaneComponent } from './gestionare-persoane/gestionare-persoane.component';
import { PersoaneRoutingModule } from './persoane-routing.module';
import { AdaugarePersoaneComponent } from './adaugare-persoane/adaugare-persoane.component';



@NgModule({
  declarations: [GestionarePersoaneComponent, AdaugarePersoaneComponent],
  imports: [
    CommonModule,
    PersoaneRoutingModule,
    ReactiveFormsModule, // pentru FormGroup...
  ]
})
export class PersoaneModule { }
