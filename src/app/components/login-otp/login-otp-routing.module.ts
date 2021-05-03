import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginOtpComponent } from './login-otp.component';

const routes: Routes = [{ path: '', component: LoginOtpComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginOtpRoutingModule { }
