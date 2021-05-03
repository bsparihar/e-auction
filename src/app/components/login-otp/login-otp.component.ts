import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login-otp',
  templateUrl: './login-otp.component.html',
  styleUrls: ['./login-otp.component.scss']
})
export class LoginOtpComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  register()
  {
    this._router.navigate(['./admin']);
  }

}
