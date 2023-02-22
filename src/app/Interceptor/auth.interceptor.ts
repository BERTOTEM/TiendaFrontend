import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private route: Router,private toastr: ToastrService,) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    {
      // Agrega el token de autenticación a la cabecera "Authorization"
      const accessToken = localStorage.getItem('jwt_token');

      if (accessToken) {
        console.log(accessToken)
        req = req.clone({
          headers: req.headers.set('Authorization', `Bearer ${accessToken}`)
        });
      }
      if(accessToken===null){
        this.route.navigate(["/inicio"])
      }
      // Continúa la solicitud modificada
      return next.handle(req);
    }
  }
}
