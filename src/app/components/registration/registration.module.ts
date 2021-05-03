import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';
// import { FormPageComponent } from '../form-page/form-page.component'

@NgModule({
  declarations: [
    RegistrationComponent,
    // FormPageComponent
  ],
  imports: [
    CommonModule,
    RegistrationRoutingModule,

  ]
})
export class RegistrationModule { }
