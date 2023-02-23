import { Injectable, NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {

  constructor( public jwtHelper : JwtHelperService) { }
  public isAuthenticated() : boolean {
    const accessToken =localStorage.getItem('jwt_token');
    if(accessToken){
      return !this.jwtHelper.isTokenExpired(accessToken);
    }
    return false;
  }
}

