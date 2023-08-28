import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';


export const APP_ROUTES: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomeComponent },
];
