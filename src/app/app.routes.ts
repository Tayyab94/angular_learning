import { Routes } from '@angular/router';
import { Detail } from './components/detail/detail';
import { Signin } from './components/signin/signin';
import { Login } from './components/login/login';

export const routes: Routes = [
    {path:"user-detail", component:Detail},
    {path:"signin", component:Signin},
     {path:"login", component:Login},
];
