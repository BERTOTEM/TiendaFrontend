import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../AuthService/auth-service-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    public auth : AuthServiceService,
    public router : Router
    ,private toastr: ToastrService
  ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log("auth: "+ !this.auth.isAuthenticated());

    if(!this.auth.isAuthenticated()){
      this.toastr.error('No está autorizado para realizar esta acción.');
      this.router.navigate(['inicio'])
      return false
    }
    return true;
  }
}
