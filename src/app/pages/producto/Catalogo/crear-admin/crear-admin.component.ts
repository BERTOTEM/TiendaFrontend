import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { UserI } from 'src/app/modelL/LoginI';
import { LoginService } from 'src/app/ServicioLogin/login.service';

@Component({
  selector: 'app-crear-admin',
  templateUrl: './crear-admin.component.html',
  styleUrls: ['./crear-admin.component.scss']
})
export class CrearAdminComponent {
  UserAdmin: UserI = {
    username: "",
    password: "",
    enabled: "true",
    roles: ["ROLE_ADMIN"]
  }
  constructor(private servis: LoginService,
    private route: Router, private toastr: ToastrService,private modalService: NgbModal) { }
    ngOnInit(): void {
    }
    openVerticallyCentered(content: any) {
      this.modalService.open(content, { centered: true });
    }


    CrearAdmin() {
    this.servis.createUSer(this.UserAdmin)
      .subscribe({
        next: data => {
          console.log(data)
          let x = JSON.stringify(data)//forma de tratar el error de forma adecuada sin romper el back
          if (x.match("Ya existe el usuario")) {
            this.toastr.error("" + data, "Error")
          } if (!x.match("Ya existe el usuario")) {
            this.toastr.success("Usuario Creado", "Exito")

            setTimeout(() => {
              this.modalService.dismissAll();
              this.route.navigate(["/Productos/catalogo"])
            }, 1000);
          }
        },
        error: error => {
          this.toastr.error("Error de creacion, el ususario ya existe", "Error")
          console.log(error)
        }
      });
  }

}
