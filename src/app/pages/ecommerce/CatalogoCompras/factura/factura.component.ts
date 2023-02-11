import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { InvoiceI } from '../../models/Invoice-i';
import { FacturaService } from '../../service/factura.service';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.scss']
})
export class FacturaComponent {

  InvoiceCrear: InvoiceI={
    id:" ",
    idtype:" ",
    date:" " ,
    clientId:" ",
    clientName:" ",
    products:[],


  }

  constructor(
    private services: FacturaService,
    private toastr: ToastrService,
    private route: Router,
  ){}
  ngOnInit(): void {
    this.InvoiceCrear.products=(JSON.parse(localStorage.getItem('carrito')||'{}'))

  }
  CrearInvoice() {
    this.services.createInvoice(this.InvoiceCrear).subscribe({
      next: data => {
        this.toastr.success("Producto agregado al catalogo", "exito");
        console.log(data)
      },
      error: error => {
        console.log(error);
        this.toastr.error("error", "Error de Creacion");
        console.log(this.InvoiceCrear);
      }


    })


  }

}
