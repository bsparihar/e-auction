import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeAfterLoginRoutingModule } from './home-after-login-routing.module';
import { HomeAfterLoginComponent } from './home-after-login.component';


@NgModule({
  declarations: [HomeAfterLoginComponent],
  imports: [
    CommonModule,
    HomeAfterLoginRoutingModule
  ]
})
export class HomeAfterLoginModule { }
