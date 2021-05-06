import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MissionsComponent } from './missions/missions.component';
import { AccueilComponent } from './accueil/accueil.component';
import { TemoignagesComponent } from './temoignages/temoignages.component';
import { ServicesComponent } from './services/services.component';
import { AboutItComponent } from './about-it/about-it.component';

@NgModule({
  declarations: [
    AppComponent,
    MissionsComponent,
    AccueilComponent,
    TemoignagesComponent,
    ServicesComponent,
    AboutItComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
