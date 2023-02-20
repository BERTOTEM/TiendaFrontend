import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { LoginI, UserI } from '../modelL/LoginI';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url: string = 'http://localhost:9090/';
  constructor(private http:HttpClient) { }

  login(login:LoginI):Observable<any>{
    let direction=this.url+'login';
    return this.http.post<any>(direction,login).pipe(
      tap(res =>{
        localStorage.setItem('userRoles',JSON.stringify(res.role))
      })
    )
  }

  createUSer(user : UserI) : Observable<UserI> {
    let direction = this.url + 'createUser';
    return this.http.post<any>(direction, user, {
      responseType : 'text' as 'json'
    })
  }
}
