import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { GestionarePersoaneComponent } from './gestionare-persoane/gestionare-persoane.component';

const routes: Route[] = [
    { path: '', component: GestionarePersoaneComponent, pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PersoaneRoutingModule {

}
