import { Routes } from '@angular/router';
import { Detail } from './components/detail/detail';
import { Signin } from './components/signin/signin';

export const routes: Routes = [
    {path:"user-detail", component:Detail},
    {path:"signin", component:Signin}
];
