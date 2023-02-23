import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/ServicioLogin/login.service';
import { productsI } from '../../models/Invoice-i';
import { FacturaService } from '../../service/factura.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  totalProducts!:number

  constructor(
    private services: LoginService,
    private serviceFactura :FacturaService,
    private toastr: ToastrService,
    private route: Router,
  ) { }
  role: [] = []
  cart: productsI[] = []
  account!:string
  isAdminTrue!: boolean
  ngOnInit(): void {
    const decodedToken = this.services
    .DecodeToken(localStorage.getItem('jwt_token') || '[]');
    this.role = decodedToken['role'];
    this.account=decodedToken['sub'];
    var isAdmin = this.role.find(item => item == 'ROLE_ADMIN');
    if (isAdmin == 'ROLE_ADMIN') {
      this.isAdminTrue = true
    } else {
      this.isAdminTrue = false
    }
    this.serviceFactura.getCountPruducts().subscribe((data)=>(this.totalProducts=data))
  }
 totalItem() {
    this.cart = JSON.parse(localStorage.getItem(this.account) || '[]');
    const suma = this.cart.map(item => item.cantidad).reduce(
      (total, items) => total + items,
      0
    );
    return suma;

  }


  Logout(){
    localStorage.removeItem('jwt_token');
      this.route.navigate(["/inicio"])

  }
}
