import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginOtpRoutingModule } from './login-otp-routing.module';
import { LoginOtpComponent } from './login-otp.component';


@NgModule({
  declarations: [LoginOtpComponent],
  imports: [
    CommonModule,
    LoginOtpRoutingModule
  ]
})
export class LoginOtpModule { }
