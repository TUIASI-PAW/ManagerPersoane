import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
    // nu trebuie de importat PersoaneModule; totul se întâmplă când accesăm /gestionare-persoane - lazy loading
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
