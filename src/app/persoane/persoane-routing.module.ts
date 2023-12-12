import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { GestionarePersoaneComponent } from './gestionare-persoane/gestionare-persoane.component';
import { AdaugarePersoaneComponent } from './adaugare-persoane/adaugare-persoane.component';
import { AutentificarePersoaneComponent } from './autentificare-persoane/autentificare-persoane.component';

const routes: Route[] = [
    // localhost:4200/persoane/
    { path: '', component: GestionarePersoaneComponent, pathMatch: 'full' },
    // localhost:4200/persoane/new
    { path: 'new', component: AdaugarePersoaneComponent },
    { path: 'auth', component: AutentificarePersoaneComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PersoaneRoutingModule {

}
