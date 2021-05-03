import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { SharedServicesService } from 'src/app/Services/shared-services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  changeHeader:boolean = false
  originalheader: boolean= true;

  constructor(private _router: Router, private _sharedService: SharedServicesService) { }

  ngOnInit(): void {

    let retrievedInfo = JSON.parse(localStorage.getItem('userInfo'));
    retrievedInfo.changeHeader = "bank";
    localStorage.setItem("userInfo", JSON.stringify(retrievedInfo));

    console.log('changeHeader : ',this._sharedService.userInfo.changeHeader);
  }

  SignIn()
  {
    this._router.navigate(['../Login']);
  }

  SignUp()
  {
    this._router.navigate(['../Registration']);
    setTimeout(() => {
      this._router.navigate(['./form']);
  }, 1000);  //1s
  }

}
