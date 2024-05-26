import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { CodekeepComponent } from './components/codekeep/codekeep.component';
import { authGuard } from './auth.guard';
import { ViewsnippetComponent } from './components/viewsnippet/viewsnippet.component';


export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component:  HomeComponent},
    { path: 'about', loadComponent:()=>import('./components/about/about.component').then(m=>m.AboutComponent)},
    { path: 'register', component: RegisterComponent },
    { path: 'login', component:  LoginComponent},
    { path: 'keep', component:  CodekeepComponent,canActivate:[authGuard]},
    {path:'keep/:id',component:ViewsnippetComponent,canActivate:[authGuard]},
    { path: '**', component:  NotfoundComponent},
];
