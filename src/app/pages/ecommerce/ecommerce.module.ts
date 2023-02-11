import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcommerceRoutingModule } from './ecommerce-routing.module';
import { ProductosCarritoComponent } from './CatalogoCompras/productos-carrito/productos-carrito.component';

import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './CatalogoCompras/navbar/navbar.component';
import { BuyComponent } from './CatalogoCompras/buy/buy.component';
import { FacturaComponent } from './CatalogoCompras/factura/factura.component';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { HistorialCompraComponent } from './CatalogoCompras/historial-compra/historial-compra.component';

@NgModule({
  declarations: [
    ProductosCarritoComponent,
    NavbarComponent,
    BuyComponent,
    FacturaComponent,
    HistorialCompraComponent,

  ],
  exports:[ProductosCarritoComponent],
  imports: [
    CommonModule,
    EcommerceRoutingModule,
    RouterModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    InfiniteScrollModule
  ]
})
export class EcommerceModule { }
