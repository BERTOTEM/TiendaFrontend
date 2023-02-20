import { Component } from '@angular/core';
import { FacturaService } from '../pages/ecommerce/service/factura.service';
import { Router } from '@angular/router';
import { LoginI } from '../modelL/LoginI';
import { LoginService } from '../ServicioLogin/login.service';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {
  login:LoginI={
    username:"",
    password:"",
  }

  constructor(private servis:LoginService,
     private route:Router){}

  onSubmit(){
    this.servis.login(this.login)
    .subscribe({
      next:data=>{
        const token =data.token
        console.log(data)
        localStorage.setItem('jwt_token', token);
        this.route.navigate(["/Ecommers/catalogoCompra"])
      },
      error:error =>{
         console.log(error)
      }
    });
  }

}
