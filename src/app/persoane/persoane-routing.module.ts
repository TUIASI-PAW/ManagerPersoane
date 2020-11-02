import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { GestionarePersoaneComponent } from './gestionare-persoane/gestionare-persoane.component';
import { AdaugarePersoaneComponent } from './adaugare-persoane/adaugare-persoane.component';

const routes: Route[] = [
    { path: '', component: GestionarePersoaneComponent, pathMatch: 'full' },
    { path: 'new', component: AdaugarePersoaneComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PersoaneRoutingModule {

}
