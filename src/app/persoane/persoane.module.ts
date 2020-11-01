import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionarePersoaneComponent } from './gestionare-persoane/gestionare-persoane.component';
import { PersoaneRoutingModule } from './persoane-routing.module';



@NgModule({
  declarations: [GestionarePersoaneComponent],
  imports: [
    CommonModule,
    PersoaneRoutingModule
  ]
})
export class PersoaneModule { }
