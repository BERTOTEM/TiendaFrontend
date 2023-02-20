import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserI } from '../modelL/LoginI';
import { FacturaService } from '../pages/ecommerce/service/factura.service';
import { LoginService } from '../ServicioLogin/login.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {

  passwordConfirmar:string=""
  User:UserI={
    username:"",
    password:"",
    enabled:"true",
    roles:["ROLE_USER"]
  }
  constructor(private servis:LoginService,
    private route:Router,private toastr: ToastrService,){}


  onSubmit(){
    this.servis.createUSer(this.User)
    .subscribe({

      next:data=>{
        console.log(data)
        let x = JSON.stringify(data)//forma de tratar el error de forma adecuada sin romper el back
         if(x.match("Ya existe el usuario")){
          this.toastr.error(""+data, "Error")
         }if(!x.match("Ya existe el usuario")){
          this.toastr.success("Usuario Creado", "Exito")
          setTimeout(() => {
           this.route.navigate(["/inicio"])
            }, 1000);
        }
      },
      error:error =>{
        this.toastr.error("Error de creacion el ususario ya existe", "Error")
         console.log(error)
      }
    });
  }



}
