import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { RutasComponent } from './components/rutas/rutas.component';

// arreglo de rutas
const APP_ROUTES: Routes =[
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'rutas', component: RutasComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home' }

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);