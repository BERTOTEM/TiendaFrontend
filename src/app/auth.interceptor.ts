import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

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

      // Continúa la solicitud modificada
      return next.handle(req);
    }
  }
}
