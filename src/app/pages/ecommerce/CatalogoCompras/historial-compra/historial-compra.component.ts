import { Component } from '@angular/core';
import {  Router } from '@angular/router';
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
    private route : Router


  ){}

  ngOnInit(): void {
    this.getFacturas();

  }

  getFacturas(): void {
    this.service.getAllInvoice().subscribe((data) => {
      this.invoices = data;
      console.log(this.invoices.date)
    });

  }

}
