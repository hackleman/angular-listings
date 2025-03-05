import { Routes } from '@angular/router';
import { HomeComponent } from './app/components/home/home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home Page'
    }
];

export default routes;