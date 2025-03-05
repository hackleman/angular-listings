import { Routes } from '@angular/router';
import { HomeComponent } from './app/components/home/home.component';
import { DetailsComponent } from './app/components/details/details.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home Page'
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Details Page'
    }
];

export default routes;