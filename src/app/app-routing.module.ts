import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'persoane',
    pathMatch: 'full'
  },
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
