import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { ProductI } from 'src/app/models/product-i';
import { ProductService } from 'src/app/Service/product.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent {
 products:ProductI[]| any;
 product:ProductI[]| undefined;
 pages: Array<number> | undefined;
 page: number = 0;
 idBorrado!:string ;
 ProductName!:string;

 constructor(
  private service: ProductService,
  private route: Router
) {}

ngOnInit(): void {
  this.getProducts();
}

getProducts(): void {
  this.service.getPage(this.page).subscribe((data) => {
    this.products = data;
});

}
getPage(page: number): void {
  this.page = page;
  this.getProducts();
}

buscar(){
  this.service.getProductName(this.ProductName).subscribe({
    next: data => {
      this.products = data;
      console.log('digimonSolo :>> ', this.products);
    },
    error: error => {
      console.log(error);
      //this.toastr.error("Digimon no encontrado", "Error de Busqueda");

    }
  })

}

borrado(idBorrado:string){
  this.service.deleteLogico(idBorrado).subscribe({
    next: data => {
      console.log('este es el ID :>> ', idBorrado);
      window.location.reload()
    },
    error: error => {
      console.log(error);
      console.log('este es el ID  del error :>> ', idBorrado);
      //this.toastr.error("Digimon no encontrado", "Error de Busqueda");
    }
  })

}
}