import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MissionsComponent } from './missions/missions.component';
import { AccueilComponent } from './accueil/accueil.component';
import { TemoignagesComponent } from './temoignages/temoignages.component';
import { ServicesComponent } from './services/services.component';
import { AboutItComponent } from './about-it/about-it.component';

const routes: Routes = [
	{
		path: 'mission',
		component: MissionsComponent
	},
	{
		path: 'accueil',
		component: 	AccueilComponent
	},
	{
		path:'temoignages',
		component: TemoignagesComponent
	},
	{
		path:'forum',
		component: ServicesComponent
	},
	{
		path:'about',
		component: AboutItComponent
	},
	{
		path: '**',
		component: 	AccueilComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
