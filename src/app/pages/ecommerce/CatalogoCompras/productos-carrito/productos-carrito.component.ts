import { Component, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProductI } from 'src/app/pages/producto/models/product-i';
import { FacturaService } from '../../service/factura.service';
@Component({
  selector: 'app-productos-carrito',
  templateUrl: './productos-carrito.component.html',
  styleUrls: ['./productos-carrito.component.scss']
})
export class ProductosCarritoComponent {
  products: ProductI[] | any;
  productBuy!: ProductI
  product: ProductI[] | undefined;
  cart: Object[] = [];
  pages: Array<number> | undefined;
  cantidad: string = "0";
  page: number = 0;
  idBorrado!: string;
  ProductName!: string;
  paginas: Array<number> | undefined;

  constructor(
    private service: FacturaService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.service.getPage(this.page).subscribe((data) => {
      this.products = data;
    });
    this.service
      .getTotalPages()
      .subscribe((data) => (this.paginas = new Array(data)));

  }
  getPage(page: number): void {
    this.page = page;
    this.getProducts();
  }

  isLast(): boolean {
    let totalPeges: any = this.pages?.length;
    return this.page == totalPeges - 1;
  }

  isFirst(): boolean {
    return this.page == 0;
  }

  previousPage(): void {
    !this.isFirst() ? (this.page--, this.getProducts()) : false;
  }
  nextPage(): void {
    !this.isLast() ? (this.page++, this.getProducts()) : false;
  }

  buscar() {
    this.service.getProductName(this.ProductName).subscribe({
      next: data => {
        this.products = data;
        console.log('digimonSolo :>> ', this.products);
      },
      error: error => {
        this.getProducts();


      }
    })

  }
  addToCart() {
    // product: string, cantidad: string
    // this.cart.push({ product, cantidad })
    // console.log(this.cart);
    // this.cantidad = " "
    this.route.navigate(["/Ecommers/Compra"])

    console.log(this.products)
  }


}
