import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompletePageComponent } from './components/complete-page/complete-page.component';
import { FormPageComponent } from './components/form-page/form-page.component';
import {HomeComponent} from './components/home/home.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  { path: 'Login', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule) },
  { path: 'LoginOtp', loadChildren: () => import('./components/login-otp/login-otp.module').then(m => m.LoginOtpModule) },
  { path: 'Registration', loadChildren: () => import('./components/registration/registration.module').then(m => m.RegistrationModule) },
  { path: 'admin', loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule) },
  {path: 'form',component: FormPageComponent},
  {path: 'complete',component: CompletePageComponent},
  {
    path: '',
    redirectTo: '/form',
    pathMatch: 'full'
  },
  { path: 'HomeAfterLogin', loadChildren: () => import('./components/home-after-login/home-after-login.module').then(m => m.HomeAfterLoginModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
