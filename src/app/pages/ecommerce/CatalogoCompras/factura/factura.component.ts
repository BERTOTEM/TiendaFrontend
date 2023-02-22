import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/ServicioLogin/login.service';
import { InvoiceI, productsI } from '../../models/Invoice-i';
import { FacturaService } from '../../service/factura.service';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.scss']
})
export class FacturaComponent {
  fechaActual: Date = new Date();
  InvoiceCrear: InvoiceI = {
    id: " ",
    idtype: "",
    date: this.fechaActual,
    clientId: " ",
    clientName: " ",
    account: "",
    products: [],
  }
  cart: productsI[] = []
  agregarProducto: number = 4
  throttle: number = 0;
  distance: number = 1;
  account!: string

  constructor(
    private services: FacturaService,
    private servicesL: LoginService,
    private toastr: ToastrService,
    private route: Router,
  ) { }
  ngOnInit(): void {
    const decodedToken = this.servicesL
      .DecodeToken(localStorage.getItem('jwt_token') || '[]');
    this.account = decodedToken['sub'];
    console.log(this.account)
    this.InvoiceCrear.account = this.account;

    this.InvoiceCrear.products = (JSON
      .parse(localStorage.getItem(this.account) || '[]'))
    console.log(this.InvoiceCrear)

  }
  CrearInvoice() {


    if (this.InvoiceCrear.clientName.length > 8 && this.InvoiceCrear.idtype.length <= 2 && this.InvoiceCrear.clientId.length > 8) {
      this.services.createInvoice(this.InvoiceCrear).subscribe({
        next: data => {

          this.toastr.success("Compra Realizada con exito", "exito");
          console.log(data)
          localStorage.removeItem(this.account);
          this.route.navigate(["/Ecommers/catalogoCompra"])
        },
        error: error => {
          console.log(error);
          this.toastr.error("error", "Error de Pago");
          console.log(this.InvoiceCrear);
        }


      })
    } if (this.InvoiceCrear.clientName.length <= 8) {
      this.toastr.info("Ingresar el nombre completo por favor", "Info Nombre")
    }
    if (this.InvoiceCrear.idtype.length > 2 || this.InvoiceCrear.idtype.length < 1) {
      this.toastr.info("Ingresar Un tipo de Id Valido", "Info Tipo de Id")
    }
    if (this.InvoiceCrear.clientId.length < 8) {
      this.toastr.info("Documento muy corto, no valido", "Info Id")
    }
  }

  totalBill() {
    this.cart = JSON.parse(localStorage.getItem(this.account) || '[]');


    const suma = this.cart.map(item => item.price).reduce(
      (total, precio) => total + precio,
      0
    );
    return suma;
  }


  onScroll() {
    this.agregarProducto = this.agregarProducto += 4
    this.cart = this.InvoiceCrear.products?.slice(0, this.agregarProducto);
    console.log("cargar mas datos")
  }

}
