import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/ServicioLogin/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(
    private services: LoginService,
    private toastr: ToastrService,
    private route: Router,
  ) { }
  role: [] = []
  isAdminTrue!: boolean
  ngOnInit(): void {
    const decodedToken = this.services
    .DecodeToken(localStorage.getItem('jwt_token') || '[]');
    this.role = decodedToken['role'];
    var isAdmin = this.role.find(item => item == 'ROLE_ADMIN');
    if (isAdmin == 'ROLE_ADMIN') {
      this.isAdminTrue = true
    } else {
      this.isAdminTrue = false
    }
  }

  Logout(){
    localStorage.removeItem('jwt_token');
    setTimeout(() => {

       }, 500);
  }
}
