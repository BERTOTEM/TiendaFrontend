import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ProductI } from 'src/app/pages/producto/models/product-i';
import { LoginService } from 'src/app/ServicioLogin/login.service';
import { FacturaService } from '../../service/factura.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss']
})
export class BuyComponent {
  account!:string
  cart: Object[] = [];
  cantidad: number = 1;
  product1: any;
  valores = window.location.search;
  urlParams = new URLSearchParams(this.valores);
  id: any = this.urlParams.get('id');

  productBuy2: ProductI = {
    id: "",
    name: "",
    inInventory: 0,
    enabled: true,
    min: 0,
    max: 0,
    img: "",
    state: true,
    price: 0,
  };
  aux:any=[]

  constructor(
    private services: FacturaService,
    private servicesL:LoginService,
    private toastr: ToastrService,
    private route: Router,
    private routert: ActivatedRoute

  ) { }
  ngOnInit(): void {
    this.services.getProductById(this.id).subscribe((data) => {
      this.productBuy2 = data;
    })

    const decodedToken = this.servicesL
    .DecodeToken(localStorage.getItem('jwt_token') || '[]');
    this.account = decodedToken['sub'];





  }

  addToCart(product: string, cantidad: number,name:string,price:number) {

    this.aux=(JSON.parse(localStorage.getItem(this.account)||'[]'))

    price=price*cantidad

    if (cantidad <= this.productBuy2.max &&
      this.productBuy2.inInventory - this.productBuy2.min >= cantidad && cantidad > 0) {

        this.cart=[
          ...this.aux,
         {
          product,
          cantidad,
          name,
          price,
          }
        ]
      localStorage.setItem(this.account, JSON.stringify(this.cart));

      this.services.updateIDInventario(product, cantidad).subscribe((data) => {
        console.log(data)
      })
      this.cantidad = 0
      this.toastr.success("Producto Añadido Al carrito", "Exito")
      setTimeout(() => {
        window.location.reload();
        }, 1000);
    } if (cantidad > this.productBuy2.max) {
      this.toastr.error("Superaste el maximo de articulos", "Error")
    }
    if (this.productBuy2.inInventory - this.productBuy2.min < cantidad) {
      this.productBuy2.inInventory=this.productBuy2.inInventory - this.productBuy2.min
      this.toastr.info("Productos agotados Maximo de compra " +this.productBuy2.inInventory+" Unidades", "Info")
      this.productBuy2.inInventory=this.productBuy2.inInventory + this.productBuy2.min
    }
    if (cantidad == this.productBuy2.inInventory) {
      this.productBuy2.inInventory=this.productBuy2.inInventory - this.productBuy2.min
      this.toastr.info("Productos agotados Maximo de compra " +this.productBuy2.inInventory+" Unidades", "Info")
    }
    if (cantidad == 0) {
      this.toastr.error("Error no puedes comprar 0 unidades", "Error")
    }

  }




}
