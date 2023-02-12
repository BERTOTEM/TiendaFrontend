import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { InvoiceI, productsI } from '../../models/Invoice-i';
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
  cart:productsI[]=[]
  agregarProducto:number=4
  throttle :number=0;
  distance: number=1;
  constructor(
    private services: FacturaService,
    private toastr: ToastrService,
    private route: Router,
  ){}
  ngOnInit(): void {

    this.InvoiceCrear.products=(JSON
      .parse(localStorage.getItem('carrito')||'[]'))
    console.log(this.InvoiceCrear)
  }
  CrearInvoice() {
    this.services.createInvoice(this.InvoiceCrear).subscribe({
      next: data => {

        this.toastr.success("Compra Realizada con exito", "exito");
        console.log(data)
        localStorage.clear();
        this.route.navigate(["/Ecommers/catalogoCompra"])
      },
      error: error => {
        console.log(error);
        this.toastr.error("error", "Error de Pago");
        console.log(this.InvoiceCrear);
      }


    })


  }
  onScroll() {
    this.agregarProducto=this.agregarProducto+=4
    this.cart=this.InvoiceCrear.products?.slice(0,this.agregarProducto);
    console.log("cargar mas datos")
  }

}
