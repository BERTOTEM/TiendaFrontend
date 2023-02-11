import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ProductI } from 'src/app/pages/producto/models/product-i';
import { FacturaService } from '../../service/factura.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss']
})
export class BuyComponent {
  cart: Object[] = [];
  cantidad: string = "0";
  product1:any;
  valores = window.location.search;
  urlParams = new URLSearchParams(this.valores);
  id :any = this.urlParams.get('id');

  productBuy2: ProductI = {
    id:"",
    name:"",
    inInventory:0,
    enabled:true,
    min:0,
    max:0,
    img:"",
    state:true,
    price:0,
  };


  constructor(
    private services: FacturaService,
    private toastr: ToastrService,
    private route: Router,
    private routert:ActivatedRoute

  ) { }
  ngOnInit(): void {
    this.services.getProductById(this.id).subscribe((data)=>{
      this.productBuy2=data;
    })


  }


  addToCart(product: string, cantidad: string) {

    this.cart.push({ product, cantidad })
    console.log(this.cart);
    this.cantidad = " "
    this.toastr.success("Producto Añadido Al carrito","Exito")
    this.route.navigate(["/Ecommers/catalogoCompra"])
  }


}
