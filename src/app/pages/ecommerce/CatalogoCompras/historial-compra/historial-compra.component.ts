import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { LoginService } from 'src/app/ServicioLogin/login.service';
import { InvoiceI } from '../../models/Invoice-i';
import { FacturaService } from '../../service/factura.service';

@Component({
  selector: 'app-historial-compra',
  templateUrl: './historial-compra.component.html',
  styleUrls: ['./historial-compra.component.scss']
})
export class HistorialCompraComponent {

  invoices : InvoiceI[]| any;



  constructor(
    private service:FacturaService,
    private servicesL :LoginService,
    private route : Router


  ){}
  role: [] = []
  account!:string
  ngOnInit(): void {
    this.getFacturas();

  }
  getFacturas(): void {
    const decodedToken = this.servicesL
    .DecodeToken(localStorage.getItem('jwt_token') || '[]');
    this.account = decodedToken['sub'];
    this.role = decodedToken['role'];
    var isAdmin = this.role.find(item => item == 'ROLE_ADMIN');
    if (isAdmin == 'ROLE_ADMIN') {
      this.service.getAllInvoice().subscribe((data) => {
        this.invoices = data;
        console.log(this.invoices.date)
      });
    } else {
      this.service.getAccount(this.account).subscribe((data) => {
        this.invoices = data;
        console.log(this.invoices.date)
      });
    }

  }

}
