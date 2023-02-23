import { Injectable } from '@angular/core';
import{
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { AuthServiceService } from '../AuthService/auth-service-service.service';
import { Observable } from 'rxjs';
import { LoginService } from '../login.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardServiceService implements CanActivate {
  tokenPayload: [] = []
  isAdminTrue!: boolean
  constructor(public auth: AuthServiceService,
    public router: Router,
    public service : LoginService,
    private toastr: ToastrService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    // esto será pasado desde la configuración de la ruta
    // en la propiedad de los datos
    const expectedRole = route.data['expectedRole'];

    const decodedToken = this.service
    .DecodeToken(localStorage.getItem('jwt_token') || '[]');
    this.tokenPayload = decodedToken['role'];
    var isAdmin = this.tokenPayload.find(item => item == 'ROLE_ADMIN');
    if (isAdmin == expectedRole) {
      this.isAdminTrue = true
    } else {
      this.isAdminTrue = false
    }

    if (
      !this.auth. isAuthenticated() ||
      this.isAdminTrue===false)
     {
     this.router.navigate(['**']);
     this.toastr.error('No está autorizado para realizar esta acción. GUARD');
      return false;
    }
    return true;
  }
}


