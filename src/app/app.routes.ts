import { Routes } from '@angular/router';
import { Detail } from './components/detail/detail';
import { Signin } from './components/signin/signin';
import { Login } from './components/login/login';
import { NotFoundComponent } from './components/not-found-component/not-found-component';
import { About } from './components/about/about';

export const routes: Routes = [
    {path:"user-detail", component:Detail},
    {path:"signin", component:Signin},
     {path:"login", component:Login},
    //  {path:"about", component:About},
    // Load Lazy load Componentr
    {path:"about", loadComponent:()=> import('../app/components/about/about').then(mod=>mod.About)},
     {path:"", redirectTo: "/login", pathMatch: "full"},
     {path:"**", component:NotFoundComponent}
];
