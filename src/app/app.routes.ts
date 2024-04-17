import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'dashboard',component:DashboardComponent,canActivate:[authGuard]},
    {path:'profile',component:ProfileComponent},
    {path:'setting',component:SettingsComponent,canDeactivate: [(component: SettingsComponent) => component.canExit()]},
   
    {path:'login',component:LoginComponent}
];
