import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { DecodedTokenI, LoginI, UserI } from '../modelL/LoginI';
import jwt_decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url: string = 'http://localhost:9090/';
  constructor(private http:HttpClient) { }

  login(login:LoginI):Observable<any>{
    let direction=this.url+'login';
    return this.http.post<any>(direction,login)
  }

  createUSer(user : UserI) : Observable<UserI> {
    let direction = this.url + 'createUser';
    return this.http.post<any>(direction, user, {
      responseType : 'text' as 'json'
    })
  }

  DecodeToken(token: string): DecodedTokenI {
    let decoded =  jwt_decode(token);
    return decoded as DecodedTokenI;
  }

}
