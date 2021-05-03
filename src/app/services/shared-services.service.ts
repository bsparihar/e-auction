import { Injectable,Inject, PLATFORM_ID  } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SharedServicesService {
  originalheader:boolean = false;
  changeHeader:boolean= true;

  userInfo: any;

  constructor() { }

  // let isLocalAvail = localStorage.getItem('userInfo');

  // if (isLocalAvail == undefined) {
  //   this.userInfo =
  //   {
  //     changeHeader: false,
  //   }
  //   localStorage.setItem("userInfo", JSON.stringify(this.userInfo));
  // }
  // else {
  //   let retrievedInfo = JSON.parse(isLocalAvail);
  //   this.userInfo =
  //   {
  //     changeHeader: retrievedInfo.changeHeader,
  //   }

  // }
}
