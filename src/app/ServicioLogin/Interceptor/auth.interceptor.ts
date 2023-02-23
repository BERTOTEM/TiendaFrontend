import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private route: Router,private toastr: ToastrService,) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{


      const accessToken = localStorage.getItem('jwt_token');

      if (accessToken) {
        req = req.clone({
          headers: req.headers.set('Authorization', `Bearer ${accessToken}`)
        });
      }
      return next.handle(req).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.error === "Invalid token specified: Cannot read properties of undefined (reading 'replace')") {
            this.toastr.error('No está autorizado para realizar esta acción.');
            this.route.navigate(['/inicio']); // Redirige al usuario a la ruta de inicio de sesión
            return throwError(error);
          } else {
            this.toastr.error('No está autorizado para realizar esta acción.');
            this.route.navigate(['/Ecommers/catalogoCompra']);
            return throwError(error);
          }
        })
      );
  }

}
