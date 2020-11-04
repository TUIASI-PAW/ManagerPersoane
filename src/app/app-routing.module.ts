import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // localhost:4200/ => localhost:4200/persoane
  {
    path: '',
    redirectTo: 'persoane',
    pathMatch: 'full'
  },
  // localhost:4200/persoane => PersoaneModule
  {
    path: 'persoane',
    loadChildren: () => import('./persoane/persoane.module').then(mod => mod.PersoaneModule)
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
